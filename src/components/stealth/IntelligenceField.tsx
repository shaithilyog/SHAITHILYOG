import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * IntelligenceField — the stealth-site hero scene.
 *
 * 6,000 GPU particles begin as a chaotic cloud and converge, as the user
 * scrolls, into an ordered three-shell "neural core" (fibonacci spheres).
 * Position lerp happens entirely in the vertex shader (aStart → aTarget by
 * uProgress), so per-frame CPU cost is ~zero. A sparse set of connection
 * lines fades in late in the scroll to read as "structure emerging".
 *
 * progressRef: 0..1 scroll progress, written by the page (no re-renders).
 * mouseRef:    -1..1 normalized cursor, for subtle parallax.
 */

type SharedRefs = {
  progressRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  reduced?: boolean;
};

const ACCENT = new THREE.Color('#22d3ee'); // electric cyan
const DIM = new THREE.Color('#5b7c8d'); // pre-convergence dust

function fibonacciSphere(count: number, radius: number, jitter: number, rand: () => number) {
  const pts: number[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const j = 1 + (rand() - 0.5) * jitter;
    pts.push(Math.cos(theta) * r * radius * j, y * radius * j, Math.sin(theta) * r * radius * j);
  }
  return pts;
}

// Deterministic PRNG so SSR/dev/prod render the same field.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ progressRef, mouseRef }: SharedRefs) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const COUNT = isMobile ? 2600 : 6000;
  const LINE_CAP = isMobile ? 110 : 240;

  const group = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const lineMatRef = useRef<THREE.LineBasicMaterial>(null);
  const { camera } = useThree();
  const eased = useRef(0);

  const { geometry, lineGeometry } = useMemo(() => {
    const rand = mulberry32(20260505);

    // Target: three concentric fibonacci shells — the "intelligence core"
    const core = fibonacciSphere(Math.floor(COUNT * 0.2), 2.1, 0.12, rand);
    const mid = fibonacciSphere(Math.floor(COUNT * 0.4), 3.6, 0.1, rand);
    const outer = fibonacciSphere(COUNT - core.length / 3 - mid.length / 3 > 0 ? COUNT - (core.length + mid.length) / 3 : 0, 5.3, 0.08, rand);
    const target = new Float32Array([...core, ...mid, ...outer].slice(0, COUNT * 3));

    // Start: chaotic cloud, far and wide
    const start = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 8 + rand() * 14;
      const th = rand() * Math.PI * 2;
      const ph = Math.acos(2 * rand() - 1);
      start[i * 3] = r * Math.sin(ph) * Math.cos(th);
      start[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
      start[i * 3 + 2] = r * Math.cos(ph);
    }

    const size = new Float32Array(COUNT);
    const phase = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      size[i] = 0.6 + rand() * 1.7;
      phase[i] = rand() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(target.slice(), 3)); // bounding only
    geometry.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
    geometry.setAttribute('aTarget', new THREE.BufferAttribute(target, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));

    // Connection lines between near neighbors on the mid shell + core
    const linePts: number[] = [];
    const basis = [...core, ...mid];
    const n = basis.length / 3;
    let made = 0;
    for (let tries = 0; tries < 9000 && made < LINE_CAP; tries++) {
      const a = Math.floor(rand() * n);
      const b = Math.floor(rand() * n);
      if (a === b) continue;
      const dx = basis[a * 3] - basis[b * 3];
      const dy = basis[a * 3 + 1] - basis[b * 3 + 1];
      const dz = basis[a * 3 + 2] - basis[b * 3 + 2];
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < 1.7 && d2 > 0.05) {
        linePts.push(
          basis[a * 3], basis[a * 3 + 1], basis[a * 3 + 2],
          basis[b * 3], basis[b * 3 + 1], basis[b * 3 + 2],
        );
        made++;
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePts), 3));

    return { geometry, lineGeometry };
  }, [COUNT, LINE_CAP]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uColorA: { value: DIM },
          uColorB: { value: ACCENT },
        },
        vertexShader: /* glsl */ `
          attribute vec3 aStart;
          attribute vec3 aTarget;
          attribute float aSize;
          attribute float aPhase;
          uniform float uTime;
          uniform float uProgress;
          varying float vAlpha;
          varying float vMix;

          // lub-dub heartbeat envelope, ~66 bpm
          float heartbeat(float t) {
            float ph = fract(t / 0.9);
            float lub = exp(-pow((ph - 0.10) * 16.0, 2.0));
            float dub = 0.55 * exp(-pow((ph - 0.34) * 16.0, 2.0));
            return lub + dub;
          }

          void main() {
            float p = smoothstep(0.0, 1.0, uProgress);
            // each particle arrives slightly offset for an organic sweep
            float local = clamp(p * 1.25 - aPhase * 0.04, 0.0, 1.0);
            local = local * local * (3.0 - 2.0 * local);
            // the converged structure beats like a living thing
            float hb = heartbeat(uTime);
            vec3 pos = mix(aStart, aTarget * (1.0 + 0.028 * hb), local);

            // perpetual drift so the field always feels alive
            float drift = mix(0.55, 0.14, local);
            pos += drift * vec3(
              sin(uTime * 0.35 + aPhase),
              cos(uTime * 0.28 + aPhase * 1.7),
              sin(uTime * 0.4 + aPhase * 2.3)
            );

            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mv;

            float tw = 0.75 + 0.25 * sin(uTime * 1.4 + aPhase * 3.0);
            // converged structure reads as crisp constellation, not a glow-blob:
            // points shrink and dim as they lock into place
            gl_PointSize = aSize * tw * (210.0 / -mv.z) * mix(1.0, 0.42, local);
            vAlpha = tw * mix(0.4, 0.58, local) * (1.0 + 0.3 * hb * local);
            vMix = local;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying float vAlpha;
          varying float vMix;

          void main() {
            vec2 uv = gl_PointCoord - 0.5;
            float d = length(uv);
            if (d > 0.5) discard;
            float glow = exp(-d * 5.5);
            vec3 col = mix(uColorA, uColorB, vMix);
            gl_FragColor = vec4(col, glow * vAlpha * 0.62);
          }
        `,
      }),
    [],
  );

  useFrame((state, delta) => {
    // critically-damped chase of the real scroll position = weighty feel
    eased.current += (progressRef.current - eased.current) * Math.min(1, delta * 3.2);
    const p = eased.current;

    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uProgress.value = p;

    if (lineMatRef.current) {
      lineMatRef.current.opacity = THREE.MathUtils.smoothstep(p, 0.55, 0.92) * 0.2;
    }
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouseRef.current.y * 0.12, 0.04);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, mouseRef.current.x * 0.06, 0.04);
    }
    // camera dolly: far observer → framing the core (never inside it)
    const z = THREE.MathUtils.lerp(15.5, 9.8, THREE.MathUtils.smoothstep(p, 0, 1));
    camera.position.z = z;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseRef.current.x * 0.6, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouseRef.current.y * 0.4, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <points geometry={geometry}>
        <primitive object={material} ref={matRef} attach="material" />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          ref={lineMatRef}
          color={ACCENT}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function IntelligenceField({ progressRef, mouseRef }: SharedRefs) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 15.5], fov: 50, near: 0.1, far: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Particles progressRef={progressRef} mouseRef={mouseRef} />
    </Canvas>
  );
}

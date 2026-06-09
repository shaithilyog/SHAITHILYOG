import { useEffect, useMemo, useRef } from 'react';

/**
 * ForesightSignal — the hero's healthcare cue.
 *
 * A continuous biosignal streams leftward into a fixed "now" cursor; past
 * the cursor the same signal continues as a dotted line inside a soft
 * confidence band — the AI's forecast. Measured → predicted: early
 * detection as a picture, not a cliché ECG.
 *
 * Pure SVG. The waveform is tile-periodic (integer harmonics of the tile
 * width) so two tiles scroll seamlessly. One rAF drives both clip regions
 * and keeps the cursor dot riding the live curve. Honors reduced motion.
 */

const W = 600; // viewBox width = one tile
const H = 84;
const MID = H / 2;
const CURSOR_X = 348;
const SPEED = 22; // px/s drift

// Tile-periodic composite "biometric" wave
function wave(x: number) {
  const t = (x / W) * Math.PI * 2;
  return (
    MID +
    9.5 * Math.sin(t) +
    5 * Math.sin(2 * t + 1.3) +
    3 * Math.sin(5 * t + 0.4) +
    1.6 * Math.sin(9 * t + 2.1)
  );
}

function wavePath(step = 4) {
  let d = `M 0 ${wave(0).toFixed(2)}`;
  for (let x = step; x <= W * 2; x += step) {
    d += ` L ${x} ${wave(x).toFixed(2)}`;
  }
  return d;
}

function bandPath(spread = 9, step = 6) {
  let upper = `M 0 ${(wave(0) - spread).toFixed(2)}`;
  for (let x = step; x <= W * 2; x += step) {
    upper += ` L ${x} ${(wave(x) - spread).toFixed(2)}`;
  }
  let lower = '';
  for (let x = W * 2; x >= 0; x -= step) {
    lower += ` L ${x} ${(wave(x) + spread).toFixed(2)}`;
  }
  return `${upper}${lower} Z`;
}

export default function ForesightSignal() {
  const measuredRef = useRef<SVGGElement>(null);
  const predictedRef = useRef<SVGGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  const paths = useMemo(() => ({ wave: wavePath(), band: bandPath() }), []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      dotRef.current?.setAttribute('cy', String(wave(CURSOR_X)));
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const offset = (((now - t0) / 1000) * SPEED) % W;
      const transform = `translate(${-offset} 0)`;
      measuredRef.current?.setAttribute('transform', transform);
      predictedRef.current?.setAttribute('transform', transform);
      // the dot rides the curve passing under the fixed cursor
      dotRef.current?.setAttribute('cy', String(wave(CURSOR_X + offset)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mx-auto mt-10 w-full max-w-lg"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="fs-measured">
          <rect x="0" y="0" width={CURSOR_X} height={H} />
        </clipPath>
        <clipPath id="fs-predicted">
          <rect x={CURSOR_X} y="0" width={W - CURSOR_X} height={H} />
        </clipPath>
        <linearGradient id="fs-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="0.25" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* measured signal (left of now) */}
      <g clipPath="url(#fs-measured)">
        <g ref={measuredRef}>
          <path d={paths.wave} stroke="url(#fs-fade)" strokeWidth="1.3" />
        </g>
      </g>

      {/* forecast (right of now): confidence band + dotted continuation */}
      <g clipPath="url(#fs-predicted)">
        <g ref={predictedRef}>
          <path d={paths.band} fill="#22d3ee" fillOpacity="0.06" />
          <path
            d={paths.wave}
            stroke="#22d3ee"
            strokeOpacity="0.42"
            strokeWidth="1.2"
            strokeDasharray="1.5 5"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* now cursor */}
      <line
        x1={CURSOR_X}
        y1="8"
        x2={CURSOR_X}
        y2={H - 18}
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <circle
        ref={dotRef}
        cx={CURSOR_X}
        cy={MID}
        r="3"
        fill="#22d3ee"
        style={{ filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.9))' }}
      />

      {/* labels */}
      <text
        x={CURSOR_X - 12}
        y={H - 2}
        textAnchor="end"
        fontSize="9"
        letterSpacing="0.25em"
        fill="#ffffff"
        fillOpacity="0.28"
      >
        MEASURED
      </text>
      <text
        x={CURSOR_X + 12}
        y={H - 2}
        fontSize="9"
        letterSpacing="0.25em"
        fill="#22d3ee"
        fillOpacity="0.5"
      >
        PREDICTED
      </text>
    </svg>
  );
}

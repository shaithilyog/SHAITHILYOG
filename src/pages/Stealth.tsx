import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const IntelligenceField = lazy(() => import('@/components/stealth/IntelligenceField'));
import ForesightSignal from '@/components/stealth/ForesightSignal';

/**
 * Stealth landing — shaithilyog.tech
 * One page. Vanta black. A particle field that converges from chaos into
 * order as you scroll. Four text beats. An email. Nothing else.
 */

const SCROLL_VH = 560; // total scroll runway

function Beat({
  progress,
  fadeIn,
  fadeOut,
  children,
  interactive = false,
}: {
  progress: MotionValue<number>;
  /** scroll window over which the beat fades in; omit to start visible */
  fadeIn?: [number, number];
  /** scroll window over which the beat fades out; omit to stay visible */
  fadeOut?: [number, number];
  children: React.ReactNode;
  interactive?: boolean;
}) {
  const input = [...(fadeIn ?? []), ...(fadeOut ?? [])];
  const output = [
    ...(fadeIn ? [0, 1] : []),
    ...(fadeOut ? [1, 0] : []),
  ];
  // useTransform clamps outside the range, so a beat with only fadeOut
  // holds opacity 1 from scroll position 0 until its fade-out window.
  const opacity = useTransform(progress, input, output);
  const y = useTransform(progress, fadeIn ?? [0, 1], fadeIn ? [26, 0] : [0, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className={`fixed inset-0 z-10 flex items-center justify-center px-6 ${
        interactive ? '' : 'pointer-events-none'
      }`}
    >
      {children}
    </motion.div>
  );
}

function RequestAccess() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || state === 'sending') return;
    setState('sending');
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, source: 'labs-site' }]);
      if (error) throw error;
      setState('done');
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <p className="text-cyan-300/90 text-lg font-light tracking-wide">
        We'll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-white placeholder:text-white/25 outline-none backdrop-blur-sm transition-colors focus:border-cyan-400/60"
      />
      <button
        type="submit"
        disabled={state === 'sending'}
        className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-3.5 text-sm tracking-[0.15em] text-cyan-300 uppercase transition-all hover:bg-cyan-400/20 hover:border-cyan-300/70 disabled:opacity-50"
      >
        {state === 'sending' ? '…' : 'Request access'}
      </button>
      {state === 'error' && (
        <p className="text-sm text-red-400/80 sm:absolute sm:mt-16">
          Something broke. Try once more.
        </p>
      )}
    </form>
  );
}

export default function Stealth() {
  const progressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);
  const [webglOk, setWebglOk] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.('change', onMq);

    try {
      const c = document.createElement('canvas');
      setWebglOk(!!(c.getContext('webgl2') || c.getContext('webgl')));
    } catch {
      setWebglOk(false);
    }

    const unsub = scrollYProgress.on('change', (v) => {
      progressRef.current = v;
    });
    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      unsub();
      mq.removeEventListener?.('change', onMq);
      window.removeEventListener('pointermove', onMove);
    };
  }, [scrollYProgress]);

  const showField = webglOk && !reduced;

  return (
    <div className="bg-black text-white" style={{ height: `${SCROLL_VH}vh` }}>
      {/* ===== fixed cinematic stage ===== */}
      <div className="fixed inset-0 z-0 bg-black">
        {showField ? (
          <Suspense fallback={<StaticGlow />}>
            <IntelligenceField progressRef={progressRef} mouseRef={mouseRef} />
          </Suspense>
        ) : (
          <StaticGlow />
        )}
        {/* vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.55) 100%)',
          }}
        />
        {/* film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ===== chrome ===== */}
      <header className="fixed top-0 z-20 flex w-full items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-[11px] tracking-[0.4em] text-white/60 uppercase">
          Shaithilyog Labs
        </span>
        <span className="hidden text-[11px] tracking-[0.25em] text-white/25 uppercase sm:block">
          Healthcare intelligence · New York
        </span>
      </header>

      {/* ===== beat 1 — hero ===== */}
      <Beat progress={scrollYProgress} fadeOut={[0.1, 0.18]}>
        <div className="max-w-3xl text-center">
          <p className="mb-6 text-[10px] tracking-[0.45em] text-cyan-300/50 uppercase">
            Early detection · Longevity · Care
          </p>
          <h1 className="text-4xl font-extralight leading-[1.15] tracking-tight sm:text-6xl md:text-7xl">
            The intelligence layer
            <br />
            for <span className="text-cyan-300">human health</span>.
          </h1>
          <p className="mt-7 text-base font-light tracking-wide text-white/45 sm:text-lg">
            We're building it quietly, in New York.
          </p>
          {/* predictive biosignal — measured past, AI-forecast future */}
          <ForesightSignal />
          <div className="mt-16 flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
            />
          </div>
        </div>
      </Beat>

      {/* ===== beat 2 ===== */}
      <Beat progress={scrollYProgress} fadeIn={[0.26, 0.34]} fadeOut={[0.44, 0.51]}>
        <p className="max-w-2xl text-center text-2xl font-extralight leading-relaxed tracking-wide text-white/85 sm:text-4xl">
          Human health knowledge is{' '}
          <span className="text-white">fragmented</span>.
        </p>
      </Beat>

      {/* ===== beat 3 ===== */}
      <Beat progress={scrollYProgress} fadeIn={[0.54, 0.62]} fadeOut={[0.72, 0.79]}>
        <p className="max-w-2xl text-center text-2xl font-extralight leading-relaxed tracking-wide text-white/85 sm:text-4xl">
          We're building the system that makes it{' '}
          <span className="text-cyan-300">whole</span>.
        </p>
      </Beat>

      {/* ===== beat 4 — contact ===== */}
      <Beat progress={scrollYProgress} fadeIn={[0.84, 0.92]} interactive>
        <div className="flex w-full max-w-xl flex-col items-center gap-10 text-center">
          <p className="text-lg font-light leading-relaxed text-white/70 sm:text-xl">
            If you're a clinician, researcher, or investor who thinks the same —
            <br className="hidden sm:block" /> we'd like to know you.
          </p>
          <RequestAccess />
          <footer className="mt-10 flex flex-col items-center gap-3 rounded-full bg-black/50 px-8 py-4 backdrop-blur-sm">
            <span className="text-[11px] tracking-[0.25em] text-white/55 uppercase">
              © 2026 Shaithilyog Labs · New York
            </span>
            <span className="flex gap-6 text-[13px] text-white/45">
              <Link to="/privacy-policy" className="transition-colors hover:text-cyan-300">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="transition-colors hover:text-cyan-300">
                Terms
              </Link>
            </span>
          </footer>
        </div>
      </Beat>
    </div>
  );
}

/** Fallback for reduced-motion / no-WebGL: a still, breathing glow. */
function StaticGlow() {
  return (
    <div className="absolute inset-0 bg-black">
      <div
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)',
        }}
      />
    </div>
  );
}

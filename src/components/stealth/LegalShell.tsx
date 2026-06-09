import { Link } from 'react-router-dom';

/** Minimal dark chrome for legal pages — matches the stealth landing. */
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex w-full items-center justify-between px-6 py-5 sm:px-10">
        <Link
          to="/"
          className="text-[11px] tracking-[0.4em] text-white/60 uppercase transition-colors hover:text-white"
        >
          ← Shaithilyog Labs
        </Link>
        <span className="hidden text-[11px] tracking-[0.25em] text-white/25 uppercase sm:block">
          Healthcare intelligence · New York
        </span>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-24 pt-16">
        <h1 className="text-3xl font-extralight tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-white/35">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 text-[15px] font-light leading-relaxed text-white/70 [&_h2]:text-lg [&_h2]:font-normal [&_h2]:text-white [&_h2]:tracking-tight [&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </main>

      <footer className="px-6 pb-10 text-center text-[11px] tracking-[0.2em] text-white/30 uppercase">
        © 2026 Shaithilyog Labs · New York
      </footer>
    </div>
  );
}

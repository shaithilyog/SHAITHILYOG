/**
 * Shaithilyog Labs brand mark.
 *
 * Visual: a sweeping arc below, a single dot above. Reads as sunrise /
 * opening / lifting — picks up the brand etymology
 * (शैथिल्य योग, "the discipline of release") without being literal about it.
 *
 * - Monochromatic: uses currentColor, so it adapts to any text/icon color.
 * - Single weight stroke: scales cleanly from 16px favicon to billboards.
 * - No fills (other than the dot): renders crisply on any background.
 *
 * Use:
 *   <Mark className="w-8 h-8 text-primary" />        // matches surrounding color
 *   <Mark className="w-10 h-10" stroke={2.5} />      // bolder stroke
 */

interface MarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke'> {
  /** Stroke width. Default: 3 (looks good at 24-64px). */
  stroke?: number;
}

export function Mark({ stroke = 3, className, ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shaithilyog Labs"
      {...props}
    >
      {/* Bowl / horizon arc */}
      <path
        d="M 12 38 A 20 20 0 0 0 52 38"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
      />
      {/* Bindu (dot above the arc) */}
      <circle cx="32" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}

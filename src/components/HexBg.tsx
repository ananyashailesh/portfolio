// Fixed honeycomb backdrop: dark surface with hex cells whose edges pick up a
// soft spectrum glow toward the left (warm) and right (cool) sides of the page.
export default function HexBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#1c1f24]" aria-hidden>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexes"
            width="56"
            height="97"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.35)"
          >
            <g fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.1">
              <path d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z" />
              <path d="M28 64.66 L56 80.83 L56 113.16 L28 129.33 L0 113.16 L0 80.83 Z" transform="translate(-28,-16.16)" />
              <path d="M28 64.66 L56 80.83 L56 113.16 L28 129.33 L0 113.16 L0 80.83 Z" transform="translate(28,-16.16)" />
            </g>
          </pattern>

          <linearGradient id="hex-spectrum" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="22%" stopColor="#fcbc1d" />
            <stop offset="45%" stopColor="#1c1f24" />
            <stop offset="60%" stopColor="#1c1f24" />
            <stop offset="80%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <mask id="hex-mask">
            <rect width="100%" height="100%" fill="url(#hexes)" />
          </mask>
        </defs>

        {/* colored edges show only along the hex strokes via the mask */}
        <rect width="100%" height="100%" fill="url(#hex-spectrum)" mask="url(#hex-mask)" opacity="0.5" />
        {/* dim the center so content stays readable */}
        <rect width="100%" height="100%" fill="#1c1f24" opacity="0.55" />
      </svg>
    </div>
  );
}

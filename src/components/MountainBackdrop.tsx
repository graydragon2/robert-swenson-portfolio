export default function MountainBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050b08" />
            <stop offset="38%" stopColor="#0a1712" />
            <stop offset="62%" stopColor="#20241c" />
            <stop offset="80%" stopColor="#4a3b28" />
            <stop offset="93%" stopColor="#8a6a42" />
            <stop offset="100%" stopColor="#b38351" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8b273" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#c98a55" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c98a55" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ridge-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#37493d" />
            <stop offset="100%" stopColor="#222f27" />
          </linearGradient>
          <linearGradient id="ridge-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18251d" />
            <stop offset="100%" stopColor="#101a14" />
          </linearGradient>
          <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e8c184" stopOpacity="0" />
            <stop offset="50%" stopColor="#e8c184" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e8c184" stopOpacity="0" />
          </linearGradient>
          <filter id="soft-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />
        <circle cx="980" cy="640" r="260" fill="url(#sun)" filter="url(#soft-blur)" />

        <path
          d="M0 560 L140 500 L260 545 L420 460 L560 520 L720 440 L880 510 L1040 445 L1220 515 L1380 470 L1600 540 L1600 900 L0 900 Z"
          fill="url(#ridge-far)"
          opacity="0.75"
        />
        <rect x="0" y="555" width="1600" height="40" fill="#e9d8b8" opacity="0.06" filter="url(#soft-blur)" />

        <path
          d="M0 620 L180 570 L340 615 L500 555 L680 610 L840 545 L1020 605 L1200 550 L1380 615 L1600 575 L1600 900 L0 900 Z"
          fill="url(#ridge-mid)"
        />
        <path
          d="M120 900 C 320 760, 500 700, 640 660 S 940 610, 1180 640 S 1520 760, 1600 820"
          fill="none"
          stroke="url(#river)"
          strokeWidth="10"
          filter="url(#soft-blur)"
        />
        <rect x="0" y="640" width="1600" height="30" fill="#e9d8b8" opacity="0.05" filter="url(#soft-blur)" />

        <path
          d="M0 720 L220 660 L400 705 L600 650 L820 715 L1040 655 L1260 720 L1440 670 L1600 705 L1600 900 L0 900 Z"
          fill="#0b1510"
        />

        <g fill="#05100b">
          <path d="M20 900 L60 760 L100 900 Z" />
          <path d="M0 900 L30 820 L60 900 Z" />
          <path d="M70 900 L120 700 L170 900 Z" />
          <path d="M150 900 L185 800 L220 900 Z" />
          <path d="M0 900 L0 640 L45 900 Z" opacity="0.9" />
        </g>

        <g stroke="#77C58A" strokeOpacity="0.05">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 200} y1="0" x2={i * 200} y2="620" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 110} x2="1600" y2={i * 110} />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,10,8,0.75)_0%,rgba(5,10,8,0.45)_35%,transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,8,0.55)_0%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,10,8,0.55)_100%)]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}

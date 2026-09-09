interface SiteMarkProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Mountain-geometry + connected-node mark: an "A"-shaped peak built from
 * network nodes and edges, standing in for a literal dragon/animal mark.
 */
export default function SiteMark({
  className = "h-8 w-8",
  showWordmark = false,
}: SiteMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 64 64"
        className={className}
        role="img"
        aria-label="Robert F. Swenson III site mark"
      >
        <defs>
          <linearGradient id="mark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#77C58A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1F3D2E" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* peak silhouette */}
        <path
          d="M32 8 L54 50 L10 50 Z"
          fill="url(#mark-fill)"
          stroke="#77C58A"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* inner ridge line */}
        <path
          d="M32 8 L24 50 M32 8 L40 50"
          fill="none"
          stroke="#07100C"
          strokeWidth="1.4"
          strokeOpacity="0.5"
        />

        {/* network edges across the peak */}
        <g stroke="#F2F5F3" strokeWidth="1.1" strokeOpacity="0.85">
          <line x1="32" y1="8" x2="19" y2="30" />
          <line x1="32" y1="8" x2="45" y2="30" />
          <line x1="19" y1="30" x2="45" y2="30" />
          <line x1="19" y1="30" x2="10" y2="50" />
          <line x1="45" y1="30" x2="54" y2="50" />
          <line x1="19" y1="30" x2="32" y2="46" />
          <line x1="45" y1="30" x2="32" y2="46" />
        </g>

        {/* nodes */}
        <g fill="#07100C" stroke="#F2F5F3" strokeWidth="1.4">
          <circle cx="32" cy="8" r="3.4" />
          <circle cx="19" cy="30" r="2.8" />
          <circle cx="45" cy="30" r="2.8" />
          <circle cx="32" cy="46" r="2.8" />
        </g>
        <g fill="#77C58A">
          <circle cx="10" cy="50" r="2.2" />
          <circle cx="54" cy="50" r="2.2" />
        </g>
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-sans text-sm font-bold tracking-[0.08em] text-text-main">
            RFS III
          </span>
        </span>
      )}
    </span>
  );
}

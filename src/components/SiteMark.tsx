interface SiteMarkProps {
  className?: string;
}

/**
 * Approved RFS III brand mark (mountain geometry + connected network nodes).
 * Source asset: /public/portfolio/brand/rfs-site-mark.svg
 */
export default function SiteMark({ className = "h-8 w-8" }: SiteMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- fixed vector asset, no next/image benefit
    <img
      src="/portfolio/brand/rfs-site-mark.svg"
      alt="Robert F. Swenson III site mark"
      className={`${className} rounded-[6px]`}
    />
  );
}

import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-sans text-sm font-semibold tracking-[0.12em] text-text-main">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-text-muted">
              {site.descriptor}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            Built with curiosity, persistence, and practical engineering.
          </p>
          <p className="mt-2 font-mono text-[11px] text-text-muted/70">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

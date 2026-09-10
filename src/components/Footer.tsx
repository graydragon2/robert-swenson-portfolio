import Link from "next/link";
import { links, nav, site } from "@/data/site";
import SiteMark from "@/components/SiteMark";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <SiteMark className="h-8 w-8" />
            <div>
              <p className="font-sans text-sm font-semibold tracking-[0.12em] text-text-main">
                {site.name.toUpperCase()}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-text-muted">
                {site.descriptor}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-4">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-sm text-text-muted transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
              >
                <GithubIcon />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-sm text-text-muted transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
              >
                <LinkedinIcon />
              </a>
            </div>
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

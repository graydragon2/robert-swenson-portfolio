"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links, nav, site } from "@/data/site";
import MobileMenu from "@/components/MobileMenu";
import SiteMark from "@/components/SiteMark";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-deep/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <SiteMark className="h-7 w-7" />
          <span className="font-sans text-sm font-semibold tracking-[0.12em] text-text-main">
            {site.name.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const currentPath: string = pathname;
            const active = currentPath.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-xs uppercase tracking-wide transition-colors ${
                  active
                    ? "text-accent-bright"
                    : "text-text-muted hover:text-text-main"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-4 border-l border-border pl-6">
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
          <Link
            href="/projects"
            className="rounded-[10px] border border-border px-4 py-2 font-mono text-xs uppercase tracking-wide text-text-main transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            View Work
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border text-text-main md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}

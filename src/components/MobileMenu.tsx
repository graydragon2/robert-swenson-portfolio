"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links, nav } from "@/data/site";

interface MobileMenuProps {
  open: boolean;
  onNavigate: () => void;
}

export default function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`md:hidden overflow-hidden border-b border-border bg-bg-deep transition-[max-height,opacity] duration-300 ease-out ${
        open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
        {nav.map((item) => {
          const currentPath: string = pathname;
          const active = currentPath.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`rounded-[10px] px-3 py-3 font-mono text-sm uppercase tracking-wide transition-colors ${
                active
                  ? "bg-bg-raised text-accent-bright"
                  : "text-text-muted hover:bg-bg-raised hover:text-text-main"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="mt-2 flex flex-col gap-1 border-t border-border pt-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className="rounded-[10px] px-3 py-3 font-mono text-sm uppercase tracking-wide text-text-muted transition-colors hover:bg-bg-raised hover:text-text-main"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className="rounded-[10px] px-3 py-3 font-mono text-sm uppercase tracking-wide text-text-muted transition-colors hover:bg-bg-raised hover:text-text-main"
          >
            LinkedIn
          </a>
        </div>
        <Link
          href="/projects"
          onClick={onNavigate}
          className="mt-2 rounded-[10px] border border-border px-3 py-3 text-center font-mono text-sm uppercase tracking-wide text-text-main"
        >
          View Work
        </Link>
      </nav>
    </div>
  );
}

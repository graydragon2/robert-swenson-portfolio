"use client";

export interface CaseStudySectionDef {
  id: string;
  label: string;
}

export default function CaseStudyNav({
  sections,
}: {
  sections: CaseStudySectionDef[];
}) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-16 z-30 border-b border-border bg-bg-deep/90 px-4 backdrop-blur sm:px-6"
    >
      <ul className="scrollbar-hide flex gap-4 overflow-x-auto py-3 sm:gap-6">
        {sections.map((section) => (
          <li key={section.id} className="flex-shrink-0">
            <a
              href={`#${section.id}`}
              className="block whitespace-nowrap py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright lg:py-0"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

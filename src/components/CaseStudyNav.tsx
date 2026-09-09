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
      <ul className="flex gap-6 overflow-x-auto py-3">
        {sections.map((section) => (
          <li key={section.id} className="flex-shrink-0">
            <a
              href={`#${section.id}`}
              className="font-mono text-[11px] uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

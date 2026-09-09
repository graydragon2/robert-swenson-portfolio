import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectGrid from "@/components/ProjectGrid";
import { getFeaturedProjects, getSecondaryProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Systems, automation, AI infrastructure, and security projects designed, built, and operated by Robert F. Swenson III.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <div className="bg-bg-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Case studies in systems and infrastructure"
          description="Every project here is built around real day-to-day use, with systems ranging from active production platforms to ongoing engineering builds. Each one covers the problem, the architecture, and where it stands today."
        />

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Flagship Systems
        </p>
        <div className="mt-10 flex flex-col gap-28 sm:gap-40">
          {featured.map((project, i) => (
            <ProjectShowcase key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-7xl px-4 sm:mt-40 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Supporting Builds
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
          Infrastructure and tooling behind the flagship systems
        </h2>
        <div className="mt-10">
          <ProjectGrid projects={secondary} variant="compact" />
        </div>
      </div>
    </div>
  );
}

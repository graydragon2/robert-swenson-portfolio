import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Systems, automation, AI infrastructure, and security projects designed, built, and operated by Robert F. Swenson III.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-bg-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Case studies in systems and infrastructure"
          description="Every project here runs, or has run, in production for real day-to-day use — not a portfolio exercise. Each one covers the problem, the architecture, and where it stands today."
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

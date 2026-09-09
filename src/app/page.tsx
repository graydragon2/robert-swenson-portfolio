import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectGrid from "@/components/ProjectGrid";
import TopologyDiagram from "@/components/TopologyDiagram";
import Button from "@/components/Button";
import { getFeaturedProjects, getSecondaryProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <>
      <Hero />

      <section className="relative bg-bg-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Work"
            title="Systems built to solve real problems"
            description="Three platforms designed, built, and currently operated end to end — spanning personal AI infrastructure, home security, and network management."
          />

          <div className="mt-20 flex flex-col gap-24 sm:gap-32">
            {featured.map((project, i) => (
              <ProjectShowcase key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-raised py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-2xl font-medium italic leading-relaxed text-text-main sm:text-3xl lg:text-4xl">
            {site.quote.join(" ")}
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Additional Work"
            title="Supporting infrastructure and tooling"
            description="Smaller, focused systems that either support the projects above or solve a specific operational problem."
          />
          <div className="mt-12">
            <ProjectGrid projects={secondary} variant="compact" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-deep py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(31,61,46,0.35),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Infrastructure"
            title="How it all connects"
            description="Four nodes, one WireGuard mesh, and a shared monitoring layer — the physical and virtual foundation these projects run on."
            align="center"
          />

          <div className="mt-16 rounded-[20px] border border-border bg-bg-raised/60 p-4 sm:p-10">
            <TopologyDiagram />
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/infrastructure" variant="outline">
              View Full Infrastructure
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

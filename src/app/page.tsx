import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectGrid from "@/components/ProjectGrid";
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

          <div className="mt-20 flex flex-col gap-28 sm:gap-40">
            {featured.map((project, i) => (
              <ProjectShowcase key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[260px] items-center overflow-hidden bg-bg-deep sm:min-h-[360px] lg:min-h-[460px]">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/portfolio/backgrounds/section-divider-background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_50%,rgba(5,10,8,0.55)_0%,rgba(5,10,8,0.15)_75%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-3xl font-medium italic leading-relaxed text-text-main sm:text-4xl lg:text-5xl">
            {site.quote.join(" ")}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/portfolio/backgrounds/topographic-background.svg')] bg-cover bg-center opacity-15"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            description="Four nodes connected through a private WireGuard network, with a shared monitoring layer — the physical and virtual foundation these projects run on."
            align="center"
          />

          <div className="mt-16 overflow-x-auto rounded-[20px] border border-border bg-bg-raised/60 p-4 sm:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element -- static vector diagram, sharp at any size */}
            <img
              src="/portfolio/diagrams/infrastructure-topology.svg"
              alt="Infrastructure topology: security-core, graydragon-ai, pi4-core, and pi3b-river connected through a private WireGuard network."
              className="h-auto w-full min-w-[720px]"
            />
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

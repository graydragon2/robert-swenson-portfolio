import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import MetricCard from "@/components/MetricCard";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudySection from "@/components/CaseStudySection";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = project.metaTitle ?? `${project.title} | ${site.name}`;
  const description = project.metaDescription ?? project.summary;
  const url = `/projects/${project.slug}`;
  const socialImage = {
    url: `/social/${project.slug}.png`,
    width: 1200,
    height: 630,
    alt: `${project.title} — ${site.name}`,
  };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "requirements", label: "Requirements" },
  { id: "architecture", label: "Architecture" },
  { id: "build", label: "Build" },
  { id: "challenges", label: "Challenges" },
  { id: "current-system", label: "Current System" },
  { id: "whats-next", label: "What's Next" },
];

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const sectionSpacing = project.slug === "graydragon" ? "tight" : "default";

  return (
    <div>
      {/* Editorial header — title, status, and context lead; artwork follows as evidence */}
      <div className="relative overflow-hidden bg-bg-deep">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(31,61,46,0.4),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright"
          >
            ← Back to Projects
          </Link>

          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
              {project.subtitle}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-md">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  Status
                </dt>
                <dd className="mt-1 text-sm font-medium text-text-main">
                  {project.status}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  Host
                </dt>
                <dd className="mt-1 text-sm font-medium text-text-main">
                  {project.host}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  Deployment
                </dt>
                <dd className="mt-1 text-sm font-medium text-text-main">
                  {project.deployment}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 pb-16 sm:mt-14">
            <ScreenshotFrame
              src={project.image}
              alt={project.imageAlt ?? `${project.title} interface`}
              label={
                project.image
                  ? `${project.title} · SYSTEM INTERFACE`
                  : `${project.title} · SCREENSHOT COMING SOON`
              }
              aspect="editorial"
              frame="artwork"
              fit={project.imageFit}
              glow
              priority
            />
            {project.conceptArt && (
              <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                Concept Interface — Graydragon is actively evolving. This
                artwork represents the intended visual direction of the
                Personal Intelligence System.
              </p>
            )}
          </div>
        </div>
      </div>

      <CaseStudyNav sections={sections} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <CaseStudySection
          id="overview"
          label="Overview"
          heading="System Overview"
          spacing={sectionSpacing}
        >
          <p className="text-base leading-relaxed text-text-muted">
            {project.description}
          </p>

          {project.infraSpecs && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.infraSpecs.map((spec) => (
                <MetricCard
                  key={spec.label}
                  label={spec.label}
                  value={spec.value}
                />
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          {project.note && (
            <p className="mt-6 border-l-2 border-accent-bright/60 pl-4 text-sm italic leading-relaxed text-text-muted">
              {project.note}
            </p>
          )}
        </CaseStudySection>

        <CaseStudySection
          id="problem"
          label="Problem"
          heading="The Problem"
          spacing={sectionSpacing}
        >
          <ul className="flex flex-col gap-3">
            {project.problem.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-text-muted"
              >
                <span className="mt-1 text-accent-bright">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="requirements"
          label="Requirements"
          heading="What It Had to Do"
          spacing={sectionSpacing}
        >
          <ul className="flex flex-col gap-3">
            {project.requirements.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-text-muted"
              >
                <span className="mt-1 text-accent-bright">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="architecture"
          label="Architecture"
          heading="How It's Structured"
          spacing={sectionSpacing}
        >
          <div className="max-w-none overflow-x-auto rounded-[12px] border border-border bg-bg-raised p-6">
            <ArchitectureDiagram spec={project.architecture} />
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="build"
          label="Build"
          heading="Engineering the Build"
          spacing={sectionSpacing}
        >
          <div className="flex flex-col gap-4">
            {project.build.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="challenges"
          label="Challenges"
          heading="What Made It Hard"
          spacing={sectionSpacing}
        >
          <ul className="flex flex-col gap-3">
            {project.challenges.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-text-muted"
              >
                <span className="mt-1 text-accent-bright">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="current-system"
          label="Current System"
          heading="Results — Where It Stands Today"
          spacing={sectionSpacing}
        >
          <ul className="flex flex-col gap-3">
            {project.currentState.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-text-muted"
              >
                <span className="mt-1 text-accent-bright">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="whats-next"
          label="What's Next"
          heading="What's Next"
          spacing={sectionSpacing}
        >
          <ul className="flex flex-col gap-3">
            {project.nextSteps.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-text-muted"
              >
                <span className="mt-1 text-accent-bright">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <div className="flex justify-center border-t border-border py-14">
          <Button href="/projects" variant="outline">
            Back to Projects
          </Button>
        </div>
      </div>
    </div>
  );
}

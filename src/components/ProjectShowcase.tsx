import Link from "next/link";
import type { Project } from "@/data/projects";
import Tag from "@/components/Tag";
import ScreenshotFrame from "@/components/ScreenshotFrame";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export default function ProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  const reversed = index % 2 === 1;
  const href = `/projects/${project.slug}`;

  return (
    <article
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 ${
        reversed ? "" : ""
      }`}
    >
      <div
        className={`lg:col-span-7 ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Link href={href} className="group block">
          <ScreenshotFrame
            alt={`${project.title} interface`}
            label={`${project.title} · SYSTEM INTERFACE`}
            aspect="wide"
            glow
            accentSeed={index}
            slug={project.slug}
          />
        </Link>
      </div>

      <div
        className={`lg:col-span-5 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          {String(index + 1).padStart(2, "0")} — {project.subtitle}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-wide text-text-muted">
          <div>
            <dt className="text-text-muted/60">Status</dt>
            <dd className="mt-1 text-text-main">{project.status}</dd>
          </div>
          <div>
            <dt className="text-text-muted/60">Host</dt>
            <dd className="mt-1 text-text-main">{project.host}</dd>
          </div>
          <div>
            <dt className="text-text-muted/60">Deployment</dt>
            <dd className="mt-1 text-text-main">{project.deployment}</dd>
          </div>
        </dl>

        <Link
          href={href}
          className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent-bright"
        >
          View Case Study
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

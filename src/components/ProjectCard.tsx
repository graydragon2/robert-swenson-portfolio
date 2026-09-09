import Link from "next/link";
import type { Project } from "@/data/projects";
import Tag from "@/components/Tag";
import ScreenshotFrame from "@/components/ScreenshotFrame";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
}

export default function ProjectCard({
  project,
  variant = "featured",
}: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex flex-col overflow-hidden rounded-[12px] border border-border bg-bg-raised transition-colors hover:border-accent-bright/60"
      >
        <ScreenshotFrame
          src={project.image}
          alt={project.imageAlt ?? `${project.title} interface`}
          label={
            project.image
              ? `${project.title} · SYSTEM INTERFACE`
              : `${project.title} · SCREENSHOT COMING SOON`
          }
          aspect="supporting"
        />
        <div className="flex flex-1 flex-col p-[21px] lg:p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-accent-bright">
              {project.subtitle}
            </p>
            <span
              aria-hidden="true"
              className="mt-0.5 flex-shrink-0 font-mono text-accent-bright transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-text-main">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
            {project.description}
          </p>
          <div className="mt-[17px] flex flex-wrap gap-2 lg:mt-5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-[14px] border border-border bg-bg-raised transition-colors hover:border-accent-bright/60">
      <div className="p-5 pb-0">
        <ScreenshotFrame
          alt={`${project.title} interface`}
          label={`${project.title} · SCREENSHOT`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-accent-bright">
          {project.subtitle}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-text-main">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent-bright"
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

import Link from "next/link";
import type { Project } from "@/data/projects";
import Tag from "@/components/Tag";
import ScreenshotFrame from "@/components/ScreenshotFrame";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

const projectIcons: Record<string, string> = {
  graydragon: "ai",
  "home-security": "security",
  "network-command-center": "network",
  homelab: "server",
  "local-ai": "ai",
  "mortgage-intelligence": "data",
};

export default function ProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  const reversed = index % 2 === 1;
  const href = `/projects/${project.slug}`;
  const iconName = projectIcons[project.slug];

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
      <div
        className={`lg:col-span-7 ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Link href={href} className="group block">
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
            priority={index === 0}
          />
        </Link>
        {project.conceptArt && (
          <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Concept Interface — Active Development
          </p>
        )}
      </div>

      <div
        className={`lg:col-span-5 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          {iconName && (
            // eslint-disable-next-line @next/next/no-img-element -- fixed small vector icon
            <img
              src={`/portfolio/icons/icon-${iconName}.svg`}
              alt=""
              className="h-4 w-4"
            />
          )}
          {String(index + 1).padStart(2, "0")} — {project.subtitle}
        </p>
        <h3 className="mt-3 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-text-main sm:text-5xl lg:text-[3.25rem]">
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

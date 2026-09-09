import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  variant?: "featured" | "compact";
}

export default function ProjectGrid({
  projects,
  variant = "featured",
}: ProjectGridProps) {
  const cols =
    variant === "compact"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${cols}`}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} variant={variant} />
      ))}
    </div>
  );
}

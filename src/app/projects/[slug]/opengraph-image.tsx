import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — project preview`;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface ImageProps {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? site.name;
  const subtitle = project?.subtitle ?? site.descriptor;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#07100C",
          backgroundImage:
            "linear-gradient(rgba(119,197,138,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(119,197,138,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#77C58A",
            letterSpacing: 4,
            fontFamily: "monospace",
            display: "flex",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 68,
            fontWeight: 700,
            color: "#F2F5F3",
            display: "flex",
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            fontWeight: 600,
            color: "#F2F5F3",
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 22,
            color: "#8D9C92",
            letterSpacing: 2,
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          {site.descriptor}
        </div>
      </div>
    ),
    { ...size }
  );
}

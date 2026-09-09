import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Timeline from "@/components/Timeline";
import { projects } from "@/data/projects";
import { links } from "@/data/site";
import {
  currentLearning,
  education,
  experience,
  skillGroups,
  summary,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Robert F. Swenson III — systems, networking, automation, AI infrastructure, and 20+ years of industrial operations experience.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader eyebrow="Resume" title="Robert F. Swenson III" />
        {links.resumePdf ? (
          <Button href={links.resumePdf} variant="primary">
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed small vector icon */}
            <img src="/portfolio/icons/icon-resume.svg" alt="" className="h-4 w-4" />
            Download Resume
          </Button>
        ) : (
          <span
            title="A downloadable PDF will be added here."
            className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-[10px] border border-border px-5 py-3 font-mono text-xs uppercase tracking-wide text-text-muted"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed small vector icon */}
            <img src="/portfolio/icons/icon-resume.svg" alt="" className="h-4 w-4 opacity-60" />
            Download Resume — PDF Coming Soon
          </span>
        )}
      </div>

      <section className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Summary
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Systems-focused, operations-tested
        </h2>
        <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
          {summary}
        </p>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Technical Skills
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Technical Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-medium text-text-main">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Projects
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Projects
        </h2>
        <ul className="mt-8 flex flex-col gap-5">
          {projects.map((project) => (
            <li key={project.slug}>
              <p className="text-base font-medium text-text-main">
                {project.title}{" "}
                <span className="font-normal text-text-muted">
                  — {project.subtitle}
                </span>
              </p>
              <p className="mt-1 text-sm text-text-muted">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Professional Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Professional Experience
        </h2>
        <div className="mt-8">
          <Timeline
            items={experience.map((item) => ({
              period: item.period,
              title: item.title,
              place: item.place,
            }))}
          />
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Education
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Education
        </h2>
        <ul className="mt-8 flex flex-col gap-3">
          {education.map((item, i) => (
            <li key={i} className="text-sm text-text-muted">
              <span className="text-text-main">{item.title}</span>
              {item.place && <> — {item.place}</>}
              {item.period && (
                <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-text-muted/70">
                  {item.period}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-bright">
          Current Learning
        </p>
        <h2 className="mt-2 text-2xl font-bold text-text-main sm:text-3xl">
          Current Learning
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {currentLearning.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </section>
    </div>
  );
}

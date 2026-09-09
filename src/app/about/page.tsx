import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Robert F. Swenson III is a systems builder, technical problem-solver, and lifelong learner working across networking, Linux, automation, security, and AI infrastructure.",
};

const questions = [
  "How do I know what's happening on my network?",
  "How can I make security systems smarter instead of noisier?",
  "How can AI run locally?",
  "How can software help organize information instead of creating more of it?",
  "How can small systems work together reliably?",
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-bg-deep">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/portfolio/backgrounds/about-background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,8,0.85)_0%,rgba(5,10,8,0.35)_55%,rgba(5,10,8,0.55)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.02] tracking-tight text-text-main sm:text-5xl lg:text-6xl">
            SAME PERSON.
            <br />
            NEW CHAPTER.
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-text-muted">
          Robert F. Swenson III is a systems builder, technical
          problem-solver, and lifelong learner.
        </p>
      </div>

      <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-bg-deep">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/portfolio/backgrounds/journey-background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,10,8,0.82)_0%,rgba(5,10,8,0.5)_45%,rgba(5,10,8,0.25)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright">
            Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-snug text-text-main sm:text-3xl">
            Two decades. One mindset.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            After more than two decades working in industrial operations, he
            began increasingly applying the same mindset used in process
            operations to networking, Linux, automation, security,
            self-hosted infrastructure, and AI-assisted development.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-text-muted">
          His projects are built around real problems:
        </p>

        <ul className="mt-8 flex flex-col gap-4 border-l-2 border-accent-bright/50 pl-6">
          {questions.map((q) => (
            <li
              key={q}
              className="text-xl italic leading-relaxed text-text-main sm:text-2xl"
            >
              {q}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-text-muted">
          <p>
            The result is a growing collection of practical infrastructure,
            automation, AI, security, and software projects.
          </p>
          <p>
            Outside of technology, Robert values family, time outdoors,
            practical craftsmanship, and continually learning something new.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <Button href="/projects" variant="primary">
            Explore Projects
          </Button>
          <Button href="/resume" variant="outline">
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

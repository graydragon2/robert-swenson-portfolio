import type { Metadata } from "next";
import Image from "next/image";
import ContactCard from "@/components/ContactCard";
import { links, socialImage } from "@/data/site";

const title = "Contact — Robert F. Swenson III";
const description =
  "Get in touch with Robert F. Swenson III about systems, networking, infrastructure, automation, security, or AI projects.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage.url],
  },
};

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 17v-7" />
    </svg>
  );
}

function AssetIcon({ name, alt }: { name: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- fixed small vector icon
    <img src={`/portfolio/icons/icon-${name}.svg`} alt={alt} className="h-[18px] w-[18px]" />
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-bg-deep">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/portfolio/backgrounds/contact-background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,8,0.9)_0%,rgba(5,10,8,0.45)_55%,rgba(5,10,8,0.6)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-2xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.02] tracking-tight text-text-main sm:text-5xl">
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            I&apos;m interested in systems, networking, infrastructure,
            automation, security, AI, and practical software development.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <ContactCard
            label="Email"
            value={links.email}
            href={`mailto:${links.email}`}
            icon={<AssetIcon name="contact" alt="" />}
          />
          <ContactCard
            label="GitHub"
            value={links.github ?? "Coming soon"}
            href={links.github ?? undefined}
            icon={<GithubIcon />}
          />
          <ContactCard
            label="LinkedIn"
            value={links.linkedin ?? "Coming soon"}
            href={links.linkedin ?? undefined}
            icon={<LinkedinIcon />}
          />
          <ContactCard
            label="Resume"
            value="View resume page"
            href="/resume"
            icon={<AssetIcon name="resume" alt="" />}
          />
        </div>
      </div>
    </div>
  );
}

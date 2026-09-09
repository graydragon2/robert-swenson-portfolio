import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactCard from "@/components/ContactCard";
import { links } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Robert F. Swenson III about systems, networking, infrastructure, automation, security, or AI projects.",
};

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

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

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="I'm interested in systems, networking, infrastructure, automation, security, AI, and practical software development."
      />

      <div className="mt-12 flex flex-col gap-4">
        <ContactCard
          label="Email"
          value={links.email}
          href={`mailto:${links.email}`}
          icon={<MailIcon />}
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
          icon={<DocIcon />}
        />
      </div>
    </div>
  );
}

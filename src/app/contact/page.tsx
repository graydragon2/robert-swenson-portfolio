import type { Metadata } from "next";
import Image from "next/image";
import ContactCard from "@/components/ContactCard";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
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
            value="graydragon2"
            description="View repositories, infrastructure projects, and source code."
            href={links.github}
            icon={<GithubIcon />}
          />
          <ContactCard
            label="LinkedIn"
            value="Robert F. Swenson III"
            description="Professional experience, projects, and career background."
            href={links.linkedin}
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

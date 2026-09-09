interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

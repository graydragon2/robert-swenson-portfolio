interface ContactCardProps {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}

export default function ContactCard({
  label,
  value,
  href,
  icon,
}: ContactCardProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-[12px] border border-border bg-bg-raised p-5 transition-colors hover:border-accent-bright/60">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-border text-accent-bright">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-text-main">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}

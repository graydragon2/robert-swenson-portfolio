export interface TimelineItem {
  period: string;
  title: string;
  place?: string;
  description?: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-8 border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-bright bg-bg-deep" />
          <p className="font-mono text-[11px] uppercase tracking-wide text-accent-bright">
            {item.period}
          </p>
          <h3 className="mt-1 text-base font-semibold text-text-main">
            {item.title}
          </h3>
          {item.place && (
            <p className="mt-0.5 text-sm text-text-muted">{item.place}</p>
          )}
          {item.description && (
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

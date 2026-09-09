interface TerminalSnippetProps {
  title?: string;
  lines: string[];
}

export default function TerminalSnippet({
  title = "shell",
  lines,
}: TerminalSnippetProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-bg-raised">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/30" />
        <span className="ml-2 font-mono text-[11px] text-text-muted">
          {title}
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-relaxed text-text-main">
        {lines.map((line, i) => (
          <p key={i} className="whitespace-pre-wrap">
            <span className="text-accent-bright">$</span> {line}
          </p>
        ))}
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </div>
  );
}

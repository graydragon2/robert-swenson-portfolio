interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-[12px] border border-border bg-bg-raised px-5 py-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
        {label}
      </p>
      <p className="mt-1.5 text-base font-medium text-text-main">{value}</p>
    </div>
  );
}

import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
        Error 404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
        Route not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
        The system couldn&apos;t resolve this path. It may have moved, or
        never existed.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Return Home
        </Button>
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-wide text-text-muted transition-colors hover:text-accent-bright"
        >
          View Projects →
        </Link>
      </div>
    </div>
  );
}

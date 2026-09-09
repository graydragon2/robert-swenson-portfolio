"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
        System Error
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
        An unexpected error interrupted this page. You can try again, or head
        back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button variant="primary" onClick={() => reset()}>
          Try Again
        </Button>
        <Button href="/" variant="outline">
          Return Home
        </Button>
      </div>
    </div>
  );
}

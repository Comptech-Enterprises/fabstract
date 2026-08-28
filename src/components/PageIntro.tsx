import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="bg-white pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal text-xs tracking-[0.28em] uppercase mb-4">{eyebrow}</p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy font-medium leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}

"use client";

import { SectionReveal } from "./SectionReveal";

export function StatGrid({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 mt-16">
      {items.map((item, i) => (
        <SectionReveal key={item.label} delay={i * 0.08}>
          <div className="border-t border-sand pt-6">
            <p className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink font-medium leading-none tracking-tight">
              {item.value}
            </p>
            <p className="mt-4 text-taupe text-sm leading-relaxed max-w-sm">{item.label}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}

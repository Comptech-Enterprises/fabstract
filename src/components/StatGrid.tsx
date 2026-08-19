"use client";

export function StatGrid({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 mt-16">
      {items.map((item) => (
        <div key={item.label} className="border-t border-navy/10 pt-6">
          <p className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy font-medium leading-none tracking-tight">
            {item.value}
          </p>
          <p className="mt-4 text-teal text-sm leading-relaxed max-w-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

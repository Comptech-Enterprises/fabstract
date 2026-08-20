"use client";

const ITEMS = [
  "Woven",
  "Knit",
  "Home",
  "Organic cotton",
  "Fairtrade",
  "BSCI",
  "USA",
  "Europe",
  "60–90 days",
  "100K+ units",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-cream py-2.5 border-y border-sand">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="text-stone text-sm tracking-[0.28em] uppercase font-medium">
            {item}
            <span className="ml-10 text-taupe">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

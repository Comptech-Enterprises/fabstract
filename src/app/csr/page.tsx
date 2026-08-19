"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const TABS = [
  { id: "people", label: "For People" },
  { id: "planet", label: "For Planet" },
  { id: "csr", label: "CSR" },
  { id: "marks", label: "Our Marks" },
] as const;

function ReadMore({ more }: { more: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6">
      {open ? <p className="text-navy/70 leading-relaxed max-w-xl mb-4">{more}</p> : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-[11px] tracking-[0.22em] uppercase text-navy hover:text-teal"
      >
        {open ? "Read less" : "Read more"}
        <span className="ml-2">{open ? "↑" : "→"}</span>
      </button>
    </div>
  );
}

function SideNav({ active }: { active: string }) {
  return (
    <nav className="border-l border-navy/15 py-2">
      {TABS.map((tab) => {
        const on = active === tab.id;
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`flex items-center gap-3 py-2.5 -ml-px border-l-2 transition-colors ${
              on ? "border-navy text-navy" : "border-transparent text-navy/40 hover:text-navy"
            }`}
          >
            <span className={`h-px ${on ? "w-8 bg-navy" : "w-4 bg-navy/25"}`} />
            <span className={`text-[13px] ${on ? "font-medium" : ""}`}>{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default function CSRPage() {
  const [active, setActive] = useState("people");

  useEffect(() => {
    const nodes = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const peopleStats = [
    { value: "500+", label: "Skilled professionals across design, production, and quality." },
    { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
  ];

  const planetStats = [
    { value: "BSCI", label: "Certified ethical manufacturing across the supply chain." },
    { value: "ETI", label: "Aligned with Ethical Trading Initiative base code." },
    { value: "ILO", label: "Compliant with International Labour Organization conventions." },
    { value: "GOTS", label: "Organic cotton sourcing where programmes call for it." },
  ];

  const csrStats = [
    { value: "5", label: "Active CSR programmes — education, environment, and worker well-being." },
    { value: "60%+", label: "Female workforce with equal pay and maternity support." },
    { value: "85%+", label: "Retention — people stay because the floor is fair." },
    { value: "1991", label: "Fairtrade-aligned house, government-recognised exporter since founding." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-20 md:pt-24">
        <section className="relative h-[52vh] min-h-[340px] sm:h-[62vh] md:h-[72vh] overflow-hidden">
          <Still
            src={gallerySrc(GALLERY_FILES[0])}
            alt="Fabstract floor"
            ken
            zoom={false}
            className="absolute inset-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/25 to-navy/20" />
          <div className="absolute inset-x-0 bottom-0 px-5 sm:px-10 lg:px-14 pb-10 lg:pb-14">
            <p className="text-white/90 text-base sm:text-lg font-medium mb-2">Sustainability</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.08] max-w-3xl [text-shadow:0_2px_24px_rgba(12,18,28,0.4)]">
              Operating responsibly, for people and the planet
            </h1>
          </div>
        </section>

        <div className="lg:grid lg:grid-cols-12 lg:gap-0">
          <aside className="hidden lg:block lg:col-span-2 px-6 pt-10 self-start sticky top-24 z-30">
            <SideNav active={active} />
          </aside>

          <div className="lg:col-span-10 min-w-0">
            <div className="lg:hidden sticky top-20 md:top-24 z-40 bg-white/95 border-b border-navy/10 backdrop-blur-md">
              <nav className="px-5 flex gap-6 overflow-x-auto">
                {TABS.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    className={`shrink-0 py-4 text-[11px] tracking-[0.22em] uppercase ${
                      active === tab.id ? "text-navy" : "text-navy/45"
                    }`}
                  >
                    {tab.label}
                  </a>
                ))}
              </nav>
            </div>

            <header className="bg-beige px-5 sm:px-10 lg:px-14 py-16 lg:py-24">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.2] max-w-3xl">
                Sustainability is an exercise in both social and environmental well-being.
              </h2>
              <p className="mt-8 text-navy/70 leading-relaxed max-w-2xl">
                It goes beyond simply doing good — it is a commitment to people, the planet, and responsible manufacturing. Our CSR policy under Section 135 of the Companies Act 2013 holds the floor to ETI and ILO practice. Fairtrade certified.
              </p>
            </header>

            <section id="people" className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24">
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Responsible for People</h2>
              <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-10 items-start">
                <div className="lg:col-span-8">
                  <h3 className="text-navy font-medium text-lg">Empowering employees and communities</h3>
                  <p className="mt-4 text-navy/70 leading-relaxed max-w-xl">
                    An open, ethical floor where workers feel safe, seen, heard, respected, and valued — living wages, training, and real career paths.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right mt-4 lg:mt-0">
                  <ReadMore more="500+ skilled professionals. 60%+ female workforce with equal pay and maternity support. 85%+ retention because the floor is fair." />
                </div>
              </div>
              <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
                <Still
                  src={gallerySrc(GALLERY_FILES[1])}
                  alt="People on the Fabstract floor"
                  className="lg:col-span-7 aspect-[16/10] min-h-[220px]"
                />
                <div className="lg:col-span-5 flex flex-col justify-center gap-10">
                  {peopleStats.map((s) => (
                    <div key={s.value} className="border-b border-navy/15 pb-8">
                      <p className="font-display text-5xl sm:text-6xl text-navy font-medium leading-none">{s.value}</p>
                      <p className="mt-3 text-navy/60 text-sm leading-relaxed uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="planet" className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24 border-t border-navy/10">
              <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Responsible for Planet</h2>
                  <h3 className="mt-8 text-navy font-medium text-lg">Championing environmental stewardship</h3>
                  <p className="mt-4 text-navy/70 leading-relaxed max-w-xl">
                    Sustainability — <span className="text-teal">वन से हम</span> — &quot;We exist because of forests.&quot; Miyawaki forests in Delhi/NCR, sponsored by Fabstract, led by Sustainability Head Mrs. Abha Batra.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <ReadMore more="Native trees planted close together, competing for light, growing into a dense, self-sustaining forest within two years. More such programmes each month to fight heat and pollution." />
                </div>
              </div>
              <div className="mt-12 grid lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-5 flex flex-col gap-3">
                  {planetStats.map((s, i) => (
                    <div
                      key={s.value}
                      className={`flex items-center gap-6 px-6 py-7 ${
                        i === 2 ? "bg-navy text-white" : "bg-beige text-navy"
                      }`}
                    >
                      <p className="font-display text-3xl sm:text-4xl font-medium w-24 shrink-0">{s.value}</p>
                      <p className={`text-sm leading-relaxed ${i === 2 ? "text-sky" : "text-navy/60"}`}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <Still
                  src={gallerySrc(GALLERY_FILES[7])}
                  alt="Fabstract production"
                  className="lg:col-span-7 min-h-[280px] lg:min-h-full aspect-[4/3] lg:aspect-auto"
                />
              </div>
            </section>

            <section id="csr" className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24 border-t border-navy/10">
              <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Corporate Social Responsibility</h2>
                  <h3 className="mt-8 text-navy font-medium text-lg">Building futures, one step beyond</h3>
                  <p className="mt-4 text-navy/70 leading-relaxed max-w-xl">
                    Impact beyond the carton — communities, education, health, and the supply chain we share with global buyers.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <ReadMore more="Education and skilling, health and sanitation, gender equality, and environmental sustainability — including Swachh Bharat contributions and support for children, women, elderly, and differently abled." />
                </div>
              </div>
              <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
                <Still
                  src={gallerySrc(GALLERY_FILES[2])}
                  alt="Hands at work, Fabstract floor"
                  className="lg:col-span-5 aspect-[3/4] min-h-[280px]"
                />
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
                  {csrStats.map((s) => (
                    <div key={s.value} className="border-t border-navy/15 py-8">
                      <p className="font-display text-4xl sm:text-5xl text-navy font-medium leading-none">{s.value}</p>
                      <p className="mt-3 text-navy/60 text-sm leading-relaxed">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="marks" className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24">
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Our Marks</h2>
              <h3 className="mt-8 text-navy font-medium text-lg">Partners in progress</h3>
              <p className="mt-4 text-navy/70 leading-relaxed max-w-xl">
                Government-recognised export house. Fairtrade certified. CSCC approved.
              </p>
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[GALLERY_FILES[0], GALLERY_FILES[4], GALLERY_FILES[8]].map((file) => (
                  <Still key={file} src={gallerySrc(file)} alt="" className="aspect-[4/3]" />
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                {["CSCC Approved", "BSCI Certified", "ETI Aligned", "ILO Compliant", "Fairtrade"].map((m) => (
                  <span
                    key={m}
                    className="border border-navy/15 bg-white px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-navy"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden lg:flex fixed bottom-8 left-6 z-40 items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-navy/50 hover:text-navy"
        >
          <span>↑</span>
          Back to top
        </button>
      </main>
      <Footer />
    </>
  );
}

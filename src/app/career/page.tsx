"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";

const field =
  "w-full bg-transparent border-0 border-b border-sand pb-2.5 pt-1 text-base text-ink placeholder-taupe focus:outline-none focus:border-champagne transition-colors";

const selectField =
  "w-full bg-transparent border-0 border-b border-sand pb-2.5 pt-1 text-base text-ink focus:outline-none focus:border-champagne transition-colors";

const PILLARS = [
  {
    number: "01",
    title: "Work environment",
    desc: "A progressive, inclusive factory culture where every worker feels valued, respected, and empowered to excel in their craft.",
    stat: "85%+ retention rate",
  },
  {
    number: "02",
    title: "Skill development",
    desc: "Continuous cross-training in modern sewing technology, pattern-making, quality management, and supervisory skills.",
    stat: "100+ hours annual training",
  },
  {
    number: "03",
    title: "Health & well-being",
    desc: "Clean RO drinking water stations, ergonomic seating, well-ventilated production bays, and female hygiene support.",
    stat: "Zero safety violations",
  },
  {
    number: "04",
    title: "Team culture",
    desc: "Celebrating national festivals, hosting sports tournaments, recognizing top performers, and maintaining high team spirit.",
    stat: "Annual recognition events",
  },
];

const BENEFITS = [
  { title: "Living wages", desc: "25% above government minimum wage with Fairtrade premium distribution." },
  { title: "Health support", desc: "Free on-site doctor consultations and annual health checkups." },
  { title: "Housing assistance", desc: "Subsidized housing allowances for factory staff." },
  { title: "Skill training", desc: "100+ hours annual training in modern garment manufacturing." },
  { title: "Career growth", desc: "Structured promotion paths into supervisory and leadership roles." },
  { title: "Women empowerment", desc: "60%+ female workforce with equal pay and maternity support." },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Fabstract! I'd like to apply for a position.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nExperience: ${formData.experience}\n\n${formData.message}`,
    );
    window.open(`https://wa.me/911140524038?text=${text}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Careers"
          title="Build your career at Fabstract."
          subtitle="Join a team of 500+ skilled professionals crafting world-class garments for global brands. We invest in people — fair wages, continuous training, and real career growth."
        />

        <section id="apply" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <SectionReveal>
            <p className="font-script text-lg text-taupe">Apply</p>
            <h2 className="mt-2 font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
              Tell us about you.
            </h2>
            <p className="mt-4 max-w-md text-sm text-stone leading-relaxed">
              Fill out the form and our HR team will get back to you within 3 business days.
              Submitting opens WhatsApp with your details pre-filled.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white border-l-4 p-6 sm:p-10"
              style={{ borderColor: "var(--champagne)" }}
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label className="flex items-baseline gap-2 text-[11px] uppercase tracking-[0.16em] text-taupe mb-1">
                    <span style={{ color: "var(--champagne)" }}>01</span> Full name *
                  </label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label className="flex items-baseline gap-2 text-[11px] uppercase tracking-[0.16em] text-taupe mb-1">
                    <span style={{ color: "var(--champagne)" }}>02</span> Phone *
                  </label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label className="flex items-baseline gap-2 text-[11px] uppercase tracking-[0.16em] text-taupe mb-1">
                    <span style={{ color: "var(--champagne)" }}>03</span> Position *
                  </label>
                  <select name="position" required value={formData.position} onChange={handleChange} className={selectField}>
                    <option value="">Select position</option>
                    <option>Pattern Making Specialist</option>
                    <option>Quality Control Manager</option>
                    <option>Merchandiser</option>
                    <option>Sewing Line Supervisor</option>
                    <option>Fabric Sourcing Executive</option>
                    <option>Sustainability Coordinator</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-baseline gap-2 text-[11px] uppercase tracking-[0.16em] text-taupe mb-1">
                    <span style={{ color: "var(--champagne)" }}>04</span> Experience
                  </label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className={selectField}>
                    <option value="">Select experience</option>
                    <option>Fresher</option>
                    <option>1-2 Years</option>
                    <option>3-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="flex items-baseline gap-2 text-[11px] uppercase tracking-[0.16em] text-taupe mb-1">
                  <span style={{ color: "var(--champagne)" }}>05</span> Cover note
                </label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className={`${field} resize-none`} />
              </div>
              <button type="submit" className="btn-crimson">
                Submit application →
              </button>
            </form>
          </SectionReveal>
        </section>

        <section className="bg-white border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex flex-wrap gap-x-10 gap-y-2 text-xs sm:text-sm text-taupe">
            <span>Equal opportunity employer</span>
            <span>Walk-ins Mon–Sat, 10am–4pm, Noida factory</span>
            <span>Freshers welcome</span>
          </div>
        </section>

        <section id="pillars" className="bg-cream border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
            <SectionReveal>
              <p className="font-script text-lg text-taupe">Life at Fabstract</p>
            </SectionReveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, i) => (
                <SectionReveal key={pillar.title} delay={i * 0.06}>
                  <div className="border-t border-sand pt-5">
                    <p className="font-script text-base" style={{ color: "var(--champagne)" }}>{pillar.number}</p>
                    <h3 className="mt-2 font-display font-semibold text-xl text-ink">{pillar.title}</h3>
                    <p className="mt-3 text-sm text-stone leading-relaxed">{pillar.desc}</p>
                    <p className="mt-4 text-xs uppercase tracking-wider text-taupe">{pillar.stat}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
            <SectionReveal>
              <TextReveal
                as="h2"
                text="Benefits"
                className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight"
              />
            </SectionReveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENEFITS.map((b, i) => (
                <SectionReveal key={b.title} delay={i * 0.05}>
                  <div className="border-t border-sand pt-5">
                    <h4 className="font-display font-semibold text-lg text-ink">{b.title}</h4>
                    <p className="mt-2 text-sm text-stone leading-relaxed">{b.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

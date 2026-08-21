"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";
import { EASE } from "@/lib/motion";

const darkField =
  "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/30 transition-colors";

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
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-5 sm:px-8 text-center bg-white border-b border-sand">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">Careers</p>
          <h1 className="mt-4 font-display font-bold text-ink text-4xl sm:text-6xl tracking-tight">
            Build your career at Fabstract.
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-stone text-base sm:text-lg leading-relaxed">
            Join a team of 500+ skilled professionals crafting world-class garments for global
            brands. We invest in people — fair wages, continuous training, and real career growth.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-champagne text-white px-6 py-3 text-sm font-medium hover:bg-accent2 transition-colors"
          >
            Apply now ↓
          </a>
        </section>

        <section id="apply" className="bg-ink scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-champagne">Apply</p>
              <h2 className="mt-3 font-display font-semibold text-4xl sm:text-6xl text-white leading-tight">
                Tell us about you.
              </h2>
              <p className="mt-6 max-w-md text-white/60 text-base sm:text-lg leading-relaxed">
                Fill out the form and our HR team will get back to you within 3 business days.
                Submitting opens WhatsApp with your details pre-filled.
              </p>
              <dl className="mt-10 space-y-3 text-sm text-white/60">
                <p>Equal opportunity employer</p>
                <p>Walk-ins Mon–Sat, 10am–4pm, Noida factory</p>
                <p>Freshers welcome</p>
              </dl>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl p-6 sm:p-10 bg-white/[0.04] border border-white/10 shadow-[0_0_60px_-15px_rgba(37,99,235,0.35)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Full name *" value={formData.name} onChange={handleChange} className={darkField} />
                <input type="tel" name="phone" required placeholder="Phone *" value={formData.phone} onChange={handleChange} className={darkField} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select name="position" required value={formData.position} onChange={handleChange} className={`${darkField} appearance-none`}>
                  <option value="" className="text-ink">Position *</option>
                  <option className="text-ink">Pattern Making Specialist</option>
                  <option className="text-ink">Quality Control Manager</option>
                  <option className="text-ink">Merchandiser</option>
                  <option className="text-ink">Sewing Line Supervisor</option>
                  <option className="text-ink">Fabric Sourcing Executive</option>
                  <option className="text-ink">Sustainability Coordinator</option>
                  <option className="text-ink">Other</option>
                </select>
                <select name="experience" value={formData.experience} onChange={handleChange} className={`${darkField} appearance-none`}>
                  <option value="" className="text-ink">Experience</option>
                  <option className="text-ink">Fresher</option>
                  <option className="text-ink">1-2 Years</option>
                  <option className="text-ink">3-5 Years</option>
                  <option className="text-ink">5-10 Years</option>
                  <option className="text-ink">10+ Years</option>
                </select>
              </div>
              <textarea name="message" rows={4} placeholder="Cover note" value={formData.message} onChange={handleChange} className={`${darkField} resize-none`} />
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-champagne text-white px-6 py-3 text-sm font-medium hover:bg-accent2 transition-colors">
                Submit application →
              </button>
            </motion.form>
          </div>
        </section>

        <section id="pillars" className="bg-white border-b border-sand overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16">
            <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                Life at Fabstract
              </h2>
              <p className="max-w-sm text-sm text-stone leading-relaxed">
                Four pillars behind why people stay for years, not seasons. Drag to browse.
              </p>
            </SectionReveal>
          </div>

          <div className="mt-10 pb-14 sm:pb-16 pl-5 sm:pl-8 flex gap-4 overflow-x-auto snap-x snap-mandatory film-scroll">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="card p-6 snap-start shrink-0 w-[75vw] sm:w-[320px]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <p className="font-display text-sm font-bold text-champagne">{pillar.number}</p>
                <h3 className="mt-2 font-display font-semibold text-xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm text-stone leading-relaxed">{pillar.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-taupe">{pillar.stat}</p>
              </motion.div>
            ))}
            <div className="shrink-0 w-px sm:w-8" aria-hidden />
          </div>
        </section>

        <section className="bg-[var(--offwhite)] border-b border-sand">
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
                  <div className="card p-6 h-full">
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

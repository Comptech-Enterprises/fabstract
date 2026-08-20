"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";

const field =
  "w-full rounded-lg border border-sand bg-white px-3 py-2.5 text-sm text-stone placeholder:text-taupe focus:outline-none focus:border-ink";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Fabstract! I'd like to apply for a position.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nExperience: ${formData.experience}\n\n${formData.message}`
    );
    window.open(`https://wa.me/911140524038?text=${text}`, "_blank");
  };

  const pillars = [
    {
      title: "Employer Branding & Work Environment",
      desc: "A progressive, inclusive factory culture where every worker feels valued, respected, and empowered to excel in their craft.",
      stats: "85%+ Retention Rate",
    },
    {
      title: "Skill Development & Advancement",
      desc: "Continuous cross-training in modern sewing technology, pattern-making, quality management, and supervisory skills.",
      stats: "100+ Hours Annual Training",
    },
    {
      title: "Health, Sanitation & Well-being",
      desc: "Clean RO drinking water stations, ergonomic seating, well-ventilated production bays, and female hygiene support.",
      stats: "Zero Safety Violations",
    },
    {
      title: "Team Culture & Factory Environment",
      desc: "Celebrating national festivals, hosting sports tournaments, recognizing top performers, and maintaining high team spirit.",
      stats: "Annual Recognition Events",
    },
  ];

  const benefits = [
    { title: "Living Wages", desc: "25% above government minimum wage with Fairtrade premium distribution" },
    { title: "Health Support", desc: "Free on-site doctor consultations and annual health checkups" },
    { title: "Housing Assistance", desc: "Subsidized housing allowances for factory staff" },
    { title: "Skill Training", desc: "100+ hours annual training in modern garment manufacturing" },
    { title: "Career Growth", desc: "Structured promotion paths into supervisory and leadership roles" },
    { title: "Women Empowerment", desc: "60%+ female workforce with equal pay and maternity support" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Join Our Team"
          title="Build Your Career at Fabstract"
          subtitle="Join a team of 500+ skilled professionals crafting world-class garments for global brands. We invest in people — with fair wages, continuous training, and real career growth."
        />

        <section id="apply" className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-2xl text-ink">Apply now</h2>
            <p className="mt-3 text-sm text-stone leading-relaxed">
              Fill out the form and our HR team will get back to you within 3 business days.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone">
              <li>Equal opportunity employer — no discrimination based on gender, religion, or background</li>
              <li>Walk-in interviews at our Noida factory (Mon–Sat, 10am–4pm)</li>
              <li>Freshers welcome — training for entry-level production roles</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-lg border border-sand bg-white p-6 space-y-4">
            <div>
              <label className="block text-xs text-taupe mb-1">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className={field} />
            </div>
            <div>
              <label className="block text-xs text-taupe mb-1">Phone *</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={field} />
            </div>
            <div>
              <label className="block text-xs text-taupe mb-1">Position *</label>
              <select name="position" required value={formData.position} onChange={handleChange} className={field}>
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
              <label className="block text-xs text-taupe mb-1">Experience</label>
              <select name="experience" value={formData.experience} onChange={handleChange} className={field}>
                <option value="">Select experience</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3-5 Years</option>
                <option>5-10 Years</option>
                <option>10+ Years</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-taupe mb-1">Cover Note</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={field} />
            </div>
            <button type="submit" className="btn-crimson">
              Submit application
            </button>
          </form>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
          <h2 className="font-display font-semibold text-2xl text-ink mb-4">Life at Fabstract</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-sand bg-white p-5">
                <h3 className="font-medium text-ink">{pillar.title}</h3>
                <p className="text-sm text-stone mt-2">{pillar.desc}</p>
                <p className="mt-3 text-xs text-taupe">{pillar.stats}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
          <h2 className="font-display font-semibold text-2xl text-ink mb-4">Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border border-sand bg-white p-5">
                <h4 className="font-medium text-ink">{b.title}</h4>
                <p className="text-sm text-stone mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

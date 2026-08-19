"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { GlassPanel } from "@/components/GlassPanel";
import { SectionReveal } from "@/components/SectionReveal";

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
      <main>
        <PageIntro
          eyebrow="Join Our Team"
          title="Build Your Career at Fabstract"
          subtitle="Join a team of 500+ skilled professionals crafting world-class garments for global brands. We invest in people — with fair wages, continuous training, and real career growth."
        />

        <section id="apply" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <SectionReveal>
                <p className="text-mute text-sm tracking-[0.3em] uppercase mb-4">Apply Now</p>
                <h2 className="font-display text-4xl text-ink font-medium mb-6">
                  Submit Your Application
                </h2>
                <p className="text-mute leading-relaxed mb-8">
                  Interested in joining Fabstract? Fill out the form and our HR team will get back to you within 3 business days.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-mute mt-0.5">✓</span>
                    <p className="text-mute text-sm">Equal opportunity employer — no discrimination based on gender, religion, or background</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-mute mt-0.5">✓</span>
                    <p className="text-mute text-sm">Walk-in interviews available at our Noida factory (Mon–Sat, 10am–4pm)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-mute mt-0.5">✓</span>
                    <p className="text-mute text-sm">Freshers welcome — training provided for entry-level production roles</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <form onSubmit={handleSubmit} className="bg-navy p-8 space-y-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-sky mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:border-sky"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-sky mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:border-sky"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-sky mb-1.5">Position *</label>
                      <select
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:border-sky"
                      >
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
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-sky mb-1.5">Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:border-sky"
                      >
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
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-sky mb-1.5">Cover Note</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-navy border-0 border-b border-white/25 rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:border-sky resize-none"
                      placeholder="Tell us about yourself and why you'd like to join Fabstract..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-crimson w-full text-center mt-4"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="py-24 bg-sky/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">Work Culture</p>
              <h2 className="font-display text-4xl text-navy font-medium mb-6 max-w-2xl">
                Life at Fabstract
              </h2>
              <p className="text-navy/70 max-w-2xl mb-16">
                A modern, safe, and supportive workplace designed for career advancement, worker health, and collective pride in world-class manufacturing.
              </p>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pillars.map((pillar, i) => (
                <SectionReveal key={pillar.title} delay={i * 0.08}>
                  <GlassPanel hover className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-navy font-medium text-lg mb-3">{pillar.title}</h3>
                      <p className="text-navy/70 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-navy/10">
                      <span className="text-xs font-bold text-teal uppercase tracking-wider">
                        {pillar.stats}
                      </span>
                    </div>
                  </GlassPanel>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-mute text-sm tracking-[0.3em] uppercase mb-4">Why Fabstract</p>
              <h2 className="font-display text-4xl text-ink font-medium mb-12">
                Benefits &amp; Perks
              </h2>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <SectionReveal key={b.title} delay={i * 0.06}>
                  <GlassPanel hover className="p-6 h-full">
                    <h4 className="text-ink font-medium mb-2">{b.title}</h4>
                    <p className="text-mute text-sm leading-relaxed">{b.desc}</p>
                  </GlassPanel>
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

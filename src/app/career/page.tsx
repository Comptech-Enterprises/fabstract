"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    const subject = encodeURIComponent(`Career Application: ${formData.position || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nExperience: ${formData.experience}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hr@fabstract.com?subject=${subject}&body=${body}`;
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
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Join Our Team</p>
            <h1 className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl">
              Build Your Career at Fabstract
            </h1>
            <p className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed">
              Join a team of 500+ skilled professionals crafting world-class garments for global brands.
              We invest in people — with fair wages, continuous training, and real career growth.
            </p>
          </div>
        </section>

        {/* Life at Fabstract */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Work Culture</p>
            <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-6 max-w-2xl">
              Life at Fabstract
            </h2>
            <p className="text-smoky-black/60 max-w-2xl mb-16">
              A modern, safe, and supportive workplace designed for career advancement, worker health, and collective pride in world-class manufacturing.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-bone/40 rounded-3xl p-8 border border-bone hover:border-olive-drab/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-smoky-black font-bold text-lg mb-3">{pillar.title}</h3>
                    <p className="text-smoky-black/60 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-smoky-black/5">
                    <span className="text-xs font-bold text-olive-drab uppercase tracking-wider">
                      {pillar.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Why Fabstract</p>
            <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
              Benefits &amp; Perks
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5 hover:border-olive-drab/30 transition-colors">
                  <h4 className="text-smoky-black font-bold mb-2">{b.title}</h4>
                  <p className="text-smoky-black/55 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-24 bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Apply Now</p>
                <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-6">
                  Submit Your Application
                </h2>
                <p className="text-smoky-black/60 leading-relaxed mb-8">
                  Interested in joining Fabstract? Fill out the form and our HR team will get back to you within 3 business days. You can also email us directly at{" "}
                  <a href="mailto:hr@fabstract.com" className="text-olive-drab font-semibold hover:underline">hr@fabstract.com</a>.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-olive-drab mt-0.5">✓</span>
                    <p className="text-smoky-black/70 text-sm">Equal opportunity employer — no discrimination based on gender, religion, or background</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-olive-drab mt-0.5">✓</span>
                    <p className="text-smoky-black/70 text-sm">Walk-in interviews available at our Noida factory (Mon–Sat, 10am–4pm)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-olive-drab mt-0.5">✓</span>
                    <p className="text-smoky-black/70 text-sm">Freshers welcome — training provided for entry-level production roles</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-floral-white rounded-3xl p-8 border border-smoky-black/5 shadow-sm space-y-5">
                <div>
                  <label className="block text-smoky-black text-sm font-semibold mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-smoky-black text-sm font-semibold mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-smoky-black text-sm font-semibold mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-smoky-black text-sm font-semibold mb-1.5">Position *</label>
                    <select
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors"
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
                    <label className="block text-smoky-black text-sm font-semibold mb-1.5">Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors"
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
                  <label className="block text-smoky-black text-sm font-semibold mb-1.5">Cover Note</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bone border border-smoky-black/10 text-smoky-black text-sm focus:outline-none focus:border-olive-drab transition-colors resize-none"
                    placeholder="Tell us about yourself and why you'd like to join Fabstract..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-olive-drab text-floral-white py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-olive-dark transition-colors"
                >
                  SUBMIT APPLICATION
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EASE } from "@/lib/motion";
import { PageScrollLayout } from "@/components/PageScrollLayout";

const CONTACT_TABS = [
  { id: "offices", label: "Our Offices" },
  { id: "enquiry", label: "Send a Message" },
  { id: "location", label: "Location" },
];

const OFFICES = [
  {
    label: "Registered Office",
    address: ["M-169, Greater Kailash - II,", "New Delhi - 110048, India"],
  },
  {
    label: "Manufacturing Facility",
    address: ["C-57, Hosiery Complex, Phase II,", "Noida - 201305, India"],
  },
];

const CONTACTS = [
  { label: "General Enquiries", email: "marketing@fcipl.net" },
  { label: "Managing Director", email: "nitin@fcipl.net" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 sm:pt-40 sm:pb-20 px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="text-sky text-xs tracking-[0.25em] uppercase font-medium">Get in touch</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
            Let&apos;s work together
          </h1>
          <p className="mt-6 text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Whether you&apos;re looking for a manufacturing partner, exploring sustainable sourcing, or have a question — we&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      <PageScrollLayout tabs={CONTACT_TABS} activeIdPrefix="contact">
        {/* Offices + Form */}
        <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Office info */}
            <motion.div
              id="offices"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="scroll-mt-24 flex flex-col justify-between"
            >
            <div>
              <span className="text-teal text-xs tracking-[0.25em] uppercase font-medium">Reach us</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-navy font-semibold mb-4">Our Offices</h2>
              <p className="text-navy/50 text-sm leading-relaxed mb-10 max-w-md">
                Visit us at our registered office in New Delhi or our manufacturing facility in Noida.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {OFFICES.map((office) => (
                  <div key={office.label} className="bg-beige/40 border border-navy/8 rounded-xl p-6">
                    <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-4.5 h-4.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-navy font-bold mb-3">
                      {office.label}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {office.address.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < office.address.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-navy/10">
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-navy font-bold mb-6">Email Us</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {CONTACTS.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy/45 text-[11px] tracking-wide uppercase mb-1">{c.label}</p>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-navy text-sm hover:text-teal transition-colors font-semibold"
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            id="enquiry"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-semibold mb-10">Send a Message</h2>

            {submitted ? (
              <div className="bg-sky/15 rounded-xl p-10 text-center">
                <div className="w-14 h-14 bg-teal/15 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-navy font-medium mb-3">Thank you</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  We&apos;ve received your message and will get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-navy text-white border border-navy rounded-2xl p-8 sm:p-10 shadow-xl">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-semibold block mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-semibold block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky/30 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-semibold block mb-2">
                    Company / Brand
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky/30 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-semibold block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky/30 transition-colors resize-none"
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 bg-sky text-navy px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section id="location" className="scroll-mt-24 bg-beige/30 px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="text-teal text-xs tracking-[0.25em] uppercase font-medium">Find Us</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-navy font-medium mb-8">Our Location</h2>
          <div className="h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-navy/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373.328171050494!2d77.42009967629299!3d28.510651575731526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce964e1798c21%3A0x377f35899acea227!2sFabstract%20Clothing%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1787899092345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Fabstract Clothing India Pvt Ltd"
            />
          </div>
        </motion.div>
      </section>
      </PageScrollLayout>

      <Footer />
    </>
  );
}

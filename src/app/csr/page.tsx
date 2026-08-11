"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CSRPage() {
  const csrAreas = [
    {
      title: "Education & Skilling",
      desc: "Promoting education, vocational skills, and livelihood enhancement — especially for children, women, elderly, and differently abled.",
    },
    {
      title: "Health & Sanitation",
      desc: "Eradicating hunger and malnutrition, promoting preventive healthcare and sanitation, contributing to Swachh Bharat Kosh.",
    },
    {
      title: "Gender Equality",
      desc: "Empowering women, setting up support facilities, and reducing inequalities faced by socially and economically backward groups.",
    },
    {
      title: "Environmental Sustainability",
      desc: "Committed to environmental compliance and sustainable manufacturing practices across all operations.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero / Intro */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4"
            >
              Corporate Social Responsibility
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl"
            >
              Operating Responsibly, Always
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed"
            >
              Our CSR policy, developed under Section 135 of the Companies Act 2013,
              reflects our commitment to integrity, trust, and ethical business
              practices aligned with ETI and ILO conventions.
            </motion.p>
          </div>
        </section>

        {/* CSR Focus Areas */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Focus Areas</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
                Where We Make a Difference
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {csrAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="bg-bone/40 p-8 rounded-2xl"
                >
                  <h3 className="text-olive-dark font-semibold mb-3">{area.title}</h3>
                  <p className="text-smoky-black/60 text-sm leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Initiatives in Action</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-16">
                Stories from the Ground
              </h2>
            </motion.div>

            {/* Van Se Hum */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="inline-block bg-olive-drab/10 text-olive-drab text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  Green Initiative
                </span>
                <h3 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-2">
                  Sustainability — <span className="text-olive-drab">वन से हम</span>
                </h3>
                <p className="text-smoky-black/40 text-sm italic mb-6">"We exist because of forests"</p>
                <div className="space-y-4 text-smoky-black/65 leading-relaxed">
                  <p>
                    Van Se Hum is a project very close to our hearts. With temperatures soaring above 53°C, our Sustainability Head Mrs. Abha Batra felt a renewed urgency to act.
                  </p>
                  <p>
                    We&apos;ve embraced the <strong className="text-smoky-black font-semibold">Miyawaki method</strong> — native trees planted in close proximity, competing for sunlight, growing rapidly into a dense, self-sustaining forest within just two years.
                  </p>
                  <p>
                    All expenses for this project are sponsored by Fabstract Clothing India. We are committed to launching many more such initiatives every month to combat global warming and severe pollution in Delhi/NCR.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-full max-w-xs aspect-[3/4] rounded-2xl bg-bone border border-smoky-black/5 flex flex-col items-center justify-center gap-3 shadow-sm">
                  <svg className="w-12 h-12 text-olive-drab/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="text-smoky-black/30 text-xs text-center px-6">Photo coming soon</p>
                </div>
                <div className="text-center">
                  <p className="text-smoky-black font-semibold text-sm">Sustainability Head</p>
                  <p className="text-smoky-black/50 text-sm">Mrs. Abha Batra</p>
                </div>
              </motion.div>
            </div>

            {/* Our People */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="order-2 lg:order-1"
              >
                <div className="w-full aspect-[4/3] rounded-2xl bg-bone border border-smoky-black/5 flex flex-col items-center justify-center gap-3 shadow-sm">
                  <svg className="w-12 h-12 text-olive-drab/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="text-smoky-black/30 text-xs text-center px-6">Team photo coming soon</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block bg-olive-drab/10 text-olive-drab text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  Our People
                </span>
                <h3 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-6">
                  Goals for the Future
                </h3>
                <p className="text-smoky-black/65 leading-relaxed mb-6">
                  Our future goals are focused on building stronger, long-term partnerships and sustainable growth — for our workers, our planet, and our partners.
                </p>
                <ul className="space-y-4">
                  {[
                    "Establish consistent business throughout the year, prioritizing reliable, recurring orders over occasional ones.",
                    "Strengthen relationships with core customers, enabling better support, planning, and mutual growth.",
                    "Collaborate strategically on product development, quality improvements, and innovations that add value for all partners.",
                  ].map((goal, i) => (
                    <li key={i} className="flex items-start gap-3 text-smoky-black/65 text-sm leading-relaxed">
                      <span className="text-olive-drab font-bold mt-0.5">✓</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

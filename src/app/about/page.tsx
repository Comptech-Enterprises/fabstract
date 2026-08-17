"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

const TEAM = [
  {
    name: "Kavya Mehra",
    role: "Marketing Manager",
    bio: "Builds Fabstract’s brand story for global buyers — lookbooks, trade shows, and seasonal campaigns for knit and woven lines.",
  },
  {
    name: "Arjun Malhotra",
    role: "Production Manager",
    bio: "Runs the Noida floor from cutting to packing, keeping bulk programmes on the 60–90 day lead time buyers expect.",
  },
  {
    name: "Priya Sethi",
    role: "Merchandising Manager",
    bio: "Owns T&A calendars, tech packs, and buyer sampling so each order moves cleanly from proto to shipment.",
  },
  {
    name: "Rohan Kapoor",
    role: "Quality Control Manager",
    bio: "Leads five-stage garment inspection, fabric tests, and AQL checks before cartons leave the factory.",
  },
];

function PhotoPlaceholder() {
  return (
    <div className="aspect-[4/5] rounded-xl bg-bone flex items-center justify-center">
      <svg
        className="w-16 h-16 text-olive-drab/35"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-24 min-h-screen bg-bone">
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              className="text-olive-drab text-xs tracking-[0.35em] uppercase mb-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              About
            </motion.p>
            <motion.h1
              className="text-smoky-black text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              Management Team
            </motion.h1>

            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
              {TEAM.map((person, i) => (
                <motion.article
                  key={person.name}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl bg-floral-white border border-smoky-black/10 p-3 flex flex-col shadow-sm"
                >
                  <PhotoPlaceholder />
                  <div className="px-2 pt-4 pb-3 text-center">
                    <p className="text-olive-drab text-[10px] font-bold tracking-[0.16em] uppercase mb-1.5">
                      {person.role}
                    </p>
                    <h2 className="text-smoky-black text-lg font-bold mb-2">
                      {person.name}
                    </h2>
                    <p className="text-smoky-black/60 text-xs leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

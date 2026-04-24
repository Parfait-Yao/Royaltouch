"use client"

import { motion } from "framer-motion"

const partners = ["VINCI", "BOUYGUES", "EIFFAGE", "LAFARGE", "SAINT-GOBAIN", "NEXITY"]

export function PartnersSection() {
  return (
    <section className="py-12 border-y border-zinc-200/60 bg-white px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <p className="text-center text-zinc-400 text-sm font-medium uppercase tracking-widest mb-8">
          Ils collaborent avec nous
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl md:text-3xl font-bold font-space-grotesk text-zinc-300 hover:text-zinc-800 cursor-pointer transition-colors duration-300"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    name: "Moussa Traoré",
    role: "Propriétaire Résidence Onyx",
    text: "La rigueur de Royaltouch sur le chantier de ma villa à Assinie a été exemplaire. Les délais ont été respectés au jour près.",
    rating: 5
  },
  {
    name: "Sarah Koné",
    role: "Directrice, Innov Group",
    text: "Leur maîtrise du BIM et des nouvelles technologies a permis de livrer notre siège social avec une précision incroyable.",
    rating: 5
  }
]

export function ProjectReviews() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">// Retours d'Expérience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-zinc-900 mb-6">Ce que disent nos <span className="text-orange-500">Clients</span></h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-zinc-50 relative"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-orange-500/10" />
              <p className="text-zinc-600 text-lg italic leading-relaxed mb-8 font-light">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  {rev.name[0]}
                </div>
                <div>
                  <p className="font-bold text-zinc-900">{rev.name}</p>
                  <p className="text-zinc-400 text-xs uppercase tracking-wider">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

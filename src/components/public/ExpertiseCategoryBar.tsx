"use client"

import { motion } from "framer-motion"
import { Home, Building, Factory, Hotel, Tent, Plus } from "lucide-react"

const categories = [
  { icon: Home, label: "Résidentiel" },
  { icon: Building, label: "Bureaux" },
  { icon: Factory, label: "Industriel" },
  { icon: Hotel, label: "Hôtellerie" },
  { icon: Tent, label: "Public" },
  { icon: Plus, label: "Autres" },
]

export function ExpertiseCategoryBar() {
  return (
    <section className="py-8 bg-white px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
              className="bg-zinc-50/50 px-5 py-3 rounded-2xl border border-zinc-100 flex items-center gap-3 cursor-pointer group transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors">
                <cat.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-zinc-500 group-hover:text-zinc-900 transition-colors whitespace-nowrap">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


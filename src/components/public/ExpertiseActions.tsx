"use client"

import { motion } from "framer-motion"
import { Plus, Search, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { 
    title: "Conseil & Étude", 
    desc: "Nous analysons la faisabilité de votre projet avec une précision d'ingénieur.",
    icon: Search,
    btn: "Étude de projet"
  },
  { 
    title: "Conception BIM", 
    desc: "Modélisation 3D avancée pour une visualisation parfaite avant construction.",
    icon: Building2,
    btn: "Voir nos plans"
  },
  { 
    title: "Réalisation BTP", 
    desc: "Construction haute performance respectant les délais et les budgets.",
    icon: Plus,
    btn: "Lancer un chantier"
  }
]

export function ExpertiseActions() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {actions.map((act, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-20 h-20 mb-6">
                 <div className="absolute inset-0 bg-orange-50 rounded-2xl group-hover:bg-orange-500 transition-colors duration-500 rotate-3 group-hover:rotate-0" />
                 <div className="relative w-full h-full flex items-center justify-center text-orange-500 group-hover:text-white transition-colors duration-500">
                    <act.icon className="w-10 h-10 stroke-[1.5px]" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 font-space-grotesk">{act.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6 font-light max-w-[220px]">
                {act.desc}
              </p>
              <Button variant="outline" className="border-zinc-100 text-zinc-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg px-6 h-10 text-xs font-bold transition-all">
                {act.btn}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


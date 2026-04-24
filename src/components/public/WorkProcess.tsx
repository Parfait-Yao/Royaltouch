"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Hammer, ShieldCheck } from "lucide-react"

const steps = [
  {
    title: "Consultation",
    icon: Search,
    desc: "Analyse approfondie de vos besoins et étude de faisabilité."
  },
  {
    title: "Conception",
    icon: PenTool,
    desc: "Planification architecturale et design sur-mesure."
  },
  {
    title: "Construction",
    icon: Hammer,
    desc: "Réalisation technique avec les meilleurs standards."
  },
  {
    title: "Livraison",
    icon: ShieldCheck,
    desc: "Contrôle qualité final et remise officielle des clés."
  }
]

export function WorkProcess() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-zinc-50 -z-10 pointer-events-none select-none uppercase">
        PROCESS
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-24">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">// Notre Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-zinc-900">
            Notre Processus de <span className="text-orange-500">Travail</span> Éprouvé
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-12">
          {/* Connection Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-zinc-200 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-zinc-100 shadow-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 z-10 mb-8 relative">
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                  0{i+1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-orange-600 transition-colors">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px] mx-auto font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

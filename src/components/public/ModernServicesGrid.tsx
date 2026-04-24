"use client"

import { motion } from "framer-motion"
import { PencilRuler, Building2, HardHat, Drill, ShieldCheck, Factory } from "lucide-react"

const services = [
  {
    title: "Architecture & Design",
    description: "Conception de plans innovants et modélisation 3D avancée pour une vision claire de votre projet.",
    icon: PencilRuler
  },
  {
    title: "Gros Œuvre",
    description: "Élévation de structures solides avec une précision millimétrée et des matériaux certifiés.",
    icon: Building2
  },
  {
    title: "Génie Civil",
    description: "Infrastructures complexes et aménagements urbains durables pour les collectivités.",
    icon: Factory
  },
  {
    title: "Rénovation",
    description: "Réhabilitation complète et modernisation d'espaces existants avec finition premium.",
    icon: Drill
  },
  {
    title: "Sécurité & Qualité",
    description: "Contrôles rigoureux et respect strict des normes de sécurité internationales.",
    icon: ShieldCheck
  },
  {
    title: "Consulting Technique",
    description: "Accompagnement stratégique et gestion de projets complexes de A à Z.",
    icon: HardHat
  }
]

export function ModernServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.05,
            ease: "easeOut"
          }}
          whileHover={{ y: -5 }}
          className="group relative p-7 md:p-8 rounded-[2rem] bg-white border border-orange-100/50 hover:border-orange-500/30 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 overflow-hidden"
        >
          {/* Subtile hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-space-grotesk text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

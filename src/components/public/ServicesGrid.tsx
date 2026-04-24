"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Info, HardHat, Home, PencilRuler, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

// Dummy data for presentation if no DB connection
const services = [
  {
    title: "Gros Œuvre",
    description: "Fondations, terrassement, et élévation de structures solides pour vos bâtiments.",
    icon: HardHat,
    details: "Expertise en béton armé, maçonnerie générale, et infrastructures de grande envergure avec garantie décennale."
  },
  {
    title: "Rénovation",
    description: "Transformation et réhabilitation d'espaces existants pour un nouveau souffle.",
    icon: Home,
    details: "Rénovation énergétique, mise aux normes, aménagement intérieur et finition premium."
  },
  {
    title: "Architecture",
    description: "Conception de plans, design d'avant-garde et modélisation 3D.",
    icon: PencilRuler,
    details: "Approche sur-mesure, respect de l'environnement (bioclimatique) et esthétique moderne."
  },
  {
    title: "Consulting",
    description: "Accompagnement, suivi de chantier et expertise technique.",
    icon: Briefcase,
    details: "Assistance à Maîtrise d'Ouvrage (AMO), pilotage de projets complexes."
  }
]

export function ServicesGrid() {
  return (
    <>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="h-full"
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/60 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-orange-900/5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Info className="h-5 w-5 text-orange-500" />
                </div>
                <CardHeader className="flex-none relative z-10 pt-8">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-orange-500/30 group-hover:scale-110 group-hover:-rotate-3">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-2xl text-zinc-900 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h3>
                </CardHeader>
                <CardContent className="flex-1 relative z-10 pb-8">
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{service.description}</p>
                </CardContent>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-700 ease-out" />
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white/95 backdrop-blur-xl border-zinc-100 text-zinc-600 shadow-2xl p-5 rounded-2xl relative overflow-hidden" sideOffset={10}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
              <div className="flex justify-between space-x-4 mt-1">
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-zinc-900 flex items-center gap-2">
                    <Info className="h-4 w-4 text-orange-500" />
                    Plus de détails
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {service.details}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </>
  )
}

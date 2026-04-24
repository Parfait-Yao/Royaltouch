"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Award, Leaf } from "lucide-react"

const features = [
  {
    title: "Qualité Premium",
    description: "Nous utilisons les meilleurs matériaux pour garantir la durabilité et l'esthétique de chaque projet.",
    icon: Award,
  },
  {
    title: "Respect des Délais",
    description: "Notre gestion rigoureuse nous permet de livrer vos chantiers en temps et en heure, sans compromis.",
    icon: Clock,
  },
  {
    title: "Sécurité Maximale",
    description: "La sécurité de nos équipes et de vos chantiers est notre priorité absolue au quotidien.",
    icon: ShieldCheck,
  },
  {
    title: "Éco-responsabilité",
    description: "Nous intégrons des pratiques durables et des matériaux respectueux de l'environnement.",
    icon: Leaf,
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#f2f2f2] px-6 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Nos Engagements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-playfair tracking-tight text-zinc-900 mb-6"
          >
            Pourquoi nous choisir ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg"
          >
            Une expertise reconnue et des valeurs fortes pour la réussite de vos projets les plus ambitieux.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-50 group-hover:bg-orange-500 transition-colors duration-300 rounded-2xl flex items-center justify-center mb-6 text-zinc-600 group-hover:text-white shadow-sm">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

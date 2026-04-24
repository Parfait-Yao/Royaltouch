"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Tour Horizon",
    category: "Gros Œuvre & Architecture",
    image: "https://images.unsplash.com/photo-1541888081622-1ce82eb05b76?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Eco-Quartier Les Pins",
    category: "Aménagement Urbain",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Rénovation Siège Social",
    category: "Rénovation Premium",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  }
]

export function PortfolioSection() {
  return (
    <section className="py-20 md:py-32 bg-[#f9f9f9] px-6 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Nos Réalisations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-playfair tracking-tight text-zinc-900"
            >
              Projets Récents
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/projets" className="group flex items-center gap-3 text-zinc-900 font-medium hover:text-orange-600 transition-colors">
              Voir tous nos projets
              <div className="w-10 h-10 rounded-full bg-white shadow-sm group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-orange-400 font-medium text-sm mb-2">{project.category}</p>
                <h3 className="text-white text-2xl font-bold font-playfair">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

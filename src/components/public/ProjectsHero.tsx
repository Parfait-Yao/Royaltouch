"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsHero() {
  return (
    <section className="relative pt-20 pb-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle professional background image with light overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1ce82eb05b76?q=80&w=2070&auto=format&fit=crop')] opacity-[0.03] bg-cover bg-center grayscale" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-orange-500" />
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Expérience & Excellence
            </span>
            <div className="h-[1px] w-8 bg-orange-500" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-zinc-900 leading-[1.1] mb-6">
            Où la Créativité Rencontre <br /> la <span className="text-orange-500">Haute Technologie</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Nous transformons des concepts complexes en structures durables grâce à une maîtrise technique de pointe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 md:h-14 px-8 md:px-10 text-base shadow-xl shadow-orange-500/20 transition-transform hover:scale-105">
              Explorer nos projets
            </Button>
            <Button variant="ghost" className="text-zinc-600 hover:text-orange-600 transition-colors text-base group">
              Voir nos services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

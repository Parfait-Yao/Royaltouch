"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExpertiseHeroModel() {
  return (
    <section className="relative pt-10 pb-16 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk text-zinc-900 leading-tight mb-5">
              L'expertise BTP <br /> pour vos <span className="text-orange-500 italic">projets d'exception</span>
            </h1>
            <p className="text-zinc-500 text-base md:text-lg max-w-md mb-8 font-light leading-relaxed">
              Nous offrons un service complet de conception, construction et rénovation de luxe. Plus de 15 ans à bâtir l'avenir en Côte d'Ivoire.
            </p>

            {/* SEARCH BAR MODEL */}
            <div className="bg-white p-1.5 rounded-2xl md:rounded-full shadow-xl border border-zinc-50 flex flex-col md:flex-row items-center gap-1.5 max-w-xl">
              <div className="flex items-center gap-2 px-3 py-1.5 border-r border-zinc-100 flex-1 w-full md:w-auto">
                <Building2 className="text-orange-500 w-4 h-4" />
                <select className="bg-transparent text-zinc-600 text-xs outline-none w-full">
                  <option>Type de travaux</option>
                  <option>Construction</option>
                  <option>Rénovation</option>
                </select>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border-r border-zinc-100 flex-1 w-full md:w-auto">
                <MapPin className="text-orange-500 w-4 h-4" />
                <input placeholder="Localisation" className="bg-transparent text-zinc-600 text-xs outline-none w-full" />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-10 px-6 text-xs w-full md:w-auto">
                Rechercher
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (Angled building style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[350px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
                className="w-full h-full object-cover" 
                alt="Modern Building" 
              />
            </div>
            {/* Floating stats card style */}
            <div className="absolute top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl hidden xl:block border border-zinc-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Estimation</p>
                  <p className="text-base font-bold text-zinc-900">Calculateur Pro</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


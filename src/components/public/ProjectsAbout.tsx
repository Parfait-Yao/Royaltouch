"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsAbout() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE COLLAGE */}
          <div className="relative grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4">
              <div className="relative h-48 md:h-64 rounded-tl-[3rem] md:rounded-tl-[5rem] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1541888081622-1ce82eb05b76?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="BTP" />
              </div>
              <div className="relative h-36 md:h-48 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="BTP" />
              </div>
            </div>
            <div className="pt-8 md:pt-12 space-y-3 md:space-y-4">
              <div className="relative h-36 md:h-48 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="BTP" />
              </div>
              <div className="relative h-48 md:h-64 rounded-br-[3rem] md:rounded-br-[5rem] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="BTP" />
              </div>
            </div>
            {/* Center Badge - Smaller */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 bg-orange-500 rounded-full border-[6px] border-white shadow-2xl flex items-center justify-center text-white text-center p-2 z-20">
              <p className="text-[8px] md:text-[9px] font-bold leading-tight uppercase tracking-tighter">Depuis<br /><span className="text-xl md:text-2xl">15 ANS</span><br />D'EXCELLENCE</p>
            </div>
          </div>

          {/* STATS & TEXT - More compact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-orange-500" />
              <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] md:text-xs">À propos de nous</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-zinc-900 leading-[1.1] mb-6">
              Transformer vos <span className="text-orange-500">Idées</span> en Réalité Durable
            </h2>
            <p className="text-zinc-500 text-base md:text-lg mb-8 leading-relaxed font-light">
              Notre équipe d'experts dévoués met tout en œuvre pour que chaque projet soit une réussite technique et esthétique.
            </p>
            
            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-zinc-100">
              {[
                { label: "Projets Finis", val: "150+" },
                { label: "Clients Heureux", val: "2000+" },
                { label: "Satisfaction", val: "99%" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-zinc-900 font-space-grotesk">{stat.val}</p>
                  <p className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 border-2 border-orange-500 overflow-hidden relative">
                 <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" fill className="object-cover" alt="CEO" />
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-base md:text-lg italic">Jean-Marc Koffi</p>
                <p className="text-orange-500 text-[10px] md:text-xs font-medium tracking-widest uppercase">Directeur Général</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

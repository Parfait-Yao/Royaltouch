"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProjectCTA() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-zinc-950 p-10 md:p-20 text-center"
      >
        {/* Background decorative image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')] opacity-10 bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-zinc-950/90 to-zinc-950" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Prêt à démarrer ?</span>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white leading-tight mb-8">
            Bâtissons ensemble <br /> <span className="text-orange-500 italic font-playfair">votre héritage</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-10 font-light leading-relaxed">
            Qu'il s'agisse d'une résidence privée ou d'un complexe industriel, nous mettons la même passion et la même rigueur technique à votre service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 px-8 text-sm shadow-xl shadow-orange-500/20 transition-transform hover:scale-105" asChild>
              <Link href="/contact">Démarrer mon projet</Link>
            </Button>
            <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full h-12 px-8 text-sm" asChild>
              <Link href="/services">Voir nos expertises</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Accès à nos experts dédiés",
  "Apprentissage des dernières normes",
  "Optimisation de votre structure"
]

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Image Collage */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Decorative Circles Overlay (Background) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0">
             <svg viewBox="0 0 400 400" className="w-full h-full animate-[spin_60s_linear_infinite] opacity-50">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="10 10"/>
                <circle cx="200" cy="200" r="100" fill="none" stroke="#22c55e" strokeWidth="1"/>
                <circle cx="320" cy="80" r="15" fill="none" stroke="#f97316" strokeWidth="2" />
                <circle cx="330" cy="90" r="15" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 5"/>
             </svg>
          </div>

          {/* Main Large Image (Center Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 bottom-0 md:right-8 lg:-right-8 w-[60%] md:w-[50%] h-[90%] z-20 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-main.png"
              alt="Ingénieur confiant"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Top Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-0 md:left-8 w-[50%] md:w-[45%] h-[45%] z-30 rounded-xl overflow-hidden shadow-xl border-4 border-white"
          >
            <Image
              src="/images/about-sub.png"
              alt="Analyse de plans"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-[10%] bottom-[15%] w-[45%] md:w-[40%] h-[35%] z-40 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-zinc-100"
          >
            <Image
              src="/images/hero.png"
              alt="Bâtiment moderne"
              fill
              className="object-contain p-2"
            />
          </motion.div>

        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold tracking-wide text-sm mb-3 block">
              À propos de Royaltouch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 mb-6 leading-tight">
              L'excellence dans chaque approche <br className="hidden md:block"/> de l'ingénierie
            </h2>
            <p className="text-zinc-500 mb-8 text-base md:text-lg leading-relaxed">
              Nous n'offrons pas seulement des services de construction, mais un environnement riche en expertise technique et en maîtrise de l'art architectural pour propulser vos projets à un niveau supérieur.
            </p>
          </motion.div>

          {/* Features checkmarks */}
          <div className="space-y-4 mb-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="flex items-center space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-zinc-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded shadow-lg shadow-orange-500/20 px-8 h-12 transition-all hover:-translate-y-1" asChild>
              <Link href="/services">En savoir plus</Link>
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

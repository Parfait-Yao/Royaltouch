"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ExoticBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner_files/construction-site-sunset_23-2152006125.jpg"
          alt="Construction site at sunset"
          fill
          className="object-cover"
          priority
        />
        {/* Warm/Exotic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 via-transparent to-black/40" />
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-orange-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
            Vision & Innovation
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white leading-tight mb-8">
            L'excellence sous un nouveau <span className="italic text-orange-300">jour</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Nous transformons vos visions en réalité, avec une précision méticuleuse et une passion pour l'excellence architecturale.
          </p>
          
          <div className="mt-12 flex space-x-6">
            <div className="w-12 h-[1px] bg-white/30 self-center" />
            <span className="text-white/60 text-sm tracking-widest uppercase self-center">
              BTP Concept · 2024
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent md:hidden" />
    </section>
  )
}

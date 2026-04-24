"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-[#f2f2f2] pb-8 pt-2 md:pt-4 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        
        {/* Main Banner Box */}
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[400px] md:h-[480px] lg:h-[520px] flex flex-col items-center justify-center shadow-lg shadow-orange-900/5 text-center px-6 py-12">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banner_files/construction-site-sunset_23-2152006125.jpg"
              alt="Construction site at sunset"
              fill
              className="object-cover"
              priority
            />
            {/* Lighter Warm Overlay & Radial Text Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-orange-950/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/50 via-black/5 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-orange-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-6 shadow-black/50 drop-shadow-md bg-black/20 px-5 py-2 rounded-full border border-orange-400/20 backdrop-blur-md">
                Vision & Innovation
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-normal leading-tight mb-8 tracking-tight drop-shadow-2xl">
                L'excellence sous un nouveau <span className="italic text-orange-300 font-medium">jour</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-gray-100 text-base md:text-lg lg:text-xl mb-12 max-w-2xl leading-relaxed font-light mx-auto drop-shadow-lg"
            >
              Nous transformons vos visions en réalité, avec une précision méticuleuse et une passion pour l'excellence architecturale.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <Button className="bg-orange-500 hover:bg-orange-400 text-white rounded-full h-14 px-10 text-base md:text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/30 border-none relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="relative z-10">Démarrer votre projet</span>
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

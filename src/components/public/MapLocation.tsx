"use client"

import { motion } from "framer-motion"

export function MapLocation() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">// Géolocalisation</span>
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">Où nous <span className="text-orange-500">Trouver</span></h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
        >
          {/* Iframe Google Maps (Abidjan Cocody) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.347569106!2d-3.991206!3d5.340001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebb07a974753%3A0x6b8014526d16!2sCocody%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1713945000000!5m2!1sfr!2sci" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          
          {/* Floating Address Badge */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block">
            <p className="font-bold text-zinc-900">Royaltouch Headquarters</p>
            <p className="text-zinc-500 text-sm">Cocody Danga, Avenue 12</p>
            <p className="text-orange-500 text-xs font-bold mt-2 uppercase tracking-widest">Ouvert maintenant</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

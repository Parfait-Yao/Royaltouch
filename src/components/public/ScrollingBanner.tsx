"use client"

import { motion } from "framer-motion"
import { Asterisk } from "lucide-react"

const items = ["GROS ŒUVRE", "RÉNOVATION", "ARCHITECTURE", "GÉNIE CIVIL", "DESIGN INTÉRIEUR"]

export function ScrollingBanner() {
  return (
    <div className="bg-orange-500 py-6 overflow-hidden flex whitespace-nowrap border-y border-orange-600">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center text-white font-bold text-xl md:text-2xl"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="tracking-widest">{item}</span>
            <Asterisk className="w-6 h-6 text-white/50" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

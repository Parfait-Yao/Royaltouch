"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const info = [
  { icon: MapPin, title: "Notre Bureau", detail: "Cocody Danga, Abidjan", subDetail: "Côte d'Ivoire" },
  { icon: Phone, title: "Téléphone", detail: "+225 07 00 00 00 00", subDetail: "Lun-Ven, 8h-18h" },
  { icon: Mail, title: "Email", detail: "contact@royaltouch.ci", subDetail: "devis@royaltouch.ci" }
]

export function ContactInfoCards() {
  return (
    <div className="grid md:grid-cols-3 gap-10 md:gap-16 lg:gap-24">
      {info.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start gap-5 group cursor-default"
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors duration-500 shadow-xl shadow-black/10">
            <item.icon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-orange-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-900 font-bold font-space-grotesk text-lg leading-tight mb-1">
              {item.detail}
            </p>
            <p className="text-zinc-500 text-sm font-light italic">
              {item.subDetail}
            </p>
            <div className="h-[2px] w-0 bg-orange-500 mt-4 group-hover:w-full transition-all duration-700" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

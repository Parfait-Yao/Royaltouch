"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, HardHat, Home, PencilRuler } from "lucide-react"
import Link from "next/link"

const iconMap = {
  GROS_OEUVRE: HardHat,
  ARCHITECTURE: PencilRuler,
  RENOVATION: Home,
  CONSULTING: Building2
}

export function ModernProjectCard({ title, slug, category, description }: any) {
  const Icon = iconMap[category as keyof typeof iconMap] || Building2

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-7 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold font-space-grotesk text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
        {description}
      </p>
      <Link href={`/projets/${slug}`} className="flex items-center gap-2 text-zinc-900 font-bold uppercase text-[10px] tracking-widest hover:text-orange-500 transition-colors">
        En savoir plus <ArrowRight className="w-3 h-3" />
      </Link>
    </motion.div>
  )
}

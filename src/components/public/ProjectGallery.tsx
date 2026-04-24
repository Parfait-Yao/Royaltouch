"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const gallery = [
  { title: "Résidence Onyx", location: "Cocody, Abidjan", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000" },
  { title: "Pont de la Fraternité", location: "Bouaké", img: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?q=80&w=1000" },
  { title: "Siège Social Innov", location: "Plateau", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" },
  { title: "Villa Azur", location: "Assinie", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" },
  { title: "Complexe Sportif", location: "Yamoussoukro", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000" },
  { title: "Hôtel Horizon", location: "San Pedro", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000" }
]

export function ProjectGallery() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4">Portfolio Visuel</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-zinc-900 mb-6">Galerie de nos <span className="text-orange-500">Chantiers</span></h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-72 md:h-80 rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image src={item.img} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-white font-bold text-xl md:text-2xl font-space-grotesk">{item.title}</h4>
                  <p className="text-white/90 text-sm font-medium tracking-wide">{item.location}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Square, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Gros Œuvre - Résidence Onyx",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600",
    price: "Expertise Premium",
    tags: ["Validé", "Nouveau"],
    location: "Cocody Danga, Abidjan",
    specs: ["Infrastructure", "Béton Armé", "2500 m²"]
  },
  {
    title: "Rénovation Luxe - Villa Azur",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
    price: "Design Intérieur",
    tags: ["Vedette", "Certifié"],
    location: "Assinie Mafia",
    specs: ["Finitions", "Piscine", "800 m²"]
  },
  {
    title: "Bureaux Green - Plateau",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
    price: "Haute Technologie",
    tags: ["Eco-Tech", "BIM"],
    location: "Le Plateau, Abidjan",
    specs: ["Structure", "Verre", "5000 m²"]
  },
  {
    title: "Complexe Industriel - San Pedro",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600",
    price: "Structure Métal",
    tags: ["Logistique", "Sécurisé"],
    location: "Zone Portuaire",
    specs: ["Hangar", "Acier", "1.2 Hectares"]
  }
]

export function ExpertiseFeaturedGrid() {
  return (
    <section className="py-16 bg-[#F8F9FA] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 font-space-grotesk mb-2">Nos Offres Phares</h2>
            <p className="text-zinc-500 text-sm font-light">Découvrez les projets qui définissent notre savoir-faire.</p>
          </div>
          <button className="text-orange-500 text-sm font-bold hover:underline">Voir tout →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-500 group"
            >
              {/* IMAGE PART */}
              <div className="relative h-48 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {item.tags.map((tag, j) => (
                    <Badge key={j} className={`rounded-md font-bold text-[9px] px-2 py-0.5 ${j === 0 ? "bg-emerald-500" : "bg-orange-500"}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all">
                   <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* CONTENT PART */}
              <div className="p-4">
                <p className="text-orange-500 text-[9px] font-bold uppercase tracking-widest mb-1">{item.price}</p>
                <h3 className="text-sm font-bold text-zinc-900 mb-1.5 group-hover:text-orange-600 transition-colors line-clamp-1">{item.title}</h3>
                <p className="text-zinc-400 text-[10px] mb-3 flex items-center gap-1">
                   <Square className="w-2.5 h-2.5" /> {item.location}
                </p>
                
                <div className="pt-3 border-t border-zinc-50 flex justify-between items-center text-zinc-500 text-[9px] font-medium uppercase tracking-tighter">
                  {item.specs.map((spec, k) => (
                    <span key={k}>{spec}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


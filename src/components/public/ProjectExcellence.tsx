"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Ruler, Gem, Microscope } from "lucide-react"

const features = [
  { icon: Gem, title: "Matériaux Nobles", desc: "Nous sélectionnons uniquement des matériaux certifiés ISO." },
  { icon: Ruler, title: "Précision Laser", desc: "Chaque mesure est vérifiée par des outils de pointe." },
  { icon: ShieldCheck, title: "Sécurité Totale", desc: "Zéro accident est notre priorité absolue sur site." },
  { icon: Microscope, title: "Innovation", desc: "Utilisation du BIM pour une modélisation parfaite." }
]

export function ProjectExcellence() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
       <div className="container mx-auto">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 block">// Qualité Sans Compromis</span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-zinc-900 mb-8 leading-tight">
               L'Excellence Technique au <br /> Service de votre <span className="text-orange-500">Patrimoine</span>
             </h2>
             <div className="grid sm:grid-cols-2 gap-8">
               {features.map((f, i) => (
                 <div key={i} className="space-y-3 group">
                   <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                     <f.icon className="w-6 h-6" />
                   </div>
                   <h4 className="text-lg font-bold text-zinc-900">{f.title}</h4>
                   <p className="text-zinc-500 text-sm font-light leading-relaxed">{f.desc}</p>
                 </div>
               ))}
             </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative group"
           >
             <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
               <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ingénierie" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-orange-500 p-8 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                <p className="text-4xl font-black font-space-grotesk italic">100%</p>
                <p className="text-[10px] font-bold tracking-widest uppercase">Normes Respectées</p>
             </div>
           </motion.div>
         </div>
       </div>
    </section>
  )
}

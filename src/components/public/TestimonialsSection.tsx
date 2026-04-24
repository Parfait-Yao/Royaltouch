"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Directeur de Projet, Nexity",
    content: "Un partenariat exceptionnel. L'équipe a su relever tous les défis techniques avec brio et livrer le projet en avance sur le planning établi.",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    role: "Architecte DPLG",
    content: "J'apprécie particulièrement leur souci du détail et leur capacité à s'adapter aux exigences architecturales complexes. Un travail d'orfèvre.",
    rating: 5,
  },
  {
    name: "Laurent Martin",
    role: "Investisseur Privé",
    content: "La transparence, le respect du budget et la qualité des finitions sont au rendez-vous. Je recommande vivement pour des projets premium.",
    rating: 5,
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Avis Clients
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-playfair tracking-tight text-zinc-900 mb-6"
          >
            Ils nous font confiance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg"
          >
            Découvrez les retours d'expérience de nos clients et partenaires privilégiés qui ont fait appel à notre expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] relative shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-orange-500/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold font-space-grotesk text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold font-space-grotesk text-zinc-900">{testimonial.name}</p>
                  <p className="text-orange-500 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

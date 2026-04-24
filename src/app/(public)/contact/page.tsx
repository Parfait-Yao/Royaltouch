"use client"

import { motion } from "framer-motion"
import { ContactInfoCards } from "@/components/public/ContactInfoCards"
import { ContactFormPremium } from "@/components/public/ContactFormPremium"
import { MapLocation } from "@/components/public/MapLocation"
import { MessageSquareText } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      
      {/* 1. HERO SECTION (Light & Clean) */}
      <section className="relative pt-20 pb-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[80%] bg-orange-100/30 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-orange-500" />
              <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                Restons en Contact
              </span>
              <div className="h-[1px] w-8 bg-orange-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playfair tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Donnons vie à <span className="text-orange-500 italic font-playfair">vos projets</span>
            </h1>
            <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Une question technique ? Une demande de devis ? Notre équipe d'experts est à votre écoute pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <ContactInfoCards />
        </div>
      </section>

      {/* 3. FORM SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ContactFormPremium />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-orange-500/20">
                <MessageSquareText className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-8 leading-tight">
                Pourquoi choisir <br /> <span className="text-orange-500">Royaltouch</span> pour vos chantiers ?
              </h2>
              
              <div className="space-y-10">
                {[
                  { q: "Réponse en moins de 24h", a: "Nous traitons chaque demande avec une priorité absolue pour ne pas freiner vos ambitions." },
                  { q: "Accompagnement personnalisé", a: "Un interlocuteur unique vous est dédié dès le premier contact pour un suivi millimétré." },
                  { q: "Expertise certifiée", a: "Nos ingénieurs et architectes valident chaque aspect technique avant toute proposition." }
                ].map((faq, i) => (
                  <div key={i} className="group cursor-help">
                    <h4 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">{faq.q}</h4>
                    <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MAP LOCATION */}
      <MapLocation />

      <div className="h-20 bg-white" />
    </div>
  )
}

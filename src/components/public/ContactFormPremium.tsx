"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactFormPremium() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-2xl shadow-orange-900/5"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-space-grotesk text-zinc-900 mb-4">Envoyez-nous un message</h2>
        <p className="text-zinc-500 font-light italic">Nous vous répondrons sous 24 heures maximum.</p>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Nom Complet</label>
            <Input 
              placeholder="Ex: Jean Koffi" 
              className="h-14 rounded-2xl border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-orange-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Email</label>
            <Input 
              placeholder="jean@email.com" 
              className="h-14 rounded-2xl border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-orange-500 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Sujet</label>
          <Input 
            placeholder="Quel est l'objet de votre demande ?" 
            className="h-14 rounded-2xl border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-orange-500 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Message</label>
          <Textarea 
            placeholder="Dites-nous tout..." 
            className="min-h-[150px] rounded-[2rem] border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-orange-500 transition-all p-6"
          />
        </div>

        <Button className="w-full h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-lg font-bold shadow-xl shadow-orange-500/30 transition-transform active:scale-95">
          Envoyer le message <Send className="ml-3 w-5 h-5" />
        </Button>
      </form>
    </motion.div>
  )
}

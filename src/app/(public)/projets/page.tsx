"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectsHero } from "@/components/public/ProjectsHero"
import { ScrollingBanner } from "@/components/public/ScrollingBanner"
import { ProjectsAbout } from "@/components/public/ProjectsAbout"
import { WorkProcess } from "@/components/public/WorkProcess"
import { ModernProjectCard } from "@/components/public/ModernProjectCard"
import { ProjectGallery } from "@/components/public/ProjectGallery"
import { ProjectExcellence } from "@/components/public/ProjectExcellence"
import { ProjectReviews } from "@/components/public/ProjectReviews"
import { ProjectCTA } from "@/components/public/ProjectCTA"

// Dummy data
const projects = [
  {
    title: "Tour Administrative du Plateau",
    slug: "tour-administrative-plateau",
    category: "GROS_OEUVRE",
    description: "Construction d'une tour de 25 étages au cœur du centre des affaires, alliant modernité et durabilité."
  },
  {
    title: "Villa Écologique Assinie",
    slug: "villa-eco-assinie",
    category: "ARCHITECTURE",
    description: "Conception et construction d'une villa luxueuse utilisant des matériaux biosourcés et une isolation thermique de pointe."
  },
  {
    title: "Rénovation Hôtel Ivoire",
    slug: "renovation-hotel-ivoire",
    category: "RENOVATION",
    description: "Réhabilitation complète d'une aile historique pour intégrer des technologies intelligentes et un design contemporain."
  },
  {
    title: "Complexe Industriel San Pedro",
    slug: "complexe-industriel",
    category: "GROS_OEUVRE",
    description: "Aménagement d'une zone logistique massive avec structures métalliques et hangars de stockage haute résistance."
  },
  {
    title: "Design Intérieur Résidence Cocody",
    slug: "design-cocody",
    category: "ARCHITECTURE",
    description: "Aménagement intérieur premium alliant minimalisme moderne et touches artisanales locales."
  },
  {
    title: "Audit Technique Pont de Gaulle",
    slug: "audit-pont",
    category: "CONSULTING",
    description: "Expertise technique et structurelle complète pour la maintenance préventive de l'ouvrage."
  }
]

export default function ProjetsPage() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      
      {/* 1. HERO (Light & Professional) */}
      <ProjectsHero />

      {/* 2. SCROLLING BANNER */}
      <ScrollingBanner />

      {/* 3. ABOUT & STATS */}
      <ProjectsAbout />

      {/* 4. FEATURED PROJECTS (Services Style Cards) - Compact */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 block">// Nos Projets</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-zinc-900 leading-tight">
                Les Réalisations pour <br className="hidden md:block" /> <span className="text-orange-500">votre Vision</span>
              </h2>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 md:h-14 px-8 md:px-10 transition-all hover:scale-105 shadow-xl shadow-orange-500/20">
              Tous nos projets
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ModernProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECT EXCELLENCE (New Bento/Grid section) */}
      <ProjectExcellence />

      {/* 6. PROJECT GALLERY */}
      <ProjectGallery />

      {/* 7. PROJECT REVIEWS (New Testimonials slider/grid) */}
      <ProjectReviews />

      {/* 8. WORK PROCESS */}
      <WorkProcess />

      {/* 9. PREMIUM CTA (New immersive banner) */}
      <ProjectCTA />

      {/* 10. REPEATED SCROLLING BANNER */}
      <ScrollingBanner />
      
      <div className="h-20 bg-white" />
    </div>
  )
}

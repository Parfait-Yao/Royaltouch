"use client"

import { ExpertiseHeroModel } from "@/components/public/ExpertiseHeroModel"
import { ExpertiseCategoryBar } from "@/components/public/ExpertiseCategoryBar"
import { ExpertiseActions } from "@/components/public/ExpertiseActions"
import { ExpertiseFeaturedGrid } from "@/components/public/ExpertiseFeaturedGrid"
import { ScrollingBanner } from "@/components/public/ScrollingBanner"
import { ProjectCTA } from "@/components/public/ProjectCTA"

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      
      {/* 1. HERO SECTION (Model: Left Text + Filter, Right Image) */}
      <ExpertiseHeroModel />

      {/* 2. CATEGORY BAR (Model: Horizontal Icons) */}
      <ExpertiseCategoryBar />

      {/* 3. ACTION SECTION (Model: 3 Columns with Illustrations) */}
      <ExpertiseActions />

      {/* 4. SCROLLING BANNER (Optional, for brand continuity) */}
      <div className="my-12">
        <ScrollingBanner />
      </div>

      {/* 5. FEATURED SERVICES GRID (Model: Property Card Style) */}
      <ExpertiseFeaturedGrid />

      {/* 6. ADDED TODAY / MORE CONTENT (Model: Grid with filters) */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h2 className="text-2xl font-bold font-space-grotesk text-zinc-900">Expertises Spécifiques</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
              {["Tous", "Rénovation", "Structure", "Électricité"].map((tab, i) => (
                <button 
                  key={i} 
                  className={`px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    i === 0 ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Detailed list style or smaller grid can go here */}
          <div className="p-10 bg-[#F8F9FA] rounded-[2rem] text-center border border-dashed border-zinc-200">
             <p className="text-zinc-400 italic text-base">D'autres expertises techniques seront ajoutées prochainement.</p>
             <p className="text-zinc-400 text-xs mt-2">Nous innovons chaque jour pour vos chantiers.</p>
          </div>
        </div>
      </section>


      {/* 7. PREMIUM CTA */}
      <ProjectCTA />
      
      <div className="h-20 bg-white" />
    </div>
  )
}

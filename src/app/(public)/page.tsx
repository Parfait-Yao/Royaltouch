import { HeroSection } from "@/components/public/HeroSection"
import { AboutSection } from "@/components/public/AboutSection"
import { StatsSection } from "@/components/public/StatsSection"
import { FeaturesSection } from "@/components/public/FeaturesSection"
import { TestimonialsSection } from "@/components/public/TestimonialsSection"
import { PortfolioSection } from "@/components/public/PortfolioSection"
import { PartnersSection } from "@/components/public/PartnersSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ServicesGrid } from "@/components/public/ServicesGrid"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      
      <PartnersSection />
      
      <FeaturesSection />
      
      <AboutSection />
      
      {/* Short Services Preview */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">Nos Domaines d'Intervention</span>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tight text-zinc-900">Nos Expertises</h2>
            <p className="max-w-[700px] text-zinc-500 md:text-lg">
              Des solutions complètes pour tous vos besoins en construction et aménagement.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServicesGrid />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-14 px-10 transition-all hover:scale-105">
              <Link href="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <StatsSection />
      
      <TestimonialsSection />

      {/* Footer CTA is now handled by the Footer component itself */}
    </div>
  )
}

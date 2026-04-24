import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Dummy data based on slug
  const title = params.slug.replace(/-/g, " ").toUpperCase()
  
  return (
    <div className="py-24">
      <div className="container px-4 md:px-6">
        <Link href="/projets" className="inline-flex items-center text-sm text-zinc-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-100 mb-4">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Octobre 2023</span>
                <span className="flex items-center"><Tag className="mr-2 h-4 w-4" /> GROS ŒUVRE</span>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Terminé</Badge>
              </div>
            </div>
            
            <div className="aspect-video relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                Galerie d&apos;images
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none prose-zinc">
              <h2>À propos de ce projet</h2>
              <p>
                La réalisation de {title} a nécessité une expertise de pointe et une coordination parfaite entre nos différentes équipes. Ce projet emblématique souligne notre engagement envers l&apos;excellence et l&apos;innovation dans le secteur de la construction.
              </p>
              <h3>Défis & Solutions</h3>
              <p>
                Nous avons fait face à des délais serrés et des contraintes environnementales importantes. Grâce à nos méthodes agiles et notre matériel de dernière génération, nous avons pu livrer ce chantier avec 2 semaines d&apos;avance sur le planning initial.
              </p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-zinc-950/50 border border-zinc-800 rounded-3xl p-6 md:p-8">
              <h3 className="font-space-grotesk font-bold text-xl mb-6">Détails du projet</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Client</p>
                  <p className="font-medium">Ministère de la Construction</p>
                </div>
                <Separator className="bg-zinc-800" />
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Lieu</p>
                  <p className="font-medium">Abidjan, Côte d&apos;Ivoire</p>
                </div>
                <Separator className="bg-zinc-800" />
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Superficie</p>
                  <p className="font-medium">15 000 m²</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-zinc-900 border border-primary/20 rounded-3xl p-6 md:p-8 text-center">
              <h3 className="font-space-grotesk font-bold text-xl mb-4">Intéressé par ce type de projet ?</h3>
              <p className="text-zinc-400 text-sm mb-6">Nos experts sont à votre disposition pour étudier sa faisabilité.</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

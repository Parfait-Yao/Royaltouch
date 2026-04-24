import { TeamCard } from "@/components/public/TeamCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const team = [
  {
    name: "Kouamé Jean",
    role: "Directeur Général",
    bio: "Ingénieur civil avec 15 ans d'expérience dans les grands travaux en Afrique de l'Ouest.",
    imageUrl: ""
  },
  {
    name: "Touré Aminata",
    role: "Architecte Senior",
    bio: "Spécialiste en architecture bioclimatique et design urbain.",
    imageUrl: ""
  },
  {
    name: "Koffi Marc",
    role: "Chef de Chantier",
    bio: "Expert en gestion d'équipes et logistique sur site.",
    imageUrl: ""
  }
]

export default function EquipePage() {
  return (
    <div className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tight text-zinc-100">
            Notre Équipe
          </h1>
          <p className="max-w-[700px] text-zinc-400 md:text-xl">
            Découvrez les hommes et les femmes qui font la force de BTP CONCEPT au quotidien.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk tracking-tight mb-4 text-zinc-100">Rejoignez l&apos;équipe</h2>
          <p className="text-zinc-400 max-w-xl mb-8">
            Nous sommes toujours à la recherche de nouveaux talents passionnés par la construction et l&apos;innovation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8" asChild>
            <Link href="/contact">Candidature Spontanée</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

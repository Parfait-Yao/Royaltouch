import { Building2, Clock, Users, Star } from "lucide-react"

const stats = [
  { 
    icon: Building2, 
    title: "50+ Projets", 
    description: "Réalisés avec succès sur l'ensemble du territoire",
  },
  { 
    icon: Clock, 
    title: "10 Années", 
    description: "D'expertise technique et d'expérience terrain",
  },
  { 
    icon: Users, 
    title: "200+ Clients", 
    description: "Satisfaits de nos services d'accompagnement",
  },
  { 
    icon: Star, 
    title: "15 Experts", 
    description: "Passionnés et dédiés à vos projets de construction",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              
              {/* Cercle Gris avec l'icône */}
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
                <stat.icon className="w-6 h-6 text-zinc-800" strokeWidth={1.5} />
              </div>
              
              {/* Titre Principal (ex: Airport pickup) */}
              <h3 className="text-zinc-900 font-bold text-lg mb-3">
                {stat.title}
              </h3>
              
              {/* Sous-texte Descriptif */}
              <p className="text-zinc-500 text-sm max-w-[220px] leading-relaxed">
                {stat.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

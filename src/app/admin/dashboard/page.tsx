import { KpiCard } from "@/components/admin/KpiCard"
import { StatsCharts } from "@/components/admin/StatsCharts"
import { FolderKanban, FileText, Mail, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Tableau de bord</h1>
        <p className="text-zinc-400">Voici un aperçu de l&apos;activité de BTP CONCEPT.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Projets Totaux"
          value={45}
          description="Depuis le mois dernier"
          icon={FolderKanban}
          trend="+12%"
        />
        <KpiCard
          title="Devis en Attente"
          value={12}
          description="Nécessite votre attention"
          icon={FileText}
        />
        <KpiCard
          title="Messages Non Lus"
          value={5}
          description="Dans la boîte de réception"
          icon={Mail}
        />
        <KpiCard
          title="Membres de l'Équipe"
          value={15}
          description="Actifs"
          icon={Users}
        />
      </div>

      <StatsCharts />
      
      {/* Tables for "Derniers devis" and "Derniers messages" should go here */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <div className="col-span-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="font-semibold text-lg text-zinc-100 mb-4">Derniers devis</h2>
          <div className="flex h-32 items-center justify-center text-zinc-500">
             Les derniers devis s&apos;afficheront ici
          </div>
        </div>
        <div className="col-span-3 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <h2 className="font-semibold text-lg text-zinc-100 mb-4">Messages récents</h2>
          <div className="flex h-32 items-center justify-center text-zinc-500">
            Les messages non lus s&apos;afficheront ici
          </div>
        </div>
      </div>
    </div>
  )
}

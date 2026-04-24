import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function AdminProjetsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Projets</h1>
          <p className="text-zinc-400">Gérez vos réalisations et projets en cours.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <Link href="/admin/projets/nouveau">
            <Plus className="mr-2 h-4 w-4" /> Nouveau projet
          </Link>
        </Button>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-96 flex flex-col items-center justify-center text-zinc-500">
        <p className="mb-4">Aucun projet pour le moment.</p>
        <Button variant="outline" className="border-primary text-primary" asChild>
          <Link href="/admin/projets/nouveau">Ajouter le premier projet</Link>
        </Button>
      </div>
    </div>
  )
}

export default function AdminDevisPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Demandes de Devis</h1>
          <p className="text-zinc-400">Gérez les demandes de devis reçues depuis le site vitrine.</p>
        </div>
      </div>
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-96 flex items-center justify-center text-zinc-500">
        Aucune demande de devis.
      </div>
    </div>
  )
}

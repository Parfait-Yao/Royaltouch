export default function AdminMessagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Messages</h1>
          <p className="text-zinc-400">Consultez les messages de contact.</p>
        </div>
      </div>
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 h-96 flex items-center justify-center text-zinc-500">
        Aucun message.
      </div>
    </div>
  )
}

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Mail,
  Users,
  Briefcase,
  Settings,
  LogOut
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const sidebarNavItems = [
  { title: "Tableau de bord", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Projets", href: "/admin/projets", icon: FolderKanban },
  { title: "Devis", href: "/admin/devis", icon: FileText },
  { title: "Messages", href: "/admin/messages", icon: Mail },
  { title: "Équipe", href: "/admin/equipe", icon: Users },
  { title: "Services", href: "/admin/services", icon: Briefcase },
  { title: "Paramètres", href: "/admin/parametres", icon: Settings },
]

export function AdminSidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2 text-primary font-space-grotesk font-bold text-xl tracking-tight">
          ANTIGRAVITY
        </Link>
      </div>

      <ScrollArea className="flex-1 px-4">
        <nav className="flex flex-col gap-2">
          {sidebarNavItems.map((item, index) => {
            // Note: In real app, we'd use usePathname inside a Client Component.
            // For now, this requires becoming a client component or passing active state.
            return (
              <Button
                key={index}
                variant="ghost"
                className="justify-start hover:bg-zinc-900 hover:text-zinc-100"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.title}
                </Link>
              </Button>
            )
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-zinc-800">
        <form action="/api/auth/signout" method="POST">
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-red-400 hover:bg-red-400/10" type="submit">
            <LogOut className="mr-2 h-5 w-5" />
            Déconnexion
          </Button>
        </form>
      </div>
    </div>
  )
}

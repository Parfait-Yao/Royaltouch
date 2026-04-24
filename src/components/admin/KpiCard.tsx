
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderKanban, FileText, Mail, Users } from "lucide-react"

interface KpiCardProps {
  title: string
  value: string | number
  description: string
  icon: React.ElementType
  trend?: string
}

export function KpiCard({ title, value, description, icon: Icon, trend }: KpiCardProps) {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-zinc-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-zinc-100">{value}</div>
        <p className="text-xs text-zinc-500 mt-1">
          {trend ? (
            <span className="text-primary">{trend} </span>
          ) : null}
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

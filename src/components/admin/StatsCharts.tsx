"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const projectData = [
  { month: "Jan", projects: 4 },
  { month: "Fév", projects: 7 },
  { month: "Mar", projects: 5 },
  { month: "Avr", projects: 9 },
  { month: "Mai", projects: 12 },
  { month: "Juin", projects: 8 },
]

const chartConfig = {
  projects: {
    label: "Projets",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function StatsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
      <Card className="col-span-4 bg-zinc-950 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100">Évolution des projets</CardTitle>
          <CardDescription className="text-zinc-400">Nouveaux projets sur les 6 derniers mois</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <AreaChart data={projectData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="fillProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-projects)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-projects)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="projects" stroke="var(--color-projects)" strokeWidth={2} fillOpacity={1} fill="url(#fillProjects)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card className="col-span-3 bg-zinc-950 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100">Demandes de devis</CardTitle>
          <CardDescription className="text-zinc-400">Volume de demandes par mois</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={projectData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="projects" fill="var(--color-projects)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

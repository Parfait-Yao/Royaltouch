import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  slug: string
  category: string
  status: string
  imageUrl: string
  description: string
}

export function ProjectCard({ title, slug, category, status, imageUrl, description }: ProjectCardProps) {
  return (
    <Link href={`/projets/${slug}`}>
      <Card className="overflow-hidden bg-zinc-950 border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-zinc-900">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
              Aucune image
            </div>
          )}
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge className="bg-primary hover:bg-primary/80">{category}</Badge>
            <Badge variant="secondary" className="bg-zinc-900/80 backdrop-blur text-zinc-300">
              {status}
            </Badge>
          </div>
        </div>
        <CardHeader className="flex-none pt-4 pb-2">
          <h3 className="font-space-grotesk text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-zinc-400 text-sm line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

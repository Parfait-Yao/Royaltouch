import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  bio: string
  imageUrl: string
  linkedinUrl?: string
}

export function TeamCard({ name, role, bio, imageUrl, linkedinUrl }: TeamCardProps) {
  return (
    <Card className="bg-zinc-950/50 border-zinc-800 text-center overflow-hidden hover:border-primary/50 transition-colors group">
      <CardContent className="pt-8 pb-6 flex flex-col items-center">
        <Avatar className="h-32 w-32 mb-6 border-2 border-zinc-800 group-hover:border-primary transition-colors">
          <AvatarImage src={imageUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-zinc-900 text-3xl text-zinc-500">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-space-grotesk font-bold text-xl text-zinc-100">{name}</h3>
        <p className="text-secondary font-medium text-sm mb-4">{role}</p>
        <p className="text-zinc-400 text-sm mb-6 max-w-[250px]">{bio}</p>
        
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#0A66C2] transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">Profil LinkedIn de {name}</span>
          </a>
        )}
      </CardContent>
    </Card>
  )
}

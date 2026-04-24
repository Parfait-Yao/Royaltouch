"use client"

import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2 } from "lucide-react"

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-space-grotesk font-bold tracking-tight text-zinc-100">
            ANTIGRAVITY Admin
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Connectez-vous pour accéder à votre tableau de bord
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-200">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="admin@btpconcept.ci"
                required
                className="bg-zinc-950 border-zinc-800 text-zinc-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-200">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                name="password"
                required
                className="bg-zinc-950 border-zinc-800 text-zinc-100"
              />
            </div>
            
            {errorMessage && (
              <div className="flex items-center gap-x-2 text-sm text-red-500 bg-red-500/10 p-3 rounded-md">
                <AlertCircle className="h-4 w-4" />
                <p>{errorMessage}</p>
              </div>
            )}
            
            <LoginButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connexion...
        </>
      ) : (
        "Se connecter"
      )}
    </Button>
  )
}

"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { authenticate } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, Lock, Mail, ArrowRight, HardHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined)

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_480px]">

      {/* ── Panneau gauche : Branding immersif ─────────────────── */}
      <div className="hidden lg:flex relative flex-col justify-between overflow-hidden bg-zinc-900">

        {/* Image de fond */}
        <Image
          src="/images/hero.png"
          alt="BTP Concept Chantier"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Overlay gradient chaud orange / noir */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/80 via-zinc-900/70 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        {/* Halos décoratifs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between h-full p-12 lg:p-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <HardHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-playfair text-white text-xl font-bold italic tracking-tight leading-none">
                BTP Concept
              </p>
              <p className="text-orange-400 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">
                Royaltouch
              </p>
            </div>
          </div>

          {/* Texte hero */}
          <div className="space-y-8 max-w-lg">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-[10px]">
                Espace Administration
              </span>
            </div>

            <h1 className="font-playfair text-5xl xl:text-6xl font-bold text-white leading-[1.1] italic">
              Bâtissons
              <span className="block text-orange-400">l&apos;avenir</span>
              ensemble.
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed">
              Gérez vos projets, vos équipes et vos ressources depuis un espace centralisé, simple et efficace.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <p className="text-3xl font-bold text-white font-space-grotesk">150+</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Projets</p>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white font-space-grotesk">12 ans</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Expérience</p>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white font-space-grotesk">98%</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 text-[10px] text-zinc-600 uppercase tracking-widest">
            <span>© 2024 BTP Concept</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Abidjan, Côte d&apos;Ivoire</span>
          </div>
        </div>
      </div>

      {/* ── Panneau droit : Formulaire ──────────────────────────── */}
      <div className="flex flex-col items-center justify-center bg-[#f2f2f2] px-8 py-12 md:px-12">

        {/* Logo mobile uniquement */}
        <div className="lg:hidden mb-10 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-md shadow-orange-500/30">
            <HardHat className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-playfair text-zinc-900 text-lg font-bold italic">BTP Concept</p>
            <p className="text-orange-500 text-[9px] font-semibold tracking-[0.2em] uppercase">Royaltouch</p>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-8">

          {/* En-tête */}
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="h-px w-6 bg-orange-500" />
              <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-[10px]">
                Connexion
              </span>
            </div>
            <h2 className="font-playfair text-4xl font-bold text-zinc-900 italic leading-tight">
              Bienvenue.
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Entrez vos identifiants pour accéder à votre tableau de bord.
            </p>
          </div>

          {/* Formulaire */}
          <form action={dispatch} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-700 font-semibold text-sm">
                Adresse email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@btpconcept.ci"
                  required
                  className="h-13 pl-11 bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 rounded-2xl focus-visible:ring-orange-500 focus-visible:border-orange-400 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-zinc-700 font-semibold text-sm">
                  Mot de passe
                </Label>
                <button
                  type="button"
                  className="text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Oublié ?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="h-13 pl-11 bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 rounded-2xl focus-visible:ring-orange-500 focus-visible:border-orange-400 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Erreur */}
            {errorMessage && (
              <div className="flex items-center gap-x-2.5 text-sm text-red-600 bg-red-50 border border-red-100 p-4 rounded-2xl">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Bouton */}
            <LoginButton />
          </form>

          {/* Séparateur */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#f2f2f2] px-4 text-[10px] text-zinc-400 uppercase tracking-wider">
                Accès sécurisé
              </span>
            </div>
          </div>

          {/* Note bas de page */}
          <p className="text-center text-xs text-zinc-400 leading-relaxed">
            Espace réservé aux administrateurs de{" "}
            <span className="font-semibold text-zinc-600">BTP Concept</span>.
            <br />
            <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium transition-colors underline underline-offset-2">
              ← Retour au site
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      className="w-full h-13 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group border-none"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Connexion...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          Se connecter
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </Button>
  )
}

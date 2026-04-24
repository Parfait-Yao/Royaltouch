"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const routes = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Expertises" },
  { href: "/projets", label: "Réalisations" },
]


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center px-4 py-2 md:py-3 bg-[#f2f2f2]/80 backdrop-blur-md">
      <div className="w-full max-w-6xl">
        <div className="flex h-14 md:h-16 items-center justify-between bg-white/90 backdrop-blur-lg rounded-full shadow-xl shadow-black/5 px-6 md:px-8 border border-white/20">
          
          <Link href="/" className="flex items-center shrink-0">
            <span className="font-playfair font-bold text-xl md:text-2xl tracking-tight text-zinc-900 italic">
              Royaltouch
            </span>
          </Link>

           {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-10 text-[12px] md:text-xs font-semibold tracking-widest uppercase">
            {routes.map((route) => (
              <Link 
                key={route.href} 
                href={route.href}
                className="text-zinc-500 hover:text-orange-500 transition-colors duration-200"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Button variant="default" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6 md:px-8 h-9 md:h-10 text-[10px] md:text-xs font-medium transition-all hover:scale-105" asChild>
              <Link href="/contact">Devis Rapide</Link>
            </Button>
          </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-zinc-100">
              <div className="flex flex-col space-y-4 pt-10">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-zinc-100">
                  <Button className="w-full bg-black hover:bg-neutral-800 text-white transition-colors" asChild>
                    <Link href="/contact">Devis Rapide</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-50 text-zinc-600 pt-32 pb-8 md:pb-12 relative mt-64 border-t-4 border-orange-500">
      
      {/* CTA Banner with Worker Image */}
      <div className="container max-w-[80rem] mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] lg:w-[90%] z-20">
        <div className="bg-[#f4f4f4] rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between border-b-4 border-orange-500 px-6 py-8 md:py-8 md:px-12 relative overflow-visible">
          
          <div className="w-full md:w-3/5 z-10 text-center md:text-left">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              Besoin d'un expert ?
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-zinc-900 mb-4 leading-tight">
              Construisons ensemble votre projet idéal
            </h3>
            <p className="text-zinc-600 mb-6 max-w-sm mx-auto md:mx-0 text-sm md:text-base">
              Notre équipe d'experts BTP est à votre écoute pour vous accompagner avec précision et passion.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-10 md:h-12 text-sm md:text-base font-semibold shadow-lg shadow-orange-500/30 transition-all hover:scale-105" asChild>
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>

          <div className="hidden md:block absolute right-4 lg:right-16 bottom-0 w-[35%] h-[100%] md:h-[105%] pointer-events-none">
             <Image
               src="/images/worker.png"
               alt="Expert BTP"
               fill
               className="object-contain object-bottom mix-blend-multiply"
             />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden mt-4 w-full h-[150px] relative pointer-events-none">
             <Image
               src="/images/worker.png"
               alt="Expert BTP"
               fill
               className="object-contain object-bottom mix-blend-multiply"
             />
          </div>
        </div>
      </div>

      <div className="container grid gap-8 md:grid-cols-4 lg:grid-cols-5 mx-auto mt-32 md:mt-48 px-6 md:px-12">

        <div className="lg:col-span-2">
          <Link href="/" className="inline-block font-playfair text-3xl font-bold tracking-tight text-zinc-900 mb-6 italic">
            Royaltouch
          </Link>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
            Expert en construction, design et ingénierie. L'excellence pour bâtir l'avenir de vos espaces professionnels et résidentiels.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-zinc-900 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link href="/services" className="hover:text-orange-500 transition-colors">Home Design</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition-colors">Office Design</Link></li>
            <li><Link href="/projets" className="hover:text-orange-500 transition-colors">Nos Réalisations</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-semibold mb-6 text-zinc-900 uppercase tracking-wider text-sm">Légal</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Nous Contacter</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Mentions légales</Link></li>
            <li><Link href="/login" className="hover:text-orange-500 transition-colors">Espace Admin</Link></li>
          </ul>
        </div>
        
        <div>
           <h4 className="font-semibold mb-6 text-zinc-900 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li>Cocody, Abidjan</li>
            <li>Côte d'Ivoire</li>
            <li className="text-orange-600 font-medium">+225 00 00 00 00 00</li>
            <li className="text-orange-600 font-medium">contact@royaltouch.ci</li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-zinc-200 mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
        <p>© {currentYear} Royaltouch. Tous droits réservés.</p>
        <p>By ANTIGRAVITY Team</p>
      </div>
    </footer>
  )
}

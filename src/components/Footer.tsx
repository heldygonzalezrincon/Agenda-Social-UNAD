import Link from "next/link"
import { Cpu, Mail, Globe, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg">
                <Cpu className="w-8 h-8 text-background" />
              </div>
              <span className="font-headline font-extrabold text-2xl tracking-tighter uppercase italic">
                Futuro <span className="text-primary">Académico</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md font-body leading-relaxed">
              Explorando las intersecciones entre la inteligencia artificial, la educación y el futuro del trabajo para la próxima generación de profesionales.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/medio_universitario?igsh=MWR3a2puY2RkZ3J6Nw%3D%3D" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Instagram className="w-5 h-5 group-hover:text-background" />
              </Link>
              <Link href="https://x.com/futuroacadd" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Twitter className="w-5 h-5 group-hover:text-background" />
              </Link>
              <Link href="https://www.linkedin.com/in/futuro-académico-b64826411" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Linkedin className="w-5 h-5 group-hover:text-background" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-widest text-primary text-sm">Secciones</h4>
            <ul className="space-y-3 font-body">
              <li><Link href="#reportajes" className="text-muted-foreground hover:text-white transition-colors">Reportajes</Link></li>
              <li><Link href="#cronicas" className="text-muted-foreground hover:text-white transition-colors">Crónicas</Link></li>
              <li><Link href="#freepress" className="text-muted-foreground hover:text-white transition-colors">Free Press</Link></li>
              <li><Link href="#sobre-el-medio" className="text-muted-foreground hover:text-white transition-colors">Sobre el medio</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-widest text-primary text-sm">Créditos</h4>
            <div className="space-y-4 text-muted-foreground font-body">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm">Universidad Nacional Abierta y a Distancia – UNAD</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpenIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm">Curso: Redacción Periodística</p>
              </div>
              <div className="flex items-start gap-3">
                <UserIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm">Autora: Heldy Daniela González Rincón</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Futuro Académico © 2026. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Ética Periodística</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
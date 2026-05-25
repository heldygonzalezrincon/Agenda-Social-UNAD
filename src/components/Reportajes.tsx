import Image from "next/image"
import { Calendar, User, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const reportajes = [
  {
    id: "report-1",
    title: "La educación frente a la inteligencia artificial: ¿Están en riesgo las carreras del futuro?",
    date: "12 Mar, 2026",
    author: "Daniela González",
    lead: "Un análisis profundo sobre cómo los algoritmos están redefiniendo el mercado laboral y qué papel juegan las instituciones académicas en esta transición crítica.",
    imageId: "report-1"
  },
  {
    id: "report-2",
    title: "Profesionales del futuro: las habilidades que las universidades aún no enseñan",
    date: "08 Mar, 2026",
    author: "Daniela González",
    lead: "Más allá del código: por qué el pensamiento crítico, la ética digital y la adaptabilidad son hoy más valiosas que cualquier título técnico tradicional.",
    imageId: "report-2"
  }
]

export function Reportajes() {
  return (
    <section id="reportajes" className="py-24 container mx-auto px-6 lg:px-12">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">Reportajes</h2>
        <div className="h-1 flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {reportajes.map((report) => {
          const img = PlaceHolderImages.find(i => i.id === report.imageId)
          return (
            <article key={report.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8">
                <Image
                  src={report.id === "report-1" ? "/imagen1.jpeg" : "/imagen2.jpeg"}
                  alt={report.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={img?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-primary font-bold flex items-center gap-2">
                    Continuar leyendo <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {report.date}</span>
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {report.author}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-headline font-extrabold group-hover:text-primary transition-colors leading-tight">
                  {report.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed font-body line-clamp-3">
                  {report.lead}
                </p>

                <Button variant="link" className="px-0 text-primary font-bold text-lg group-hover:translate-x-2 transition-transform h-auto">
                  Leer más <ArrowUpRight className="ml-1 w-5 h-5" />
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
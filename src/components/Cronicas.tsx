import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const cronicas = [
  {
    title: "Entre algoritmos y cuadernos: aprender en una educación que no avanza al mismo ritmo del mundo",
    subtitle: "Una reflexión sobre la brecha digital",
    imageId: "chronicle-1"
  },
  {
    title: "Una clase tradicional en tiempos de inteligencia artificial",
    subtitle: "Crónica de un choque generacional",
    imageId: "chronicle-2"
  }
]

export function Cronicas() {
  return (
    <section id="cronicas" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-black italic">Crónicas Visuales</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-black">Relatos del Presente</h3>
        </div>

        <div className="space-y-24">
          {cronicas.map((cronica, idx) => {
            const img = PlaceHolderImages.find(i => i.id === cronica.imageId)
            return (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="w-full lg:w-3/5 relative aspect-video overflow-hidden rounded-xl shadow-2xl shadow-primary/10">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={cronica.title}
                    fill
                    className="object-cover"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="w-full lg:w-2/5 space-y-6">
                  <div className="w-12 h-1 bg-primary" />
                  <h4 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                    {cronica.title}
                  </h4>
                  <p className="text-xl text-muted-foreground italic font-body">
                    {cronica.subtitle}
                  </p>
                  <button className="group flex items-center gap-3 text-lg font-bold tracking-tighter uppercase border-b-2 border-transparent hover:border-primary transition-all pb-1">
                    Sumergirse en la historia
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      →
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
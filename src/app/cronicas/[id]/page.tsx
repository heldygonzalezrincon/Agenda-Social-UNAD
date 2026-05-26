import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const cronicas = [
  {
    id: "chronicle-1",
    title: "Entre algoritmos y cuadernos: aprender en una educación que no avanza al mismo ritmo del mundo",
    subtitle: "La inteligencia artificial ya forma parte de la vida cotidiana de miles de estudiantes, aunque muchas aulas continúan funcionando bajo dinámicas tradicionales.",
    content: "El sonido de los teclados se mezcla con el paso lento de las hojas de un cuaderno. En un salón universitario, algunos estudiantes toman apuntes mientras otros observan discretamente la pantalla de sus computadores. Afuera del aula, el mundo avanza impulsado por herramientas digitales capaces de responder preguntas, organizar información y generar contenido en cuestión de segundos. \n\n Dentro de la clase, la sensación parece diferente. \n\n Mientras la inteligencia artificial transforma la manera en que circula el conocimiento, muchas instituciones educativas todavía intentan adaptarse a cambios que avanzan más rápido que sus propios modelos académicos. Para algunos estudiantes, esta diferencia genera incertidumbre frente al futuro profesional y dudas sobre si la educación realmente está evolucionando al mismo ritmo que la sociedad contemporánea. \n\n La brecha digital no solo se relaciona con el acceso a la tecnología. También refleja diferencias en la manera en que las personas aprenden, interpretan la información y enfrentan los desafíos del presente. Algunos jóvenes utilizan herramientas digitales para complementar sus procesos académicos, mientras otros continúan dependiendo exclusivamente de metodologías tradicionales. \n\n “Sentimos que el mundo cambia más rápido que las clases”, comenta un estudiante después de terminar su jornada universitaria. \n\n La inteligencia artificial ya forma parte de la vida cotidiana. Sin embargo, el verdadero desafío continúa siendo humano: comprender cómo utilizar la tecnología sin perder la capacidad de reflexionar críticamente sobre ella.",
    image: "/imagen3.jpeg"
  },
  {
    id: "chronicle-2",
    title: "Una clase tradicional en tiempos de inteligencia artificial",
    subtitle: "Las nuevas tecnologías están transformando el aprendizaje mientras muchas aulas aún funcionan bajo dinámicas tradicionales.",
    content: "El reloj marca las ocho de la mañana y el salón permanece en silencio. El profesor escribe lentamente en el tablero mientras algunos estudiantes observan sus computadores encendidos. Afuera del aula, el mundo avanza impulsado por tecnologías capaces de responder preguntas en segundos. \n\n Dentro del salón, la sensación es diferente. \n\n Mientras las herramientas digitales transforman la manera en que circula el conocimiento, muchas clases continúan desarrollándose bajo metodologías tradicionales que poco dialogan con las nuevas dinámicas tecnológicas. \n\n Para algunos estudiantes, esta desconexión genera incertidumbre frente al futuro profesional y dudas sobre si la educación realmente está avanzando al mismo ritmo que la sociedad contemporánea. \n\n La inteligencia artificial ya forma parte de la vida cotidiana de miles de jóvenes. Sin embargo, muchas instituciones educativas aún enfrentan dificultades para integrar estas herramientas de manera crítica y responsable dentro de sus procesos formativos. \n\n Más allá de la tecnología, el verdadero desafío parece estar en lograr que la educación evolucione al mismo ritmo que el mundo contemporáneo.",
    image: "/imagen4.jpeg"
  }
]

export default function CronicaPage({ params }: { params: { id: string } }) {
  const cronica = cronicas.find(c => c.id === params.id)

  if (!cronica) return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Crónica no encontrada</h1>
    </div>
  )

  return (
    <article className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 hover:text-primary transition-colors">
          <Link href="/#cronicas" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Volver a crónicas
          </Link>
        </Button>

        <header className="space-y-6 mb-12">
          
          <h1 className="text-4xl md:text-6xl font-headline font-black leading-tight tracking-tighter uppercase italic">
            {cronica.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed border-l-4 border-primary pl-6 py-2 italic">
            {cronica.subtitle}
          </p>
        </header>

        <div className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-2xl">
          <Image
            src={cronica.image}
            alt={cronica.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-xl prose-invert max-w-none font-body text-foreground/90 leading-loose space-y-8">
          {cronica.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

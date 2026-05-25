import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos de los reportajes (puedes mover esto a un archivo JSON centralizado después)
const reportajes = [
  {
    id: "report-1",
    title: "La educación frente a la inteligencia artificial: ¿Están en riesgo las carreras del futuro?",
    date: "12 Mar, 2026",
    author: "Daniela González",
    lead: "La transformación tecnológica está modificando la manera en que los estudiantes aprenden y cómo las universidades responden a las nuevas exigencias laborales.",
    content: "La inteligencia artificial se ha convertido en una de las transformaciones tecnológicas más influyentes de los últimos años. Su presencia en plataformas digitales, aplicaciones educativas y herramientas automatizadas está cambiando la manera en que las personas estudian, trabajan y acceden al conocimiento. \n\n Dentro de las universidades, esta realidad comienza a generar preguntas importantes sobre el futuro de las profesiones y el papel de las instituciones educativas frente a un entorno cada vez más digitalizado. Mientras algunas carreras incorporan herramientas tecnológicas dentro de sus procesos académicos, otras aún mantienen metodologías tradicionales que parecen avanzar más lentamente que el desarrollo tecnológico global. \n\n Para muchos estudiantes, la inteligencia artificial representa una oportunidad para agilizar procesos, fortalecer el aprendizaje y acceder a información de manera inmediata. Sin embargo, también existe preocupación sobre cómo estas herramientas podrían transformar el mercado laboral y modificar las competencias necesarias para el futuro profesional. \n\n Expertos en educación consideran que el verdadero desafío no consiste únicamente en incorporar tecnología dentro de las aulas, sino en enseñar a utilizarla de manera ética, crítica y responsable. La educación contemporánea enfrenta el reto de formar profesionales capaces de adaptarse a un mundo donde la automatización y la inteligencia artificial tendrán cada vez más influencia. \n\n Más allá de la innovación tecnológica, la discusión también involucra aspectos sociales, económicos y humanos. La transformación digital evidencia desigualdades de acceso, diferencias en la calidad educativa y dificultades institucionales para responder a las nuevas dinámicas del conocimiento. \n\n La inteligencia artificial ya forma parte de la vida cotidiana de millones de estudiantes. El desafío ahora consiste en determinar si las universidades están preparadas para evolucionar al mismo ritmo que el futuro que ya comenzó.",
    image: "/imagen1.jpeg"
  },
  {
    id: "report-2",
    title: "Profesionales del futuro: las habilidades que las universidades aún no enseñan",
    date: "08 Mar, 2026",
    author: "Daniela González",
    lead: "El mercado laboral exige nuevas competencias digitales, pero muchos modelos educativos continúan funcionando bajo metodologías tradicionales.",
    content: "La inteligencia artificial y la automatización están transformando rápidamente las dinámicas laborales. Actualmente, las empresas no solo buscan profesionales con títulos universitarios, sino personas capaces de adaptarse a entornos tecnológicos, resolver problemas y desarrollar pensamiento crítico. \n\n Sin embargo, muchas instituciones educativas aún presentan dificultades para actualizar sus modelos académicos frente a estas nuevas exigencias. Mientras el mundo avanza hacia procesos cada vez más digitales, miles de estudiantes continúan recibiendo una formación basada en metodologías tradicionales que no siempre responden a las necesidades actuales. \n\n Esta situación genera preocupación entre expertos y estudiantes, quienes consideran que existe una creciente desconexión entre la educación y el futuro profesional. Para algunos jóvenes, la incertidumbre aumenta al observar cómo nuevas herramientas tecnológicas son capaces de automatizar tareas que anteriormente requerían conocimientos especializados. \n\n La transformación digital también ha cambiado la manera en que las personas aprenden. Plataformas virtuales, asistentes inteligentes y herramientas automatizadas permiten acceder al conocimiento de forma inmediata y personalizada, modificando las dinámicas tradicionales del aula. \n\n Especialistas en educación coinciden en que las universidades enfrentan el desafío de formar profesionales capaces de adaptarse constantemente a los cambios tecnológicos. Más allá de enseñar contenidos técnicos, la educación contemporánea necesita fortalecer habilidades relacionadas con la creatividad, el pensamiento crítico y la ética digital. \n\n La discusión sobre el futuro profesional ya no pertenece únicamente al ámbito tecnológico. También representa una reflexión sobre el papel de la educación dentro de una sociedad que cambia más rápido que muchos de sus propios modelos académicos.",
    image: "/imagen2.jpeg"
  }
]

export default function ReportajePage({ params }: { params: { id: string } }) {
  const report = reportajes.find(r => r.id === params.id)

  if (!report) return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Reportaje no encontrado</h1>
    </div>
  )

  return (
    <article className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 hover:text-primary transition-colors">
          <Link href="/#reportajes" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Volver a reportajes
          </Link>
        </Button>

        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-6 text-sm uppercase tracking-widest text-primary font-bold">
            <span className="flex items-center gap-2 text-primary"><Calendar className="w-4 h-4" /> {report.date}</span>
            <span className="flex items-center gap-2 text-primary"><User className="w-4 h-4" /> {report.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-headline font-black leading-tight tracking-tighter uppercase italic">
            {report.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed border-l-4 border-primary pl-6 py-2 italic">
            {report.lead}
          </p>
        </header>

        <div className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-2xl">
          <Image
            src={report.image}
            alt={report.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-xl prose-invert max-w-none font-body text-foreground/90 leading-loose space-y-8">
          {report.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

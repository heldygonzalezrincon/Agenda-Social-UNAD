import { Target, ShieldCheck, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutData = [
  {
    title: "Objetivo del Medio",
    icon: Target,
    content: "Informar, analizar y generar reflexión sobre el impacto de la inteligencia artificial en la educación y las nuevas dinámicas del mundo profesional, evidenciando los desafíos que enfrentan las instituciones educativas frente a la transformación tecnológica.",
    color: "text-primary"
  },
  {
    title: "Enfoque Ético",
    icon: ShieldCheck,
    content: "Futuro Académico promueve un enfoque periodístico crítico, ético y social, priorizando la responsabilidad informativa, la reflexión ciudadana y el análisis consciente del impacto tecnológico en la sociedad contemporánea.",
    color: "text-accent"
  },
  {
    title: "Público Objetivo",
    icon: Users,
    content: "Estudiantes universitarios, docentes y jóvenes interesados en comprender cómo la inteligencia artificial está transformando la educación, el aprendizaje y el futuro laboral.",
    color: "text-destructive"
  }
]

export function AboutSection() {
  return (
    <section id="sobre-el-medio" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 italic">Sobre el medio</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-black leading-tight">Periodismo universitario con visión de futuro</h3>
          </div>
          <h5 className="text-muted-foreground text-lg leading-relaxed font-body">
            Futuro Académico nace como una propuesta periodística universitaria orientada a analizar críticamente la relación entre inteligencia artificial, educación y transformación digital.
            <br /><br />
            El medio busca informar, generar reflexión y evidenciar cómo las nuevas tecnologías están modificando la manera en que los estudiantes aprenden, se preparan profesionalmente y enfrentan el futuro laboral.
            <br /><br />
            A través de reportajes, crónicas y contenidos digitales, el proyecto promueve una mirada ética y social sobre los desafíos educativos del mundo contemporáneo, priorizando el análisis crítico y la responsabilidad informativa en entornos digitales.
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, idx) => (
            <Card key={idx} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <CardHeader className="relative z-10">
                <div className={`${item.color} mb-4 p-3 rounded-xl bg-background w-fit border border-border group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg font-body">
                  {item.content}
                </p>
              </CardContent>
              {/* Subtle accent line at the bottom */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 bg-current ${item.color}`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
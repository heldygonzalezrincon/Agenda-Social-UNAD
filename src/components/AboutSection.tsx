import { Target, ShieldCheck, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutData = [
  {
    title: "Objetivo del Medio",
    icon: Target,
    content: "Ser el puente crítico entre la academia tradicional y el vertiginoso mundo tecnológico, fomentando el pensamiento reflexivo sobre la IA.",
    color: "text-primary"
  },
  {
    title: "Enfoque Ético",
    icon: ShieldCheck,
    content: "Promovemos un periodismo responsable que prioriza el impacto humano y social de la tecnología por encima del sensacionalismo.",
    color: "text-accent"
  },
  {
    title: "Público Objetivo",
    icon: Users,
    content: "Estudiantes, docentes y profesionales que buscan entender la transformación digital sin perder de vista la esencia de la educación.",
    color: "text-destructive"
  }
]

export function AboutSection() {
  return (
    <section id="sobre-el-medio" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 italic">Sobre el medio</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-black">Periodismo universitario con visión de futuro</h3>
          </div>
          <div className="h-[2px] flex-1 bg-border ml-12 hidden md:block" />
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
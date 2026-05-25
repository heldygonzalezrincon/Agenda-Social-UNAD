"use client"

import * as React from "react"
import { Sparkles, Loader2, BookOpen, ListChecks, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { summarizeArticle, type ArticleSummarizationOutput } from "@/ai/flows/article-summarization"
import { useToast } from "@/hooks/use-toast"

export function AIInsightTool() {
  const [content, setContent] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<ArticleSummarizationOutput | null>(null)
  const { toast } = useToast()

  const handleAnalyze = async () => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa el contenido de un artículo.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    try {
      const data = await summarizeArticle({ articleContent: content })
      setResult(data)
    } catch (err) {
      toast({
        title: "Error",
        description: "Hubo un problema procesando el artículo.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold italic uppercase tracking-tighter">AI Insight Tool</h2>
              <p className="text-muted-foreground">Genera resúmenes y contenido para redes sociales en segundos.</p>
            </div>
          </div>

          <Card className="bg-card/50 border-primary/20 shadow-2xl overflow-hidden mb-8">
            <CardContent className="p-6">
              <Textarea
                placeholder="Pega aquí el texto del artículo que deseas analizar..."
                className="min-h-[200px] bg-background/50 border-border focus:border-primary transition-all text-lg font-body"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="mt-4 flex justify-end">
                <Button 
                  onClick={handleAnalyze} 
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 text-white px-8 h-12 font-bold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    "Analizar Contenido"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid grid-cols-3 bg-secondary/80 p-1 rounded-xl h-14">
                <TabsTrigger value="summary" className="rounded-lg font-bold flex items-center gap-2 data-[state=active]:bg-primary">
                  <BookOpen className="w-4 h-4" /> Resumen
                </TabsTrigger>
                <TabsTrigger value="takeaways" className="rounded-lg font-bold flex items-center gap-2 data-[state=active]:bg-primary">
                  <ListChecks className="w-4 h-4" /> Conclusiones
                </TabsTrigger>
                <TabsTrigger value="social" className="rounded-lg font-bold flex items-center gap-2 data-[state=active]:bg-primary">
                  <MessageSquareText className="w-4 h-4" /> Redes Sociales
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="summary">
                  <Card className="bg-secondary/20 border-border">
                    <CardHeader>
                      <CardTitle className="text-primary">Resumen Ejecutivo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg leading-relaxed text-foreground/90 font-body">
                      {result.summary}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="takeaways">
                  <Card className="bg-secondary/20 border-border">
                    <CardHeader>
                      <CardTitle className="text-accent">Puntos Clave</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {result.keyTakeaways.map((point, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="w-6 h-6 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center text-accent text-xs font-bold mt-1">
                              {i + 1}
                            </span>
                            <span className="text-lg font-body">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="social">
                  <Card className="bg-secondary/20 border-border">
                    <CardHeader>
                      <CardTitle className="text-destructive">Promoción Social</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {result.socialMediaCopy.map((post, i) => (
                        <div key={i} className="p-4 rounded-xl bg-background/40 border border-border/50 font-body">
                          {post}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          )}
        </div>
      </div>
    </section>
  )
}
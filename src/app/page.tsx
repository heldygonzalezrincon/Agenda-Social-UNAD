import { Hero } from "@/components/Hero"
import { AboutSection } from "@/components/AboutSection"
import { Reportajes } from "@/components/Reportajes"
import { Cronicas } from "@/components/Cronicas"
import { FreePress } from "@/components/FreePress"
import { VisualGallery } from "@/components/VisualGallery"
import { Footer } from "@/components/Footer"
import { AIInsightTool } from "@/components/AIInsightTool"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Reportajes />
      <Cronicas />
      <FreePress />
      <Footer />
      <Toaster />
    </main>
  )
}
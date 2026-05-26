"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  // Filtra las imágenes que tengan un ID que empiece por "hero-"
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith("hero-"))
  
  // Si no hay imágenes con prefijo hero-, usamos la de por defecto "hero-bg"
  // Agregamos un fallback manual para que no quede vacío si el JSON falla
  const displayImages = heroImages.length > 0 
    ? heroImages 
    : [
        PlaceHolderImages.find(img => img.id === "hero-bg") || { 
          id: "hero-default", 
          imageUrl: "/imagen1.jpeg", 
          description: "Futuro Académico Hero" 
        }
      ]

  React.useEffect(() => {
    if (displayImages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [displayImages.length])

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        {displayImages.map((img, idx) => (
          <Image
            key={img?.id || idx}
            src={img?.imageUrl || "/imagen1.jpeg"}
            alt={img?.description || "Hero Image"}
            fill
            className={`object-cover scale-105 transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={idx === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-background/40 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Nuevas Tendencias
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-headline font-black leading-[1.1] tracking-tighter">
            La educación <br /> 
            <span className="text-gradient">ya cambió.</span> <br />
            <span className="text-2xl lg:text-4xl block mt-4 font-normal text-foreground/90 italic">
              ¿Las universidades también?
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground font-body max-w-2xl leading-relaxed">
            Medio digital universitario sobre inteligencia artificial, educación y futuro profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-none transition-all hover:scale-105 group">
              <a 
                href="https://www.instagram.com/medio_universitario?igsh=MWR3a2puY2RkZ3J6Nw==" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explorar publicaciones
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-none border-foreground/20 hover:bg-foreground/5">
              <Link href="/reportajes/report-1">
                Último reportaje
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Vertical floating indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Reportajes", href: "#reportajes" },
  { name: "Crónicas", href: "#cronicas" },
  { name: "Free Press", href: "#freepress" },
  { name: "Sobre el medio", href: "#sobre-el-medio" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
        scrolled ? "bg-white backdrop-blur-md shadow-lg py-3" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group text-slate-900">
          {/* Espacio para el logo: reemplaza src="/logo.png" por la ruta de tu imagen en la carpeta public */}
          <Image 
            src="/logo.jpeg" 
            alt="Logo Futuro Académico" 
            width={160} 
            height={160} 
            className="object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all">
            Suscribirse
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90">Suscribirse</Button>
        </div>
      </div>
    </nav>
  )
}
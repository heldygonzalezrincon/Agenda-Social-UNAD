"use client"

import * as React from "react"
import Image from "next/image"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const posts = [
  {
    id: 1,
    imageId: "free-press-1",
    likes: "1,240",
    comments: "42",
    caption: "La frontera entre lo humano y lo artificial se desvanece en las aulas. ¿Estamos listos para el siguiente paso? 🧬💻",
    hashtags: ["#InteligenciaArtificial", "#EduTech", "#FuturoAcadémico"]
  },
  {
    id: 2,
    imageId: "free-press-2",
    likes: "892",
    comments: "15",
    caption: "Nuevos campus digitales: donde la arquitectura y el silicio se encuentran. Explorando la UNAD 2026. 🏫🚀",
    hashtags: ["#UNAD", "#TransformacionDigital", "#ColombiaInnovadora"]
  }
]

export function FreePress() {
  return (
    <section id="freepress" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center mb-16 space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5 mb-4">
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
              <span className="font-headline font-black text-2xl tracking-tighter italic">FP</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-black text-center">Free Press</h2>
          <p className="text-muted-foreground text-center max-w-lg">Sigue nuestras cápsulas informativas en tiempo real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {posts.map((post) => {
            const img = PlaceHolderImages.find(i => i.id === post.imageId)
            return (
              <div key={post.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary/30 p-0.5">
                      <AvatarFallback>FA</AvatarFallback>
                      <AvatarImage src="https://picsum.photos/seed/avatar-fa/100/100" />
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold">futuro_academico</p>
                      <p className="text-xs text-muted-foreground">Medio Universitario</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-muted-foreground cursor-pointer" />
                </div>

                {/* Post Image */}
                <div className="relative aspect-square">
                  <Image
                    src={post.id === 1 ? "/imagen5.jpeg" : "/imagen6.jpeg"}
                    alt="Post"
                    fill
                    className="object-cover"
                    data-ai-hint={img?.imageHint}
                  />
                </div>

                {/* Actions */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Heart className="w-7 h-7 hover:text-red-500 transition-colors cursor-pointer" />
                      <MessageCircle className="w-7 h-7 hover:text-primary transition-colors cursor-pointer" />
                      <Share2 className="w-7 h-7 hover:text-accent transition-colors cursor-pointer" />
                    </div>
                    <Bookmark className="w-7 h-7 hover:text-primary transition-colors cursor-pointer" />
                  </div>
                  
                  <p className="text-sm font-bold">{post.likes} likes</p>
                  
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-bold mr-2">futuro_academico</span>
                      {post.caption}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.hashtags.map(tag => (
                        <span key={tag} className="text-xs text-primary font-medium hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground uppercase pt-1">Ver los {post.comments} comentarios</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
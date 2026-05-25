import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const galleryIds = ["gallery-1", "gallery-2", "gallery-3", "gallery-4"]

export function VisualGallery() {
  const images = PlaceHolderImages.filter(img => galleryIds.includes(img.id))

  return (
    <section className="py-24 container mx-auto px-6 lg:px-12">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold">Galería Visual</h2>
        <h3 className="text-4xl md:text-5xl font-headline font-black text-center">Inspiración Digital</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={img.id} className={`relative overflow-hidden rounded-lg group aspect-[4/3] ${idx % 2 === 1 ? 'lg:translate-y-8' : ''}`}>
            <Image
              src={img.imageUrl}
              alt={img.description}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={img.imageHint}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="text-white text-2xl">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'Fotografias com Inteligência Artificial | Guto Bordoni - Campinas',
  description: 'Fotografias profissionais criadas com inteligência artificial por Guto Bordoni. Criatividade ilimitada e técnicas inovadoras em Campinas.',
  keywords: 'fotografia ia, fotografia inteligencia artificial campinas, fotografo ia, guto bordoni ia',
}

const images = [
  { src: '/imgs/fotografo-especializado-em-ia-02.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-03.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-04.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-05.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-06.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-07.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-08.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-09.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-10.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-11.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-12.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-13.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-14.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-15.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-16.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-17.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-18.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-20.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-21.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-22.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-23.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-24.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-25.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-26.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-27.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-28.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-29.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-30.webp', alt: 'Fotografia com IA - Guto Bordoni' },
  { src: '/imgs/fotografo-especializado-em-ia-31.webp', alt: 'Fotografia com IA - Guto Bordoni' },
]

export default function FotografiasIA() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="w-full">
          <ImageLightbox 
            images={images}
          />
        </section>

        {/* Category Description - Moved to bottom */}
        <section className="text-center py-16 px-4 bg-black/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
            FOTOGRAFIAS + INTELIGÊNCIA ARTIFICIAL
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            A fusão perfeita entre a experiência de 20 anos em fotografia e as possibilidades 
            ilimitadas da inteligência artificial. Criatividade sem fronteiras para seus projetos.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
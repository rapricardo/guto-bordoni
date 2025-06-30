import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'FOTOGRAFIA DO AGRONEGÓCIO | Guto Bordoni - Campinas',
  description: 'Fotografia especializada em agronegócio por Guto Bordoni.',
  keywords: 'fotografia agro campinas, agro fotografia campinas, guto bordoni agro',
}

const images = [
  { src: '/imgs/fotografo-agro-01.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-02.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-03.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-04.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-05.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-06.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-07.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-08.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-09.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-10.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-11.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-12.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-13.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-14.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-15.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-16.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-17.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-18.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' },
  { src: '/imgs/fotografo-agro-19.webp', alt: 'FOTOGRAFIA DO AGRONEGÓCIO - Guto Bordoni' }
]

export default function FotografiaAgro() {
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
            FOTOGRAFIA DO AGRONEGÓCIO
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Fotografia especializada em agronegócio por Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'ENSAIO SENSUAL | Guto Bordoni - Campinas',
  description: 'Ensaios sensuais artísticos e elegantes com Guto Bordoni.',
  keywords: 'ensaio sensual campinas, ensaio-sensual fotografia campinas, guto bordoni ensaio-sensual',
}

const images = [
  { src: '/imgs/fotografo-ensaio-sensual-01.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-02.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-03.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-04.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-05.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-06.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-07.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-08.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-09.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-10.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-11.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-12.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-13.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-14.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-15.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-16.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-17.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-18.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-19.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-20.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-21.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-22.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-23.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-24.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-25.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-26.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-27.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-28.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-29.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-30.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-31.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-32.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-33.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-34.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-35.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-36.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-37.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-38.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-39.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-40.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-41.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-42.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-sensual-43.webp', alt: 'ENSAIO SENSUAL - Guto Bordoni' }
]

export default function EnsaioSensual() {
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
            ENSAIO SENSUAL
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Ensaios sensuais artísticos e elegantes com Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
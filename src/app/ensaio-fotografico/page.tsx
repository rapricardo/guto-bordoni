import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'ENSAIO FOTOGRÁFICO | Guto Bordoni - Campinas',
  description: 'Ensaios fotográficos únicos e criativos por Guto Bordoni em Campinas.',
  keywords: 'ensaio fotografico campinas, ensaio fotografia campinas, guto bordoni ensaio',
}

const images = [
  { src: '/imgs/fotografo-ensaio-01.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-02.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-03.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-04.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-05.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-06.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-07.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-08.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-09.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-10.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-11.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-12.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-13.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-14.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-15.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-16.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-17.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-18.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-19.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-20.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-21.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-22.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-23.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-24.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-25.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-26.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-27.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-28.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-29.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-30.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-31.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-32.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-33.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-34.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-35.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-36.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-37.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-38.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-39.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' },
  { src: '/imgs/fotografo-ensaio-40.webp', alt: 'ENSAIO FOTOGRÁFICO - Guto Bordoni' }
]

export default function EnsaioFotografico() {
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
            ENSAIO FOTOGRÁFICO
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Ensaios fotográficos únicos e criativos por Guto Bordoni em Campinas.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'FOTOGRAFIA DE MODA | Guto Bordoni - Campinas',
  description: 'Fotografia de moda profissional em Campinas com Guto Bordoni.',
  keywords: 'fotografia moda campinas, moda fotografia campinas, guto bordoni moda',
}

const images = [
  { src: '/imgs/fotografo-moda-01.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-02.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-03.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-04.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-05.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-06.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-07.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-08.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-09.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-10-.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-11.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-12.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-13.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-14.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-15.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-16.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-17.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-18.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-19.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-20.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-21.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-22.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-23.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-24.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-25.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-26.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
  { src: '/imgs/fotografo-moda-27.webp', alt: 'FOTOGRAFIA DE MODA - Guto Bordoni' },
]

export default function FotografiaModa() {
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
            FOTOGRAFIA DE MODA
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Fotografia de moda profissional em Campinas com Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
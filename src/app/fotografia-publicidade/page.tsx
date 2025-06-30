import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'FOTOGRAFIA PUBLICITÁRIA | Guto Bordoni - Campinas',
  description: 'Fotografia publicitária profissional em Campinas com Guto Bordoni.',
  keywords: 'fotografia publicidade campinas, publicidade fotografia campinas, guto bordoni publicidade',
}

const images = [
  { src: '/imgs/fotografo-publicidade-01.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-02.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-03.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-04.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-05.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-06.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-07.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-08.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-09.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-10.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-11.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-12.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-13.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-14.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-15.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-16.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-17.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-18.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-19.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-20.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-21.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-22.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-23.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-24.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-25.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-26.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-27.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-28.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-29.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' },
  { src: '/imgs/fotografo-publicidade-30.webp', alt: 'FOTOGRAFIA PUBLICITÁRIA - Guto Bordoni' }
]

export default function FotografiaPublicidade() {
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
            FOTOGRAFIA PUBLICITÁRIA
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Fotografia publicitária profissional em Campinas com Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'BOUDOIR & LINGERIE | Guto Bordoni - Campinas',
  description: 'Ensaios boudoir e lingerie delicados e elegantes com Guto Bordoni.',
  keywords: 'boudoir lingerie campinas, biquine-lingerie fotografia campinas, guto bordoni biquine-lingerie',
}

const images = [
  { src: '/imgs/fotografo-biquine-lingerie-01.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-02.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-03.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-04.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-05.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-06.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-07.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-08.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-09.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-10.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-11.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-12.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-13.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-14.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-15.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-16.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-17.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-18.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-19.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-20.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-21.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-22.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-23.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-24.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-25.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-26.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' },
  { src: '/imgs/fotografo-biquine-lingerie-27.webp', alt: 'BOUDOIR & LINGERIE - Guto Bordoni' }
]

export default function BoudoirLingerie() {
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
            BOUDOIR & LINGERIE
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Ensaios boudoir e lingerie delicados e elegantes com Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
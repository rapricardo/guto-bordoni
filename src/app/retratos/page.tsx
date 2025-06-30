import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'RETRATOS PROFISSIONAIS | Guto Bordoni - Campinas',
  description: 'Retratos profissionais e corporativos em Campinas com Guto Bordoni.',
  keywords: 'retratos campinas, retrato fotografia campinas, guto bordoni retrato',
}

const images = [
  { src: '/imgs/fotografo-retrato-01.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-02.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-03.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-04.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-05.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-06.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-07.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-08.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-09.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-10.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-11.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-12.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-13.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-14.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-15.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-16.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-17.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-18.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-19.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-20.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-21.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-22.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-23.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-24.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-25.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-26.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-27.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-28.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' },
  { src: '/imgs/fotografo-retrato-29.webp', alt: 'RETRATOS PROFISSIONAIS - Guto Bordoni' }
]

export default function Retratos() {
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
            RETRATOS PROFISSIONAIS
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Retratos profissionais e corporativos em Campinas com Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
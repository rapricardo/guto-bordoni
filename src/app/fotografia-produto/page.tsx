import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'Fotografia de Produto | Guto Bordoni - Campinas',
  description: 'Fotografia de produto profissional em Campinas. Guto Bordoni especialista em fotografia comercial e publicitária.',
  keywords: 'fotografia produto campinas, fotografo comercial, fotografia publicitaria campinas, guto bordoni produto',
}

const images = [
  { src: '/imgs/fotografo-produto-01.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-02.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-03.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-04-.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-05.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-06.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-07.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-08.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-09.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-10.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-11.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-12.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-13.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
  { src: '/imgs/fotografo-produto-14.webp', alt: 'Fotografia de Produto - Guto Bordoni' },
]

export default function FotografiaProduto() {
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
            FOTOGRAFIA DE PRODUTO
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Imagens que vendem. Fotografia comercial de alta qualidade que destaca 
            as características únicas de cada produto.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
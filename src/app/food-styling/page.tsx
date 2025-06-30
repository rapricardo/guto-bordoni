import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'Food Styling - Fotografia Gastronômica | Guto Bordoni - Campinas',
  description: 'Fotografia gastronômica e food styling profissional em Campinas. Guto Bordoni especialista em fotografia de alimentos.',
  keywords: 'food styling campinas, fotografia gastronomica, fotografo alimentos campinas, guto bordoni food',
}

const images = [
  { src: '/imgs/fotografo-food-styling-01.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-02.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-03.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-04.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-05.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-06.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-07.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-08.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-09.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-10.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-11.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-12.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-13.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-14.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-15.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-16.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-17.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-18.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-19.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-20.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-21.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-22.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-23.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-24.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-25.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-26.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-27.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-28.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-29.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-30.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-31.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-32.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-33.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-34.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-35.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-36.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-37.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-38.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-39.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-40.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-41.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-42.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-43.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-44.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-45.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-46.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-47.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-48.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-49.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-50.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-51.webp', alt: 'Food Styling - Guto Bordoni' },
  { src: '/imgs/fotografo-food-styling-52.webp', alt: 'Food Styling - Guto Bordoni' },
]

export default function FoodStyling() {
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
            FOOD STYLING
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Fotografia gastronômica que desperta todos os sentidos. Técnicas avançadas de food styling 
            para destacar a beleza e o sabor de cada prato.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
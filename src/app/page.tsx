'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CategoryCard from '@/components/CategoryCard'

const categories = [
  {
    title: 'FOTOGRAFIAS +\nINTELIGÊNCIA ARTIFICIAL',
    href: '/fotografias-inteligencia-artificial',
    imageSrc: '/imgs/fotografo-cat-especializado-em-ia.webp'
  },
  {
    title: 'FOOD STYLING',
    href: '/food-styling',
    imageSrc: '/imgs/fotografo-cat-food-styling.webp'
  },
  {
    title: 'PRODUTO',
    href: '/fotografia-produto',
    imageSrc: '/imgs/fotografo-cat-produto.webp'
  },
  {
    title: 'ENSAIO',
    href: '/ensaio-fotografico',
    imageSrc: '/imgs/fotografo-cat-ensaio.webp'
  },
  {
    title: 'MODA',
    href: '/fotografia-moda',
    imageSrc: '/imgs/fotografo-cat-moda.webp'
  },
  {
    title: 'BOUDOIR &\nLINGERIE',
    href: '/boudoir-lingerie',
    imageSrc: '/imgs/fotografo-cat-biquine-lingerie.webp'
  },
  {
    title: 'PUBLICIDADE',
    href: '/fotografia-publicidade',
    imageSrc: '/imgs/fotografo-cat-publicidade.webp'
  },
  {
    title: 'AGRO',
    href: '/fotografia-agro',
    imageSrc: '/imgs/fotografo-cat-agro.webp'
  },
  {
    title: 'ENSAIO SENSUAL',
    href: '/ensaio-sensual',
    imageSrc: '/imgs/fotografo-cat-ensaio-sensual.webp'
  },
  {
    title: 'RETRATOS',
    href: '/retratos',
    imageSrc: '/imgs/fotografo-cat-retrato.webp'
  },
  {
    title: 'GALERIA',
    href: '/sobre-fotografo',
    imageSrc: '/imgs/fotografo-guto-bordoni.webp'
  },
  {
    title: 'ESTÚDIO',
    href: '/sobre-estudio',
    imageSrc: '/imgs/studio.webp'
  },
  {
    title: 'CONTATO',
    href: 'https://api.whatsapp.com/send?phone=5519996476512&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20de%20fotografia.',
    imageSrc: '/imgs/studio-dimensoes.webp'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Categories Grid - No gaps between cards */}
        <section className="w-full">
          {/* All Categories Grid - Desktop: 3 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={`${category.href}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <CategoryCard
                  title={category.title}
                  href={category.href}
                  imageSrc={category.imageSrc}
                  className=""
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section - Moved to bottom */}
        <motion.section 
          className="text-center py-16 px-4 bg-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
            GUTO BORDONI
          </h1>
          <p className="text-lg md:text-xl mb-4 text-[#0eebea]">
            FOTÓGRAFO PROFISSIONAL
          </p>
          <p className="text-base max-w-2xl mx-auto text-white/80">
            Mais de 20 anos de experiência em fotografia profissional. 
            Criatividade ilimitada apoiada pela inteligência artificial.
          </p>
        </motion.section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

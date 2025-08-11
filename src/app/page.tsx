import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CategoryCard from '@/components/CategoryCard'
import { client } from '@/lib/sanity'

interface Category {
  title: string;
  href: string;
  imageSrc: string;
}

async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category" && defined(slug.current) && defined(coverImage.asset)] {
    title,
    "href": "/gallery/" + slug.current,
    "imageSrc": coverImage.asset->url
  }`
  const categories = await client.fetch(query)
  return categories
}

export default async function Home() {
  const categories = await getCategories()

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Categories Grid - No gaps between cards */}
        <section className="w-full">
          {/* All Categories Grid - Desktop: 3 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
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
        <section
          className="text-center py-16 px-4 bg-black/20"
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

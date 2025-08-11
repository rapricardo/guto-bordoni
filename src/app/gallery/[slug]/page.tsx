import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageLightbox from '@/components/ImageLightbox'

interface Gallery {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

async function getGallery(slug: string): Promise<Gallery> {
  const query = `*[_type == "gallery" && slug.current == $slug][0] {
    title,
    "images": images[]{
      "src": asset->url,
      alt
    }
  }`
  const gallery = await client.fetch(query, { slug })
  return gallery
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const gallery = await getGallery(params.slug);
  if (!gallery) {
    return {
      title: 'Gallery not found',
    }
  }
  return {
    title: `${gallery.title} | Guto Bordoni - Campinas`,
    description: `Portfolio of ${gallery.title} by Guto Bordoni.`,
  }
}

export default async function GalleryPage({ params }: { params: { slug: string } }) {
  const gallery = await getGallery(params.slug)

  if (!gallery) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 text-center py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">Gallery not found</h1>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="w-full">
          <ImageLightbox
            images={gallery.images}
          />
        </section>

        <section className="text-center py-16 px-4 bg-black/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
            {gallery.title}
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Portfolio of {gallery.title} by Guto Bordoni.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

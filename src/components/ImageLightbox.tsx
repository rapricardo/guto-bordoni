'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageLightboxProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const ImageLightbox = ({ images }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const lightboxImages = images.map(img => ({ src: img.src }))

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden group"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={lightboxImages}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </>
  )
}

export default ImageLightbox
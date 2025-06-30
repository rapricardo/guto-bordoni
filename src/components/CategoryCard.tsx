'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CategoryCardProps {
  title: string;
  href: string;
  imageSrc: string;
  className?: string;
}

const CategoryCard = ({ title, href, imageSrc, className = "" }: CategoryCardProps) => {
  const isExternalLink = href.startsWith('http')
  
  const content = (
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority={title.includes('INTELIGÊNCIA')} // Priority for main category
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 card-overlay" />
      
      {/* Title - Positioned at top */}
      <div className="absolute top-16 left-0 right-0 flex justify-center">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center px-6 uppercase tracking-wider drop-shadow-lg">
          {title}
        </h2>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-[#0eebea]/0 group-hover:bg-[#0eebea]/10 transition-all duration-300" />
    </div>
  )

  return (
    <motion.div
      className={`relative h-[100vh] lg:h-[50vh] overflow-hidden cursor-pointer group ${className}`}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3 }}
    >
      {isExternalLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>
          {content}
        </Link>
      )}
    </motion.div>
  )
}

export default CategoryCard
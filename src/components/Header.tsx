'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '/fotografias-inteligencia-artificial', label: 'FOTOGRAFIAS + IA' },
    { href: '/food-styling', label: 'FOOD STYLING' },
    { href: '/fotografia-produto', label: 'PRODUTO' },
    { href: '/ensaio-fotografico', label: 'ENSAIO' },
    { href: '/fotografia-moda', label: 'MODA' },
    { href: '/boudoir-lingerie', label: 'BOUDOIR & LINGERIE' },
    { href: '/fotografia-publicidade', label: 'PUBLICIDADE' },
    { href: '/fotografia-agro', label: 'AGRO' },
    { href: '/ensaio-sensual', label: 'ENSAIO SENSUAL' },
    { href: '/retratos', label: 'RETRATOS' },
    { href: '/sobre-fotografo', label: 'SOBRE O FOTÓGRAFO' },
    { href: '/sobre-estudio', label: 'SOBRE O ESTÚDIO' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#6c605b]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-12">
            <Image
              src="/imgs/logo-estudio-guto-bordoni-fotografia.webp"
              alt="Guto Bordoni Fotografia"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/sobre-fotografo" className="hover:text-[#0eebea] transition-colors">
            SOBRE
          </Link>
          <Link href="/sobre-estudio" className="hover:text-[#0eebea] transition-colors">
            ESTÚDIO
          </Link>
          <a 
            href="https://api.whatsapp.com/send?phone=5519996476512&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20de%20fotografia."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0eebea] transition-colors"
          >
            CONTATO
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#6c605b] border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-[#0eebea] transition-colors py-2 text-sm tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
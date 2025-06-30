import Link from 'next/link'
import { Instagram, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0eebea]">CONTATO</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#0eebea]" />
                <a 
                  href="tel:+5519996476512" 
                  className="hover:text-[#0eebea] transition-colors"
                >
                  (19) 99647-6512
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#0eebea] mt-1" />
                <div className="text-sm">
                  <p>R. Dr. Carlos Mendes de Paula, 673</p>
                  <p>Vila Iza, Campinas - SP</p>
                  <p>CEP: 13076-680</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0eebea]">SERVIÇOS</h3>
            <div className="space-y-2 text-sm">
              <Link href="/fotografias-inteligencia-artificial" className="block hover:text-[#0eebea] transition-colors">
                Fotografias + Inteligência Artificial
              </Link>
              <Link href="/food-styling" className="block hover:text-[#0eebea] transition-colors">
                Food Styling
              </Link>
              <Link href="/fotografia-produto" className="block hover:text-[#0eebea] transition-colors">
                Fotografia de Produto
              </Link>
              <Link href="/ensaio-fotografico" className="block hover:text-[#0eebea] transition-colors">
                Ensaios Fotográficos
              </Link>
              <Link href="/fotografia-moda" className="block hover:text-[#0eebea] transition-colors">
                Fotografia de Moda
              </Link>
            </div>
          </div>

          {/* About & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0eebea]">GUTO BORDONI</h3>
            <p className="text-sm mb-4">
              Fotógrafo profissional com mais de 20 anos de experiência. 
              Atendo Campinas e todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gutobordoni/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#0eebea] transition-colors"
              >
                <Instagram size={20} />
                <span className="text-sm">@gutobordoni</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Guto Bordoni Fotografia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Sobre Guto Bordoni - Fotógrafo Profissional | Campinas - SP',
  description: 'Conheça Guto Bordoni, fotógrafo profissional com mais de 20 anos de experiência em Campinas. Especialista em fotografia com inteligência artificial.',
  keywords: 'guto bordoni fotografo, fotografo campinas, biografia guto bordoni, experiencia fotografia',
}

export default function SobreFotografo() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
                SOBRE GUTO BORDONI
              </h1>
              <p className="text-xl md:text-2xl text-[#0eebea] mb-8">
                FOTÓGRAFO PROFISSIONAL
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/imgs/fotografo-guto-bordoni.webp"
                  alt="Guto Bordoni - Fotógrafo Profissional"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                  Mais de 20 Anos de Experiência
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Guto Bordoni é um fotógrafo profissional baseado em <strong>Campinas, SP</strong>, 
                  mas que atende clientes em todo o Brasil. Com mais de duas décadas de experiência, 
                  seu trabalho se destaca dos demais pela sua veia de ilustrador.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Ele possui vasta experiência com técnicas que vão além do manejo da câmera, 
                  sendo capaz de criar imagens diferenciadas tanto pela técnica quanto pela criatividade.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Agora, apoiado pela <strong className="text-[#0eebea]">inteligência artificial</strong>, 
                  sua criatividade se torna ilimitada a favor de seus clientes de diversos segmentos.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#0eebea] mb-4">EXPERIÊNCIA</h3>
                <p className="text-3xl font-bold mb-2">20+</p>
                <p>Anos de fotografia profissional</p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#0eebea] mb-4">ESPECIALIDADES</h3>
                <p className="text-3xl font-bold mb-2">11</p>
                <p>Categorias de fotografia</p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#0eebea] mb-4">INOVAÇÃO</h3>
                <p className="text-3xl font-bold mb-2">IA</p>
                <p>Fotografia com inteligência artificial</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Especialidades
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Fotografias + Inteligência Artificial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Food Styling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Fotografia de Produto
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Ensaios Fotográficos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Fotografia de Moda
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Boudoir & Lingerie
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Fotografia Publicitária
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Fotografia do Agronegócio
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Ensaios Sensuais
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0eebea] rounded-full mr-3"></span>
                    Retratos Profissionais
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Entre em Contato
              </h2>
              <p className="text-lg mb-8">
                Pronto para criar imagens únicas para seu projeto? 
                Entre em contato e vamos conversar sobre suas ideias.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5519996476512&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20de%20fotografia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0eebea] text-[#6c605b] font-semibold px-8 py-4 rounded-lg hover:bg-[#0eebea]/90 transition-colors"
              >
                CONVERSAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
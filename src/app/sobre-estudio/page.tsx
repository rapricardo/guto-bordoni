import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { MapPin, Car, Camera, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre o Estúdio Guto Bordoni | Campinas - SP',
  description: 'Conheça o estúdio de fotografia profissional do Guto Bordoni em Campinas. Estrutura completa para fotografia de veículos e todos os tipos de trabalho.',
  keywords: 'estudio fotografia campinas, fotografo veiculo campinas, estudio guto bordoni, estrutura fotografia',
}

export default function SobreEstudio() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
                SOBRE O ESTÚDIO
              </h1>
              <p className="text-xl md:text-2xl text-[#0eebea] mb-8">
                ESTRUTURA COMPLETA EM CAMPINAS
              </p>
            </div>

            {/* Studio Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/imgs/studio.webp"
                  alt="Estúdio Guto Bordoni - Interior"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/imgs/studio-dimensoes.webp"
                  alt="Estúdio Guto Bordoni - Dimensões"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Studio Description */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Estúdio Preparado para Todo Tipo de Trabalho
              </h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                O estúdio do Guto Bordoni está estrategicamente localizado em Campinas 
                e possui estrutura completa para atender todos os tipos de projetos fotográficos, 
                <strong className="text-[#0eebea]"> inclusive fotografia de veículos</strong>.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <Camera className="w-12 h-12 text-[#0eebea] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">EQUIPAMENTOS</h3>
                <p className="text-sm text-white/80">
                  Equipamentos profissionais de última geração
                </p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <Car className="w-12 h-12 text-[#0eebea] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">VEÍCULOS</h3>
                <p className="text-sm text-white/80">
                  Estrutura para fotografia automotiva
                </p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <Lightbulb className="w-12 h-12 text-[#0eebea] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">ILUMINAÇÃO</h3>
                <p className="text-sm text-white/80">
                  Sistema de iluminação profissional
                </p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg">
                <MapPin className="w-12 h-12 text-[#0eebea] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">LOCALIZAÇÃO</h3>
                <p className="text-sm text-white/80">
                  Fácil acesso em Campinas
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-black/20 rounded-lg p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Localização e Contato
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Endereço</h3>
                  <div className="space-y-2">
                    <p>R. Dr. Carlos Mendes de Paula, 673</p>
                    <p>Vila Iza, Campinas - SP</p>
                    <p>CEP: 13076-680</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-6">Contato</h3>
                  <div className="space-y-2">
                    <p>Telefone: (19) 99647-6512</p>
                    <p>Instagram: @gutobordoni</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
                  <div className="space-y-2">
                    <p>• Campinas e região</p>
                    <p>• Atendimento em todo o Brasil</p>
                    <p>• Agendamento via WhatsApp</p>
                    <p>• Orçamentos personalizados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-black/20 rounded-lg p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Serviços do Estúdio
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Fotografia Comercial</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Produtos</li>
                    <li>• Publicidade</li>
                    <li>• Food Styling</li>
                    <li>• Catálogos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ensaios</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Retratos</li>
                    <li>• Moda</li>
                    <li>• Boudoir</li>
                    <li>• Sensuais</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Especialidades</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Fotografia + IA</li>
                    <li>• Veículos</li>
                    <li>• Agronegócio</li>
                    <li>• Corporativo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0eebea] mb-6">
                Agende sua Sessão
              </h2>
              <p className="text-lg mb-8">
                Entre em contato para conhecer o estúdio e discutir seu projeto fotográfico.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5519996476512&text=Olá%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20estúdio%20e%20conhecer%20os%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0eebea] text-[#6c605b] font-semibold px-8 py-4 rounded-lg hover:bg-[#0eebea]/90 transition-colors"
              >
                AGENDAR VISITA
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
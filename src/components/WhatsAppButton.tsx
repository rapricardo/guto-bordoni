'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5519996476512&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20de%20fotografia."

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  )
}

export default WhatsAppButton
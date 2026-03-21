import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5531315772920&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+consultoria+gratuita+do+Grupo+Totum.&type=phone_number&app_absent=0';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </motion.a>
  );
}

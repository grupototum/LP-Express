import { motion } from 'framer-motion';
import { ExpressWhatsAppIcon } from './express/ExpressWhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5533997001893?text=Olá+Matheus!+Vi+a+análise+da+Totum+e+gostaria+de+agendar+uma+conversa+sobre+o+projeto.';

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
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] gentle-animation"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
    >
      <ExpressWhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
}

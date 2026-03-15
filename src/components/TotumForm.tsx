import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function TotumForm() {
  const [formData, setFormData] = useState({
    empresa: '',
    cidade: '',
    produto: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar minha consultoria gratuita.\n\nEmpresa: ${formData.empresa}\nCidade: ${formData.cidade}\nProduto/Serviço: ${formData.produto}\nWhatsApp: ${formData.whatsapp}`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="formulario" className="py-24 px-6 bg-totum-gray relative overflow-hidden">
      {/* Light & gradient effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-totum-dark/5 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-totum-dark/[0.02]" />

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Preencha abaixo e{' '}
            <span className="text-accent"><br />escolha seu horário</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Para tornar sua consultoria mais assertiva, precisamos entender rapidamente o seu cenário.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-form rounded-2xl p-8 sm:p-10 space-y-6">
          
          {/* Row 1: Empresa (65%) + Cidade (35%) */}
          <div className="flex gap-4">
            <div className="w-[65%]">
              <label className="block text-sm font-semibold text-primary mb-2">Nome Fantasia ou Razão Social</label>
              <input
                type="text"
                placeholder="Ex: Totum Consultoria"
                value={formData.empresa}
                onChange={(e) => setFormData((prev) => ({ ...prev, empresa: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
            <div className="w-[35%]">
              <label className="block text-sm font-semibold text-primary mb-2">Cidade ou Região</label>
              <input
                type="text"
                placeholder="Ex: São Paulo, SP"
                value={formData.cidade}
                onChange={(e) => setFormData((prev) => ({ ...prev, cidade: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          {/* Row 2: Produto (65%) + WhatsApp (35%) */}
          <div className="flex gap-4">
            <div className="w-[65%]">
              <label className="block text-sm font-semibold text-primary mb-2">Principal produto ou serviço</label>
              <input
                type="text"
                placeholder="Ex: Consultoria de marketing digital"
                value={formData.produto}
                onChange={(e) => setFormData((prev) => ({ ...prev, produto: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
            <div className="w-[35%]">
              <label className="block text-sm font-semibold text-primary mb-2">WhatsApp</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full glass-btn-accent text-accent-foreground font-bold py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3 cursor-pointer">
            
            <Send className="w-5 h-5" />
            Quero minha consultoria gratuita
          </motion.button>

          <p className="text-center text-sm text-muted-foreground">
            🔒 Seus dados estão seguros. Sem spam, sem compromisso.
          </p>
        </motion.form>
      </div>
    </section>);

}
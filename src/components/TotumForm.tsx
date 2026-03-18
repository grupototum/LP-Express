import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export function TotumForm() {
  const [formData, setFormData] = useState({
    empresa: '',
    cidade: '',
    produto: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Formulário enviado!',
        description: 'Entraremos em contato em breve para agendar sua consultoria.',
      });

      setFormData({ empresa: '', cidade: '', produto: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou entre em contato diretamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Em uma consultoria estratégica de 45 minutos, você vai entender exatamente: <strong className="text-primary">o que está travando seu crescimento</strong>, <strong className="text-primary">onde você está perdendo dinheiro</strong> e <strong className="text-primary">o que precisa mudar agora</strong>.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Antes de começar
          </h2>
          <p className="text-muted-foreground text-lg">
            Para tornar a análise realmente útil, precisamos entender rapidamente o seu cenário:
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

          {/* Row 2: Produto (65%) + E-mail (35%) */}
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
              <label className="block text-sm font-semibold text-primary mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none gentle-animation text-primary placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-btn-accent text-accent-foreground font-bold py-4 rounded-xl text-lg gentle-animation flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
            
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isSubmitting ? 'Enviando...' : 'Quero minha consultoria gratuita'}
          </motion.button>

          <p className="text-center text-sm text-muted-foreground">
            🔒 Seus dados estão seguros. Sem spam, sem compromisso.
          </p>
        </motion.form>
      </div>
    </section>);
}

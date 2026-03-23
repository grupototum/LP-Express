

## Problemas

1. **Menu navbar**: O breakpoint `lg` (1024px) mostra os 5 links de navegação com ícones, mas a ~998px não há espaço suficiente e o layout quebra. O botão "Começar agora" aparece a partir de `sm` (640px), ocupando espaço desnecessário em telas intermediárias.

2. **Ícone do WhatsApp**: O componente usa `MessageCircle` do Lucide (ícone genérico de chat) em vez do ícone oficial do WhatsApp.

## Solução

### 1. Corrigir responsividade do menu — `src/components/TotumHero.tsx`

- Subir o breakpoint dos links de navegação de `hidden lg:flex` para `hidden xl:flex` (1280px)
- Subir o breakpoint do hamburger de `lg:hidden` para `xl:hidden`
- Subir o breakpoint do overlay mobile de `lg:hidden` para `xl:hidden`
- Subir o botão "Começar agora" de `hidden sm:block` para `hidden xl:block`
- Reduzir espaçamento dos links para `xl:space-x-6`

Isso garante que abaixo de 1280px o menu hamburger será usado, eliminando o problema em telas de ~998px.

### 2. Trocar ícone do WhatsApp — `src/components/WhatsAppFloat.tsx`

- Remover o import de `MessageCircle` do Lucide
- Substituir por um SVG inline com o path oficial do logotipo do WhatsApp (telefone dentro do balão de fala), mantendo `w-7 h-7` e cor branca


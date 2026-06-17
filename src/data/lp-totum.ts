export interface LPContent {
  version: 'A' | 'B' | 'C'
  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
  }
  section2: {
    headline: string
    body: string[]
  }
  section3: {
    headline: string
    body: string[]
  }
  section4: {
    headline: string
    body: string[]
  }
  section5: {
    headline: string
  }
  section6: {
    headline: string
    subheadline?: string
  }
  objections: {
    question: string
    answer: string
  }[]
  finalCta: {
    headline: string
    body: string
    cta: string
  }
}

export const versaoA: LPContent = {
  version: 'A',
  hero: {
    headline: 'Você não precisa de mais um site. Precisa mostrar por que as pessoas escolhem sua empresa.',
    subheadline:
      'Você já tem reputação, avaliação boa e cliente que indica. O que falta é fazer tudo isso ficar claro pra quem te encontra pela primeira vez e ainda está decidindo.',
    ctaPrimary: 'Quero ver minha prévia',
    ctaSecondary: 'Ou 10 minutos pra entender a oportunidade',
  },
  section2: {
    headline: 'O cliente vê seus serviços. Nem sempre vê os motivos para escolher você.',
    body: [
      'Quando alguém pesquisa sua empresa, vê o que você faz. Vê preço, vê serviço, vê foto. Mas raramente vê o que realmente importa na decisão: a confiança que você levou anos pra construir.',
      'Isso fica escondido. E o que fica escondido não pesa na hora da escolha.',
    ],
  },
  section3: {
    headline: 'A gente não vende site. Site você já podia ter comprado em qualquer lugar.',
    body: [
      'O que a gente resolve é outra coisa: a maioria das empresas com boa reputação está perdendo cliente todo dia sem perceber.',
      'Alguém pesquisou seu serviço hoje. Comparou com dois concorrentes. E foi pro outro, não porque ele é melhor, mas porque a página dele comunicou melhor a confiança que você também tem.',
      'Esse cliente já estava procurando o que você faz. Ele estava na sua mesa. E escapou.',
    ],
  },
  section4: {
    headline: 'Sua prévia já está pronta. Antes mesmo da reunião.',
    body: [
      'A maioria das agências te promete um site em 30 dias. A gente faz diferente.',
      'Antes de qualquer conversa, já analisamos sua presença digital e montamos uma prévia mostrando como sua empresa pode ser percebida por quem ainda não te conhece.',
      'Você não contrata no escuro. Olha a prévia, decide. Se fizer sentido, em até 24 horas depois do alinhamento a página vai pro ar. Não em semanas. Em 24 horas.',
    ],
  },
  section5: {
    headline: 'O que olhamos antes de montar sua prévia',
  },
  section6: {
    headline: 'O que as pessoas dizem quando veem a prévia',
    subheadline: 'Conversas reais. Sem edição. Sem roteiro.',
  },
  objections: [
    {
      question: '"Já tive site antes e não fez diferença."',
      answer:
        'Quase sempre o problema não é o site, é que ele foi feito sem entender o que seu público valoriza em você. A prévia é construída a partir do que seus clientes já dizem.',
    },
    {
      question: '"Vou esperar semanas?"',
      answer: 'Não. A prévia já está pronta. A página final fica no ar em até 24h após o alinhamento.',
    },
    {
      question: '"É só uma página, por que pagar?"',
      answer:
        'Se uma única venda nova já paga o investimento, a conta fecha. A página costuma custar uma fração do que você fatura com um cliente novo.',
    },
  ],
  finalCta: {
    headline: 'Sua reputação já existe. Falta fazer ela ser percebida.',
    body: 'A partir de R$ 900 no PIX ou 3x de R$ 400. Inclui análise, prévia personalizada, reunião de alinhamento e página no ar em até 24h.\n\nNão estamos te pedindo pra contratar agora. Estamos oferecendo 10 minutos pra mostrar o que identificamos. Se fizer sentido, a gente segue. Se não, o diagnóstico fica de graça.',
    cta: 'Quero ver minha prévia',
  },
}

export const versaoB: LPContent = {
  version: 'B',
  hero: {
    headline: 'A maioria das empresas mais confiáveis está perdendo cliente todo dia sem perceber.',
    subheadline:
      'E quase nunca o problema é a qualidade ou o anúncio. É que o cliente decide antes de mandar mensagem, e decide com base no que vê. Se o seu diferencial não aparece, ele vai pro concorrente.',
    ctaPrimary: 'Quero ver o que está escapando',
    ctaSecondary: 'Ou 10 minutos pra entender a oportunidade',
  },
  section2: {
    headline: 'O dinheiro não está faltando. Está escapando.',
    body: [
      'Toda semana, gente que pesquisa exatamente o que você faz chega até você. Olha suas avaliações. Compara. E desiste de mandar mensagem.',
      'Não é tráfego frio caro. É cliente morno, que já estava interessado. Esse é o dinheiro mais barato do mundo, e é justamente o que está vazando.',
    ],
  },
  section3: {
    headline: 'Você não precisa de mais um site. Precisa mostrar por que as pessoas escolhem você.',
    body: [
      'A gente não vende site. Site você já podia ter comprado em qualquer lugar por R$ 5.000 e ele continuaria sem resolver isso.',
      'O que a gente faz é pegar a confiança que você já construiu e colocar ela na frente, onde quem chega pela primeira vez consegue ver em 30 segundos por que escolher você.',
    ],
  },
  section4: {
    headline: 'Sua prévia já está pronta. Antes mesmo da reunião.',
    body: [
      'Em vez de te prometer entrega em 30 dias, a gente já analisou sua presença digital e montou uma prévia de como sua empresa pode ser percebida.',
      'Você olha, decide. Se aprovar, a página vai pro ar em até 24 horas depois do alinhamento.',
    ],
  },
  section5: {
    headline: 'O que olhamos antes de montar sua prévia',
  },
  section6: {
    headline: 'O que muda quando o diferencial aparece',
  },
  objections: [
    {
      question: '"Já tive site e não fez diferença."',
      answer: 'O problema raramente é o site. É a comunicação do que seu público valoriza.',
    },
    {
      question: '"Vou esperar semanas?"',
      answer: 'Não. Prévia pronta, página no ar em 24h após alinhamento.',
    },
    {
      question: '"É só uma página?"',
      answer: 'Uma venda nova já paga. A página custa uma fração do seu ticket.',
    },
  ],
  finalCta: {
    headline: 'Pare de perder o cliente que já estava chegando.',
    body: 'A partir de R$ 900 no PIX ou 3x de R$ 400. Análise, prévia, alinhamento e página em 24h.\n\n10 minutos pra te mostrar exatamente onde está vazando. Se fizer sentido, seguimos. Se não, o diagnóstico fica de graça.',
    cta: 'Quero ver o que está escapando',
  },
}

export const versaoC: LPContent = {
  version: 'C',
  hero: {
    headline: 'O cliente não vê tudo o que torna sua empresa a escolha certa.',
    subheadline:
      'Ele vê o serviço e o preço. Não vê a confiança, a experiência e a reputação que você levou anos pra construir. E é justamente isso que decide a escolha.',
    ctaPrimary: 'Quero ver como minha empresa é percebida',
    ctaSecondary: 'Ou 10 minutos pra entender a oportunidade',
  },
  section2: {
    headline: 'A maioria das empresas mais confiáveis está perdendo cliente todo dia sem perceber.',
    body: [
      'Quando o que decide a escolha fica escondido, acontece o seguinte: alguém pesquisa seu serviço, compara com concorrentes e vai pro outro.',
      'Não porque ele é melhor. Porque a página dele mostrou melhor a confiança que você também tem, mas não soube comunicar. Esse cliente já era seu, e escapou.',
    ],
  },
  section3: {
    headline: 'O cliente vê seus serviços. Nem sempre vê os motivos para escolher você.',
    body: [
      'Na superfície: produto, serviço, preço. É o que todo mundo mostra.',
      'Embaixo, escondido: confiança, experiência, reputação, relacionamento. É o que realmente faz a pessoa escolher.',
      'A maioria das empresas comunica só a superfície. A gente traz o que está embaixo pra cima.',
    ],
  },
  section4: {
    headline: 'Você não precisa de mais um site. Precisa mostrar por que as pessoas escolhem você.',
    body: [
      'A gente não vende site. Site você já podia ter comprado em qualquer lugar.',
      'O que a gente entrega é a sua reputação organizada de um jeito que quem chega pela primeira vez entende, em segundos, por que confiar em você.',
    ],
  },
  section5: {
    headline: 'Como descobrimos o que está escondido',
  },
  section6: {
    headline: 'O que as pessoas dizem quando se veem da forma certa',
  },
  objections: [
    {
      question: '"Já tive site e não fez diferença."',
      answer: 'O problema é a comunicação do que seu público valoriza, não o site.',
    },
    {
      question: '"Vou esperar semanas?"',
      answer: 'Não. Prévia pronta, página no ar em 24h.',
    },
    {
      question: '"É só uma página?"',
      answer: 'Uma venda nova já paga o investimento.',
    },
  ],
  finalCta: {
    headline: 'Sua reputação já existe. Falta fazer ela ser percebida.',
    body: 'A partir de R$ 900 no PIX ou 3x de R$ 400. Análise, prévia personalizada, alinhamento e página em 24h.\n\n10 minutos pra te mostrar como sua empresa é percebida hoje e como poderia ser. Se fizer sentido, seguimos. Se não, fica o diagnóstico de graça.',
    cta: 'Quero ver como minha empresa é percebida',
  },
}

export const processSteps = [
  {
    number: '01',
    title: 'Avaliações no Google.',
    description: 'Quantas, o que dizem, qual padrão se repete.',
  },
  {
    number: '02',
    title: 'Presença no Instagram.',
    description: 'O que você publica, como o público responde.',
  },
  {
    number: '03',
    title: 'Concorrente direto.',
    description: 'Onde ele acerta, onde abre espaço pra você.',
  },
  {
    number: '04',
    title: 'O que seus clientes mais valorizam.',
    description: 'No que está escrito, não no que você imagina.',
  },
  {
    number: '05',
    title: 'A narrativa que falta.',
    description: 'O que existe e não está sendo dito em lugar nenhum.',
  },
]

export const portfolioProjects = [
  {
    name: 'Azure',
    segment: 'Beleza & Estética',
    imageUrl: '/__l5e/assets-v1/7e99cb18-edf6-4c06-9d9f-8d5f8b75701e/portfolio-azure.png',
  },
  {
    name: 'WeMove',
    segment: 'Fitness & Personal',
    imageUrl: '/__l5e/assets-v1/1c90f3a2-15ff-40c7-97e2-c8d6bd54a774/portfolio-wemove.png',
  },
  {
    name: 'Larmond',
    segment: 'Moda & Lifestyle',
    imageUrl: '/__l5e/assets-v1/4845ea8b-0635-4a21-9c3f-f08c3363eaef/portfolio-larmond.png',
  },
  {
    name: 'Heva',
    segment: 'Saúde & Bem-estar',
    imageUrl: '/__l5e/assets-v1/af44ab3d-c0f0-43b0-8328-6a868765f235/portfolio-heva.png',
  },
]

export const wppProofs = [
  new URL('../assets/wpp-proof-1.png', import.meta.url).href,
  new URL('../assets/wpp-proof-2.png', import.meta.url).href,
  new URL('../assets/wpp-proof-3.png', import.meta.url).href,
  new URL('../assets/wpp-proof-4.png', import.meta.url).href,
  new URL('../assets/wpp-proof-5.png', import.meta.url).href,
]

export const WHATSAPP_BASE = 'https://wa.me/5533991294114'

export function whatsappUrl(cta: string): string {
  const text = encodeURIComponent(
    `Olá! Vi a landing page e ${cta.toLowerCase()}. Gostaria de entender melhor.`
  )
  return `${WHATSAPP_BASE}?text=${text}`
}

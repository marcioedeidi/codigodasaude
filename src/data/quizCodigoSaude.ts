export type OpcaoQuiz = 'A' | 'B' | 'C' | 'D'
export type RespostasQuiz = [OpcaoQuiz, OpcaoQuiz, OpcaoQuiz]

type Opcao = { id: OpcaoQuiz; texto: string }
type Pergunta = { titulo: string; opcoes: Opcao[] }

export const perguntasQuiz: Pergunta[] = [
  {
    titulo: 'Se você pudesse deixar para trás algo que carrega em silêncio, o que escolheria?',
    opcoes: [
      { id: 'A', texto: 'O peso de ter que ser forte o tempo inteiro.' },
      { id: 'B', texto: 'A sensação de querer mudar, mas continuar no mesmo lugar.' },
      { id: 'C', texto: 'Os medos e inseguranças que quase ninguém conhece.' },
      { id: 'D', texto: 'A sensação de estar me deixando para depois.' },
    ],
  },
  {
    titulo: 'Se pudesse dedicar mais atenção a uma área da sua vida hoje, qual escolheria?',
    opcoes: [
      { id: 'A', texto: 'Minha rotina de bem-estar, atividade física e hábitos saudáveis.' },
      { id: 'B', texto: 'Minha autoestima, beleza e cuidados pessoais.' },
      { id: 'C', texto: 'Meu crescimento pessoal e meu autoconhecimento.' },
      { id: 'D', texto: 'Quero cuidar de várias áreas e encontrar mais equilíbrio.' },
    ],
  },
  {
    titulo: 'O que faria você sentir que está dando um primeiro passo por si?',
    opcoes: [
      { id: 'A', texto: 'Encontrar um livro que converse com minha história.' },
      { id: 'B', texto: 'Conhecer um produto para incluir na minha rotina, se fizer sentido.' },
      { id: 'C', texto: 'Explorar uma combinação de leitura e autocuidado.' },
      { id: 'D', texto: 'Conversar com alguém antes de escolher.' },
    ],
  },
]

export type FocoQuiz = 'Livros' | 'AlwaysFit' | 'Velmora' | 'Mix'
export type OpcaoParaConhecer = {
  titulo: string
  categoria: string
  descricao: string
  rota: string
}
export type ResultadoQuiz = {
  foco: FocoQuiz
  titulo: string
  descricao: string
  recomendacoes: OpcaoParaConhecer[]
}

const livros: Record<OpcaoQuiz, OpcaoParaConhecer> = {
  A: {
    titulo: 'Mulher Forte, Mente Cansada',
    categoria: 'Livro',
    descricao: 'Leitura sobre acolhimento e espaço para cuidar de si.',
    rota: '/ebooks/mulher-forte-mente-cansada',
  },
  B: {
    titulo: 'Mude Sua Mente, Transforme Sua Vida',
    categoria: 'Livro',
    descricao: 'Uma leitura para refletir sobre novos começos.',
    rota: '/ebooks/mude-sua-mente-transforme-sua-vida',
  },
  C: {
    titulo: 'Eu Sou Terapeuta e Também Tenho Medo',
    categoria: 'Livro',
    descricao: 'Reflexões sobre o cuidado, os medos e o lado humano de quem acolhe.',
    rota: '/ebooks/eu-sou-terapeuta-e-tambem-tenho-medo',
  },
  D: {
    titulo: 'Mulher Forte, Mente Cansada',
    categoria: 'Livro',
    descricao: 'Uma leitura para refletir sobre o próprio tempo e o autocuidado.',
    rota: '/ebooks/mulher-forte-mente-cansada',
  },
}

const alwaysFit: OpcaoParaConhecer = {
  titulo: 'PRO3 Magnésio',
  categoria: 'Linha AlwaysFit',
  descricao: 'Uma opção do catálogo AlwaysFit para conhecer e avaliar as informações do fabricante.',
  rota: '/produtos/pro3-magnesio',
}

const velmora: OpcaoParaConhecer = {
  titulo: 'Celuglow',
  categoria: 'Linha Velmora',
  descricao: 'Uma opção de autocuidado do catálogo para conhecer sem compromisso.',
  rota: '/produtos/celuglow',
}

const ehOpcao = (resposta: unknown): resposta is OpcaoQuiz =>
  resposta === 'A' || resposta === 'B' || resposta === 'C' || resposta === 'D'

export function saoRespostasValidas(valor: unknown): valor is RespostasQuiz {
  return Array.isArray(valor) && valor.length === 3 && valor.every(ehOpcao)
}

export function respostasDoEstado(estado: unknown): RespostasQuiz | null {
  if (!estado || typeof estado !== 'object' || !('respostasQuiz' in estado)) return null
  const respostas = (estado as { respostasQuiz?: unknown }).respostasQuiz
  return saoRespostasValidas(respostas) ? [...respostas] as RespostasQuiz : null
}

/** Seleção editorial por INTERESSE, nunca prescrição ou diagnóstico. */
export function calcularResultadoQuiz(respostas: RespostasQuiz): ResultadoQuiz {
  const [p1, p2, p3] = respostas
  const livro = livros[p1]
  const misto = p3 === 'C' || p2 === 'D'

  if (p3 === 'A') {
    return {
      foco: 'Livros',
      titulo: 'Seu caminho começa pela leitura',
      descricao: 'Você demonstrou interesse em uma leitura que converse com seu momento.',
      recomendacoes: [livro],
    }
  }

  if (misto || (p2 === 'C' && p3 === 'B')) {
    return {
      foco: 'Mix',
      titulo: 'Seu perfil: interesses em equilíbrio',
      descricao: 'Uma seleção para explorar livros e opções das duas linhas, no seu ritmo.',
      recomendacoes: [livro, alwaysFit, velmora],
    }
  }

  if (p2 === 'A') {
    return {
      foco: 'AlwaysFit',
      titulo: 'Seu perfil: rotina e bem-estar',
      descricao: 'Você demonstrou interesse em conhecer opções da linha AlwaysFit.',
      recomendacoes: [alwaysFit],
    }
  }

  if (p2 === 'B') {
    return {
      foco: 'Velmora',
      titulo: 'Seu perfil: beleza e autocuidado',
      descricao: 'Você demonstrou interesse em conhecer opções da linha Velmora.',
      recomendacoes: [velmora],
    }
  }

  return {
    foco: 'Livros',
    titulo: 'Seu perfil: autoconhecimento',
    descricao: 'Você demonstrou interesse em leituras para refletir sobre sua trajetória.',
    recomendacoes: [livro],
  }
}

export function resumoDoQuiz(respostas: RespostasQuiz): { interesse: string; observacoes: string } {
  const resultado = calcularResultadoQuiz(respostas)
  const linha = perguntasQuiz.map((p, index) => {
    const texto = p.opcoes.find(opcao => opcao.id === respostas[index])?.texto || ''
    return 'Pergunta ' + (index + 1) + ': ' + texto
  })
  const produtos = resultado.recomendacoes.map(item => item.titulo).join(', ')
  return {
    interesse: 'Quiz — ' + resultado.foco + ': ' + produtos,
    observacoes: [
      '[QUIZ CÓDIGO DA SAÚDE]',
      ...linha,
      'Perfil de interesse: ' + resultado.foco,
      'Opções apresentadas: ' + produtos,
      '[/QUIZ]',
    ].join('\n'),
  }
}

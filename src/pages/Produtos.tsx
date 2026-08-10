import React, { useState } from 'react'

type Product = {
  name: string
  description: string
  short: string
  badge?: string
  gift?: boolean
}

const topProducts: Product[] = [
  {
    name: 'Velmo Black Drink',
    description: 'Mais energia, foco e disposição para transformar seus dias.',
    short: 'VELMO BLACK\nDRINK',
    badge: '🔥 MAIS VENDIDOS',
    gift: true,
  },
  {
    name: 'Combo Velmo Black Drink',
    description: 'Os dois sabores do Velmo Black Drink em um único combo. Morango + Tangerina para você variar todos os dias.',
    short: 'VELMO BLACK\nMORANGO + TANGERINA',
    gift: true,
  },
  {
    name: 'Velmo Black Cápsulas',
    description: 'Uma fórmula prática para quem busca mais disposição e qualidade de vida no dia a dia.',
    short: 'VELMO BLACK\nCÁPSULAS',
    badge: '🔥 MAIS VENDIDOS',
    gift: true,
  },
  {
    name: 'Creatina Gummy',
    description: 'Creatina em formato de goma para quem busca praticidade na rotina de suplementação.',
    short: 'CREATINA\nGUMMY',
    badge: '🔥 MAIS VENDIDOS',
  },
  {
    name: 'Fiber Slim',
    description: 'Uma excelente opção para complementar uma alimentação equilibrada com fibras de qualidade.',
    short: 'FIBER\nSLIM',
  },
]

const moreProducts: Product[] = [
  {
    name: 'Termo Drink',
    description: 'Uma bebida funcional para complementar uma rotina ativa com mais disposição e energia.',
    short: 'TERMO\nDRINK',
  },
  {
    name: 'CreaGym',
    description: 'Creatina monohidratada de alta qualidade para potencializar treinos e desempenho físico.',
    short: 'CREAGYM',
  },
  {
    name: 'Skin-Fit',
    description: 'Colágeno desenvolvido para contribuir com os cuidados da pele, beleza e bem-estar.',
    short: 'SKIN-FIT',
  },
  {
    name: 'Movimint',
    description: 'Uma solução pensada para quem deseja cuidar da mobilidade e do bem-estar diariamente.',
    short: 'MOVIMINT',
  },
  {
    name: 'Calminol',
    description: 'Gel creme para massagem com ação refrescante e ingredientes naturais que promovem bem-estar.',
    short: 'CALMINOL',
  },
  {
    name: 'HeyHair',
    description: 'Um cuidado especial para quem deseja fortalecer cabelos, pele e unhas de dentro para fora.',
    short: 'HEYHAIR',
    badge: '🔥 MAIS VENDIDOS',
  },
]

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    window.setTimeout(() => setClicked(false), 1800)
  }

  return (
    <article className="relative flex min-h-[315px] flex-col rounded-[22px] border border-white/80 bg-white/85 p-4 shadow-[0_8px_28px_rgba(17,91,78,0.10)] backdrop-blur-sm">
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-xl border border-[#e5b032] bg-[#ffd95b] px-2.5 py-1.5 text-[10px] font-black text-[#3c2a00] shadow-sm">
          {product.badge}
        </span>
      )}

      <div className="flex min-h-[135px] items-center justify-center pt-4">
        <div className="relative flex h-[125px] w-[115px] items-center justify-center rounded-[26px] border border-white/70 bg-[linear-gradient(150deg,#062f2d_0%,#0d6861_62%,#91ddd4_100%)] px-3 text-center text-sm font-black leading-tight text-white shadow-[0_16px_24px_rgba(4,64,59,0.22)]">
          <span className="whitespace-pre-line">{product.short}</span>
          <div className="absolute -bottom-2 h-3 w-20 rounded-full bg-black/15 blur-sm" />
        </div>
        {product.gift && (
          <div className="ml-2 flex h-[92px] w-[58px] items-center justify-center rounded-xl border border-[#d9c999] bg-[#fff8df] px-1 text-center text-[9px] font-bold leading-tight text-[#5b4b24] shadow-sm">
            🎁\nBRINDE\nE-BOOK
          </div>
        )}
      </div>

      <h2 className="mt-2 text-center text-[17px] font-black text-[#113b33]">{product.name}</h2>
      <p className="mx-auto mt-2 max-w-[230px] text-center text-[12px] leading-[1.45] text-[#243d38]">{product.description}</p>

      <button
        type="button"
        onClick={handleClick}
        className="mt-auto self-center rounded-full bg-[#075447] px-5 py-2 text-[12px] font-bold text-white shadow-[0_7px_15px_rgba(7,84,71,0.20)] transition hover:-translate-y-0.5 active:scale-95"
      >
        {clicked ? 'Produto selecionado ✓' : 'Conhecer Produto  ➜'}
      </button>
    </article>
  )
}

const Produtos: React.FC = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#e8faf6_0%,#d9f2ed_100%)] text-[#153f36]">
      <section className="border-y border-white/50 bg-[#07958d] px-4 py-2 text-white shadow-sm">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-8 gap-y-1 text-center text-[12px] font-semibold md:text-sm">
          <span>🛡 Compra 100% segura</span>
          <span>🔒 Acesso imediato</span>
          <span>☆ Conteúdo de qualidade com base científica e linguagem humana</span>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1536px] px-4 py-5 md:px-8">
        <div className="pointer-events-none absolute left-0 top-0 text-[90px] opacity-20">🌿</div>
        <div className="pointer-events-none absolute right-0 top-0 -scale-x-100 text-[90px] opacity-20">🌿</div>

        <div className="relative z-10 text-center">
          <h1 className="font-serif text-[44px] font-bold leading-none text-[#143e35] md:text-[64px]">Nossas Soluções</h1>
          <div className="mx-auto mt-2 flex max-w-[320px] items-center gap-3 text-[#9d8345]">
            <span className="h-px flex-1 bg-[#bda86d]" />
            <span className="text-xl">♡</span>
            <span className="h-px flex-1 bg-[#bda86d]" />
          </div>
          <p className="mt-2 text-lg font-semibold md:text-[21px]">Cada pessoa tem um objetivo diferente. <span className="text-[#5b2789]">Qual é o seu?</span></p>
          <p className="mt-1 text-[24px] font-black text-[#1a6b55]">⭐ Novidades ⭐</p>
        </div>

        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {topProducts.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>

        <div className="relative z-10 my-3 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#d3be78]" />
          <h2 className="text-center font-serif text-[25px] font-bold text-[#1c634f] md:text-[31px]">🌿 Mais Soluções para sua Saúde</h2>
          <span className="h-px flex-1 bg-[#d3be78]" />
        </div>

        <div className="relative z-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {moreProducts.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>

        <div className="relative z-10 mt-5 grid overflow-hidden rounded-[24px] border border-white/70 bg-[#d6f1eb] shadow-[0_8px_24px_rgba(18,96,82,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['🛡', 'Compra 100% Segura', 'Seus dados e pagamentos protegidos.'],
            ['🚚', 'Entrega para todo o Brasil', 'Com rastreio e entrega rápida.'],
            ['🏅', 'Garantia de Satisfação', 'Ou seu dinheiro de volta sem burocracia.'],
            ['🔒', 'Ambiente Seguro', 'Site protegido e certificado.'],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-3 border-white/70 p-4 lg:border-r last:border-r-0">
              <span className="text-3xl">{icon}</span>
              <div>
                <p className="font-black text-[#173f37]">{title}</p>
                <p className="text-xs leading-relaxed text-[#314b45]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Produtos

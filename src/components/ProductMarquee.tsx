import React from 'react'
import { Link } from 'react-router-dom'

type MarqueeItem = {
  name: string
  kind: 'logo' | 'product'
  x?: string
  y?: string
  size?: string
}

const items: MarqueeItem[] = [
  { name: 'Código da Saúde', kind: 'logo' },
  { name: 'Velmo Black Drink', kind: 'product', x: '5%', y: '30%', size: '520% auto' },
  { name: 'Combo Velmo Black Drink', kind: 'product', x: '30%', y: '30%', size: '520% auto' },
  { name: 'Velmo Black Cápsulas', kind: 'product', x: '54%', y: '30%', size: '520% auto' },
  { name: 'Creatina Gummy', kind: 'product', x: '77%', y: '30%', size: '520% auto' },
  { name: 'Fiber Slim', kind: 'product', x: '96%', y: '30%', size: '520% auto' },
  { name: 'Termo Drink', kind: 'product', x: '4%', y: '91%', size: '650% auto' },
  { name: 'CreaGym', kind: 'product', x: '22%', y: '91%', size: '650% auto' },
  { name: 'Skin-Fit', kind: 'product', x: '38%', y: '91%', size: '650% auto' },
  { name: 'Movimint', kind: 'product', x: '56%', y: '91%', size: '650% auto' },
  { name: 'Calminol', kind: 'product', x: '74%', y: '91%', size: '650% auto' },
  { name: 'HeyHair', kind: 'product', x: '93%', y: '91%', size: '650% auto' },
]

const ProductMarquee: React.FC = () => {
  const logo = `${import.meta.env.BASE_URL}assets/logo-small.webp`
  const productsArtwork = `${import.meta.env.BASE_URL}assets/produtos-page-v3.webp?v=faixa-produtos-1`
  const loopItems = [...items, ...items]

  return (
    <section className="w-full overflow-hidden bg-[linear-gradient(180deg,#e8f8f4_0%,#d2f0ea_100%)] py-8 md:py-10" aria-label="Conheça nossos produtos">
      <div className="mx-auto mb-5 flex w-full max-w-[1420px] items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#158b80]">Código da Saúde</p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#10372f] sm:text-3xl md:text-4xl">Conheça nossas soluções</h2>
        </div>
        <span className="hidden rounded-full border border-[#8fd1c7] bg-white/75 px-5 py-2 text-sm font-extrabold text-[#12675f] shadow-sm sm:inline-flex">
          Ver todos os produtos →
        </span>
      </div>

      <Link
        to="/produtos"
        aria-label="Ver todos os produtos do Código da Saúde"
        className="group block w-full border-y border-white/80 bg-white/45 py-4 shadow-[0_10px_28px_rgba(28,103,92,0.10)] outline-none focus-visible:ring-4 focus-visible:ring-[#168f82]/50"
      >
        <div className="relative overflow-hidden">
          <div className="product-marquee-track flex w-max items-center gap-4 px-4 sm:gap-5 sm:px-6">
            {loopItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative h-[126px] w-[174px] shrink-0 overflow-hidden rounded-[22px] border-[3px] border-white bg-[#eaf7f3] shadow-[0_10px_24px_rgba(23,91,80,0.16)] sm:h-[140px] sm:w-[194px]"
                aria-hidden={index >= items.length}
              >
                {item.kind === 'logo' ? (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_0%,#dcf3ee_68%,#c7eae3_100%)] p-4">
                    <img src={logo} alt="Código da Saúde" className="max-h-[104px] w-auto max-w-full object-contain" draggable={false} />
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 scale-[1.03] bg-no-repeat transition duration-500 group-hover:scale-[1.07]"
                      style={{
                        backgroundImage: `url(${productsArtwork})`,
                        backgroundSize: item.size,
                        backgroundPosition: `${item.x} ${item.y}`,
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073d37]/90 via-[#073d37]/55 to-transparent px-3 pb-2 pt-8">
                      <p className="truncate text-center text-xs font-black text-white sm:text-sm">{item.name}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center px-4 sm:hidden">
          <span className="rounded-full bg-[#07534c] px-5 py-2 text-sm font-black text-white shadow-md">Ver todos os produtos →</span>
        </div>
      </Link>

      <style>{`
        .product-marquee-track {
          animation: product-marquee-scroll 42s linear infinite;
          will-change: transform;
        }

        .group:hover .product-marquee-track {
          animation-play-state: paused;
        }

        @keyframes product-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-marquee-track {
            animation-duration: 90s;
          }
        }
      `}</style>
    </section>
  )
}

export default ProductMarquee

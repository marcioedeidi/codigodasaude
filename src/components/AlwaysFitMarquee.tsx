import React from 'react'
import { Link } from 'react-router-dom'

type AlwaysFitItem = {
  name: string
  kind: 'logo' | 'product'
  x?: string
}

const items: AlwaysFitItem[] = [
  { name: 'Código da Saúde', kind: 'logo' },
  { name: 'NAC', kind: 'product', x: '15%' },
  { name: 'FIT DREAMS', kind: 'product', x: '28%' },
  { name: 'FIT HAIR', kind: 'product', x: '41%' },
  { name: 'Vitaminas B6 B9 B12', kind: 'product', x: '53%' },
  { name: 'Q10 Coenzima', kind: 'product', x: '66%' },
  { name: 'PRO+ Magnésio', kind: 'product', x: '79%' },
  { name: 'PRO Curcumin', kind: 'product', x: '92%' },
  { name: 'FITS36', kind: 'product', x: '100%' },
]

const AlwaysFitMarquee: React.FC = () => {
  const logo = `${import.meta.env.BASE_URL}assets/logo-small.webp`
  const artwork = `${import.meta.env.BASE_URL}assets/faixa-alwaysfit-codigo-saude.webp?v=4`
  const loopItems = [...items, ...items]

  return (
    <section
      className="w-full overflow-hidden bg-[linear-gradient(180deg,#e8f8f4_0%,#d2f0ea_100%)] py-8 md:py-10"
      aria-label="Conheça a linha AlwaysFit"
    >
      <div className="mx-auto mb-5 flex w-full max-w-[1420px] items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#158b80]">Linha AlwaysFit</p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#10372f] sm:text-3xl md:text-4xl">
            Conheça nossas soluções
          </h2>
        </div>
        <span className="hidden rounded-full border border-[#8fd1c7] bg-white/75 px-5 py-2 text-sm font-extrabold text-[#12675f] shadow-sm sm:inline-flex">
          Ver todos os produtos →
        </span>
      </div>

      <Link
        to="/produtos"
        aria-label="Ver todos os produtos da linha AlwaysFit"
        className="alwaysfit-marquee-group block w-full border-y border-white/80 bg-white/45 py-4 shadow-[0_10px_28px_rgba(28,103,92,0.10)] outline-none focus-visible:ring-4 focus-visible:ring-[#168f82]/50"
      >
        <div className="relative overflow-hidden">
          <div className="alwaysfit-marquee-track flex w-max items-center gap-4 px-4 sm:gap-5 sm:px-6">
            {loopItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative h-[126px] w-[174px] shrink-0 overflow-hidden rounded-[22px] border-[3px] border-white bg-[#eaf7f3] shadow-[0_10px_24px_rgba(23,91,80,0.16)] sm:h-[140px] sm:w-[194px]"
                aria-hidden={index >= items.length}
              >
                {item.kind === 'logo' ? (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_0%,#dcf3ee_68%,#c7eae3_100%)] p-4">
                    <img
                      src={logo}
                      alt="Código da Saúde"
                      className="max-h-[104px] w-auto max-w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 scale-[1.03] bg-no-repeat transition duration-500 group-hover:scale-[1.07]"
                      style={{
                        backgroundImage: `url(${artwork})`,
                        backgroundSize: '520% auto',
                        backgroundPosition: `${item.x} 67%`,
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
          <span className="rounded-full bg-[#07534c] px-5 py-2 text-sm font-black text-white shadow-md">
            Ver todos os produtos →
          </span>
        </div>
      </Link>

      <style>{`
        .alwaysfit-marquee-track {
          animation: alwaysfit-marquee-scroll 38s linear infinite;
          will-change: transform;
        }

        .alwaysfit-marquee-group:hover .alwaysfit-marquee-track {
          animation-play-state: paused;
        }

        @keyframes alwaysfit-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .alwaysfit-marquee-track {
            animation-duration: 90s;
          }
        }
      `}</style>
    </section>
  )
}

export default AlwaysFitMarquee

import React from 'react'
import { Link } from 'react-router-dom'

type AlwaysFitItem = {
  name: string
  kind: 'logo' | 'product'
  image?: string
}

const items: AlwaysFitItem[] = [
  { name: 'Código da Saúde', kind: 'logo' },
  { name: 'NAC', kind: 'product', image: 'assets/alwaysfit/nac.svg' },
  { name: 'FIT DREAMS', kind: 'product', image: 'assets/alwaysfit/fit-dreams.svg' },
  { name: 'FIT HAIR', kind: 'product', image: 'assets/alwaysfit/fit-hair.svg' },
  { name: 'Vitaminas B6 B9 B12', kind: 'product', image: 'assets/alwaysfit/vitaminas-b6-b9-b12.svg' },
  { name: 'Q10 Coenzima', kind: 'product', image: 'assets/alwaysfit/q10.svg' },
  { name: 'PRO3 Magnésio', kind: 'product', image: 'assets/alwaysfit/pro3-magnesio.svg' },
  { name: 'Picolinato de Cromo', kind: 'product', image: 'assets/alwaysfit/picolinato-cromo.svg' },
  { name: 'PRO Curcumin', kind: 'product', image: 'assets/alwaysfit/pro-curcumin.svg' },
  { name: 'FITS36', kind: 'product', image: 'assets/alwaysfit/fits36.svg' },
]

const AlwaysFitMarquee: React.FC = () => {
  const logo = `${import.meta.env.BASE_URL}assets/logo-small.webp`

  const renderItems = (duplicate: boolean) =>
    items.map((item, index) => (
      <div
        key={`${duplicate ? 'duplicate-' : ''}${item.name}-${index}`}
        className="relative flex h-[138px] w-[176px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border-[3px] border-white bg-white shadow-[0_10px_24px_rgba(23,91,80,0.16)] sm:h-[150px] sm:w-[194px]"
        aria-hidden={duplicate}
      >
        {item.kind === 'logo' ? (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_0%,#dcf3ee_68%,#c7eae3_100%)] p-4">
            <img
              src={logo}
              alt="Código da Saúde"
              className="max-h-[100px] w-auto max-w-[90%] object-contain"
              draggable={false}
            />
          </div>
        ) : (
          <>
            <div className="flex h-full w-full items-center justify-center px-5 pb-8 pt-3">
              <img
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={duplicate ? '' : item.name}
                className="max-h-[104px] w-auto max-w-[92%] object-contain transition duration-500 hover:scale-105"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073d37]/95 via-[#073d37]/70 to-transparent px-3 pb-2 pt-7">
              <p className="truncate text-center text-xs font-black text-white sm:text-sm">{item.name}</p>
            </div>
          </>
        )}
      </div>
    ))

  return (
    <section
      className="w-full overflow-hidden bg-[linear-gradient(180deg,#e8f8f4_0%,#d2f0ea_100%)] py-7 md:py-9"
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
          <div className="alwaysfit-marquee-track">
            <div className="alwaysfit-marquee-set flex shrink-0 items-center gap-4 px-4 sm:gap-5 sm:px-6">
              {renderItems(false)}
            </div>
            <div className="alwaysfit-marquee-set flex shrink-0 items-center gap-4 px-4 sm:gap-5 sm:px-6" aria-hidden="true">
              {renderItems(true)}
            </div>
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
          display: flex;
          width: max-content;
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

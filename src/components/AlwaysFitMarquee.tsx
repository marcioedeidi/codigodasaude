import React from 'react'
import { Link } from 'react-router-dom'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'

type AlwaysFitItem = {
  name: string
  kind: 'logo' | 'product'
  x?: string
  y?: string
  size?: string
}

const items: AlwaysFitItem[] = [
  { name: 'AlwaysFit', kind: 'logo', x: '0%', y: '8%', size: '150% auto' },
  { name: 'NAC', kind: 'product', x: '45%', y: '45%', size: '420% auto' },
  { name: 'FIT DREAMS', kind: 'product', x: '59%', y: '28%', size: '420% auto' },
  { name: 'FIT HAIR', kind: 'product', x: '73%', y: '23%', size: '420% auto' },
  { name: 'Vitaminas B6, B9, B12', kind: 'product', x: '69%', y: '53%', size: '420% auto' },
  { name: 'Q10 Coenzima', kind: 'product', x: '92%', y: '37%', size: '420% auto' },
  { name: 'PRO+ Magnésio', kind: 'product', x: '57%', y: '72%', size: '420% auto' },
  { name: 'PRO Curcumin', kind: 'product', x: '81%', y: '72%', size: '420% auto' },
  { name: 'FITS36', kind: 'product', x: '94%', y: '70%', size: '420% auto' },
]

const AlwaysFitMarquee: React.FC = () => {
  const artwork = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`
  const loopItems = [...items, ...items]

  return (
    <section
      className="w-full overflow-hidden bg-[linear-gradient(180deg,#eef9f6_0%,#d9f2ec_100%)] py-8 md:py-10"
      aria-label="Conheça a linha AlwaysFit"
    >
      <div className="mx-auto mb-5 flex w-full max-w-[1420px] items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#158b80]">Linha AlwaysFit</p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#10372f] sm:text-3xl md:text-4xl">
            Bem-estar em movimento
          </h2>
        </div>
        <span className="hidden rounded-full border border-[#8fd1c7] bg-white/75 px-5 py-2 text-sm font-extrabold text-[#12675f] shadow-sm sm:inline-flex">
          Conhecer a linha →
        </span>
      </div>

      <Link
        to="/produtos"
        aria-label="Conhecer os produtos AlwaysFit"
        className="alwaysfit-marquee-group block w-full border-y border-white/80 bg-white/48 py-4 shadow-[0_10px_28px_rgba(28,103,92,0.10)] outline-none focus-visible:ring-4 focus-visible:ring-[#168f82]/50"
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
                  <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#e7f6f2_70%,#d3eee8_100%)]">
                    <div
                      className="absolute inset-0 bg-no-repeat"
                      style={{
                        backgroundImage: `url(${artwork})`,
                        backgroundSize: item.size,
                        backgroundPosition: `${item.x} ${item.y}`,
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent px-3 pb-2 pt-7">
                      <p className="text-center text-xs font-black tracking-wide text-[#183969] sm:text-sm">AlwaysFit</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 scale-[1.02] bg-no-repeat transition duration-500 group-hover:scale-[1.06]"
                      style={{
                        backgroundImage: `url(${artwork})`,
                        backgroundSize: item.size,
                        backgroundPosition: `${item.x} ${item.y}`,
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073d37]/92 via-[#073d37]/58 to-transparent px-3 pb-2 pt-8">
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
            Conhecer a linha AlwaysFit →
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

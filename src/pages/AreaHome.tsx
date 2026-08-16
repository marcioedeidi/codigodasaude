import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`
  const faixaAlwaysFit = `${import.meta.env.BASE_URL}assets/faixa-alwaysfit-codigo-saude.webp?v=3`

  return (
    <main className="w-full bg-[#9fded7]">
      <section className="w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1536 / 920' }}>
          <img
            src={heroImage}
            alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios"
            className="absolute inset-0 block h-full w-full select-none object-contain"
            draggable={false}
          />
          <Link
            to="/produtos"
            aria-label="Conhecer os produtos"
            className="absolute left-[3.97%] top-[57.28%] z-20 h-[8.92%] w-[22.40%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
          <Link
            to="/cadastro"
            aria-label="Falar no WhatsApp"
            className="absolute left-[27.34%] top-[57.28%] z-20 h-[8.92%] w-[12.30%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
        </div>
      </section>

      <ProductMarquee />

      <section className="w-full overflow-hidden bg-[#a8ded6]" aria-label="Linha AlwaysFit">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1100 / 619' }}>
          <img
            src={alwaysFitImage}
            alt="AlwaysFit — suplementos selecionados para equilíbrio, energia e bem-estar"
            className="absolute inset-0 block h-full w-full select-none object-cover"
            draggable={false}
          />
          <Link
            to="/produtos"
            aria-label="Conhecer os produtos AlwaysFit"
            className="absolute left-[7.1%] top-[63.5%] z-20 h-[7.4%] w-[19.8%] rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
        </div>
      </section>

      <TestimonialGallery />

      <section
        className="w-full overflow-hidden bg-[#eef7f4] py-5 md:py-7"
        aria-label="Esteira da linha AlwaysFit"
      >
        <div className="relative w-full overflow-hidden">
          <div className="alwaysfit-banner-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <Link
                key={copy}
                to="/produtos"
                aria-label={copy === 0 ? 'Conhecer a linha AlwaysFit' : undefined}
                aria-hidden={copy === 1}
                tabIndex={copy === 1 ? -1 : 0}
                className="block shrink-0 overflow-hidden bg-white/60 outline-none focus-visible:ring-4 focus-visible:ring-[#168f82]/50"
                style={{ width: 'min(1100px, 92vw)' }}
              >
                <img
                  src={faixaAlwaysFit}
                  alt={copy === 0 ? 'Conheça a linha AlwaysFit — Código da Saúde' : ''}
                  className="block h-auto w-full select-none"
                  draggable={false}
                />
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .alwaysfit-banner-track {
            animation: alwaysfit-banner-scroll 28s linear infinite;
            will-change: transform;
          }

          .alwaysfit-banner-track:hover {
            animation-play-state: paused;
          }

          @keyframes alwaysfit-banner-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (prefers-reduced-motion: reduce) {
            .alwaysfit-banner-track {
              animation-duration: 70s;
            }
          }
        `}</style>
      </section>
    </main>
  )
}

export default AreaHome

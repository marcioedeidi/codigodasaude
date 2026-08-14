import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `${import.meta.env.BASE_URL}assets/alwaysfit-dobra.webp?v=alwaysfit-dobra-v1`

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

      <TestimonialGallery />
      <ProductMarquee />

      <section className="w-full overflow-hidden bg-[#a8ded6]" aria-label="Linha AlwaysFit">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
          <img
            src={alwaysFitImage}
            alt="AlwaysFit — suplementos selecionados para equilíbrio, energia e bem-estar"
            className="absolute inset-0 block h-full w-full select-none object-contain"
            draggable={false}
          />
          <Link
            to="/produtos"
            aria-label="Conhecer os produtos AlwaysFit"
            className="absolute left-[6.8%] top-[63.3%] z-20 h-[7.1%] w-[20.5%] rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
        </div>
      </section>
    </main>
  )
}

export default AreaHome

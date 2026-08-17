import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import AlwaysFitMarquee from '../components/AlwaysFitMarquee'
import Ebooks from './Ebooks'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`

  return (
    <main className="w-full bg-[#9fded7]">
      <section className="w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1536 / 920' }}>
          <img src={heroImage} alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios" className="absolute inset-0 block h-full w-full select-none object-contain" draggable={false} />
          <Link to="/produtos" aria-label="Conhecer os produtos" className="absolute left-[3.97%] top-[57.28%] z-20 h-[8.92%] w-[22.40%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90" />
          <Link to="/cadastro" aria-label="Falar no WhatsApp" className="absolute left-[27.34%] top-[57.28%] z-20 h-[8.92%] w-[12.30%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90" />
        </div>
      </section>

      <TestimonialGallery brand="velmora" />
      <ProductMarquee />

      <section className="w-full overflow-hidden bg-[#a8ded6]" aria-label="Linha AlwaysFit">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1100 / 619' }}>
          <img src={alwaysFitImage} alt="AlwaysFit — suplementos selecionados para equilíbrio, energia e bem-estar" className="absolute inset-0 block h-full w-full select-none object-cover" draggable={false} />
          <Link to="/produtos" aria-label="Conhecer os produtos AlwaysFit" className="absolute left-[7.1%] top-[63.5%] z-20 h-[7.4%] w-[19.8%] rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90" />
        </div>
      </section>

      <TestimonialGallery brand="alwaysfit" />
      <AlwaysFitMarquee />

      <section id="ebooks" className="w-full bg-[#9fded7] scroll-mt-[104px]">
        <div className="mx-auto flex min-h-[760px] w-full max-w-[1536px] items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid w-full items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20 lg:gap-28">
            <div className="flex min-h-[620px] w-full items-center justify-center rounded-[36px] bg-white/45 p-8 sm:p-12 lg:p-16">
              <img
                src={`${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`}
                alt="E-book Código da Saúde"
                className="block h-auto max-h-[680px] w-full max-w-[560px] object-contain drop-shadow-[0_24px_45px_rgba(8,70,63,0.22)]"
                draggable={false}
              />
            </div>
            <div className="flex min-h-[620px] flex-col justify-center text-center md:text-left">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#126f67]">Conteúdo exclusivo</p>
              <h2 className="mt-4 text-5xl font-bold leading-[1.05] text-[#10372f] sm:text-6xl lg:text-7xl">E-books Código da Saúde</h2>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-[#355b54] lg:text-2xl">Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#46615b]">Conteúdos digitais preparados para ampliar seu conhecimento e apoiar decisões mais conscientes para sua saúde e qualidade de vida.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AreaHome

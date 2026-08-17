import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import AlwaysFitMarquee from '../components/AlwaysFitMarquee'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`
  const ebookImage = `${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`

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
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1536px] items-center px-6 py-14 sm:px-10 lg:min-h-[680px] lg:px-14 lg:py-16">
          <div className="grid w-full items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="flex h-full min-h-[500px] items-center justify-center">
              <img src={ebookImage} alt="E-book Código da Saúde" className="block h-[500px] w-auto max-w-full object-contain drop-shadow-[0_22px_42px_rgba(8,70,63,0.22)] sm:h-[560px] lg:h-[600px]" draggable={false} />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#126f67]">Conteúdo exclusivo</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#10372f] sm:text-5xl lg:text-6xl">E-books Código da Saúde</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#355b54] sm:text-xl">Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AreaHome

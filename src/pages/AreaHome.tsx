import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import AlwaysFitMarquee from '../components/AlwaysFitMarquee'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'
import footerImage from '../assets/footer/rodape.png'

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
      <section id="ebooks" className="w-full overflow-hidden bg-[#9fded7] scroll-mt-[104px]">
        <img src={ebookImage} alt="E-books Código da Saúde" className="block h-auto w-full max-w-none object-cover" draggable={false} />
      </section>
      <section className="w-full overflow-hidden bg-[#9fded7]" aria-label="Rodapé">
        <img src={footerImage} alt="Código da Saúde — rodapé" className="block h-auto w-full max-w-none object-cover" draggable={false} />
      </section>
    </main>
  )
}

export default AreaHome

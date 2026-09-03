import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import AlwaysFitMarquee from '../components/AlwaysFitMarquee'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'
import ebookImage from '../assets/livros/file_00000000e974820ea169cab1c1a81f5b.png'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`

  return (
    <main className="w-full bg-[#9fded7]">
      <section className="w-full">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img src={heroImage} alt="Código da Saúde" className="relative z-0 block h-auto w-full max-w-none select-none" draggable={false} />
          <Link to="/produtos/alwaysfit" aria-label="Conhecer os produtos" className="absolute left-[3.97%] top-[48.10%] z-20 h-[10.66%] w-[22.40%] rounded-[20px] bg-transparent" />
          <Link to="/cadastro" aria-label="Falar no WhatsApp" className="absolute left-[27.34%] top-[48.10%] z-20 h-[10.66%] w-[12.30%] rounded-[20px] bg-transparent" />
        </div>
      </section>
      <TestimonialGallery brand="velmora" />
      <ProductMarquee />
      <section className="w-full overflow-hidden bg-[#a8ded6]" aria-label="Linha AlwaysFit">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1100 / 619' }}>
          <img src={alwaysFitImage} alt="AlwaysFit" className="absolute inset-0 block h-full w-full select-none object-cover" draggable={false} />
          <Link to="/produtos/alwaysfit" aria-label="Conhecer os produtos AlwaysFit" className="absolute left-[7.1%] top-[63.5%] z-20 h-[7.4%] w-[19.8%] rounded-full bg-transparent" />
        </div>
      </section>
      <TestimonialGallery brand="alwaysfit" />
      <AlwaysFitMarquee />
      <section id="ebooks" className="w-full bg-[#9fded7]">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img src={ebookImage} alt="E-books Código da Saúde" className="block h-auto w-full select-none" draggable={false} />
          <Link to="/cadastro" className="absolute left-[27%] top-[54.9%] z-30 h-[7.5%] w-[16.5%] bg-transparent" />
          <Link to="/cadastro" className="absolute left-[73.5%] top-[54.9%] z-30 h-[7.5%] w-[16.5%] bg-transparent" />
        </div>
      </section>
    </main>
  )
}

export default AreaHome

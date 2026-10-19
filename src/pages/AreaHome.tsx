import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import ProductMarquee from '../components/ProductMarquee'
import AlwaysFitMarquee from '../components/AlwaysFitMarquee'
import alwaysFitImagePart1 from '../data/alwaysfitImagePart1'
import alwaysFitImagePart2 from '../data/alwaysfitImagePart2'
import alwaysFitImagePart3 from '../data/alwaysfitImagePart3'
import alwaysFitImagePart4 from '../data/alwaysfitImagePart4'
import ebookImage from '../assets/livros/E-books que transformam vidas ultima ediçao.png'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const alwaysFitImage = `data:image/webp;base64,${alwaysFitImagePart1}${alwaysFitImagePart2}${alwaysFitImagePart3}${alwaysFitImagePart4}`

  return (
    <main className="w-full bg-[#9fded7]">
      <section className="w-full">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img src={heroImage} alt="Código da Saúde" className="relative z-0 block h-auto w-full max-w-none select-none" draggable={false} />
          <Link to="/produtos" aria-label="Conhecer os produtos" className="absolute left-[3.97%] top-[48.10%] z-20 h-[10.66%] w-[22.40%] rounded-[20px] bg-transparent" />
          <Link to="/cadastro" aria-label="Falar no WhatsApp" className="absolute left-[27.34%] top-[48.10%] z-20 h-[10.66%] w-[12.30%] rounded-[20px] bg-transparent" />
        </div>
      </section>
      <TestimonialGallery brand="velmora" compact />
      <ProductMarquee />
      <section className="w-full overflow-hidden bg-[#a8ded6]" aria-label="Linha AlwaysFit">
        <div className="relative mx-auto w-full max-w-[1536px] overflow-hidden" style={{ aspectRatio: '1100 / 619' }}>
          <img src={alwaysFitImage} alt="AlwaysFit" className="block h-full w-full select-none object-cover" draggable={false} />
          <Link to="/produtos" aria-label="Conhecer os produtos AlwaysFit" className="absolute inset-0 z-20 block h-full w-full" />
        </div>
      </section>
      <TestimonialGallery brand="alwaysfit" compact />
      <AlwaysFitMarquee />
      <section id="ebooks" className="w-full bg-[#9fded7]">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img src={ebookImage} alt="E-books Código da Saúde" className="block h-auto w-full select-none" draggable={false} />
          <Link to="/ebooks/mulher-forte-mente-cansada" aria-label="Abrir o livro Mulher Forte, Mente Cansada" title="Abrir o livro Mulher Forte, Mente Cansada" className="absolute left-[3%] top-[23%] z-30 h-[75%] w-[31%] cursor-pointer bg-transparent" />
          <Link to="/ebooks/mude-sua-mente-transforme-sua-vida" aria-label="Abrir o livro Mude Sua Mente, Transforme Sua Vida" title="Abrir o livro Mude Sua Mente, Transforme Sua Vida" className="absolute left-[35%] top-[23%] z-30 h-[75%] w-[30%] cursor-pointer bg-transparent" />
          <Link to="/ebooks/eu-sou-terapeuta-e-tambem-tenho-medo" aria-label="Abrir o livro Eu Sou Terapeuta e Também Tenho Medo" title="Abrir o livro Eu Sou Terapeuta e Também Tenho Medo" className="absolute left-[66%] top-[23%] z-30 h-[75%] w-[32%] cursor-pointer bg-transparent" />
        </div>
      </section>
    </main>
  )
}

export default AreaHome

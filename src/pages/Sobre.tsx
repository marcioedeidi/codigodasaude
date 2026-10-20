import React from 'react'
import { Link } from 'react-router-dom'

const Sobre: React.FC = () => {
  const bannerImage = `${import.meta.env.BASE_URL}assets/Banner%20de%20Bem-Estar%20com%20Fonte%20de%20Bambu.png`

  return (
    <main id="sobre" className="w-full bg-[#9fded7]">
      <h1 className="sr-only">Sobre Nós — Código da Saúde</h1>
      <section aria-label="Sobre Nós: nosso propósito, bem-estar, conhecimento e confiança" className="w-full">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img
            src={bannerImage}
            alt="Sobre Nós — Código da Saúde. Nosso propósito é oferecer informações e soluções para uma vida mais equilibrada. Bem-estar, conhecimento e confiança, com fonte de bambu sobre um fundo verde-água."
            className="block h-auto w-full select-none"
            draggable={false}
          />
          <Link
            to="/produtos"
            aria-label="Conheça nossos produtos"
            title="Conheça nossos produtos"
            className="absolute left-[49.3%] top-[85.8%] z-10 h-[7%] w-[32.8%] cursor-pointer rounded-full bg-transparent focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#087e76]"
          />
        </div>
      </section>
    </main>
  )
}

export default Sobre

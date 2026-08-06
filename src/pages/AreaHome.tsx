import React from 'react'
import { Link } from 'react-router-dom'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-reference.webp`

  return (
    <main className="bg-[#9fded7]">
      <section className="w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1536px]">
          <img
            src={heroImage}
            alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios"
            className="block h-auto w-full select-none"
            draggable={false}
          />

          {/*
            A arte inteira é uma única imagem aprovada.
            Estes links são somente áreas transparentes sobre os dois botões
            que já aparecem desenhados dentro da imagem.
          */}
          <Link
            to="/produtos"
            aria-label="Conhecer os produtos"
            className="absolute left-[3.5%] top-[56.5%] z-20 h-[10.5%] w-[23.5%] rounded-[22px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />

          <Link
            to="/cadastro"
            aria-label="Falar no WhatsApp"
            className="absolute left-[27.1%] top-[56.5%] z-20 h-[10.5%] w-[13.4%] rounded-[22px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
        </div>
      </section>
    </main>
  )
}

export default AreaHome

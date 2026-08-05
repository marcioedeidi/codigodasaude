import React from 'react'
import { Link } from 'react-router-dom'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-reference.webp`

  return (
    <main className="w-full overflow-hidden bg-[#9bded6]">
      <section className="mx-auto w-full max-w-[1536px] bg-[#9bded6]">
        <div className="relative aspect-[1536/919] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios"
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
          />

          <Link
            to="/produtos"
            aria-label="Conhecer os produtos"
            className="absolute left-[3.7%] top-[56.5%] h-[10.5%] w-[23.2%] rounded-[22px] focus:outline-none focus:ring-4 focus:ring-white/80"
          >
            <span className="sr-only">Conhecer os produtos</span>
          </Link>

          <Link
            to="/cadastro"
            aria-label="Falar no WhatsApp"
            className="absolute left-[27.1%] top-[56.5%] h-[10.5%] w-[13.2%] rounded-[22px] focus:outline-none focus:ring-4 focus:ring-white/80"
          >
            <span className="sr-only">Falar no WhatsApp</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AreaHome

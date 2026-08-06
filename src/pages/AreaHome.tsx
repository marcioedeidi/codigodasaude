import React from 'react'
import { Link } from 'react-router-dom'

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-reference.webp`

  return (
    <main className="w-full bg-[#9fded7]">
      <section className="w-full overflow-hidden">
        <div
          className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
          style={{ aspectRatio: '1536 / 919' }}
        >
          <img
            src={heroImage}
            alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios"
            className="absolute inset-0 block h-full w-full select-none object-contain"
            draggable={false}
          />

          {/* Áreas transparentes alinhadas exatamente aos botões desenhados na arte. */}
          <Link
            to="/produtos"
            aria-label="Conhecer os produtos"
            className="absolute left-[3.97%] top-[57.13%] z-20 h-[9.03%] w-[22.40%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />

          <Link
            to="/cadastro"
            aria-label="Falar no WhatsApp"
            className="absolute left-[27.34%] top-[57.13%] z-20 h-[9.03%] w-[12.30%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
          />
        </div>
      </section>
    </main>
  )
}

export default AreaHome

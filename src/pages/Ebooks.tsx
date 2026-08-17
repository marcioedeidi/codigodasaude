import React from 'react'
import { Link } from 'react-router-dom'

const Ebooks: React.FC = () => {
  const ebookImage = `${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`

  return (
    <section
      id="ebooks"
      className="w-full scroll-mt-28 overflow-hidden bg-[linear-gradient(180deg,#e8f8f4_0%,#d7f2ed_48%,#c8ebe4_100%)] px-4 py-12 sm:px-6 md:py-16"
      aria-label="E-books Código da Saúde"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-[0_18px_55px_rgba(15,91,82,0.14)] backdrop-blur-sm sm:p-10 md:grid-cols-[0.85fr_1.15fr] md:p-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[380px] overflow-hidden rounded-[26px] border-[5px] border-white bg-white shadow-[0_18px_38px_rgba(8,70,63,0.20)]">
            <img
              src={ebookImage}
              alt="E-book Código da Saúde"
              className="block h-auto w-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168b80]">
            Conteúdo exclusivo
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#10372f] sm:text-4xl md:text-5xl">
            E-books Código da Saúde
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#46615b] sm:text-lg md:mx-0">
            Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Link
              to="/ebooks"
              className="inline-flex min-w-[210px] items-center justify-center rounded-2xl bg-[#07534c] px-7 py-4 text-base font-black text-white shadow-[0_12px_25px_rgba(5,76,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[#043f3a]"
            >
              Conhecer os e-books
            </Link>
          </div>

          <p className="mt-4 text-sm font-semibold text-[#6a817b]">
            Conteúdo digital disponível para você.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Ebooks

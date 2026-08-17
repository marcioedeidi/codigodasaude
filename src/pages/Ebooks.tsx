import React from 'react'

const Ebooks: React.FC = () => {
  const ebookImage = `${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`

  return (
    <section id="ebooks" className="w-full overflow-hidden bg-[#9fded7]">
      <div className="mx-auto w-full max-w-[1536px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid min-h-[620px] w-full items-center gap-12 rounded-[34px] bg-white px-6 py-10 shadow-[0_18px_55px_rgba(15,91,82,0.14)] sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:px-14 lg:px-20">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[520px] overflow-hidden rounded-[28px] bg-white shadow-[0_18px_40px_rgba(8,70,63,0.18)]">
              <img
                src={ebookImage}
                alt="E-book Código da Saúde"
                className="block h-auto w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center text-center md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168b80]">
              Conteúdo exclusivo
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#10372f] sm:text-5xl lg:text-6xl">
              E-books Código da Saúde
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#46615b] sm:text-xl">
              Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#46615b]">
              Conteúdos digitais preparados para ampliar seu conhecimento e apoiar decisões mais conscientes para sua saúde e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ebooks

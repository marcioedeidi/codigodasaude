import React from 'react'

const Ebooks: React.FC = () => {
  const ebookImage = `${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`

  return (
    <section
      id="ebooks"
      className="relative w-full min-h-[calc(100vh-104px)] overflow-hidden bg-[#9fded7]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-104px)] w-full max-w-[1536px] items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex w-full items-center justify-center overflow-hidden">
            <img
              src={ebookImage}
              alt="E-book Código da Saúde"
              className="block max-h-[72vh] w-auto max-w-full rounded-[24px] object-contain shadow-[0_20px_45px_rgba(8,70,63,0.22)]"
              draggable={false}
            />
          </div>

          <div className="flex w-full flex-col justify-center text-center md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#126f67]">
              Conteúdo exclusivo
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-[#10372f] sm:text-6xl lg:text-7xl">
              E-books Código da Saúde
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#355b54] lg:text-2xl">
              Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#46615b]">
              Conteúdos digitais preparados para ampliar seu conhecimento e apoiar decisões mais conscientes para sua saúde e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ebooks

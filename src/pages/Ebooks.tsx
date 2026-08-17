import React from 'react'
import PageContainer from '@components/layout/PageContainer'

const Ebooks: React.FC = () => {
  const ebookImage = `${import.meta.env.BASE_URL}assets/ebooks/file_000000004afc71f5a6e3d6cdd0d11a09.png`

  return (
    <PageContainer id="ebooks" className="min-h-[calc(100vh-104px)]">
      <section className="flex min-h-[calc(100vh-136px)] w-full items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-8 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[520px] overflow-hidden rounded-[32px] bg-white p-4 shadow-[0_18px_45px_rgba(8,70,63,0.18)] sm:p-5">
              <img
                src={ebookImage}
                alt="E-book Código da Saúde"
                className="block h-auto w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="w-full text-center md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168b80]">
              Conteúdo exclusivo
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#10372f] sm:text-5xl lg:text-6xl">
              E-books Código da Saúde
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#46615b] sm:text-xl">
              Conhecimento para ajudar você a fazer escolhas mais conscientes e cuidar melhor da sua rotina.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-[#07534c] px-8 py-4 text-base font-black text-white shadow-[0_12px_25px_rgba(5,76,69,0.22)] transition hover:-translate-y-0.5 hover:bg-[#043f3a]"
              >
                Conhecer os e-books
              </button>
            </div>

            <p className="mt-5 text-sm font-semibold text-[#6a817b]">
              Conteúdo digital disponível para você.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}

export default Ebooks

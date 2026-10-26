import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { calcularResultadoQuiz, respostasDoEstado } from '../data/quizCodigoSaude'

const ResultadoQuiz: React.FC = () => {
  const location = useLocation()
  const respostas = respostasDoEstado(location.state)

  if (!respostas) {
    return <Navigate to="/inicio" replace />
  }

  const resultado = calcularResultadoQuiz(respostas)

  return (
    <main className="min-h-screen bg-[#e7f6f1] px-4 py-10 text-[#173f36] sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border-2 border-white bg-white p-7 text-center shadow-lg sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#148d80]">Código da Saúde • Seu resultado</p>
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-5xl">{resultado.titulo}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#416c63]">{resultado.descricao}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#637f77]">
            Esta é uma seleção para conhecer, baseada nas suas preferências. Ela não indica necessidades médicas
            nem recomenda o uso combinado de suplementos. Confira sempre as informações de cada produto.
          </p>
        </div>

        <h2 className="mt-10 text-center font-serif text-3xl font-bold">Opções para você conhecer</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {resultado.recomendacoes.map(item => (
            <article key={item.rota} className="flex flex-col rounded-3xl border border-[#bee2d9] bg-white p-6 shadow-md">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#087b76]">{item.categoria}</p>
              <h3 className="mt-3 font-serif text-2xl font-bold">{item.titulo}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#526f66]">{item.descricao}</p>
              <Link
                to={item.rota}
                className="mt-6 rounded-xl bg-[#087b76] px-5 py-3 text-center font-black text-white hover:bg-[#075f5a]"
              >
                Conhecer esta opção →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/inicio" className="rounded-xl border-2 border-[#087b76] px-6 py-3 font-bold text-[#075f5a]">
            Ver página principal
          </Link>
          <a href="https://wa.me/5554991071933" target="_blank" rel="noopener noreferrer"
            className="rounded-xl bg-[#064a43] px-6 py-3 font-black text-white">
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}

export default ResultadoQuiz

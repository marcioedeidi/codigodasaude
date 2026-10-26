import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OpcaoQuiz, perguntasQuiz, RespostasQuiz } from '../data/quizCodigoSaude'

const Quiz: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const navigate = useNavigate()
  const [etapa, setEtapa] = useState(0)
  const [respostas, setRespostas] = useState<(OpcaoQuiz | null)[]>([null, null, null])
  const Container = embedded ? 'section' : 'main'
  const Titulo = embedded ? 'h2' : 'h1'
  const pergunta = perguntasQuiz[etapa]
  const escolha = respostas[etapa]

  const escolher = (opcao: OpcaoQuiz) => {
    setRespostas(anteriores => anteriores.map((atual, index) => index === etapa ? opcao : atual))
  }

  const continuar = () => {
    if (!escolha) return
    if (etapa < perguntasQuiz.length - 1) {
      setEtapa(etapa + 1)
      return
    }
    if (respostas.every((item): item is OpcaoQuiz => item !== null)) {
      // Respostas não são enviadas nem gravadas antes do cadastro.
      navigate('/cadastro', { state: { respostasQuiz: respostas as RespostasQuiz } })
    }
  }

  return (
    <Container id={embedded ? "quiz" : undefined} className={embedded ? "codigo-saude-hero scroll-mt-4 px-4 py-12 text-[#173f36] sm:py-16" : "codigo-saude-hero min-h-screen px-4 py-10 text-[#173f36] sm:py-16"}>
      <div className="mx-auto w-full max-w-3xl rounded-[2rem] border-2 border-white/90 bg-white/90 p-6 shadow-2xl sm:p-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-black uppercase tracking-[0.15em] text-[#06766c]">Código da Saúde</span>
          <span className="rounded-full bg-[#d5f2e9] px-4 py-2 text-sm font-bold">
            Pergunta {etapa + 1} de {perguntasQuiz.length}
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="Progresso do quiz"
          aria-valuenow={etapa + 1}
          aria-valuemin={1}
          aria-valuemax={perguntasQuiz.length}
          className="mb-9 h-2 w-full overflow-hidden rounded-full bg-[#d9ece7]"
        >
          <div
            className="h-full rounded-full bg-[#088b7c] transition-all duration-300"
            style={{ width: ((etapa + 1) / perguntasQuiz.length) * 100 + '%' }}
          />
        </div>

        <p className="text-sm font-semibold text-[#457369]">Seu momento importa. Responda com sinceridade.</p>
        <Titulo className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          {pergunta.titulo}
        </Titulo>

        <div className="mt-8 grid gap-3" role="group" aria-label={pergunta.titulo}>
          {pergunta.opcoes.map(opcao => {
            const selecionada = escolha === opcao.id
            return (
              <button
                key={opcao.id}
                type="button"
                onClick={() => escolher(opcao.id)}
                aria-pressed={selecionada}
                className={
                  'flex w-full items-start gap-4 rounded-2xl border-2 p-4 text-left text-base leading-6 transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#159a92] sm:p-5 ' +
                  (selecionada
                    ? 'border-[#06887b] bg-[#e1f7f1] shadow-md'
                    : 'border-[#cde7df] bg-white hover:border-[#1d9f91] hover:bg-[#f3fbf7]')
                }
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087b76] font-black text-white">
                  {opcao.id}
                </span>
                <span className="font-semibold">{opcao.texto}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => etapa === 0 ? (embedded ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')) : setEtapa(etapa - 1)}
            className="rounded-xl border border-[#9acbc1] px-5 py-3 font-bold text-[#17655c]"
          >
            ← Voltar
          </button>
          <button
            type="button"
            onClick={continuar}
            disabled={!escolha}
            className="rounded-xl bg-[#087b76] px-7 py-3 font-black text-white shadow-md hover:bg-[#076863] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {etapa === perguntasQuiz.length - 1 ? 'Continuar para o cadastro →' : 'Próxima pergunta →'}
          </button>
        </div>
        <p className="mt-7 text-sm leading-6 text-[#56776d]">
          As respostas são usadas apenas para apresentar opções de leitura e produtos do nosso catálogo.
          Não fazemos diagnósticos ou indicações médicas. O resultado será exibido após o cadastro.
          Se você sair antes de se cadastrar, suas respostas não serão enviadas ao CRM.
        </p>
      </div>
    </Container>
  )
}

export default Quiz

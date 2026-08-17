import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cadastro: React.FC = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const telefoneLimpo = whatsapp.replace(/\D/g, '')
    if (!nome.trim() || telefoneLimpo.length < 10) {
      setErro('Preencha seu nome e um WhatsApp válido para continuar.')
      return
    }

    localStorage.setItem('codigo_saude_cadastro_concluido', '1')
    localStorage.setItem(
      'codigo_saude_lead',
      JSON.stringify({ nome: nome.trim(), whatsapp: telefoneLimpo })
    )

    // Garante que o acesso recém-liberado sempre comece no topo da página inicial.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    navigate('/inicio', { replace: true })
  }

  return (
    <main className="min-h-screen bg-[#efe1bd] px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-[2rem] border-2 border-white bg-[#8fd8ce] p-6 shadow-xl md:p-10">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#21665f]">
            Código da Saúde
          </p>
          <h1 className="text-4xl font-bold text-[#173f36] md:text-5xl">
            Antes de continuar
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-[#315d55]">
            Faça seu cadastro para liberar as páginas de produtos, e-books, depoimentos e conteúdos do Código da Saúde.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nome" className="mb-2 block font-bold text-[#173f36]">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Seu nome completo"
              autoComplete="name"
              className="w-full rounded-2xl border-2 border-white bg-white/90 px-5 py-4 text-[#173f36] outline-none transition focus:border-[#159a92]"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="mb-2 block font-bold text-[#173f36]">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
              placeholder="(DDD) 99999-9999"
              autoComplete="tel"
              className="w-full rounded-2xl border-2 border-white bg-white/90 px-5 py-4 text-[#173f36] outline-none transition focus:border-[#159a92]"
            />
          </div>

          {erro && (
            <p className="rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-[#8c332c]">
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#087b76] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#076863]"
          >
            Liberar meu acesso
          </button>

          <p className="text-center text-sm leading-5 text-[#315d55]">
            Seus dados são usados para atendimento e continuidade da sua experiência no Código da Saúde.
          </p>
        </form>
      </div>
    </main>
  )
}

export default Cadastro

import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f1e5] py-14 md:py-20">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#9fddd5]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#d8bf75]/20 blur-3xl" />

      <div className="container-max relative z-10 grid items-center gap-12 px-4 md:grid-cols-[1.08fr_.92fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex rounded-full border border-[#159a92]/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#146d68]">
            Bem-estar com clareza e atendimento humano
          </span>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-[#173f36] md:text-7xl">
            O que o seu corpo está tentando te dizer?
          </h1>

          <div className="my-6 flex w-52 items-center gap-3 text-[#159a92]">
            <span className="h-px flex-1 bg-current" />
            <span className="text-xl">✦</span>
            <span className="h-px flex-1 bg-current" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#486b64] md:text-xl">
            Pare de tentar adivinhar. Responda algumas perguntas rápidas e organize um caminho mais simples para cuidar do seu bem-estar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="rounded-2xl bg-[#159a92] px-6 py-4 font-bold text-white shadow-lg shadow-[#159a92]/20 transition hover:-translate-y-0.5 hover:bg-[#117f79]"
            >
              Descobrir meu perfil
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('produtos')}
              className="rounded-2xl border border-[#159a92] bg-white/60 px-6 py-4 font-bold text-[#146d68] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Conhecer os produtos
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#37635b]">
            <span>✓ Leva poucos minutos</span>
            <span>✓ Sem compromisso</span>
            <span>✓ Atendimento humano</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-4 top-12 h-28 w-28 rounded-full border border-[#159a92]/20" />
          <div className="absolute -right-4 bottom-8 h-36 w-36 rounded-full border border-[#b68b31]/20" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#b68b31]/35 bg-gradient-to-br from-[#fffaf1] to-[#f2e2bd] p-8 shadow-2xl shadow-[#173f36]/10 md:p-12">
            <div className="absolute right-5 top-5 text-7xl text-[#6f9a51]/20">❧</div>
            <div className="absolute bottom-4 left-5 rotate-180 text-8xl text-[#159a92]/15">❧</div>

            <div className="relative flex min-h-[360px] flex-col items-center justify-center text-center md:min-h-[440px]">
              <div className="mb-6 grid h-28 w-28 place-items-center rounded-full border-4 border-[#b68b31] bg-white/80 text-5xl text-[#4e8d37] shadow-lg">
                ✚
              </div>
              <p className="font-serif text-5xl font-bold leading-none text-[#173f36] md:text-6xl">
                Código
              </p>
              <p className="mt-2 font-serif text-3xl italic text-[#b68b31]">da</p>
              <p className="font-serif text-5xl font-bold leading-none text-[#173f36] md:text-6xl">
                Saúde
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#54756f]">
                Diagnóstico Personalizado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

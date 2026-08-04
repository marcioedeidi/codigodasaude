import { motion } from 'framer-motion'
import BotanicalLeaves from '@components/common/BotanicalLeaves'
import logoOfficial from '../../assets/logoSmall'

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <BotanicalLeaves />

      <div className="container-max relative z-10 grid items-center gap-12 px-4 md:grid-cols-[1.02fr_.98fr] md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex rounded-full border border-[#159a92]/45 bg-white/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#146d68]">
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
              className="rounded-2xl border-2 border-white bg-white/55 px-6 py-4 font-bold text-[#146d68] transition hover:-translate-y-0.5 hover:bg-white"
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
          <div className="flex min-h-[430px] items-center justify-center overflow-hidden rounded-[2rem] border-2 border-white/95 bg-white/35 p-8 shadow-2xl shadow-[#173f36]/10 md:min-h-[520px] md:p-12">
            <img
              src={logoOfficial}
              alt="Código da Saúde"
              className="block h-auto w-full max-w-[470px] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

import { motion } from 'framer-motion'
import Button from '@components/common/Button'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20 md:py-32">
      <div className="container-max px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubra uma Nova Forma de Cuidar da Sua Saúde
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            No Código da Saúde, selecionamos produtos, conteúdos e soluções para ajudar você a conquistar mais saúde, qualidade de vida e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contato')}
            >
              Fale Conosco
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('beneficios')}
            >
              Saiba Mais
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="aspect-square bg-gradient-to-br from-accent-300 to-accent-400 rounded-xl flex items-center justify-center">
              <svg
                className="w-32 h-32 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

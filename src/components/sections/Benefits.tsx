import { motion } from 'framer-motion'
import Card from '@components/common/Card'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: '100% Natural',
      description: 'Todos os nossos produtos são formulados com ingredientes naturais selecionados.',
      icon: '🌿',
    },
    {
      id: 2,
      title: 'Comprovado Cientificamente',
      description: 'Desenvolvidos com base em pesquisas científicas e estudos clínicos.',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Seguro e Eficaz',
      description: 'Testados rigorosamente para garantir segurança e eficácia máxima.',
      icon: '✅',
    },
    {
      id: 4,
      title: 'Fácil de Usar',
      description: 'Produtos práticos e fáceis de integrar na sua rotina diária.',
      icon: '⚡',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher o Código da Saúde?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecionamos produtos, conteúdos e soluções para ajudar você a conquistar mais saúde e qualidade de vida.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={itemVariants}>
              <Card>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

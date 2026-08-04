import { motion } from 'framer-motion'
import Card from '@components/common/Card'
import BotanicalLeaves from '@components/common/BotanicalLeaves'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Seleção Cuidadosa',
      description: 'Escolhas organizadas para facilitar sua busca por opções de saúde e bem-estar.',
      icon: '🌿',
    },
    {
      id: 2,
      title: 'Informação Clara',
      description: 'Conteúdo simples e transparente para ajudar você a entender melhor cada opção.',
      icon: '📖',
    },
    {
      id: 3,
      title: 'Atendimento Humano',
      description: 'Orientação próxima, sem pressão, respeitando suas dúvidas e suas escolhas.',
      icon: '🤝',
    },
    {
      id: 4,
      title: 'Rotina Mais Simples',
      description: 'Uma experiência prática para organizar seus próximos passos de bem-estar.',
      icon: '✨',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="beneficios" className="section-padding relative overflow-hidden bg-[#F7F3EA]">
      <BotanicalLeaves />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#173F36] md:text-5xl">
            Por Que Escolher o Código da Saúde?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#486B64]">
            Informação, acolhimento e escolhas mais simples para cuidar do seu bem-estar com clareza.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={itemVariants} className="h-full">
              <Card className="h-full border-2 border-white/95 bg-[#8FD8CE]">
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-[#173F36]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-6 text-[#315D55]">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

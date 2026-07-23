import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-500 text-white py-8"
    >
      <div className="container-max px-4 text-center">
        <p className="text-sm md:text-base">
          © {currentYear} Código da Saúde - Todos os direitos reservados.
        </p>
        <p className="text-xs md:text-sm text-primary-100 mt-2">
          Desenvolvido com ❤️ para sua saúde
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

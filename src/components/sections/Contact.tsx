import { motion } from 'framer-motion'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import BotanicalLeaves from '@components/common/BotanicalLeaves'
import { useContactForm } from '@hooks/useContactForm'

const Contact = () => {
  const { register, handleSubmit, errors, isLoading, submitStatus, errorMessage, onSubmit } = useContactForm()

  return (
    <section id="contato" className="section-padding relative overflow-hidden bg-[#F7F3EA]">
      <BotanicalLeaves />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#173F36] md:text-5xl">
              Entre em Contato
            </h2>
            <p className="text-lg text-[#486B64]">
              Deixe seus dados para continuar seu atendimento com o Código da Saúde.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border-2 border-white/95 bg-[#8FD8CE] p-8 shadow-xl md:p-12"
          >
            <div className="mb-8 space-y-6">
              <div>
                <Input
                  label="Nome"
                  placeholder="Seu nome completo"
                  type="text"
                  {...register('name')}
                  error={errors.name?.message}
                />
              </div>

              <div>
                <Input
                  label="WhatsApp"
                  placeholder="11999999999"
                  type="tel"
                  {...register('whatsapp')}
                  error={errors.whatsapp?.message}
                />
              </div>

              <div>
                <Input
                  label="Email"
                  placeholder="seu.email@example.com"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 rounded-lg border border-white/90 bg-white/70 p-4"
              >
                <p className="font-semibold text-[#245B4A]">✓ Dados enviados com sucesso.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4"
              >
                <p className="font-semibold text-red-700">✗ {errorMessage}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full"
            >
              Enviar Mensagem
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

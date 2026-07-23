import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import { useContactForm } from '@hooks/useContactForm'

const Contact = () => {
  const { register, handleSubmit, errors, isLoading, submitStatus, errorMessage, onSubmit } = useContactForm()

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600">
              Deixe seus dados e entraremos em contato em breve.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="space-y-6 mb-8">
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
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
              >
                <p className="text-green-700 font-semibold">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
              >
                <p className="text-red-700 font-semibold">✗ {errorMessage}</p>
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

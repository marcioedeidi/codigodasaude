import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { saveContact } from '@services/supabaseClient'

// Schema de validação para o formulário de contato
const contactFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  whatsapp: z.string().regex(/^\d{10,15}$/, 'WhatsApp inválido'),
  email: z.string().email('Email inválido'),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormInputs) => {
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await saveContact(data.name, data.whatsapp, data.email)

      if (result.success) {
        setSubmitStatus('success')
        reset()
        // Limpar mensagem de sucesso após 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage('Erro ao salvar o contato. Tente novamente.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Erro desconhecido. Tente novamente.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    submitStatus,
    errorMessage,
    onSubmit,
  }
}

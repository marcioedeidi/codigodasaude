import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { saveContact } from '@services/supabaseClient'

const contactFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  whatsapp: z.string().regex(/^\d{10,15}$/, 'WhatsApp inválido'),
  email: z.string().email('Email inválido'),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>

function liberarAcesso(data: ContactFormInputs, pendente: boolean) {
  const lead = {
    nome: data.name.trim(),
    whatsapp: data.whatsapp,
    email: data.email.trim(),
    pendente_sincronizacao: pendente,
    salvo_em: new Date().toISOString(),
  }

  localStorage.setItem('codigo_saude_cadastro_concluido', '1')
  localStorage.setItem('codigo_saude_lead', JSON.stringify(lead))

  if (pendente) {
    localStorage.setItem('codigo_saude_lead_pendente', JSON.stringify(lead))
  } else {
    localStorage.removeItem('codigo_saude_lead_pendente')
  }
}

export function useContactForm() {
  const navigate = useNavigate()
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

      liberarAcesso(data, !result.success)
      setSubmitStatus('success')
      reset()
      navigate('/inicio', { replace: true })
    } catch (error) {
      console.error('Falha ao sincronizar com Supabase; cadastro salvo localmente.', error)
      liberarAcesso(data, true)
      setSubmitStatus('success')
      reset()
      navigate('/inicio', { replace: true })
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

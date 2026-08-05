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

type SupabaseLikeError = {
  code?: string
  message?: string
}

function friendlyError(error: unknown) {
  const supabaseError = (error || {}) as SupabaseLikeError
  const code = supabaseError.code || ''
  const message = (supabaseError.message || '').toLowerCase()

  if (code === 'CONFIG_MISSING') {
    return 'A conexão com o Supabase não está configurada na publicação.'
  }

  if (code === '42501' || message.includes('row-level security')) {
    return 'O Supabase bloqueou o cadastro por permissão (RLS).'
  }

  if (['PGRST205', '42P01'].includes(code) || message.includes('could not find the table')) {
    return 'A tabela de cadastros não foi encontrada no Supabase.'
  }

  if (['PGRST204', '42703'].includes(code) || message.includes('column')) {
    return 'Uma coluna da tabela do Supabase não corresponde ao formulário.'
  }

  if (message.includes('fetch') || message.includes('network')) {
    return 'Não foi possível conectar ao Supabase. Verifique a conexão e tente novamente.'
  }

  return supabaseError.message
    ? `Erro do Supabase: ${supabaseError.message}`
    : 'Erro ao salvar o contato. Tente novamente.'
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

      if (result.success) {
        localStorage.setItem('codigo_saude_cadastro_concluido', '1')
        localStorage.setItem(
          'codigo_saude_lead',
          JSON.stringify({
            nome: data.name.trim(),
            whatsapp: data.whatsapp,
            email: data.email.trim(),
          })
        )

        setSubmitStatus('success')
        reset()
        navigate('/inicio', { replace: true })
      } else {
        setSubmitStatus('error')
        setErrorMessage(friendlyError(result.error))
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(friendlyError(error))
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

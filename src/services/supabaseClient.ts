import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase configuration is missing. Please check your environment variables.')
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)

type SupabaseLikeError = {
  code?: string
  message?: string
  details?: string
  hint?: string
}

function isSchemaMismatch(error: SupabaseLikeError) {
  const code = error.code || ''
  const message = (error.message || '').toLowerCase()

  return (
    ['PGRST204', 'PGRST205', '42P01', '42703'].includes(code) ||
    message.includes('could not find the table') ||
    message.includes('does not exist') ||
    message.includes('column')
  )
}

// Salva o cadastro. Primeiro usa a estrutura atual (Cadastros/nome).
// Se o projeto ainda estiver com a estrutura antiga (contacts/name),
// fazemos uma tentativa compatível sem duplicar um cadastro que já foi salvo.
export async function saveContact(name: string, whatsapp: string, email: string) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      success: false,
      error: {
        code: 'CONFIG_MISSING',
        message: 'Configuração do Supabase ausente na publicação.',
      },
    }
  }

  try {
    const currentAttempt = await supabase
      .from('Cadastros')
      .insert([
        {
          nome: name,
          whatsapp,
          email,
          created_at: new Date().toISOString(),
        },
      ])

    if (!currentAttempt.error) {
      return { success: true, data: currentAttempt.data, table: 'Cadastros' }
    }

    if (!isSchemaMismatch(currentAttempt.error)) {
      console.error('Supabase insert error:', currentAttempt.error)
      return { success: false, error: currentAttempt.error }
    }

    const legacyAttempt = await supabase
      .from('contacts')
      .insert([
        {
          name,
          whatsapp,
          email,
          created_at: new Date().toISOString(),
        },
      ])

    if (legacyAttempt.error) {
      console.error('Supabase legacy insert error:', legacyAttempt.error)
      return { success: false, error: legacyAttempt.error }
    }

    return { success: true, data: legacyAttempt.data, table: 'contacts' }
  } catch (error) {
    console.error('Unexpected Supabase error:', error)
    return { success: false, error }
  }
}

// Função para buscar contatos (admin)
export async function getContacts() {
  try {
    const { data, error } = await supabase
      .from('Cadastros')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return { success: false, error }
  }
}

// Função para deletar contato
export async function deleteContact(id: string) {
  try {
    const { error } = await supabase
      .from('Cadastros')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting contact:', error)
    return { success: false, error }
  }
}

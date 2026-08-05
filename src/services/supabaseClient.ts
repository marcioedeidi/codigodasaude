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
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          nome: name.trim(),
          whatsapp: whatsapp.replace(/\D/g, ''),
          email: email.trim(),
        },
      ])

    if (error) {
      console.error('Supabase lead insert error:', error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected Supabase error:', error)
    return { success: false, error }
  }
}

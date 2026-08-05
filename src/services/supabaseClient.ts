import { createClient } from '@supabase/supabase-js'

function cleanEnv(value: string | undefined, variableName: string) {
  return (value || '')
    .trim()
    .replace(new RegExp(`^${variableName}\\s*=\\s*`, 'i'), '')
    .replace(/^['"]|['"]$/g, '')
    .trim()
}

const rawSupabaseUrl = cleanEnv(import.meta.env.VITE_SUPABASE_URL, 'VITE_SUPABASE_URL')
const supabaseAnonKey = cleanEnv(import.meta.env.VITE_SUPABASE_ANON_KEY, 'VITE_SUPABASE_ANON_KEY')
const supabaseUrl = rawSupabaseUrl.replace(/\/+$/, '')

const hasValidConfig =
  /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(supabaseUrl) &&
  supabaseAnonKey.length > 20

if (!hasValidConfig) {
  console.warn('A configuração pública do Supabase está ausente ou inválida.')
}

const supabase = hasValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null

export async function saveContact(name: string, whatsapp: string, email: string) {
  if (!supabase) {
    return {
      success: false,
      error: {
        code: 'CONFIG_INVALID',
        message: 'O endereço ou a chave pública do Supabase está inválido na publicação.',
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
      console.error('Erro ao gravar lead no Supabase:', error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error('Falha de conexão com o Supabase:', error)
    return { success: false, error }
  }
}

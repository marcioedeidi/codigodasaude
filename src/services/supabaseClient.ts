import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase configuration is missing. Please check your .env file.')
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)

// Função para salvar um lead (contato)
export async function saveContact(name: string, whatsapp: string, email: string) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          whatsapp,
          email,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error saving contact:', error)
    return { success: false, error }
  }
}

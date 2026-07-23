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

// Função para buscar contatos (admin)
export async function getContacts() {
  try {
    const { data, error } = await supabase
      .from('contacts')
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
      .from('contacts')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting contact:', error)
    return { success: false, error }
  }
}

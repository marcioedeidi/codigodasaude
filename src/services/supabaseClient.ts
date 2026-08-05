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

export type LeadInput = {
  nome: string
  whatsapp: string
  email?: string
  objetivo?: string | null
  ritmo?: string | null
  dificuldade?: string | null
  rotina?: string | null
  consentimento?: boolean
  recomendacao?: string | null
  origem?: string
}

export async function saveLead(lead: LeadInput) {
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
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          nome: lead.nome.trim(),
          whatsapp: lead.whatsapp.replace(/\D/g, ''),
          email: lead.email?.trim() || null,
          objetivo: lead.objetivo || null,
          ritmo: lead.ritmo || null,
          dificuldade: lead.dificuldade || null,
          rotina: lead.rotina || null,
          consentimento: lead.consentimento ?? true,
          recomendacao: lead.recomendacao || null,
          origem: lead.origem || 'site',
        },
      ])
      .select('id')
      .single()

    if (error) {
      console.error('Supabase lead insert error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected Supabase error:', error)
    return { success: false, error }
  }
}

export async function saveContact(name: string, whatsapp: string, email: string) {
  return saveLead({
    nome: name,
    whatsapp,
    email,
    consentimento: true,
    origem: 'cadastro-site',
  })
}

export async function getContacts() {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching leads:', error)
    return { success: false, error }
  }
}

export async function deleteContact(id: string) {
  try {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting lead:', error)
    return { success: false, error }
  }
}

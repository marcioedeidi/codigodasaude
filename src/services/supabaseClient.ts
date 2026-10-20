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

// Mesma base preparada para o CRM. Impede enviar contatos a outro projeto por engano.
const expectedProjectUrl = 'https://bpcekfiaseygjvgmivvx.supabase.co'
const hasValidConfig =
  supabaseUrl === expectedProjectUrl &&
  supabaseAnonKey.length > 20

if (!hasValidConfig) {
  console.warn('A configuração pública do Supabase está ausente ou inválida.')
}

// Cliente de cadastro público: não compartilha a sessão autenticada do CRM.
const supabase = hasValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null

type PendingLead = {
  nome: string
  whatsapp: string
  email?: string
  salvo_em?: string
  pendente_sincronizacao?: boolean
}

const pendingLeadKey = 'codigo_saude_lead_pendente'
let syncingPending = false

/**
 * Salva cadastros públicos na tabela existente public."Cadastros".
 * Somente INSERT é necessário ao visitante; leitura e alteração ficam restritas
 * ao administrador pelo RLS do Supabase.
 */
export async function saveContact(name: string, whatsapp: string, email?: string) {
  if (!supabase) {
    return {
      success: false,
      error: {
        code: 'CONFIG_INVALID',
        message: 'O endereço ou a chave pública do Supabase está inválido na publicação.',
      },
    }
  }

  const registro: { nome: string; whatsapp: string; email?: string } = {
    nome: name.trim(),
    whatsapp: whatsapp.replace(/\D/g, ''),
  }

  if (email?.trim()) {
    registro.email = email.trim()
  }

  try {
    // Não encadear .select(): os cadastros anônimos não têm permissão de SELECT.
    const { error } = await supabase
      .from('Cadastros')
      .insert([registro])

    if (error) {
      console.error('Erro ao gravar cadastro no Supabase:', error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error('Falha de conexão com o Supabase:', error)
    return { success: false, error }
  }
}

/** Reenvia um cadastro salvo localmente após eventual falha de conexão. */
export async function retryPendingLead() {
  if (syncingPending || typeof window === 'undefined') return

  const raw = window.localStorage.getItem(pendingLeadKey)
  if (!raw) return

  let lead: PendingLead
  try {
    lead = JSON.parse(raw) as PendingLead
  } catch {
    return
  }

  if (
    !lead ||
    typeof lead.nome !== 'string' ||
    typeof lead.whatsapp !== 'string' ||
    !lead.nome.trim() ||
    lead.whatsapp.replace(/\D/g, '').length < 10
  ) return

  syncingPending = true

  try {
    const result = await saveContact(lead.nome, lead.whatsapp, lead.email)
    if (!result.success) return

    // Outra inscrição pode ter substituído a pendência durante o envio.
    if (window.localStorage.getItem(pendingLeadKey) === raw) {
      window.localStorage.removeItem(pendingLeadKey)

      const localLead = window.localStorage.getItem('codigo_saude_lead')
      if (localLead) {
        try {
          const parsed = JSON.parse(localLead) as PendingLead
          if (parsed.nome === lead.nome && parsed.whatsapp === lead.whatsapp) {
            window.localStorage.setItem(
              'codigo_saude_lead',
              JSON.stringify({ ...parsed, pendente_sincronizacao: false }),
            )
          }
        } catch {
          // Não impede a sincronização se o cache antigo não estiver em JSON.
        }
      }
    }
  } finally {
    syncingPending = false
  }
}

import { createClient } from '@supabase/supabase-js'

// Projeto "Cadastros de clientes" confirmado no painel do Supabase.
// A chave anon/publishable é pública; nunca usar service_role no navegador.
const CRM_PROJECT_URL = 'https://bpcekfiaseygjvgmivvx.supabase.co'
const configuredUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim().replace(/\/+$/, '')
const configuredKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

// Evita ler ou modificar um banco de dados diferente do que foi preparado para o CRM.
export const crmConfigError =
  configuredUrl && configuredUrl !== CRM_PROJECT_URL
    ? 'O endereço Supabase configurado no GitHub aponta para outro projeto. Confira VITE_SUPABASE_URL.'
    : !configuredKey
      ? 'A chave pública VITE_SUPABASE_ANON_KEY ainda não foi configurada na publicação do GitHub.'
      : ''

export const crmSupabase = !crmConfigError
  ? createClient(CRM_PROJECT_URL, configuredKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
        storageKey: 'codigo-saude-crm-auth',
      },
    })
  : null

// Identificador público do único usuário autorizado. A proteção real é aplicada
// nas políticas RLS do Supabase usando auth.uid(); este controle é apenas UI.
export const CRM_ADMIN_UID = '33046b55-1730-4509-92fb-1a6c7874a729'

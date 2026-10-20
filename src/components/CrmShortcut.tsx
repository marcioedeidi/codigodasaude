import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CRM_ADMIN_UID, crmSupabase } from '../services/crmSupabase'

/**
 * Atalho de conveniência, exibido apenas com uma sessão do administrador.
 * Ocultar o botão não é o mecanismo de segurança: login + RLS protegem os dados.
 */
export default function CrmShortcut() {
  const [administrador, setAdministrador] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const client = crmSupabase
    if (!client) return

    let ativo = true
    const atualizar = (uid?: string) => {
      if (ativo) setAdministrador(uid === CRM_ADMIN_UID)
    }

    const { data: { subscription } } = client.auth.onAuthStateChange((_evento, sessao) => {
      atualizar(sessao?.user.id)
    })

    void client.auth.getSession()
      .then(({ data, error }) => atualizar(error ? undefined : data.session?.user.id))
      .catch(() => atualizar())

    return () => {
      ativo = false
      subscription.unsubscribe()
    }
  }, [])

  // O painel tem seu próprio cabeçalho; não sobrepor um botão nele.
  if (!administrador || location.pathname === '/crm') return null

  return (
    <Link
      to="/crm"
      aria-label="Abrir meu CRM"
      title="Acessar painel administrativo"
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-white/70 bg-[#063c38] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_26px_rgba(1,67,60,0.3)] transition hover:-translate-y-0.5 hover:bg-[#07574e] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#d0faf0] sm:bottom-7 sm:right-7"
    >
      <span aria-hidden="true">🔐</span>
      Meu CRM
    </Link>
  )
}

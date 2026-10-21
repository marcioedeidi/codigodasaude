import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Contêiner criado para o Código da Saúde em 21/10/2026.
const GTM_ID = 'GTM-KMBDD96Z'
const STORAGE_KEY = 'codigo_saude_tracking_consent_v1'
type Escolha = 'accepted' | 'rejected'

function lerConsentimento(): Escolha | null {
  try {
    const valor = window.localStorage.getItem(STORAGE_KEY)
    return valor === 'accepted' || valor === 'rejected' ? valor : null
  } catch {
    return null
  }
}

/**
 * Carrega o Google Tag Manager somente depois do consentimento explícito.
 * A versão sem JavaScript (noscript) não é incluída para não contornar
 * a decisão de recusar o rastreamento.
 */
function carregarTagManager() {
  if (document.querySelector('script[data-codigo-saude-gtm]')) return

  type JanelaComDados = Window & { dataLayer?: Record<string, unknown>[] }
  const janela = window as JanelaComDados
  janela.dataLayer = janela.dataLayer || []
  janela.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  script.dataset.codigoSaudeGtm = GTM_ID
  document.head.appendChild(script)
}

const TrackingConsent = () => {
  const { pathname } = useLocation()
  const [consentimento, setConsentimento] = useState<Escolha | null>(lerConsentimento)
  const [abrirPreferencias, setAbrirPreferencias] = useState(false)
  const rotaDoCrm = pathname === '/crm' || pathname.startsWith('/crm/')

  useEffect(() => {
    // O painel administrativo é independente do rastreamento comercial.
    if (consentimento === 'accepted' && !rotaDoCrm) {
      carregarTagManager()
    }
  }, [consentimento, rotaDoCrm])

  const salvarEscolha = (valor: Escolha) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, valor)
    } catch {
      // Sem armazenamento, o visitante poderá escolher de novo na próxima visita.
    }

    const estavaAtivo = consentimento === 'accepted'
    setConsentimento(valor)
    setAbrirPreferencias(false)

    // Descarrega scripts opcionais já ativos caso o consentimento seja retirado.
    if (estavaAtivo && valor === 'rejected') {
      window.location.reload()
    }
  }

  if (rotaDoCrm) return null

  const mostrarAviso = consentimento === null || abrirPreferencias

  return (
    <>
      {mostrarAviso ? (
        <aside
          aria-label="Preferências de privacidade e cookies"
          className="fixed bottom-3 left-3 right-3 z-[100] max-w-lg rounded-2xl border border-[#91c9bf] bg-white p-4 text-[#173f36] shadow-2xl sm:bottom-5 sm:left-5 sm:right-auto sm:p-5"
        >
          <p className="text-base font-bold">Privacidade e cookies</p>
          <p className="mt-2 text-sm leading-6">
            Usamos cookies opcionais para entender as visitas e medir nossas divulgações.
            Eles só serão ativados se você aceitar. Você pode mudar sua escolha depois.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => salvarEscolha('rejected')}
              className="rounded-xl border border-[#087b76] px-5 py-2.5 text-sm font-bold text-[#087b76] transition hover:bg-[#e7f8f4]"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => salvarEscolha('accepted')}
              className="rounded-xl bg-[#087b76] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#076863]"
            >
              Aceitar cookies opcionais
            </button>
          </div>
        </aside>
      ) : (
        <button
          type="button"
          aria-label="Alterar preferências de privacidade e cookies"
          onClick={() => setAbrirPreferencias(true)}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-[#91c9bf] bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#315d55] shadow-md transition hover:bg-white sm:bottom-5 sm:left-5"
        >
          Cookies
        </button>
      )}
    </>
  )
}

export default TrackingConsent

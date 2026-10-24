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

type EstadoConsentimentoGoogle = 'granted' | 'denied'
type JanelaComDados = Window & { dataLayer?: Array<Record<string, unknown> | IArguments> }

/**
 * Enfileira o comando nativo de consentimento antes de carregar o GTM.
 * No modo básico, nenhuma tag é carregada enquanto a pessoa não aceita.
 */
function registrarConsentimentoGoogle(
  acao: 'default' | 'update',
  estado: EstadoConsentimentoGoogle,
) {
  const janela = window as JanelaComDados
  janela.dataLayer = janela.dataLayer || []

  // O formato "arguments" é o esperado pelo processamento de comandos gtag no GTM.
  function gtag(
    _comando: string,
    _acao: string,
    _opcoes: Record<string, EstadoConsentimentoGoogle>,
  ) {
    janela.dataLayer?.push(arguments)
  }

  gtag('consent', acao, {
    ad_storage: estado,
    analytics_storage: estado,
    ad_user_data: estado,
    ad_personalization: estado,
  })
}

/**
 * Carrega o Google Tag Manager somente depois do consentimento explícito.
 * Registra primeiro o padrão negado e depois a autorização, antes do gtm.js,
 * para que as tags com verificação de ad_storage leiam o estado correto.
 * A versão noscript permanece desativada para respeitar a recusa.
 */
function carregarTagManager() {
  if (document.querySelector('script[data-codigo-saude-gtm]')) return

  registrarConsentimentoGoogle('default', 'denied')
  registrarConsentimentoGoogle('update', 'granted')

  const janela = window as JanelaComDados
  janela.dataLayer?.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

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

  useEffect(() => {
    const abrir = () => setAbrirPreferencias(true)
    window.addEventListener('codigo-saude:abrir-preferencias-cookies', abrir)
    return () => window.removeEventListener('codigo-saude:abrir-preferencias-cookies', abrir)
  }, [])

  const salvarEscolha = (valor: Escolha) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, valor)
    } catch {
      // Sem armazenamento, o visitante poderá escolher de novo na próxima visita.
    }

    const estavaAtivo = consentimento === 'accepted'

    // Revoga a permissão antes de recarregar a página para encerrar o GTM.
    if (estavaAtivo && valor === 'rejected') {
      registrarConsentimentoGoogle('update', 'denied')
    }

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
            Seus dados são tratados com cuidado e medidas de proteção.
            Os cookies opcionais de análise e divulgação só serão ativados com sua autorização.
            Você pode alterar suas preferências depois.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => salvarEscolha('rejected')}
              className="rounded-xl border border-[#087b76] px-5 py-2.5 text-sm font-bold text-[#087b76] transition hover:bg-[#e7f8f4]"
            >
              Continuar sem cookies
            </button>
            <button
              type="button"
              onClick={() => salvarEscolha('accepted')}
              className="rounded-xl bg-[#087b76] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#076863]"
            >
              Aceitar e continuar
            </button>
          </div>
        </aside>
      ) : null}
    </>
  )
}

export default TrackingConsent

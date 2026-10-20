import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { CRM_ADMIN_UID, crmConfigError, crmSupabase } from '../services/crmSupabase'

type Cliente = {
  id: number
  created_at: string
  nome: string
  whatsapp: string
  email: string | null
  produto_interesse: string | null
  status_atendimento: string | null
  observacoes: string | null
  proximo_contato: string | null
}

type Detalhes = {
  produto_interesse: string
  status_atendimento: string
  observacoes: string
  proximo_contato: string
}

type Etapa = 'verificando' | 'configuracao' | 'login' | 'negado' | 'autorizado'

const etapas = [
  'Novo contato',
  'Em atendimento',
  'Interessado',
  'Venda realizada',
  'Não convertido',
  'Pós-venda',
]

const detalhesVazios: Detalhes = {
  produto_interesse: '',
  status_atendimento: 'Novo contato',
  observacoes: '',
  proximo_contato: '',
}

function formatarData(data: string | null | undefined) {
  if (!data) return '—'
  const dia = new Date(data)
  return Number.isNaN(dia.getTime()) ? '—' : dia.toLocaleDateString('pt-BR')
}

function whatsappDoCliente(telefone: string) {
  const digitos = telefone.replace(/\D/g, '')
  if (digitos.length === 10 || digitos.length === 11) return 'https://wa.me/55' + digitos
  if (digitos.startsWith('55') && (digitos.length === 12 || digitos.length === 13)) {
    return 'https://wa.me/' + digitos
  }
  return null
}

const campo =
  'w-full rounded-xl border border-[#c7e2dc] bg-white px-3 py-2.5 text-sm text-[#173e38] outline-none transition focus:border-[#078b7f] focus:ring-2 focus:ring-[#078b7f]/15'

const Crm = () => {
  const [etapa, setEtapa] = useState<Etapa>(crmConfigError ? 'configuracao' : 'verificando')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [entrando, setEntrando] = useState(false)
  const [erroLogin, setErroLogin] = useState('')
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [carregando, setCarregando] = useState(false)
  const [erroDados, setErroDados] = useState('')
  const [filtro, setFiltro] = useState('')
  const [situacao, setSituacao] = useState('Todos')
  const [selecionadoId, setSelecionadoId] = useState<number | null>(null)
  const [formulario, setFormulario] = useState<Detalhes>(detalhesVazios)
  const [salvando, setSalvando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    const client = crmSupabase
    if (!client) return

    let ativo = true
    const definirAcesso = (uid: string | undefined) => {
      if (!ativo) return
      setEtapa(!uid ? 'login' : uid === CRM_ADMIN_UID ? 'autorizado' : 'negado')
    }

    const { data: { subscription } } = client.auth.onAuthStateChange((_evento, session) => {
      definirAcesso(session?.user.id)
    })

    void client.auth.getSession().then(({ data, error }) => {
      if (ativo) {
        if (error) setErroLogin('Não foi possível verificar sua sessão. Tente entrar novamente.')
        definirAcesso(data.session?.user.id)
      }
    }).catch(() => {
      if (ativo) {
        setErroLogin('Não foi possível verificar sua sessão.')
        setEtapa('login')
      }
    })

    return () => {
      ativo = false
      subscription.unsubscribe()
    }
  }, [])

  const carregarClientes = async () => {
    if (!crmSupabase) return
    setCarregando(true)
    setErroDados('')
    const { data, error } = await crmSupabase
      .from('Cadastros')
      .select('id,created_at,nome,whatsapp,email,produto_interesse,status_atendimento,observacoes,proximo_contato')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      setErroDados('Não foi possível consultar a tabela Cadastros. Verifique a conexão e as políticas RLS do Supabase.')
    } else {
      const registros = (data || []) as Cliente[]
      setClientes(registros)
      setSelecionadoId(idAtual => registros.some(item => item.id === idAtual) ? idAtual : (registros[0]?.id ?? null))
    }
    setCarregando(false)
  }

  useEffect(() => {
    if (etapa === 'autorizado') void carregarClientes()
  }, [etapa])

  const selecionado = clientes.find(cliente => cliente.id === selecionadoId) ?? null

  useEffect(() => {
    setFormulario(selecionado
      ? {
          produto_interesse: selecionado.produto_interesse || '',
          status_atendimento: selecionado.status_atendimento || 'Novo contato',
          observacoes: selecionado.observacoes || '',
          proximo_contato: selecionado.proximo_contato || '',
        }
      : detalhesVazios)
    setMensagem('')
  }, [selecionado])

  const filtrados = useMemo(() => {
    const texto = filtro.toLocaleLowerCase('pt-BR').trim()
    return clientes.filter(cliente => {
      const combinarSituacao = situacao === 'Todos'
        || (cliente.status_atendimento || 'Novo contato') === situacao
      const combinarTexto = !texto || [
        cliente.nome,
        cliente.whatsapp,
        cliente.email || '',
        cliente.produto_interesse || '',
      ].some(valor => valor.toLocaleLowerCase('pt-BR').includes(texto))
      return combinarSituacao && combinarTexto
    })
  }, [clientes, filtro, situacao])

  const novos = clientes.filter(c => !c.status_atendimento || c.status_atendimento === 'Novo contato').length
  const atendimentos = clientes.filter(c => c.status_atendimento === 'Em atendimento' || c.status_atendimento === 'Interessado').length
  const vendas = clientes.filter(c => c.status_atendimento === 'Venda realizada' || c.status_atendimento === 'Pós-venda').length

  const entrar = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!crmSupabase) return
    setEntrando(true)
    setErroLogin('')
    const { data, error } = await crmSupabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha,
    })
    setSenha('')
    if (error || !data.user) {
      setErroLogin('E-mail ou senha incorretos. Confira os dados e tente novamente.')
    } else if (data.user.id !== CRM_ADMIN_UID) {
      await crmSupabase.auth.signOut()
      setErroLogin('Esta conta não está autorizada a acessar o CRM.')
      setEtapa('login')
    } else {
      setEtapa('autorizado')
    }
    setEntrando(false)
  }

  const sair = async () => {
    await crmSupabase?.auth.signOut()
    setClientes([])
    setSelecionadoId(null)
    setEtapa('login')
  }

  const salvar = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!crmSupabase || !selecionado) return
    setSalvando(true)
    setMensagem('')
    const atualizacao = {
      produto_interesse: formulario.produto_interesse.trim() || null,
      status_atendimento: formulario.status_atendimento,
      observacoes: formulario.observacoes.trim() || null,
      proximo_contato: formulario.proximo_contato || null,
    }
    const { data, error } = await crmSupabase
      .from('Cadastros')
      .update(atualizacao)
      .eq('id', selecionado.id)
      .select('id')

    if (error || !data?.length) {
      setMensagem('Não foi possível salvar. Verifique sua conexão e as permissões do banco.')
    } else {
      setClientes(anteriores => anteriores.map(cliente =>
        cliente.id === selecionado.id ? { ...cliente, ...atualizacao } : cliente,
      ))
      setMensagem('Atendimento atualizado com sucesso.')
    }
    setSalvando(false)
  }

  if (etapa !== 'autorizado') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_15%_20%,#bbebe3_0%,#e5f7f1_45%,#f6f2e8_100%)] px-4 py-10">
        <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_22px_70px_rgba(13,74,66,0.16)]">
          <div className="bg-[#064d46] px-8 py-9 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4e7d6]">Código da Saúde</span>
            <h1 className="mt-3 text-3xl font-black">CRM • Área restrita</h1>
            <p className="mt-2 text-sm text-[#d3eee7]">Painel privativo de gestão de clientes e atendimentos.</p>
          </div>
          <div className="p-8">
            {etapa === 'verificando' && (
              <p role="status" className="text-[#345c56]">Verificando seu acesso seguro…</p>
            )}
            {etapa === 'configuracao' && (
              <div role="alert" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                <strong>Conexão pendente:</strong> {crmConfigError}
                <p className="mt-2">Nenhum dado de cliente será exibido até a conexão ser configurada.</p>
              </div>
            )}
            {etapa === 'negado' && (
              <div role="alert">
                <p className="font-semibold text-[#8d352c]">Sua conta não está autorizada a entrar neste CRM.</p>
                <button type="button" onClick={() => void sair()} className="mt-5 rounded-xl bg-[#07695f] px-5 py-3 font-bold text-white">
                  Sair e tentar outra conta
                </button>
              </div>
            )}
            {etapa === 'login' && (
              <form onSubmit={entrar} className="space-y-5">
                <div>
                  <label htmlFor="crm-email" className="mb-2 block text-sm font-bold text-[#234940]">E-mail de administrador</label>
                  <input id="crm-email" className={campo} type="email" autoComplete="username" value={email}
                    onChange={event => setEmail(event.target.value)} required />
                </div>
                <div>
                  <label htmlFor="crm-senha" className="mb-2 block text-sm font-bold text-[#234940]">Senha</label>
                  <input id="crm-senha" className={campo} type="password" autoComplete="current-password" value={senha}
                    onChange={event => setSenha(event.target.value)} required />
                </div>
                {erroLogin && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-800">{erroLogin}</p>}
                <button disabled={entrando} type="submit" className="w-full rounded-xl bg-[#086c63] px-5 py-3.5 font-bold text-white transition hover:bg-[#054e47] disabled:opacity-60">
                  {entrando ? 'Verificando…' : 'Entrar no meu CRM'}
                </button>
                <p className="text-center text-xs leading-5 text-[#627a75]">
                  Apenas o administrador autorizado pode consultar os dados.
                  A autenticação e as permissões são validadas pelo Supabase.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main
      className="min-h-screen pb-14 text-[#163e36]"
      style={{
        backgroundColor: '#42d8db',
        backgroundImage: [
          'radial-gradient(ellipse 52% 36% at 95% 2%, rgba(255,255,255,0.92) 0%, rgba(246,255,255,0.44) 38%, rgba(255,255,255,0) 100%)',
          'radial-gradient(ellipse 40% 14% at 15% 17%, rgba(243,255,255,0.64) 0%, rgba(243,255,255,0) 100%)',
          'radial-gradient(ellipse 36% 15% at 73% 32%, rgba(246,255,255,0.55) 0%, rgba(246,255,255,0) 100%)',
          'radial-gradient(ellipse 42% 18% at 32% 61%, rgba(207,255,250,0.4) 0%, rgba(207,255,250,0) 100%)',
          'linear-gradient(165deg, #1dbde2 0%, #5bdbe9 29%, #8eede8 59%, #36d5ce 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
      }}
    >
      <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-[linear-gradient(90deg,#bdeee8_0%,#91d9d0_50%,#bcebe6_100%)] shadow-[0_5px_22px_rgba(4,79,72,0.12)]">
        <div className="mx-auto flex min-h-[104px] w-full max-w-[1536px] flex-wrap items-center justify-between gap-3 px-5 py-2 md:gap-5 md:px-7 lg:px-10">
          <div className="flex shrink-0 items-center" aria-label="Código da Saúde">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-small.webp`}
              alt="Código da Saúde"
              className="h-[70px] w-auto max-w-[190px] object-contain md:h-[90px] md:max-w-[250px]"
              draggable={false}
            />
          </div>
          <div className="min-w-0 flex-1 text-center">
            <h1 className="text-xl font-black text-[#082f2b] md:text-3xl">Painel CRM</h1>
            <p className="hidden text-xs font-semibold text-[#315f58] sm:block">Administração privada de contatos e vendas</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-white/70 bg-white/55 px-3 py-2 text-xs font-bold text-[#14665b] sm:inline-flex">🔒 Acesso exclusivo</span>
            <button type="button" onClick={() => void sair()} className="rounded-xl bg-[#063c38] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#042f2c]">
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pt-7 md:px-8">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0e8074]">Visão geral</p>
          <h2 className="mt-1 text-xl font-bold">Acompanhe cada oportunidade</h2>
        </div>

        <section aria-label="Indicadores de atendimento" className="!bg-transparent grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { titulo: 'Clientes cadastrados', valor: clientes.length, simbolo: '👥' },
            { titulo: 'Novos contatos', valor: novos, simbolo: '✨' },
            { titulo: 'Em negociação', valor: atendimentos, simbolo: '💬' },
            { titulo: 'Vendas registradas', valor: vendas, simbolo: '📈' },
          ].map(item => (
            <div key={item.titulo} className="rounded-2xl border border-[#dceae6] bg-white p-4 shadow-sm md:p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#57766f] md:text-sm">{item.titulo}</span>
                <span aria-hidden="true">{item.simbolo}</span>
              </div>
              <strong className="text-3xl font-black text-[#0b6358]">{item.valor}</strong>
            </div>
          ))}
        </section>

        <section aria-label="Gestão dos clientes" className="!bg-transparent mt-6 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)]">
          <div className="overflow-hidden rounded-2xl border border-[#d9e8e2] bg-white shadow-sm">
            <div className="border-b border-[#e4eee9] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-black">Contatos <span className="text-[#64847b]">({filtrados.length})</span></h2>
                <button onClick={() => void carregarClientes()} disabled={carregando} className="rounded-lg border border-[#b9d8d0] px-3 py-2 text-xs font-bold text-[#09695d] disabled:opacity-60">
                  {carregando ? 'Atualizando…' : '↻ Atualizar'}
                </button>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_190px]">
                <label className="sr-only" htmlFor="crm-busca">Buscar contatos</label>
                <input id="crm-busca" type="search" placeholder="Buscar nome, produto ou WhatsApp…" value={filtro}
                  onChange={event => setFiltro(event.target.value)} className={campo} />
                <label className="sr-only" htmlFor="crm-filtro">Filtrar por status</label>
                <select id="crm-filtro" className={campo} value={situacao} onChange={event => setSituacao(event.target.value)}>
                  <option>Todos</option>
                  {etapas.map(nome => <option key={nome}>{nome}</option>)}
                </select>
              </div>
              {erroDados && <p role="alert" className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-800">{erroDados}</p>}
              <p className="mt-3 text-xs text-[#708680]">Selecione um contato para consultar e atualizar o atendimento.</p>
            </div>
            {carregando && clientes.length === 0 ? (
              <p className="p-6 text-sm text-[#607e77]">Carregando clientes do Supabase…</p>
            ) : filtrados.length === 0 ? (
              <p className="p-6 text-sm text-[#607e77]">Nenhum contato encontrado para este filtro.</p>
            ) : (
              <div className="max-h-[620px] divide-y divide-[#e9f1ed] overflow-y-auto">
                {filtrados.map(cliente => (
                  <button type="button" key={cliente.id} onClick={() => setSelecionadoId(cliente.id)}
                    aria-pressed={selecionadoId === cliente.id}
                    className={'block w-full px-5 py-4 text-left transition hover:bg-[#f3fbf8] ' +
                      (selecionadoId === cliente.id ? 'border-l-4 border-l-[#0c8378] bg-[#edf8f4] pl-4' : '')}>
                    <div className="flex items-start justify-between gap-3">
                      <strong className="text-sm text-[#173d35]">{cliente.nome || 'Sem nome'}</strong>
                      <span className="shrink-0 rounded-full bg-[#e4f0eb] px-2 py-1 text-[11px] font-semibold text-[#386c61]">
                        {cliente.status_atendimento || 'Novo contato'}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#657e77]">{cliente.whatsapp} · {formatarData(cliente.created_at)}</p>
                    <p className="mt-1 text-xs font-semibold text-[#0e7f72]">{cliente.produto_interesse || 'Produto ainda não informado'}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside aria-label="Detalhes do atendimento" className="overflow-hidden rounded-2xl border border-[#d9e8e2] bg-white shadow-sm">
            <div className="border-b border-[#e4eee9] bg-[#e2f5ef] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a6e]">Ficha de atendimento</p>
              <h2 className="mt-1 break-words text-xl font-black">{selecionado?.nome || 'Selecione um cliente'}</h2>
              {selecionado && <p className="mt-1 text-xs text-[#507267]">Cadastro em {formatarData(selecionado.created_at)}</p>}
            </div>
            {selecionado ? (
              <div className="p-5">
                <div className="space-y-2 border-b border-[#e5f0eb] pb-5 text-sm">
                  <p><span className="font-bold">WhatsApp:</span> {selecionado.whatsapp}</p>
                  <p className="break-all"><span className="font-bold">E-mail:</span> {selecionado.email || 'Não informado'}</p>
                  {whatsappDoCliente(selecionado.whatsapp) && (
                    <a href={whatsappDoCliente(selecionado.whatsapp) || '#'} target="_blank" rel="noopener noreferrer"
                      className="mt-3 inline-flex rounded-xl bg-[#0b7164] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#07574d]">
                      💬 Conversar no WhatsApp
                    </a>
                  )}
                </div>
                <form onSubmit={salvar} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="crm-produto" className="mb-1.5 block text-sm font-bold">Produto de interesse</label>
                    <input id="crm-produto" className={campo} maxLength={150} value={formulario.produto_interesse}
                      onChange={event => setFormulario(atual => ({ ...atual, produto_interesse: event.target.value }))}
                      placeholder="Ex.: Velmo Black Drink, e-book…" />
                  </div>
                  <div>
                    <label htmlFor="crm-status" className="mb-1.5 block text-sm font-bold">Situação do atendimento</label>
                    <select id="crm-status" className={campo} value={formulario.status_atendimento}
                      onChange={event => setFormulario(atual => ({ ...atual, status_atendimento: event.target.value }))}>
                      {etapas.map(nome => <option key={nome}>{nome}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="crm-data" className="mb-1.5 block text-sm font-bold">Próximo contato</label>
                    <input id="crm-data" type="date" className={campo} value={formulario.proximo_contato}
                      onChange={event => setFormulario(atual => ({ ...atual, proximo_contato: event.target.value }))} />
                  </div>
                  <div>
                    <label htmlFor="crm-notas" className="mb-1.5 block text-sm font-bold">Observações do atendimento</label>
                    <textarea id="crm-notas" rows={5} maxLength={2500} className={campo} value={formulario.observacoes}
                      onChange={event => setFormulario(atual => ({ ...atual, observacoes: event.target.value }))}
                      placeholder="Anotações comerciais. Evite registrar informações médicas ou outros dados sensíveis." />
                  </div>
                  {mensagem && <p role="status" className="rounded-lg bg-[#e7f5ef] p-3 text-sm text-[#135c52]">{mensagem}</p>}
                  <button type="submit" disabled={salvando} className="w-full rounded-xl bg-[#095f56] px-5 py-3 font-black text-white transition hover:bg-[#054940] disabled:opacity-60">
                    {salvando ? 'Salvando…' : 'Salvar atendimento'}
                  </button>
                </form>
              </div>
            ) : (
              <p className="p-6 text-sm text-[#657e77]">Escolha um cliente na lista ao lado para abrir a ficha.</p>
            )}
          </aside>
        </section>
        <p className="mt-5 text-center text-xs text-[#718781]">
          Área privativa. Os dados são consultados diretamente do Supabase mediante autenticação e políticas RLS.
          Os números deste painel representam os cadastros registrados, não a confirmação automática de pagamentos.
        </p>
      </div>
    </main>
  )
}

export default Crm

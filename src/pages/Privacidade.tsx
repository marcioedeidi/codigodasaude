import React from 'react'
import { Link } from 'react-router-dom'

const Privacidade: React.FC = () => (
  <main className="min-h-screen bg-[#eaf5ef] px-4 py-12 text-[#173f36]">
    <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg sm:p-10">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#087b76]">Código da Saúde</p>
      <h1 className="mt-3 font-serif text-4xl font-bold">Privacidade e seus dados</h1>
      <p className="mt-5 leading-7">
        Esta página explica como os dados informados por você são usados ao solicitar acesso,
        responder ao quiz de interesses ou entrar em contato com o Código da Saúde.
      </p>
      <h2 className="mt-8 text-2xl font-bold">O que coletamos</h2>
      <p className="mt-2 leading-7">
        No cadastro: nome, WhatsApp e, quando informado, e-mail. Se você fizer o quiz e depois
        concluir o cadastro, também registraremos suas três respostas, o perfil de interesse
        e as opções de leitura e produtos exibidas. Não solicitamos diagnósticos ou prontuários.
      </p>
      <h2 className="mt-8 text-2xl font-bold">Para que usamos</h2>
      <p className="mt-2 leading-7">
        Para apresentar o resultado solicitado, liberar conteúdos, registrar seu interesse,
        responder dúvidas e dar continuidade ao atendimento que você procurar. As respostas
        permitem entender tendências de interesse entre as pessoas cadastradas; não servem
        para diagnosticar condições de saúde.
      </p>
      <h2 className="mt-8 text-2xl font-bold">Onde os dados ficam</h2>
      <p className="mt-2 leading-7">
        Cadastros são enviados ao banco Supabase utilizado pelo Código da Saúde e apresentados
        em uma área administrativa com autenticação. Utilizamos provedores técnicos necessários
        à hospedagem e ao funcionamento do serviço. Mantemos dados enquanto necessários às
        finalidades informadas e às obrigações aplicáveis.
      </p>
      <h2 className="mt-8 text-2xl font-bold">Cookies opcionais</h2>
      <p className="mt-2 leading-7">
        As ferramentas opcionais de análise e publicidade, como Google Analytics e Meta Pixel,
        dependem da escolha no aviso de privacidade. Recusar esses cookies não impede o quiz
        nem o cadastro. Respostas individuais do quiz e dados de contato não são enviados
        por nós aos eventos de publicidade.
      </p>
      <h2 className="mt-8 text-2xl font-bold">Suas escolhas e direitos</h2>
      <p className="mt-2 leading-7">
        Você pode pedir informações, correção ou exclusão dos dados, quando cabível, pelo
        canal de atendimento do Código da Saúde. Também pode alterar suas preferências
        de cookies quando desejar.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://wa.me/5554991071933" target="_blank" rel="noopener noreferrer"
          className="rounded-xl bg-[#087b76] px-5 py-3 font-bold text-white">Falar sobre meus dados</a>
        <button type="button" onClick={() => window.dispatchEvent(new Event('codigo-saude:abrir-preferencias-cookies'))}
          className="rounded-xl border border-[#087b76] px-5 py-3 font-bold text-[#087b76]">Preferências de cookies</button>
        <Link to="/" className="rounded-xl border border-[#c9e3dc] px-5 py-3 font-bold">Voltar ao início</Link>
      </div>
      <p className="mt-9 text-xs text-[#58756e]">Atualizado em 26 de outubro de 2026.</p>
    </article>
  </main>
)

export default Privacidade

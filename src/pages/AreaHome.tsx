import React from 'react'
import { Link } from 'react-router-dom'
import BotanicalLeaves from '@components/common/BotanicalLeaves'

const AreaHome: React.FC = () => {
  const brandArt = `${import.meta.env.BASE_URL}assets/logo-big.webp`
  const productImage = 'https://www.minhavitrine.pro/products/4a1b6bbe-00b6-417d-9471-43187c321d9d.png'

  return (
    <main className="relative overflow-hidden bg-[#9edfd7]">
      <section className="relative isolate min-h-[760px] overflow-hidden px-4 py-10 md:py-14">
        <BotanicalLeaves />

        <div className="absolute inset-0 -z-30 bg-[linear-gradient(120deg,#c8f0ea_0%,#8fd8ce_46%,#63c7bd_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_66%_42%,rgba(239,225,189,0.72),transparent_31%),radial-gradient(circle_at_92%_18%,rgba(255,255,255,0.38),transparent_24%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#55bbb1]/65 to-transparent" />

        <div className="container-max relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.12fr_0.72fr]">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-6 max-w-[470px] rounded-[2rem] border border-white/80 bg-white/35 p-3 shadow-xl shadow-[#0d6862]/10 backdrop-blur-sm lg:mx-0">
              <img
                src={brandArt}
                alt="Código da Saúde"
                className="max-h-[250px] w-full rounded-[1.5rem] object-contain"
              />
            </div>

            <p className="mx-auto max-w-lg text-xl font-medium leading-8 text-[#174d47] lg:mx-0">
              Seu caminho para escolhas de bem-estar mais simples, claras e conscientes.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to="/produtos"
                className="rounded-2xl bg-[#078a82] px-6 py-4 font-bold text-white shadow-lg shadow-[#075f5a]/25 transition hover:bg-[#066f69]"
              >
                Conhecer os produtos →
              </Link>
              <Link
                to="/cadastro"
                className="rounded-2xl bg-[#053e3a] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-[#032f2c]"
              >
                Falar no WhatsApp →
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-[#185d56] lg:justify-start">
              <span>✓ Seleção cuidadosa</span>
              <span>✓ Atendimento humano</span>
              <span>✓ Compra orientada</span>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[510px] w-full max-w-[650px] items-end justify-center">
            <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full border-4 border-white/90 bg-[#f3e5c5]/92 shadow-[0_0_0_18px_rgba(119,224,214,0.34),0_0_56px_rgba(4,116,108,0.38)] md:h-[480px] md:w-[480px]" />
            <div className="absolute bottom-7 left-1/2 h-20 w-[75%] -translate-x-1/2 rounded-[50%] bg-[#0d4f49]/38 blur-xl" />
            <img
              src={productImage}
              alt="Velmo Black Drink"
              className="relative z-10 max-h-[500px] w-auto max-w-[92%] object-contain drop-shadow-[0_30px_30px_rgba(8,61,56,0.34)]"
            />
            <div className="absolute right-4 top-2 z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#9af1e9] bg-[#043f3b] text-center text-white shadow-[0_0_30px_rgba(141,243,233,0.88)]">
              <span className="text-2xl">♧</span>
              <strong className="mt-1 text-base uppercase leading-tight">Produtos</strong>
              <span className="text-xs uppercase text-[#b7eb7e]">selecionados</span>
              <span className="mt-1 text-[#f2cf60]">★★★</span>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-sm rounded-[2rem] border-2 border-white/90 bg-[#d8f5f0]/82 p-5 shadow-2xl shadow-[#075f59]/20 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#149f97] text-2xl text-white">◇</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#0b5b56]">Bônus digital</p>
                <h2 className="text-xl font-black text-[#153b35]">E-book exclusivo</h2>
              </div>
            </div>

            <div className="rounded-2xl border border-white/85 bg-[#fff8e8]/92 p-5 text-center shadow-inner">
              <div className="mx-auto mb-4 flex h-40 w-32 items-center justify-center rounded-lg border border-[#a7c8a5] bg-white px-3 text-[#28594f] shadow-md">
                <div>
                  <span className="block text-4xl font-black text-[#8a1f1f]">7</span>
                  <strong className="block text-lg leading-tight">Pequenas Mudanças</strong>
                  <span className="mt-2 block text-xs">para uma rotina de bem-estar mais consciente</span>
                </div>
              </div>
              <p className="font-bold text-[#173f36]">Brinde com ofertas selecionadas do Velmo Black Drink</p>
              <p className="mt-2 text-sm leading-5 text-[#4a6962]">Confira as condições e a disponibilidade no atendimento.</p>
            </div>
          </aside>
        </div>

        <div className="container-max relative z-10 mt-10 rounded-[2rem] border-2 border-white/85 bg-[#d9f4ef]/88 p-5 shadow-xl shadow-[#0b6660]/15 backdrop-blur-md">
          <div className="grid gap-5 md:grid-cols-5">
            {[
              ['◇', 'Compra segura', 'Dados tratados com cuidado.'],
              ['♧', 'Seleção cuidadosa', 'Produtos organizados por objetivo.'],
              ['☆', 'Informação clara', 'Conteúdo simples e responsável.'],
              ['♡', 'Atendimento humano', 'Orientação sem pressão.'],
              ['▤', 'Entrega nacional', 'Consulte prazos e condições.'],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex gap-3 md:border-r md:border-[#368f87]/35 md:last:border-r-0">
                <span className="text-3xl text-[#08766f]">{icon}</span>
                <div>
                  <p className="font-bold text-[#123f39]">{title}</p>
                  <p className="mt-1 text-sm leading-5 text-[#3c665f]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AreaHome

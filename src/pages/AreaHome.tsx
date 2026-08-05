import React from 'react'
import { Link } from 'react-router-dom'
import BotanicalLeaves from '@components/common/BotanicalLeaves'

const AreaHome: React.FC = () => {
  const logo = `${import.meta.env.BASE_URL}assets/logo-small.webp`
  const productImage = 'https://www.minhavitrine.pro/products/4a1b6bbe-00b6-417d-9471-43187c321d9d.png'

  const benefits = [
    ['◇', 'Compra 100% Segura', 'Seus dados e pagamentos protegidos.'],
    ['♧', 'Ingredientes Naturais', 'Fórmulas seguras e de alta qualidade.'],
    ['⚗', 'Base Científica', 'Desenvolvido com estudos e evidências.'],
    ['♙', 'Resultados Reais', 'Mais energia, disposição e bem-estar.'],
    ['▤', 'Entrega para Todo o Brasil', 'Receba com rapidez e segurança.'],
  ]

  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: '#91d8cf' }}>
      <section
        className="relative isolate min-h-[820px] overflow-hidden px-4 pb-7 pt-8 md:px-7 xl:px-10"
        style={{
          background:
            'linear-gradient(112deg, #d9f5ef 0%, #b8ebe3 30%, #86d5cc 66%, #a8e5dd 100%)',
        }}
      >
        <div className="absolute inset-0 -z-30 bg-[#91d8cf]" />
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              'radial-gradient(circle at 14% 28%, rgba(255,255,255,.84) 0, rgba(255,255,255,.28) 23%, transparent 39%), radial-gradient(circle at 54% 38%, rgba(234,255,252,.88) 0, rgba(191,238,231,.42) 34%, transparent 58%), radial-gradient(circle at 87% 22%, rgba(255,255,255,.55) 0, transparent 30%), linear-gradient(to top, rgba(38,151,140,.25), transparent 35%)',
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-45">
          <BotanicalLeaves />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-5 lg:grid-cols-[1.08fr_1.12fr_0.68fr] xl:gap-7">
          <div className="flex min-h-[650px] flex-col justify-center pb-4 pt-5 text-center lg:text-left">
            <img
              src={logo}
              alt="Código da Saúde"
              className="mx-auto h-auto w-full max-w-[470px] object-contain drop-shadow-[0_12px_20px_rgba(24,84,67,0.16)] lg:mx-0"
            />

            <div className="mx-auto mt-2 flex w-[82%] max-w-[430px] items-center gap-3 text-[#b9954d] lg:mx-0">
              <span className="h-px flex-1 bg-[#b9954d]/70" />
              <span className="text-3xl leading-none">♡</span>
              <span className="h-px flex-1 bg-[#b9954d]/70" />
            </div>

            <p className="mx-auto mt-5 max-w-[535px] text-[25px] font-semibold leading-[1.42] text-[#102b27] md:text-[29px] lg:mx-0">
              Seu caminho para uma vida mais leve,{' '}
              <strong className="font-black text-[#237944]">saudável e equilibrada.</strong>
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to="/produtos"
                className="flex min-h-[72px] min-w-[286px] items-center justify-center gap-3 rounded-[20px] border border-[#40c9bd] bg-[linear-gradient(135deg,#07998e,#06756d)] px-5 py-4 text-[16px] font-black uppercase text-white shadow-[0_14px_26px_rgba(4,101,93,0.28)] transition hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1c063] text-2xl text-[#f1d16f]">⌑</span>
                Conhecer os produtos
                <span className="text-3xl font-light">›</span>
              </Link>

              <Link
                to="/cadastro"
                className="flex min-h-[72px] min-w-[220px] items-center justify-center gap-3 rounded-[20px] border border-[#0c554f] bg-[linear-gradient(135deg,#153f3a,#032d2a)] px-5 py-4 text-[16px] font-black uppercase text-white shadow-[0_14px_26px_rgba(2,54,49,0.27)] transition hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#70a92a] text-xl">◔</span>
                <span className="leading-tight">Falar no<br />WhatsApp</span>
                <span className="text-3xl font-light">›</span>
              </Link>
            </div>

            <div className="mt-9 grid max-w-[560px] gap-4 text-left text-sm font-bold text-[#173d37] sm:grid-cols-3">
              {[
                ['◇', 'Produtos', 'Selecionados'],
                ['♡', 'Atendimento', 'Humanizado'],
                ['▣', 'Compra 100%', 'Segura'],
              ].map(([icon, first, second]) => (
                <div key={first} className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="text-4xl font-light text-[#0b665e]">{icon}</span>
                  <span className="leading-5">{first}<br />{second}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto min-h-[680px] w-full max-w-[690px]">
            <div
              className="absolute left-1/2 top-[4%] h-[540px] w-[540px] -translate-x-1/2 rounded-full border-[3px] border-white/95 md:h-[590px] md:w-[590px]"
              style={{
                background:
                  'radial-gradient(circle at 45% 34%, rgba(255,255,255,.94) 0, rgba(220,250,246,.82) 28%, rgba(111,215,205,.46) 61%, rgba(41,179,168,.24) 75%, transparent 76%)',
                boxShadow:
                  '0 0 0 12px rgba(112,236,225,.18), 0 0 48px rgba(55,226,212,.82), inset 0 0 45px rgba(255,255,255,.62)',
              }}
            />

            <div className="absolute left-[5%] top-[31%] h-56 w-24 rotate-[-12deg] rounded-[50%] border-l-[5px] border-[#e9ffff]/90 opacity-80" />
            <div className="absolute right-[5%] top-[34%] h-56 w-24 rotate-[12deg] rounded-[50%] border-r-[5px] border-[#e9ffff]/90 opacity-80" />
            <div className="absolute left-[12%] top-[43%] h-3 w-3 rounded-full bg-white/90 shadow-[16px_-45px_0_2px_rgba(255,255,255,.8),36px_38px_0_1px_rgba(255,255,255,.75)]" />
            <div className="absolute right-[14%] top-[39%] h-3 w-3 rounded-full bg-white/90 shadow-[-18px_-42px_0_2px_rgba(255,255,255,.8),-37px_44px_0_1px_rgba(255,255,255,.75)]" />

            <div
              className="absolute bottom-[18px] left-1/2 z-10 h-[112px] w-[77%] -translate-x-1/2 rounded-[50%]"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 25%, #777a72 0%, #50554f 34%, #303631 66%, #171c19 100%)',
                boxShadow:
                  '0 24px 28px rgba(7,55,49,.34), inset 0 12px 16px rgba(255,255,255,.13), inset 0 -18px 26px rgba(0,0,0,.45)',
              }}
            />
            <div
              className="absolute bottom-[78px] left-1/2 z-10 h-[68px] w-[67%] -translate-x-1/2 rounded-[50%] border-t-[7px] border-[#9b9d94]/70"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 30%, #85877d 0%, #5c615a 46%, #373c37 78%, #242925 100%)',
                boxShadow: 'inset 0 10px 16px rgba(255,255,255,.14), 0 8px 16px rgba(0,0,0,.22)',
              }}
            />

            <img
              src={productImage}
              alt="Velmo Black Drink"
              className="absolute bottom-[34px] left-1/2 z-20 max-h-[565px] w-auto max-w-[92%] -translate-x-1/2 translate-y-[22px] object-contain drop-shadow-[0_28px_28px_rgba(2,40,36,0.38)]"
            />

            <div className="absolute right-[2%] top-[1%] z-30 flex h-[154px] w-[154px] flex-col items-center justify-center rounded-full border-2 border-[#b7fff8] text-center text-white shadow-[0_0_0_3px_rgba(255,255,255,.5),0_0_30px_rgba(71,240,226,.88)]"
              style={{ background: 'radial-gradient(circle at 42% 24%, #195851, #032d2a 72%)' }}
            >
              <span className="text-3xl text-[#e4c05e]">♧</span>
              <strong className="mt-1 text-xl uppercase leading-tight">Produtos</strong>
              <span className="text-sm font-bold uppercase text-[#afd54f]">Selecionados</span>
              <span className="mt-1 text-xl tracking-[4px] text-[#efbd49]">★★★</span>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[360px] rounded-[30px] border-2 border-white/90 bg-[#b9e8e1]/92 p-4 shadow-[0_18px_42px_rgba(3,77,70,.23),0_0_26px_rgba(139,255,244,.50)] backdrop-blur-md">
            <div className="mb-4 flex items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#17aa9f] text-3xl text-white shadow-lg">♧</span>
              <h2 className="text-[21px] font-black uppercase leading-tight text-[#092925]">
                Ganhe este<br />e-book exclusivo!
              </h2>
            </div>

            <div className="relative mx-auto aspect-[0.72] w-[84%] overflow-hidden rounded-sm border border-[#d7cda9] bg-[#fffdf3] p-5 text-center shadow-[0_15px_26px_rgba(28,58,48,.28)]">
              <div className="absolute -left-8 -top-7 h-28 w-28 rounded-full bg-[#6f9c38]/18" />
              <div className="absolute -right-10 bottom-7 h-32 w-32 rounded-full bg-[#6f9c38]/18" />
              <span className="absolute left-3 top-3 rounded-full bg-[#477d2e] px-3 py-2 text-[10px] font-black uppercase text-white">E-book<br />gratuito</span>
              <img src={logo} alt="Código da Saúde" className="mx-auto mt-3 h-20 w-auto object-contain" />
              <div className="mx-auto mt-1 h-px w-[78%] bg-[#c7ae68]" />
              <p className="mt-5 text-[44px] font-black leading-none text-[#8d1c1c]">7</p>
              <h3 className="mt-1 font-serif text-[29px] font-black leading-[0.95] text-[#251d18]">Pequenas<br />Mudanças</h3>
              <p className="mt-3 text-[13px] font-bold leading-tight text-[#493b2b]">que podem transformar sua</p>
              <p className="mt-1 font-serif text-[30px] italic leading-none text-[#5d8a35]">Saúde em</p>
              <p className="mt-1 text-[18px] font-black leading-tight text-[#251d18]">Apenas 7 Dias</p>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,#e6d8a6,transparent)] opacity-70" />
            </div>

            <p className="mt-5 text-center text-lg font-black uppercase leading-tight text-[#122d28]">
              Grátis na compra do<br />
              <span className="text-[22px] text-[#1d772f]">Velmo Black Drink</span><br />
              <span className="text-base">(normal ou combo)</span>
            </p>
          </aside>
        </div>

        <div className="relative z-10 mx-auto mt-3 w-full max-w-[1420px] rounded-[28px] border-2 border-white/80 bg-[#d8f3ef]/92 px-6 py-5 shadow-[0_15px_32px_rgba(7,83,76,.17)] backdrop-blur-md">
          <div className="grid gap-4 md:grid-cols-5">
            {benefits.map(([icon, title, text]) => (
              <div key={title} className="flex min-h-[86px] items-center gap-4 px-2 md:border-r md:border-[#43877f]/35 md:last:border-r-0">
                <span className="shrink-0 text-5xl font-light text-[#0b625b]">{icon}</span>
                <div>
                  <p className="text-[15px] font-black leading-tight text-[#132e2a]">{title}</p>
                  <p className="mt-2 text-[13px] leading-5 text-[#253e39]">{text}</p>
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

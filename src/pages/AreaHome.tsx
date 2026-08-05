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
    <main className="relative overflow-hidden bg-[#8fd7ce]">
      <section
        className="relative isolate overflow-hidden px-4 pb-5 pt-4 md:px-7 xl:px-10"
        style={{
          background:
            'linear-gradient(112deg, #d9f5ef 0%, #b9ebe4 29%, #87d5cc 66%, #a8e5dd 100%)',
        }}
      >
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              'radial-gradient(circle at 13% 27%, rgba(255,255,255,.87) 0, rgba(255,255,255,.30) 24%, transparent 40%), radial-gradient(circle at 53% 34%, rgba(235,255,252,.92) 0, rgba(186,238,231,.42) 34%, transparent 58%), radial-gradient(circle at 88% 20%, rgba(255,255,255,.50) 0, transparent 31%), linear-gradient(to top, rgba(35,143,133,.25), transparent 34%)',
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-35">
          <BotanicalLeaves />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-start gap-4 lg:grid-cols-[1fr_1.2fr_0.78fr] xl:gap-7">
          <div className="flex min-h-[640px] flex-col justify-start pb-2 pt-4 text-center lg:text-left">
            <img
              src={logo}
              alt="Código da Saúde"
              className="mx-auto h-auto w-full max-w-[525px] object-contain drop-shadow-[0_12px_20px_rgba(24,84,67,0.16)] lg:mx-0"
            />

            <div className="mx-auto mt-2 flex w-[82%] max-w-[455px] items-center gap-3 text-[#b8944c] lg:mx-0">
              <span className="h-px flex-1 bg-[#b8944c]/75" />
              <span className="text-3xl leading-none">♡</span>
              <span className="h-px flex-1 bg-[#b8944c]/75" />
            </div>

            <p className="mx-auto mt-5 max-w-[545px] text-[25px] font-semibold leading-[1.43] text-[#102b27] md:text-[29px] lg:mx-0">
              Seu caminho para uma vida mais leve,{' '}
              <strong className="font-black text-[#237944]">saudável e equilibrada.</strong>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to="/produtos"
                className="flex min-h-[70px] min-w-[285px] items-center justify-center gap-3 rounded-[20px] border border-[#41cabe] bg-[linear-gradient(135deg,#07998e,#06756d)] px-5 py-4 text-[16px] font-black uppercase text-white shadow-[0_14px_26px_rgba(4,101,93,0.28)] transition hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1c063] text-2xl text-[#f1d16f]">⌑</span>
                Conhecer os produtos
                <span className="text-3xl font-light">›</span>
              </Link>

              <Link
                to="/cadastro"
                className="flex min-h-[70px] min-w-[220px] items-center justify-center gap-3 rounded-[20px] border border-[#0c554f] bg-[linear-gradient(135deg,#153f3a,#032d2a)] px-5 py-4 text-[16px] font-black uppercase text-white shadow-[0_14px_26px_rgba(2,54,49,0.27)] transition hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#70a92a] text-xl">◔</span>
                <span className="leading-tight">Falar no<br />WhatsApp</span>
                <span className="text-3xl font-light">›</span>
              </Link>
            </div>

            <div className="mt-7 grid max-w-[570px] gap-4 text-left text-sm font-bold text-[#173d37] sm:grid-cols-3">
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

          <div className="relative mx-auto min-h-[640px] w-full max-w-[720px] -translate-y-5">
            <div
              className="absolute left-1/2 top-[1%] h-[560px] w-[560px] -translate-x-1/2 rounded-full border-[3px] border-white/95 md:h-[610px] md:w-[610px]"
              style={{
                background:
                  'radial-gradient(circle at 45% 34%, rgba(255,255,255,.95) 0, rgba(220,250,246,.82) 28%, rgba(111,215,205,.46) 61%, rgba(41,179,168,.24) 75%, transparent 76%)',
                boxShadow:
                  '0 0 0 12px rgba(112,236,225,.18), 0 0 48px rgba(55,226,212,.82), inset 0 0 45px rgba(255,255,255,.62)',
              }}
            />

            <div className="absolute left-[4%] top-[29%] h-56 w-24 rotate-[-12deg] rounded-[50%] border-l-[5px] border-[#e9ffff]/90 opacity-80" />
            <div className="absolute right-[4%] top-[32%] h-56 w-24 rotate-[12deg] rounded-[50%] border-r-[5px] border-[#e9ffff]/90 opacity-80" />
            <div className="absolute left-[11%] top-[41%] h-3 w-3 rounded-full bg-white/90 shadow-[16px_-45px_0_2px_rgba(255,255,255,.8),36px_38px_0_1px_rgba(255,255,255,.75)]" />
            <div className="absolute right-[13%] top-[37%] h-3 w-3 rounded-full bg-white/90 shadow-[-18px_-42px_0_2px_rgba(255,255,255,.8),-37px_44px_0_1px_rgba(255,255,255,.75)]" />

            <div
              className="absolute bottom-[88px] left-1/2 z-10 h-[112px] w-[80%] -translate-x-1/2 rounded-[50%]"
              style={{
                background:
                  'radial-gradient(circle at 12% 38%, rgba(213,216,207,.22) 0 2%, transparent 3%), radial-gradient(circle at 38% 62%, rgba(225,228,219,.16) 0 1.5%, transparent 2.5%), radial-gradient(circle at 72% 32%, rgba(226,228,219,.16) 0 2%, transparent 3%), radial-gradient(ellipse at 50% 22%, #777a72 0%, #50554f 34%, #303631 66%, #171c19 100%)',
                backgroundSize: '64px 42px, 72px 48px, 82px 54px, auto',
                boxShadow:
                  '0 24px 28px rgba(7,55,49,.34), inset 0 12px 16px rgba(255,255,255,.13), inset 0 -18px 26px rgba(0,0,0,.45)',
              }}
            />
            <div
              className="absolute bottom-[148px] left-1/2 z-10 h-[70px] w-[69%] -translate-x-1/2 rounded-[50%] border-t-[7px] border-[#a8aaa0]/75"
              style={{
                background:
                  'radial-gradient(circle at 20% 50%, rgba(232,233,226,.18) 0 2%, transparent 3%), radial-gradient(circle at 74% 45%, rgba(229,231,222,.16) 0 2%, transparent 3%), radial-gradient(ellipse at 50% 30%, #898b82 0%, #5c615a 46%, #373c37 78%, #242925 100%)',
                backgroundSize: '70px 45px, 88px 52px, auto',
                boxShadow: 'inset 0 10px 16px rgba(255,255,255,.14), 0 8px 16px rgba(0,0,0,.22)',
              }}
            />

            <img
              src={productImage}
              alt="Velmo Black Drink"
              className="absolute bottom-[138px] left-1/2 z-20 w-[108%] max-w-[730px] -translate-x-1/2 object-contain drop-shadow-[0_28px_28px_rgba(2,40,36,0.38)] md:w-[113%]"
            />

            <div
              className="absolute right-[1%] top-[-2%] z-30 flex h-[158px] w-[158px] flex-col items-center justify-center rounded-full border-2 border-[#b7fff8] text-center text-white shadow-[0_0_0_3px_rgba(255,255,255,.5),0_0_30px_rgba(71,240,226,.88)]"
              style={{ background: 'radial-gradient(circle at 42% 24%, #195851, #032d2a 72%)' }}
            >
              <span className="text-3xl text-[#e4c05e]">♧</span>
              <strong className="mt-1 text-xl uppercase leading-tight">Produtos</strong>
              <span className="text-sm font-bold uppercase text-[#afd54f]">Selecionados</span>
              <span className="mt-1 text-xl tracking-[4px] text-[#efbd49]">★★★</span>
            </div>
          </div>

          <aside className="mx-auto mt-12 w-full max-w-[375px] rounded-[30px] border-2 border-white/90 bg-[#b9e8e1]/92 p-5 shadow-[0_18px_42px_rgba(3,77,70,.23),0_0_26px_rgba(139,255,244,.50)] backdrop-blur-md lg:mt-20">
            <div className="mb-4 flex items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#17aa9f] text-3xl text-white shadow-lg">♧</span>
              <h2 className="text-[21px] font-black uppercase leading-tight text-[#092925]">
                Ganhe este<br />e-book exclusivo!
              </h2>
            </div>

            <div className="relative mx-auto aspect-[0.72] w-[80%] overflow-hidden rounded-sm border border-[#d7cda9] bg-[#fffdf3] p-5 text-center shadow-[0_15px_26px_rgba(28,58,48,.28)]">
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

        <div className="relative z-10 mx-auto -mt-8 w-full max-w-[1420px] rounded-[28px] border-2 border-white/80 bg-[#d8f3ef]/92 px-6 py-5 shadow-[0_15px_32px_rgba(7,83,76,.17)] backdrop-blur-md">
          <div className="grid gap-4 md:grid-cols-5">
            {benefits.map(([icon, title, text]) => (
              <div key={title} className="flex min-h-[82px] items-center gap-4 px-2 md:border-r md:border-[#43877f]/35 md:last:border-r-0">
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

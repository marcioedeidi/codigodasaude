import React from 'react'
import { Link } from 'react-router-dom'
import BotanicalLeaves from '@components/common/BotanicalLeaves'

const AreaHome: React.FC = () => {
  const logo = `${import.meta.env.BASE_URL}assets/logo-small.webp`
  const productImage = 'https://www.minhavitrine.pro/products/4a1b6bbe-00b6-417d-9471-43187c321d9d.png'

  const benefits = [
    ['♢', 'Compra 100% Segura', 'Seus dados e pagamentos protegidos.'],
    ['♧', 'Ingredientes Naturais', 'Fórmulas seguras e de alta qualidade.'],
    ['♙', 'Base Científica', 'Desenvolvido com estudos e evidências.'],
    ['♧', 'Resultados Reais', 'Mais energia, disposição e bem-estar.'],
    ['▤', 'Entrega para Todo o Brasil', 'Receba com rapidez e segurança.'],
  ]

  return (
    <main className="relative overflow-hidden bg-[#9fded6]">
      <section className="relative isolate overflow-hidden px-4 pb-7 pt-7 md:px-7 md:pb-8 md:pt-8 xl:px-10">
        <BotanicalLeaves />

        <div className="absolute inset-0 -z-30 bg-[linear-gradient(112deg,#dcf5f0_0%,#bcebe4_34%,#86d2c9_72%,#a8e2db_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_40%,rgba(255,255,255,0.72),transparent_28%),radial-gradient(circle_at_44%_18%,rgba(241,255,252,0.82),transparent_32%),radial-gradient(circle_at_70%_52%,rgba(42,190,178,0.35),transparent_34%),radial-gradient(circle_at_94%_20%,rgba(255,255,255,0.42),transparent_23%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#48b9ae]/48 to-transparent" />
        <div className="absolute -left-28 top-24 -z-10 h-[520px] w-[390px] rounded-full bg-[#2f8d73]/18 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-5 lg:grid-cols-[1.02fr_1.23fr_0.82fr] xl:gap-8">
          <div className="pb-2 text-center lg:text-left">
            <img
              src={logo}
              alt="Código da Saúde"
              className="mx-auto h-auto w-full max-w-[540px] object-contain drop-shadow-[0_10px_18px_rgba(28,72,52,0.12)] lg:mx-0"
            />

            <div className="mx-auto mt-1 h-px w-[72%] bg-gradient-to-r from-transparent via-[#c9a963] to-transparent lg:mx-0" />
            <div className="mx-auto mt-2 flex max-w-[420px] items-center justify-center gap-2 text-[#c39b4e] lg:mx-0">
              <span className="h-px flex-1 bg-[#c9a963]/65" />
              <span className="text-3xl">♡</span>
              <span className="h-px flex-1 bg-[#c9a963]/65" />
            </div>

            <p className="mx-auto mt-2 max-w-[535px] text-[22px] font-medium leading-[1.45] text-[#152b27] md:text-[27px] lg:mx-0">
              Seu caminho para uma vida<br className="hidden xl:block" /> mais leve,{' '}
              <strong className="font-black text-[#287346]">saudável e equilibrada.</strong>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/produtos"
                className="flex min-h-[72px] min-w-[300px] items-center justify-center gap-4 rounded-[19px] border border-[#21b4a7] bg-[linear-gradient(135deg,#078b80,#056a63)] px-6 py-4 text-[17px] font-black uppercase text-white shadow-[0_12px_24px_rgba(4,105,96,0.26)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(4,105,96,0.32)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4b356] text-2xl text-[#f0ce6a]">⌑</span>
                Conhecer os produtos
                <span className="text-3xl font-light">›</span>
              </Link>

              <Link
                to="/cadastro"
                className="flex min-h-[72px] min-w-[250px] items-center justify-center gap-4 rounded-[19px] border border-[#0c554f] bg-[linear-gradient(135deg,#173e39,#032d2a)] px-6 py-4 text-[17px] font-black uppercase text-white shadow-[0_12px_24px_rgba(2,54,49,0.25)] transition hover:-translate-y-1 hover:bg-[#032b28]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6a9f27] text-2xl">◔</span>
                <span className="leading-tight">Falar no<br />WhatsApp</span>
                <span className="text-3xl font-light">›</span>
              </Link>
            </div>

            <div className="mt-9 grid max-w-[565px] gap-3 text-left text-sm font-bold text-[#183d36] sm:grid-cols-3">
              {[
                ['♢', 'Produtos', 'Selecionados'],
                ['♡', 'Atendimento', 'Humanizado'],
                ['▣', 'Compra 100%', 'Segura'],
              ].map(([icon, first, second]) => (
                <div key={first} className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="text-4xl font-light text-[#0d625b]">{icon}</span>
                  <span className="leading-5">{first}<br />{second}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[650px] w-full max-w-[690px] items-end justify-center lg:min-h-[690px]">
            <div className="absolute left-1/2 top-[8%] h-[500px] w-[500px] -translate-x-1/2 rounded-full border-4 border-white/90 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.92),rgba(188,239,232,0.62)_54%,rgba(31,184,173,0.32)_76%,transparent_77%)] shadow-[0_0_0_12px_rgba(81,226,214,0.18),0_0_44px_rgba(65,229,217,0.78)] md:h-[570px] md:w-[570px]" />
            <div className="absolute left-[7%] top-[34%] h-48 w-16 rotate-[-12deg] rounded-[50%] border-l-4 border-[#d8ffff]/80 opacity-80 blur-[1px]" />
            <div className="absolute right-[8%] top-[38%] h-52 w-20 rotate-[14deg] rounded-[50%] border-r-4 border-[#d8ffff]/80 opacity-80 blur-[1px]" />
            <div className="absolute bottom-4 left-1/2 h-[108px] w-[78%] -translate-x-1/2 rounded-[50%] border-t-8 border-[#7e8077] bg-[radial-gradient(ellipse_at_center,#4b504c_0%,#313733_50%,#1d2320_100%)] shadow-[0_20px_30px_rgba(12,47,42,0.35)]" />
            <div className="absolute bottom-[72px] left-1/2 h-16 w-[66%] -translate-x-1/2 rounded-[50%] bg-[#6b716d] shadow-[inset_0_10px_18px_rgba(255,255,255,0.13),inset_0_-10px_18px_rgba(0,0,0,0.35)]" />

            <img
              src={productImage}
              alt="Velmo Black Drink"
              className="relative z-10 mb-[72px] max-h-[570px] w-auto max-w-[92%] object-contain drop-shadow-[0_32px_34px_rgba(4,38,34,0.38)]"
            />

            <div className="absolute bottom-[72px] right-[9%] z-20 rotate-[8deg] text-[72px] drop-shadow-[0_8px_8px_rgba(50,16,8,0.25)]" aria-hidden="true">🍓</div>
            <div className="absolute bottom-[66px] right-[20%] z-20 -rotate-[10deg] text-[58px] drop-shadow-[0_8px_8px_rgba(50,16,8,0.25)]" aria-hidden="true">🍓</div>

            <div className="absolute right-[4%] top-[2%] z-30 flex h-[158px] w-[158px] flex-col items-center justify-center rounded-full border-2 border-[#a4fff5] bg-[radial-gradient(circle_at_45%_25%,#124d48,#032b29_70%)] text-center text-white shadow-[0_0_0_3px_rgba(255,255,255,0.55),0_0_28px_rgba(87,245,230,0.86)]">
              <span className="text-3xl text-[#e5c15f]">♧</span>
              <strong className="mt-1 text-xl uppercase leading-tight">Produtos</strong>
              <span className="text-sm font-bold uppercase text-[#abd44d]">Selecionados</span>
              <span className="mt-1 text-xl tracking-[4px] text-[#f1bd45]">★★★</span>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[360px] rounded-[30px] border-2 border-white/90 bg-[#bce7df]/88 p-4 shadow-[0_18px_40px_rgba(3,77,70,0.22),0_0_25px_rgba(129,255,244,0.45)] backdrop-blur-md">
            <div className="mb-4 flex items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#19a99e] text-3xl text-white shadow-lg">♧</span>
              <h2 className="text-[21px] font-black uppercase leading-tight text-[#0a2724]">
                Ganhe este<br />e-book exclusivo!
              </h2>
            </div>

            <div className="relative mx-auto aspect-[0.72] w-[82%] overflow-hidden rounded-sm border border-[#d8cfae] bg-[linear-gradient(145deg,#fffdf4_0%,#f3edcf_60%,#e1dfc4_100%)] p-5 text-center shadow-[0_14px_24px_rgba(28,58,48,0.28)]">
              <div className="absolute -left-9 -top-8 h-28 w-28 rounded-full bg-[#6a9632]/20 blur-sm" />
              <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-[#6a9632]/20 blur-sm" />
              <span className="absolute left-3 top-3 rounded-full bg-[#477d2e] px-3 py-2 text-[10px] font-black uppercase text-white">E-book<br />gratuito</span>
              <img src={logo} alt="Código da Saúde" className="mx-auto mt-3 h-20 w-auto object-contain" />
              <div className="mx-auto mt-1 h-px w-[78%] bg-[#c7ae68]" />
              <p className="mt-5 text-[44px] font-black leading-none text-[#8d1c1c]">7</p>
              <h3 className="mt-1 font-serif text-[29px] font-black leading-[0.95] text-[#251d18]">Pequenas<br />Mudanças</h3>
              <p className="mt-3 text-[13px] font-bold leading-tight text-[#493b2b]">que podem transformar sua</p>
              <p className="mt-1 font-serif text-[30px] italic leading-none text-[#5d8a35]">Saúde em</p>
              <p className="mt-1 text-[18px] font-black leading-tight text-[#251d18]">Apenas 7 Dias</p>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_22%_90%,#d1a234_0_10%,transparent_11%),radial-gradient(circle_at_45%_90%,#6aa142_0_13%,transparent_14%),radial-gradient(circle_at_70%_90%,#be5535_0_12%,transparent_13%),linear-gradient(to_top,#e6d8a6,transparent)] opacity-75" />
            </div>

            <p className="mt-5 text-center text-lg font-black uppercase leading-tight text-[#122d28]">
              Grátis na compra do<br />
              <span className="text-[22px] text-[#1d772f]">Velmo Black Drink</span><br />
              <span className="text-base">(normal ou combo)</span>
            </p>
          </aside>
        </div>

        <div className="relative z-10 mx-auto mt-4 w-full max-w-[1415px] rounded-[28px] border-2 border-white/75 bg-[#d2f0eb]/90 px-6 py-6 shadow-[0_15px_30px_rgba(7,83,76,0.16)] backdrop-blur-md">
          <div className="grid gap-5 md:grid-cols-5">
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

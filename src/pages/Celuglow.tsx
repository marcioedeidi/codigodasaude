import React from 'react'
import { useNavigate } from 'react-router-dom'
import productImage from '../assets/Produtos/ChatGPT Image 31 de ago. de 2026, 22_57_45.png'

type Offer = {
  label: string
  title: string
  description: string
  price: string
  href: string | null
  className: string
  descriptionClassName: string
}

const checkoutLinks = {
  single: null,
  combo: null,
  twelve: null,
} as const

const offers: Offer[] = [
  {
    label: 'Comprar 1 unidade Celuglow — R$ 209,90',
    title: '1 UNIDADE',
    description: 'Opção individual para começar sua rotina de cuidados com CeluGlow.',
    price: 'R$ 209,90',
    href: checkoutLinks.single,
    className: 'left-[36.5%] top-[76.5%] h-[7.5%] w-[16%]',
    descriptionClassName: 'left-[35.8%] top-[59.5%] w-[17.5%]',
  },
  {
    label: 'Comprar Combo Celuglow 3 + 3 — R$ 461,50',
    title: 'COMPRE 3 + LEVE 3',
    description: 'Combo promocional com 6 unidades no total.',
    price: 'R$ 461,50',
    href: checkoutLinks.combo,
    className: 'left-[56%] top-[76.5%] h-[7.5%] w-[17.5%]',
    descriptionClassName: 'left-[55.2%] top-[59.5%] w-[19.5%]',
  },
  {
    label: 'Comprar Combo Celuglow 12 unidades — R$ 851,00',
    title: '12 UNIDADES',
    description: 'Kit completo com 12 unidades para uma rotina prolongada de cuidados.',
    price: 'R$ 851,00',
    href: checkoutLinks.twelve,
    className: 'left-[77.5%] top-[76.5%] h-[7.5%] w-[17.5%]',
    descriptionClassName: 'left-[76.8%] top-[59.5%] w-[19.5%]',
  },
]

const Celuglow: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Celuglow — opções de compra e preços"
              className="block h-auto w-full object-contain"
              draggable={false}
            />

            <div className="pointer-events-none absolute inset-0 z-20 h-full w-full">
              {offers.map((offer) => (
                <p
                  key={`${offer.label}-image-description`}
                  className={`absolute px-1 text-center font-semibold leading-[1.15] text-[#315f53] ${offer.descriptionClassName}`}
                  style={{ fontSize: 'clamp(6px, 0.68vw, 10px)' }}
                >
                  {offer.description}
                </p>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
              {offers.map((offer) => offer.href ? (
                <a
                  key={offer.label}
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={offer.label}
                  className={`pointer-events-auto absolute cursor-pointer ${offer.className}`}
                />
              ) : (
                <button
                  key={offer.label}
                  type="button"
                  disabled
                  aria-label={`${offer.label} — link aguardando configuração`}
                  title="Link de pagamento aguardando configuração"
                  className={`pointer-events-auto absolute cursor-default bg-transparent ${offer.className}`}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-[1120px] text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#5c176f] sm:text-3xl">
              CeluGlow Creme Anticelulite 200g
            </h1>
            <p className="mx-auto mt-2 max-w-[860px] text-sm leading-relaxed text-slate-600 sm:text-base">
              Creme anticelulite com Nicotinato de Metila e Nano Q10, desenvolvido para auxiliar na melhora da firmeza e deixar a pele com aparência mais lisa.
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-[1120px] gap-4 md:grid-cols-3">
            {offers.map((offer, index) => (
              <div
                key={`${offer.label}-caption`}
                className={`rounded-[24px] border bg-white p-5 text-center shadow-[0_10px_30px_rgba(92,23,111,0.08)] ${index === 1 ? 'border-[#d2a12b] md:-translate-y-2' : 'border-[#eadff0]'}`}
              >
                {index === 1 && (
                  <span className="mb-3 inline-flex rounded-full bg-[#f8e5aa] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#6d4d00]">
                    Mais escolhido
                  </span>
                )}
                <h2 className="text-lg font-extrabold text-[#5c176f]">{offer.title}</h2>
                <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-slate-600">
                  {offer.description}
                </p>
                <p className="mt-4 text-2xl font-black text-[#07534c]">{offer.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/produtos')}
              className="rounded-2xl border-2 border-[#07534c] px-7 py-3 font-bold text-[#07534c] transition hover:-translate-y-0.5"
            >
              ← Voltar para produtos
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Celuglow

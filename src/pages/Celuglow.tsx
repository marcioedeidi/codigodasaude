import React from 'react'
import { useNavigate } from 'react-router-dom'
import productImage from '../assets/Produtos/ChatGPT Image 31 de ago. de 2026, 22_57_45.png'

type Offer = {
  label: string
  href: string | null
  className: string
}

const checkoutLinks = {
  single: null,
  combo: null,
  twelve: null,
} as const

const offers: Offer[] = [
  {
    label: 'Comprar 1 unidade Celuglow — R$ 209,90',
    href: checkoutLinks.single,
    className: 'left-[36.5%] top-[76.5%] h-[7.5%] w-[16%]',
  },
  {
    label: 'Comprar Combo Celuglow 3 + 3 — R$ 461,50',
    href: checkoutLinks.combo,
    className: 'left-[56%] top-[76.5%] h-[7.5%] w-[17.5%]',
  },
  {
    label: 'Comprar Combo Celuglow 12 unidades — R$ 851,00',
    href: checkoutLinks.twelve,
    className: 'left-[77.5%] top-[76.5%] h-[7.5%] w-[17.5%]',
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

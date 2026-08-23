import React from 'react'
import productImage from '../assets/Produtos/creagym.jpg'

const offers = [
  {
    label: 'Comprar CreaGym Morango — 1 Mês — R$ 197,00',
    href: 'https://pay.hest.com.br/8c8359b5-9a06-4786-b363-fe136b6ab25c',
    className: 'left-[40.5%] top-[73%] h-[7.5%] w-[14.5%]',
  },
  {
    label: 'Comprar CreaGym Tangerina — 3 Meses — R$ 417,00',
    href: 'https://pay.hest.com.br/90b2d46d-8c16-11f1-b7d4-0affdf3a7b6b',
    className: 'left-[56%] top-[73%] h-[7.5%] w-[18.5%]',
  },
  {
    label: 'Comprar CreaGym Morango 3+3 — R$ 529,00',
    href: 'https://pay.hest.com.br/866ba3ea-0ebd-497e-89cc-1653f5459556',
    className: 'left-[80%] top-[73%] h-[7.5%] w-[16%]',
  },
]

const CreaGym: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img src={productImage} alt="CreaGym" className="block h-auto w-full object-contain" draggable={false} />
            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
              {offers.map((offer) => (
                <a
                  key={offer.href}
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={offer.label}
                  className={`pointer-events-auto absolute cursor-pointer ${offer.className}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreaGym

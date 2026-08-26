import React from 'react'
import productImage from '../assets/Produtos/movimint.jpg'

const offers = [
  {
    label: 'Comprar Movi mint — 1 Mês — R$ 197,00',
    href: 'https://pay.hest.com.br/8cf30fdb-5932-4bbf-a7be-e6ad170150f1',
    className: 'left-[48%] top-[73%] h-[5.5%] w-[7.5%]',
  },
  {
    label: 'Comprar Movi mint — 3+3 — R$ 397,00',
    href: 'https://pay.hest.com.br/52f91d1a-5511-4a7e-bf20-a2f83a4d912b',
    className: 'left-[61%] top-[73%] h-[5.5%] w-[11%]',
  },
  {
    label: 'Comprar Movi mint — 12 Meses — R$ 697,00',
    href: 'https://pay.hest.com.br/9a3d2f76-894a-485d-ad3f-fb82770b3917',
    className: 'left-[78.5%] top-[73%] h-[5.5%] w-[12%]',
  },
]

const Movimint: React.FC = () => (
  <main className="w-full bg-[#f3f8f3]">
    <section className="w-full px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
          <img src={productImage} alt="Movimint" className="block h-auto w-full object-contain" draggable={false} />
          <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
            {offers.map((offer) => (
              <a key={offer.href} href={offer.href} target="_blank" rel="noopener noreferrer" aria-label={offer.label} className={`pointer-events-auto absolute cursor-pointer ${offer.className}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Movimint

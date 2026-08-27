import React from 'react'
import productImage from '../assets/Produtos/CALMINOL.jpg'

const offers = [
  {
    label: 'Comprar Calminol — R$ 197,00',
    href: 'https://pay.hest.com.br/29ec38b9-6540-4775-bd33-3cd8b34b747e',
    buttonClassName: 'left-[48%] top-[73%] h-[5.5%] w-[7.5%]',
  },
  {
    label: 'Comprar Calminol — R$ 397,00',
    href: 'https://pay.hest.com.br/53e5243b-36e5-4809-81bf-14d3aeff51a4',
    buttonClassName: 'left-[61%] top-[73%] h-[5.5%] w-[11%]',
  },
  {
    label: 'Comprar Calminol — R$ 697,00',
    href: 'https://pay.hest.com.br/55e61d2f-81da-4ef3-8b7f-0e934de43dcc',
    buttonClassName: 'left-[78.5%] top-[73%] h-[5.5%] w-[12%]',
  },
]

const Calminol: React.FC = () => (
  <main className="w-full bg-[#f3f8f3]">
    <section className="w-full px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
          <img src={productImage} alt="Calminol" className="block h-auto w-full object-contain" draggable={false} />
          <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
            {offers.map((offer) => (
              <a
                key={offer.href}
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={offer.label}
                title={offer.label}
                className={`pointer-events-auto absolute cursor-pointer ${offer.buttonClassName}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Calminol

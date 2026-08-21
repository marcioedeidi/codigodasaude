import React from 'react'
import productImage from '../assets/Produtos/creatinagummy.jpg'

const offers = [
  {
    label: 'Comprar Creatina Gummy — 1 Mês — R$ 197,00',
    href: 'https://pay.hest.com.br/e3ac3841-96c0-4d2c-a276-bbc1f3e43a93',
    className: 'left-[40.5%] top-[73%] h-[7.5%] w-[14.5%]',
  },
  {
    label: 'Comprar Creatina Gummy — 5 Meses — R$ 630,00',
    href: 'https://pay.hest.com.br/b52f68f6-5efa-4752-bfca-058f149e9372',
    className: 'left-[56%] top-[73%] h-[7.5%] w-[18.5%]',
  },
  {
    label: 'Comprar Creatina Gummy 3+3 — R$ 759,00',
    href: 'https://pay.hest.com.br/3bb2e774-90e1-4d63-a86a-341bc6acc8d5',
    className: 'left-[80%] top-[73%] h-[7.5%] w-[16%]',
  },
]

const CreatinaGummy: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Creatina Gummy"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
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

export default CreatinaGummy

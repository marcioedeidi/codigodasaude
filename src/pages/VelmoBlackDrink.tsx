import React from 'react'
import { useNavigate } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import productImage from '../assets/Produtos/file_000000004f3c820e826c84ffe787e1d6~3.jpg'

const VelmoBlackDrink: React.FC = () => {
  const navigate = useNavigate()

  const offers = [
    {
      label: 'Comprar 1 pote — R$ 209,90',
      href: 'https://pay.hest.com.br/39ff9602-35fc-4907-bf20-404a05daba13',
      className: 'left-[4%] top-[86%] h-[10%] w-[29%]',
    },
    {
      label: 'Comprar 6 potes — R$ 461,90',
      href: 'https://pay.hest.com.br/2bcc7585-e7bf-49d2-87a9-e758482a59f9',
      className: 'left-[35.5%] top-[86%] h-[10%] w-[29%]',
    },
    {
      label: 'Comprar 12 potes — R$ 851,80',
      href: 'https://pay.hest.com.br/595c4946-e0a9-4226-ad29-45c41223c55c',
      className: 'right-[4%] top-[86%] h-[10%] w-[29%]',
    },
  ]

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Velmo Black Drink — opções e preços"
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

      <TestimonialGallery brand="velmora" videoIndexes={[2, 4, 8]} />
    </main>
  )
}

export default VelmoBlackDrink

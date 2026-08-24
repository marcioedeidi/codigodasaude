import React from 'react'
import productImage from '../assets/Produtos/skin-fit.jpg'
import TestimonialGallery from '../components/TestimonialGallery'

const offers = [
  {
    label: 'Comprar Skin-Fit Maracujá — 1 Mês — R$ 209,90',
    href: 'https://pay.hest.com.br/acd7ebc5-1e89-4c81-83b9-9e22d16c5b90',
    className: 'left-[40%] top-[73%] h-[7.5%] w-[14.5%]',
  },
  {
    label: 'Comprar Skin-Fit Maracujá — 5 Meses — R$ 461,50',
    href: 'https://pay.hest.com.br/c9132d65-185a-4d91-8028-69270293f68e',
    className: 'left-[47.8%] top-[73%] h-[7.5%] w-[18.5%]',
  },
  {
    label: 'Comprar Skin-Fit Maracujá — 12 Meses — R$ 859,00',
    href: 'https://pay.hest.com.br/f9430999-2ed5-45d9-bbe6-9cfe01b459bf',
    className: 'left-[78.5%] top-[73%] h-[7.5%] w-[16%]',
  },
]

const SkinFit: React.FC = () => (
  <main className="w-full bg-[#f3f8f3]">
    <section className="w-full px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
          <img src={productImage} alt="Skin-Fit" className="block h-auto w-full object-contain" draggable={false} />
          <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
            {offers.map((offer) => (
              <a key={offer.href} href={offer.href} target="_blank" rel="noopener noreferrer" aria-label={offer.label} className={`pointer-events-auto absolute cursor-pointer ${offer.className}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
    <TestimonialGallery brand="velmora" videoIndexes={[6, 7]} />
  </main>
)

export default SkinFit

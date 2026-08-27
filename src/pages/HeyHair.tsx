import React from 'react'
import productImage from '../assets/Produtos/heyhair.jpg'
import TestimonialGallery from '../components/TestimonialGallery'

const offers = [
  {
    label: 'Comprar HeyHair — R$ 197,00',
    href: 'https://pay.hest.com.br/b9e2ea76-0965-424c-a4c8-641f839aabd5',
    className: 'left-[48%] top-[73%] h-[5.5%] w-[7.5%]',
  },
  {
    label: 'Comprar HeyHair — R$ 397,00',
    href: 'https://pay.hest.com.br/a07b26f8-6293-49e8-b5c1-5fa15705ceea',
    className: 'left-[61%] top-[73%] h-[5.5%] w-[11%]',
  },
  {
    label: 'Comprar HeyHair — R$ 697,00',
    href: 'https://pay.hest.com.br/395ee1e1-f5ec-4cc1-8a59-7c1034fffb1e',
    className: 'left-[78.5%] top-[73%] h-[5.5%] w-[12%]',
  },
]

const HeyHair: React.FC = () => (
  <main className="w-full bg-[#f3f8f3]">
    <section className="w-full px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
          <img src={productImage} alt="HeyHair" className="block h-auto w-full object-contain" draggable={false} />
          <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
            {offers.map((offer) => (
              <a
                key={offer.href}
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={offer.label}
                title={offer.label}
                className={`pointer-events-auto absolute cursor-pointer ${offer.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <TestimonialGallery brand="velmora" videoIndexes={[5]} />
  </main>
)

export default HeyHair

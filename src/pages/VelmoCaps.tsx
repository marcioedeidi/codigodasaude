import React from 'react'
import TestimonialGallery from '../components/TestimonialGallery'
import productImage from '../assets/Produtos/velmocaps.jpg'

const VelmoCaps: React.FC = () => {
  const offers = [
    { label: 'Comprar Velmo Black — R$ 197,90', href: 'https://pay.hest.com.br/d62ce28b-9144-4fa0-aa8e-6445436abb7f', className: 'left-[40.5%] top-[67.5%] h-[7.5%] w-[14.5%]' },
    { label: 'Comprar Velmo Black 3+3 — R$ 397,00', href: 'https://pay.hest.com.br/fd79ee12-1c17-4aad-ac57-baeebb818d12', className: 'left-[56%] top-[67.5%] h-[7.5%] w-[18.5%]' },
    { label: 'Comprar Velmo Black 12 Meses — R$ 697,00', href: 'https://pay.hest.com.br/199937a2-138d-469a-86b1-554f6fb0686c', className: 'left-[80%] top-[67.5%] h-[7.5%] w-[16%]' },
  ]

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img src={productImage} alt="Velmo Caps" className="block h-auto w-full object-contain" draggable={false} />
            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
              {offers.map((offer) => (
                <a key={offer.href} href={offer.href} target="_blank" rel="noopener noreferrer" aria-label={offer.label} className={`pointer-events-auto absolute cursor-pointer ${offer.className}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <TestimonialGallery brand="velmora" videoIndexes={[9]} />
    </main>
  )
}

export default VelmoCaps

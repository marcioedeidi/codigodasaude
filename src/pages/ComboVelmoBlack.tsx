import React from 'react'
import { useNavigate } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import productImage from '../assets/Produtos/combovelmoblack.jpg'

const ComboVelmoBlack: React.FC = () => {
  const navigate = useNavigate()

  const offers = [
    { label: 'Comprar oferta 1 — R$ 463,50', href: 'https://pay.hest.com.br/bd533e91-b2dd-4a41-847f-95520fe5279d', className: 'left-[42%] top-[70%] h-[7.5%] w-[14.5%]' },
    { label: 'Comprar Combo — 3 Velmo Black Morango + 3 Velmo Black Caps — R$ 463,50', href: 'https://pay.hest.com.br/320579e7-af9b-4c3d-b835-ee53979bc58c', className: 'left-[56%] top-[70%] h-[7.5%] w-[16%]' },
    { label: 'Comprar Combo — 6 Velmo Black Morango + 6 Velmo Black Tangerina — R$ 851,80', href: 'https://pay.hest.com.br/a35c23fd-c53c-49b7-99e4-ee18bd9d5c98', className: 'left-[79%] top-[70%] h-[8.8%] w-[17%]' },
  ]

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img src={productImage} alt="Combo Velmo Black Drink — opções e preços" className="block h-auto w-full object-contain" draggable={false} />
            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
              {offers.map((offer) => (
                <a key={offer.href} href={offer.href} target="_blank" rel="noopener noreferrer" aria-label={offer.label} className={`pointer-events-auto absolute cursor-pointer ${offer.className}`} />
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button type="button" onClick={() => navigate('/produtos')} className="rounded-2xl border-2 border-[#07534c] px-7 py-3 font-bold text-[#07534c] transition hover:-translate-y-0.5">← Voltar para produtos</button>
          </div>
        </div>
      </section>
      <TestimonialGallery brand="velmora" videoIndexes={[3, 9]} />
    </main>
  )
}

export default ComboVelmoBlack

import React from 'react'
import { useNavigate } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'
import productImage from '../assets/Produtos/file_000000004f3c820e826c84ffe787e1d6~3.jpg'

const VelmoBlackDrink: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative w-full rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Velmo Black Drink — opções e preços"
              className="block h-auto w-full rounded-[32px] object-contain"
              draggable={false}
            />

            <div className="absolute inset-0">
              <button
                type="button"
                aria-label="Comprar 1 pote — R$ 209,90"
                onClick={() => undefined}
                className="absolute left-[4%] bottom-[5%] h-[9%] w-[29%] cursor-pointer bg-transparent"
              />
              <button
                type="button"
                aria-label="Comprar 6 potes — R$ 461,50"
                onClick={() => undefined}
                className="absolute left-[35.5%] bottom-[5%] h-[9%] w-[29%] cursor-pointer bg-transparent"
              />
              <button
                type="button"
                aria-label="Comprar 12 potes — R$ 851,80"
                onClick={() => undefined}
                className="absolute right-[4%] bottom-[5%] h-[9%] w-[29%] cursor-pointer bg-transparent"
              />
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

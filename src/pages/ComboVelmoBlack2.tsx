import React from 'react'
import { useNavigate } from 'react-router-dom'
import productImage from '../assets/Produtos/combovelmoblack.jpg'

const ComboVelmoBlack: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img src={productImage} alt="Combo Velmo Black Drink" className="block h-auto w-full object-contain" draggable={false} />
          </div>
          <div className="mt-6 flex justify-center"><button type="button" onClick={() => navigate('/produtos')} className="rounded-2xl border-2 border-[#07534c] px-7 py-3 font-bold text-[#07534c]">← Voltar para produtos</button></div>
        </div>
      </section>
    </main>
  )
}
export default ComboVelmoBlack

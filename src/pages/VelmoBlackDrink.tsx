import React from 'react'
import { useNavigate } from 'react-router-dom'
import TestimonialGallery from '../components/TestimonialGallery'

const VelmoBlackDrink: React.FC = () => {
  const navigate = useNavigate()
  const productImage = `${import.meta.env.BASE_URL}assets/Produtos/file_000000004f3c820e826c84ffe787e1d6.png`

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full bg-[#dff4f0] px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 rounded-[32px] bg-white p-6 shadow-[0_18px_55px_rgba(15,91,82,0.12)] sm:p-10 md:grid-cols-2 md:p-14 lg:gap-16">
          <div className="flex items-center justify-center">
            <img
              src={productImage}
              alt="Velmo Black Drink"
              className="block max-h-[720px] w-full max-w-[600px] object-contain"
              draggable={false}
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#168b80]">
              Velmora
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#10372f] sm:text-5xl lg:text-6xl">
              Velmo Black Drink
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#46615b] sm:text-xl">
              Conheça o Velmo Black Drink e veja todos os detalhes deste produto.
            </p>

            <div className="mt-8 rounded-2xl border border-[#b7ddd5] bg-[#edf8f5] p-5 text-left">
              <h2 className="text-xl font-bold text-[#10372f]">Sobre o produto</h2>
              <p className="mt-3 leading-7 text-[#46615b]">
                Esta página foi preparada para apresentar o produto com clareza. As informações de preço e compra serão adicionadas posteriormente.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/produtos')}
              className="mt-8 rounded-2xl border-2 border-[#07534c] px-7 py-3 font-bold text-[#07534c] transition hover:-translate-y-0.5"
            >
              ← Voltar para produtos
            </button>
          </div>
        </div>
      </section>

      <TestimonialGallery brand="velmora" />
    </main>
  )
}

export default VelmoBlackDrink

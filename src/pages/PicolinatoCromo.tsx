import React from 'react'
import productImage from '../assets/Produtos/always-fit-picolanatodecromo.jpeg'

const PicolinatoCromo: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full">
        <div className="mx-auto w-full">
          <div className="relative overflow-hidden">
            <img
              src={productImage}
              alt="AlwaysFit Picolinato de Cromo"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PicolinatoCromo

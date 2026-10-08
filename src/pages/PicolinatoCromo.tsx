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

            {/* Cobre apenas o quadro da seta na posição original. */}
            <div
              aria-hidden="true"
              className="absolute z-10"
              style={{
                left: '37.5%',
                top: '72.8%',
                width: '30.2%',
                height: '11.6%',
                background: '#fdfdfd'
              }}
            />

            {/* Quadro da seta do Picolinato alinhado pela borda esquerda à recomendação de uso.
                Recupera a seta e o texto originais da própria imagem, sem redimensioná-los. */}
            <div
              aria-hidden="true"
              className="absolute z-10 overflow-hidden rounded-2xl"
              style={{
                left: '40.625%',
                top: '73.0%',
                width: '29.05%',
                height: '11.0%',
                backgroundImage: `url(${productImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '344.234% 909.091%',
                backgroundPosition: '53.05% 82.05%'
              }}
            />

          </div>
        </div>
      </section>
    </main>
  )
}

export default PicolinatoCromo

import React from 'react'
import productImage from '../assets/Produtos/celuglow-corrigido.png'

const Celuglow: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Celuglow — opções de compra e preços"
              className="block h-auto w-full object-contain"
              draggable={false}
            />

            <div className="absolute inset-0">
              <a
                href="https://pay.hest.com.br/69a2442e-55e8-4afd-8d02-99294059497c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar 1 unidade Celuglow por R$ 209,90"
                className="absolute left-[36.5%] top-[76.5%] h-[7.5%] w-[16%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/51518625-b842-47e3-9ae9-9b8409cb7c10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar combo Celuglow 3 mais 3 por R$ 461,50"
                className="absolute left-[56%] top-[76.5%] h-[7.5%] w-[17.5%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/982266d1-2c76-4735-8fbf-a980c02d56e6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar Celuglow 12 meses por R$ 851,00"
                className="absolute left-[77.5%] top-[76.5%] h-[7.5%] w-[17.5%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Celuglow

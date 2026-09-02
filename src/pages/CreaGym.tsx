import React from 'react'
import productImage from '../assets/Produtos/creagym.jpg'

const CreaGym: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img src={productImage} alt="CreaGym" className="block h-auto w-full object-contain" draggable={false} />

            <div className="absolute inset-0">
              <a
                href="https://pay.hest.com.br/8c8359b5-9a06-4786-b363-fe136b6ab25c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar CreaGym Morango — 1 Mês — R$ 197,00"
                className="absolute left-[39%] top-[73%] h-[7.5%] w-[14.5%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/50707acd-ed93-40b8-af5f-329280ef64a3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar CreaGym Tangerina — 3 Meses — R$ 417,00"
                className="absolute left-[54.5%] top-[73%] h-[7.5%] w-[18.5%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/866ba3ea-0ebd-497e-89cc-1653f5459556"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar CreaGym Morango 3+3 — R$ 529,00"
                className="absolute left-[78.5%] top-[73%] h-[7.5%] w-[16%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreaGym

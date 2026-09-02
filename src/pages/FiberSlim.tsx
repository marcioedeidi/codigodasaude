import React from 'react'
import productImage from '../assets/Produtos/fiberslim.jpg'
import TestimonialGallery from '../components/TestimonialGallery'

const FiberSlim: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Fiber Slim"
              className="block h-auto w-full object-contain"
              draggable={false}
            />

            <div className="absolute inset-0">
              <a
                href="https://pay.hest.com.br/a64d1244-b375-42cf-8706-d3712e8fb369"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar Fiber Slim — 1 Mês — R$ 209,90"
                className="absolute left-[40.5%] top-[76.5%] h-[7.5%] w-[14.5%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/15a0ea8c-31bb-435d-bf74-6bc1491c8253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar Fiber Slim 3+3"
                className="absolute left-[56%] top-[73%] h-[7.5%] w-[18.5%] cursor-pointer"
              />

              <a
                href="https://pay.hest.com.br/3eab2920-a3cd-41f9-9915-85c848d4ebe6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar Fiber Slim — 12 Mês"
                className="absolute left-[80%] top-[73%] h-[7.5%] w-[16%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialGallery brand="velmora" videoIndexes={[1]} />
    </main>
  )
}

export default FiberSlim

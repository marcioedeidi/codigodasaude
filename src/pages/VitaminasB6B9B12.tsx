import React from 'react'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const VitaminasB6B9B12: React.FC = () => {
  const productImage = 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-metil-caps-01_11zon.webp?v=1775762206'

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Vitaminas B6 B9 B12"
                className="block h-auto w-full object-contain"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full">
            <img
              src={footerImage}
              alt="Código da Saúde"
              className="block w-full"
              draggable={false}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default VitaminasB6B9B12

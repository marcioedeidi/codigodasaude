import React from 'react'
import productImage from '../assets/Produtos/alwaysfit-manesio-vitaminad.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Pro3Magnesio: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Pro3 Magnésio + Vitamina D3 + K2"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Desloca o quadro original 68px para a direita, sem redimensionar sua arte. */}
              <div
                aria-hidden="true"
                className="absolute overflow-hidden bg-white"
                style={{
                  left: '37.5%',
                  top: '69.85%',
                  width: '29.75%',
                  height: '11.65%'
                }}
              />

              <div
                aria-hidden="true"
                className="absolute overflow-hidden"
                style={{
                  left: '42%',
                  top: '70.5%',
                  width: '29.125%',
                  height: '10.8333%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '343.3476% 923.0769%',
                  backgroundPosition: '53.2628% 79.0654%'
                }}
              />

            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full overflow-hidden" style={{ aspectRatio: '1536 / 788' }}>
            <img
              src={footerImage}
              alt="Código da Saúde"
              className="block h-auto w-full max-w-none"
              style={{ transform: 'translateY(-14.453125%)' }}
              draggable={false}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Pro3Magnesio

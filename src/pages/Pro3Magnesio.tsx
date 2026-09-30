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

              {/* Move somente o quadro verde para alinhar sua borda esquerda ao quadro de recomendação. */}
              <div
                aria-hidden="true"
                className="absolute bg-white"
                style={{
                  left: '24.4%',
                  top: '71.4%',
                  width: '28.9%',
                  height: '10.2%'
                }}
              />

              <div
                aria-hidden="true"
                className="absolute overflow-hidden rounded-2xl"
                style={{
                  left: '28.35%',
                  top: '71.4%',
                  width: '28.9%',
                  height: '10.2%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '346.2% 980.4%',
                  backgroundPosition: '50% 89.7%'
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

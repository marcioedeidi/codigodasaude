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

              <div
                aria-hidden="true"
                className="absolute overflow-hidden bg-white"
                style={{
                  left: '33.8%',
                  top: '72.45%',
                  width: '29%',
                  height: '12.25%'
                }}
              />

              <div
                aria-hidden="true"
                className="absolute overflow-hidden rounded-2xl"
                style={{
                  left: '40.25%',
                  top: '73.9%',
                  width: '28.8%',
                  height: '12%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '374.6% 877%',
                  backgroundPosition: '-3.9% 2.8%'
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

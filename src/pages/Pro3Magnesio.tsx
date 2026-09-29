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

              {/* Cobre completamente a posição original do botão verde */}
              <div
                aria-hidden="true"
                className="absolute overflow-hidden bg-white"
                style={{
                  left: '34.2%',
                  top: '72.3%',
                  width: '31.6%',
                  height: '13.2%'
                }}
              />

              {/* Reposiciona o botão verde inteiro, sem alterar a imagem original */}
              <div
                aria-hidden="true"
                className="absolute overflow-hidden"
                style={{
                  left: '38.48%',
                  top: '72.75%',
                  width: '26.69%',
                  height: '11.4%'
                }}
              >
                <img
                  src={productImage}
                  alt=""
                  className="absolute max-w-none"
                  style={{
                    width: '374.67%',
                    left: '-129.53%',
                    top: '-638.6%'
                  }}
                  draggable={false}
                />
              </div>

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

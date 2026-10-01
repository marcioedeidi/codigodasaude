import React from 'react'
import productImage from '../assets/Produtos/alwaisfit-b3,6,9.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const VitaminasB6B9B12: React.FC = () => {
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

              {/* Limpa somente a área original do quadro verde. */}
              <div
                aria-hidden="true"
                className="absolute z-10"
                style={{
                  left: '37.5%',
                  top: '72.72%',
                  width: '30%',
                  height: '12.2%',
                  background: '#fdfdfd'
                }}
              />

              {/* Quadro verde reposicionado 44px para a direita, sem alterar o restante. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden"
                style={{
                  left: '40.625%',
                  top: '73.2143%',
                  width: '28.7861%',
                  height: '10.9562%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '347.3904% 912.5926%',
                  backgroundPosition: '53.3333% 82.2242%'
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

export default VitaminasB6B9B12

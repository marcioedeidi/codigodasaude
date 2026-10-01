import React from 'react'
import productImage from '../assets/Produtos/alwaysfit-fits36.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Fits36: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Fits36 Advanced Formula"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Retira somente a posição original do quadro verde. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden bg-white"
                style={{
                  left: '2.8%',
                  top: '60.8%',
                  width: '30.8%',
                  height: '14.2%'
                }}
              />

              {/* Mesmo quadro verde, deslocado somente para a direita. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden"
                style={{
                  left: '42%',
                  top: '60.8%',
                  width: '30.8%',
                  height: '14.2%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '324.6753% 704.2254%',
                  backgroundPosition: '4.0462% 70.8625%'
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

export default Fits36

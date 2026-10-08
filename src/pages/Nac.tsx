import React from 'react'
import productImage from '../assets/Produtos/always-fit-nac.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Nac: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit NAC 600mg"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Encobre somente a arte da seta na posição antiga, sem alterar a recomendação. */}
              <div
                aria-hidden="true"
                className="absolute z-10"
                style={{
                  left: '37.45%',
                  top: '71.45%',
                  width: '30.2%',
                  height: '11.65%',
                  background: '#fdfdfd'
                }}
              />

              {/* Quadro da seta do NAC reposicionado: borda esquerda alinhada
                  ao quadro superior de RECOMENDAÇÃO DE USO. Arte original preservada. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden rounded-2xl"
                style={{
                  left: '40.625%',
                  top: '71.685%',
                  width: '29.05%',
                  height: '10.985%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '344.234% 910.332%',
                  backgroundPosition: '53.15% 80.54%'
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

export default Nac

import React from 'react'
import productImage from '../alwayfit-fitdreams.jpg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const FitDreams: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Fit Dreams Sleep & Relax"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Limpa somente a área original do quadro, incluindo sua borda. */}
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

              {/* Quadro verde alinhado pela esquerda com o quadro de recomendação de uso. */}
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

              {/* Centraliza somente o texto da recomendação, sem mover nem redimensionar o quadro verde. */}
              <div
                aria-hidden="true"
                className="absolute z-20 flex flex-col items-center justify-center text-center overflow-hidden"
                style={{
                  left: '45.4%',
                  top: '74.25%',
                  width: '22.9%',
                  height: '8.7%',
                  background: '#f3f8f5',
                  padding: '0 1.2%'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(8px, 1.02vw, 16px)',
                    lineHeight: 1.15,
                    fontWeight: 700,
                    color: '#165f54',
                    whiteSpace: 'nowrap'
                  }}
                >
                  RECOMENDAÇÃO DE USO
                </div>
                <div
                  style={{
                    marginTop: '0.35%',
                    fontSize: 'clamp(7px, 0.78vw, 12px)',
                    lineHeight: 1.25,
                    fontWeight: 500,
                    color: '#263b36',
                    whiteSpace: 'nowrap'
                  }}
                >
                  1 cápsula por dia, 30 minutos antes de dormir.
                </div>
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

export default FitDreams

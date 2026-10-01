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

              {/* Somente o texto da recomendação, 1% mais acima. */}
              <div
                aria-hidden="true"
                className="absolute z-20"
                style={{
                  left: '40.625%',
                  top: '72.2143%',
                  width: '28.7861%',
                  height: '10.9562%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    fontSize: '1.18vw',
                    lineHeight: 1.15,
                    fontWeight: 700,
                    color: '#174f47',
                    marginBottom: '0.25vw',
                    whiteSpace: 'nowrap'
                  }}
                >
                  RECOMENDAÇÃO DE USO
                </div>
                <div
                  style={{
                    fontSize: '1.02vw',
                    lineHeight: 1.2,
                    fontWeight: 400,
                    color: '#1f2d2a'
                  }}
                >
                  1 cápsula ao dia com 200ml de água, cerca de 30<br />
                  minutos antes de dormir.
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

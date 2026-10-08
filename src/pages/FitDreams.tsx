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

              {/* Centraliza somente o texto da recomendação superior, que está incorporado à imagem.
                  Mantém intactos o ícone, a moldura, a seta inferior e todo o restante da página. */}
              <div
                className="absolute z-10 flex flex-col justify-center"
                style={{
                  left: '45.7%',
                  top: '63.85%',
                  width: '23.6%',
                  height: '6.8%',
                  paddingLeft: '0.55%',
                  background: 'linear-gradient(90deg, #ebf6ee 0%, #ecf6ef 100%)',
                  color: '#183f36',
                  fontFamily: 'Arial, sans-serif',
                  WebkitTextSizeAdjust: 'none'
                }}
              >
                <div
                  style={{
                    fontSize: '1.10vw',
                    fontWeight: 700,
                    lineHeight: 1.16,
                    marginBottom: '0.33vw'
                  }}
                >
                  RECOMENDAÇÃO DE USO
                </div>
                <div
                  style={{
                    fontSize: '0.95vw',
                    fontWeight: 400,
                    lineHeight: 1.22,
                    color: '#233b34',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span className="block">1 cápsula ao dia com 200ml de água, cerca de 30</span>
                  <span className="block">minutos antes de dormir.</span>
                </div>
              </div>

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

              {/* Preserva a arte original da seta e sua mensagem: clique no vídeo para fazer a compra. */}
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
                  backgroundPosition: '52.9000% 82.2242%'
                }}
              >

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

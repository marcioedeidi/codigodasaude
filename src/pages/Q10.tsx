import React from 'react'
import productImage from '../assets/Produtos/alwaysfit-q10.jpg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Q10: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Q10 Coenzima 100mg por dose"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              <div
                aria-hidden="true"
                className="absolute overflow-hidden bg-white"
                style={{
                  left: '34%',
                  top: '72.8%',
                  width: '38%',
                  height: '15.8%'
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
                  backgroundSize: '348.33% 895.65%',
                  backgroundPosition: '52.12% 82.4%'
                }}
              />

              <div
                className="absolute overflow-hidden rounded-2xl"
                style={{
                  left: '2.8%',
                  top: '72.5%',
                  width: '36%',
                  height: '15.5%'
                }}
              >
                <video
                  src={import.meta.env.BASE_URL + 'videos/VID-20260813-WA0024.mp4'}
                  controls
                  playsInline
                  preload="auto"
                  className="block h-full w-full object-contain"
                  aria-label="Depoimento 2 do produto Q10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-no-repeat"
                  style={{
                    backgroundImage: `url(${productImage})`,
                    backgroundSize: '245% auto',
                    backgroundPosition: '50% 42%'
                  }}
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

export default Q10

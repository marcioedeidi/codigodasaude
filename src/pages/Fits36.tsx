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

              <div
                className="absolute overflow-hidden rounded-2xl"
                style={{
                  left: '2.8%',
                  top: '60.8%',
                  width: '30.8%',
                  height: '14.2%'
                }}
              >
                <video
                  src={import.meta.env.BASE_URL + 'videos/alwaysfit-fits36.mp4'}
                  controls
                  playsInline
                  preload="metadata"
                  className="block h-full w-full object-cover"
                  aria-label="Vídeo do produto Fits36"
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

export default Fits36

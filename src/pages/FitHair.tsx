import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/alwaysfit-fithair.jpg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const FitHair: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPreview, setShowPreview] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setShowPreview(false)
    video.addEventListener('play', handlePlay)
    return () => video.removeEventListener('play', handlePlay)
  }, [])

  const handlePreviewClick = () => {
    setShowPreview(false)
    videoRef.current?.play()
  }

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Fit Hair Skin, Hair & Nails"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Depoimento 7 da AlwaysFit, abaixo do pote do Fit Hair. */}
              <div
                className="absolute z-20 overflow-hidden rounded-2xl"
                style={{
                  left: '2.8%',
                  top: '72.5%',
                  width: '36%',
                  height: '15.2%'
                }}
              >
                <video
                  ref={videoRef}
                  src={import.meta.env.BASE_URL + 'videos/alwaysfit-fithair.mp4'}
                  controls
                  playsInline
                  preload="auto"
                  className={`block h-full w-full ${showPreview ? 'object-cover object-[center_70%]' : 'object-contain'}`}
                  aria-label="Depoimento 7 do produto AlwaysFit Fit Hair"
                />

                {showPreview && (
                  <button
                    type="button"
                    onClick={handlePreviewClick}
                    aria-label="Abrir depoimento em vídeo"
                    className="absolute inset-0 flex items-center justify-center bg-[#f8f1f0]"
                    style={{
                      backgroundImage: `url(${productImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '250% auto',
                      backgroundPosition: '9% 39%'
                    }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                      ▶
                    </span>
                  </button>
                )}
              </div>

              {/* Limpa apenas a posição original do quadro da seta. */}
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

              {/* Quadro da seta alinhado à esquerda com RECOMENDAÇÃO DE USO.
                  Preserva a arte original e os quatro cantos arredondados. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden rounded-2xl"
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

export default FitHair
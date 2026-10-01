import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/alwaisfit-b3,6,9.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const VitaminasB6B9B12: React.FC = () => {
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
                alt="AlwaysFit Vitaminas B6 B9 B12"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Limpa toda a área antiga para não deixar a linha inferior do quadro original. */}
              <div
                aria-hidden="true"
                className="absolute z-10"
                style={{
                  left: '37.5%',
                  top: '72.72%',
                  width: '31%',
                  height: '13.2%',
                  background: '#fdfdfd'
                }}
              />

              {/* Quadro verde reposicionado, preservando o tamanho e recuperando a margem inferior arredondada. */}
              <div
                aria-hidden="true"
                className="absolute z-10 overflow-hidden rounded-2xl"
                style={{
                  left: '40.625%',
                  top: '73.2143%',
                  width: '28.7861%',
                  height: '12%',
                  backgroundImage: `url(${productImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '347.3904% 912.5926%',
                  backgroundPosition: '53.3333% 82.2242%'
                }}
              />

              {/* Depoimento 5 da AlwaysFit. */}
              <div
                className="absolute z-20 overflow-hidden rounded-2xl"
                style={{
                  left: '2.8%',
                  top: '73.5%',
                  width: '36%',
                  height: '14.2%'
                }}
              >
                <video
                  ref={videoRef}
                  src={import.meta.env.BASE_URL + 'videos/alwaysfit-b6,b9,b12.mp4'}
                  controls
                  playsInline
                  preload="auto"
                  className={`block h-full w-full ${showPreview ? 'object-cover object-[center_55%]' : 'object-contain'}`}
                  aria-label="Depoimento 5 do produto AlwaysFit Vitaminas B6 B9 B12"
                />

                {showPreview && (
                  <button
                    type="button"
                    onClick={handlePreviewClick}
                    aria-label="Abrir depoimento em vídeo"
                    className="absolute inset-0 flex items-center justify-center bg-black/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                      ▶
                    </span>
                  </button>
                )}
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

export default VitaminasB6B9B12

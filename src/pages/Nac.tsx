import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/always-fit-nac.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Nac: React.FC = () => {
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
                alt="AlwaysFit NAC 600mg"
                className="block h-auto w-full object-contain"
                draggable={false}
              />

              {/* Depoimento 8 da AlwaysFit abaixo do pote do NAC. */}
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
                  src={import.meta.env.BASE_URL + 'videos/alwaysfit-nac.mp4'}
                  onLoadedMetadata={(event) => {
                    // Usa um quadro parado do próprio vídeo como capa.
                    const video = event.currentTarget
                    const previewTime = Number.isFinite(video.duration)
                      ? Math.min(0.8, Math.max(0, video.duration - 0.1))
                      : 0.8
                    video.currentTime = previewTime
                    video.pause()
                  }}
                  controls
                  playsInline
                  preload="auto"
                  className={`block h-full w-full ${showPreview ? 'object-cover object-[center_40%]' : 'object-contain'}`}
                  aria-label="Depoimento 8 do produto AlwaysFit NAC"
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

import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/always-fit-picolanatodecromo.jpeg'

const PicolinatoCromo: React.FC = () => {
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
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full">
        <div className="mx-auto w-full">
          <div className="relative overflow-hidden">
            <img
              src={productImage}
              alt="AlwaysFit Picolinato de Cromo"
              className="block h-auto w-full object-contain"
              draggable={false}
            />

            {/* Depoimento 9 da AlwaysFit abaixo do pote do Picolinato de Cromo. */}
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
                src={import.meta.env.BASE_URL + 'videos/alwaysfit-picolanato-de-cromo.mp4'}
                onLoadedMetadata={(event) => {
                  // Mostra o quadro de 0:01 do próprio depoimento como capa parada.
                  const video = event.currentTarget
                  const previewTime = Number.isFinite(video.duration)
                    ? Math.min(1, Math.max(0, video.duration - 0.1))
                    : 1
                  video.currentTime = previewTime
                  video.pause()
                }}
                controls
                playsInline
                preload="auto"
                className={`block h-full w-full ${showPreview ? 'object-cover object-[center_0%]' : 'object-contain'}`}
                aria-label="Depoimento 9 do produto AlwaysFit Picolinato de Cromo"
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

            {/* Cobre apenas o quadro da seta na posição original. */}
            <div
              aria-hidden="true"
              className="absolute z-10"
              style={{
                left: '37.5%',
                top: '72.8%',
                width: '30.2%',
                height: '11.6%',
                background: '#fdfdfd'
              }}
            />

            {/* Quadro da seta do Picolinato alinhado pela borda esquerda à recomendação de uso.
                Recupera a seta e o texto originais da própria imagem, sem redimensioná-los. */}
            <div
              aria-hidden="true"
              className="absolute z-10 overflow-hidden rounded-2xl"
              style={{
                left: '40.625%',
                top: '73.0%',
                width: '29.05%',
                height: '11.0%',
                backgroundImage: `url(${productImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '344.234% 909.091%',
                backgroundPosition: '53.05% 82.05%'
              }}
            />

          </div>
        </div>
      </section>
    </main>
  )
}

export default PicolinatoCromo

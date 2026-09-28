import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/always-fit-curcumin-pro.jpeg'

const ProCurcumin: React.FC = () => {
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
              alt="AlwaysFit Pro Curcumin"
              className="block h-auto w-full object-contain"
              draggable={false}
            />

            {/* Mascara o quadro original e reposiciona o mesmo quadro
                para alinhar a borda esquerda com a caixa "RECOMENDAÇÃO DE USO". */}
            <div
              aria-hidden="true"
              className="absolute overflow-hidden bg-white"
              style={{
                left: '36.9%',
                top: '73.9%',
                width: '32.15%',
                height: '12.7%'
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
                backgroundPosition: '52.12% 84.48%'
              }}
            />

            <div
              className="absolute overflow-hidden rounded-2xl"
              style={{
                left: '2.8%',
                top: '72.5%',
                width: '33.5%',
                height: '15.5%'
              }}
            >
              <video
                ref={videoRef}
                src={import.meta.env.BASE_URL + 'videos/VID-20260813-WA0022.mp4'}
                controls
                playsInline
                preload="auto"
                className={`block h-full w-full ${showPreview ? 'object-cover object-[center_20%]' : 'object-contain'}`}
                aria-label="Depoimento 1 do produto Pro Curcumin"
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
    </main>
  )
}

export default ProCurcumin

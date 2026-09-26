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

            <div
              className="absolute overflow-hidden rounded-2xl"
              style={{
                left: '2.8%',
                top: '72.0%',
                width: '33.0%',
                height: '16.5%'
              }}
            >
              <video
                ref={videoRef}
                src={import.meta.env.BASE_URL + 'videos/VID-20260813-WA0022.mp4'}
                controls
                playsInline
                preload="auto"
                className={`block h-full w-full ${showPreview ? 'object-cover object-top' : 'object-contain'}`}
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

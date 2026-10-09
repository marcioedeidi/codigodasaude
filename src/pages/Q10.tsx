import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/alwaysfit-q10.jpg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Q10: React.FC = () => {
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
                alt="AlwaysFit Q10 Coenzima 100mg por dose"
                className="block h-auto w-full object-contain"
                draggable={false}
              />
              {/* Única área de compra clicável: exatamente sobre COMPRAR AGORA da arte. */}
              <a
                href="https://vt.tiktok.com/ZSbtogFRv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar Q10 no TikTok Shop da Universo Shop da Deidi"
                className="absolute z-30 block cursor-pointer touch-manipulation rounded-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0a8069]"
                style={{
                  left: '75.1%',
                  top: '36.0%',
                  width: '21.4%',
                  height: '5.7%'
                }}
              >
                <span className="sr-only">Comprar Q10 agora</span>
              </a>



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
                  ref={videoRef}
                  src={import.meta.env.BASE_URL + 'videos/VID-20260813-WA0024.mp4'}
                  controls
                  playsInline
                  preload="auto"
                  className={`block h-full w-full ${showPreview ? 'object-cover object-[center_48%]' : 'object-contain'}`}
                  aria-label="Depoimento 2 do produto Q10"
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

                {/* Link de compra no topo, dentro do quadro do vídeo, após iniciar a reprodução. */}
                {!showPreview && (
                  <a
                    href="https://vt.tiktok.com/ZSbtogFRv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Comprar Q10 pelo vídeo da Universo Shop da Deidi no TikTok"
                    className="absolute left-1/2 top-1 z-30 inline-flex max-w-[96%] -translate-x-1/2 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#004c3d]/95 px-2 py-1 text-[9px] font-extrabold leading-none text-white shadow-md transition hover:bg-[#003b30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:top-2 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="motion-safe:animate-pulse text-sm font-black leading-none text-[#39FF14] drop-shadow-[0_0_5px_#39FF14] sm:text-xl"
                    >
                      ➜
                    </span>
                    COMPRE AGORA
                  </a>
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

export default Q10

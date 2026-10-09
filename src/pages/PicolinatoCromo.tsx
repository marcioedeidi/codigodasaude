import React, { useEffect, useRef, useState } from 'react'
import productImage from '../assets/Produtos/always-fit-picolanatodecromo.jpeg'

const PicolinatoCromo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [showPreview, setShowPreview] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setShowPreview(false)
    video.addEventListener('play', handlePlay)
    return () => video.removeEventListener('play', handlePlay)
  }, [])

  useEffect(() => {
    if (!isExpanded) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) setIsExpanded(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.fullscreenElement) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isExpanded])

  const handlePreviewClick = () => {
    setShowPreview(false)
    videoRef.current?.play()
  }

  const toggleVideoFullscreen = async () => {
    const container = videoContainerRef.current
    if (isExpanded) {
      if (document.fullscreenElement === container) {
        try {
          await document.exitFullscreen()
        } catch {
          // A visualização ampliada ainda pode ser fechada normalmente.
        }
      }
      setIsExpanded(false)
      return
    }

    setIsExpanded(true)
    // No Android, usa tela cheia nativa do QUADRO (incluindo o link).
    // No iPhone, caso não seja permitido, mantém a visualização ampliada na tela.
    if (container?.requestFullscreen) {
      try {
        await container.requestFullscreen()
      } catch {
        // Alternativa visual em tela cheia para navegadores sem suporte.
      }
    }
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

            {/* Única área de compra clicável: exatamente sobre COMPRAR AGORA da arte. */}
            <a
              href="https://vt.tiktok.com/ZS9D7JRbAtaBe-MolLM/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Comprar Picolinato de Cromo no TikTok Shop da Universo Shop da Deidi"
              className="absolute z-30 block cursor-pointer touch-manipulation rounded-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0a8069]"
              style={{
                left: '75.1%',
                top: '36.0%',
                width: '21.4%',
                height: '5.7%'
              }}
            >
              <span className="sr-only">Comprar Picolinato de Cromo agora</span>
            </a>

            {/* Depoimento 9 da AlwaysFit abaixo do pote do Picolinato de Cromo. */}
            <div
              ref={videoContainerRef}
              className={isExpanded
                ? 'fixed z-[100] flex items-center justify-center overflow-hidden bg-black'
                : 'absolute z-20 overflow-hidden rounded-2xl'}
              style={isExpanded
                ? { left: 0, top: 0, width: '100vw', height: '100dvh' }
                : { left: '2.8%', top: '72.5%', width: '36%', height: '15.2%' }}
            >
              <video
                ref={videoRef}
                src={import.meta.env.BASE_URL + 'videos/alwaysfit-picolanato-de-cromo.mp4'}
                onLoadedMetadata={(event) => {
                  // Mostra o quadro de 0:02 do próprio depoimento como capa parada.
                  const video = event.currentTarget
                  const previewTime = Number.isFinite(video.duration)
                    ? Math.min(2, Math.max(0, video.duration - 0.1))
                    : 2
                  video.currentTime = previewTime
                  video.pause()
                }}
                controls
                controlsList="nofullscreen"
                playsInline
                preload="auto"
                className={`block h-full w-full ${isExpanded ? 'object-contain' : showPreview ? 'object-cover object-center' : 'object-contain'}`}
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

              {/* O link acompanha o vídeo quando ele é ampliado no celular. */}
              {(!showPreview || isExpanded) && (
                <a
                  href="https://vt.tiktok.com/ZS9D7JRbAtaBe-MolLM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Comprar Picolinato de Cromo pelo vídeo da Universo Shop da Deidi no TikTok"
                  className={`absolute z-30 inline-flex max-w-[94%] items-center justify-center whitespace-nowrap rounded-full bg-[#004c3d]/95 font-extrabold leading-none text-white shadow-md transition hover:bg-[#003b30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${isExpanded
                    ? 'left-1/2 top-4 -translate-x-1/2 gap-2 px-4 py-2 text-base'
                    : 'left-1 top-1 gap-0.5 px-1.5 py-1 text-[8px] sm:left-1/2 sm:top-2 sm:-translate-x-1/2 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm'}`}
                >
                  <span
                    aria-hidden="true"
                    className={`motion-safe:animate-pulse font-black leading-none text-[#39FF14] drop-shadow-[0_0_5px_#39FF14] ${isExpanded ? 'text-xl' : 'text-sm sm:text-xl'}`}
                  >
                    ➜
                  </span>
                  COMPRE AGORA
                </a>
              )}

              {/* Controle próprio de tela cheia para manter o botão de compra visível. */}
              <button
                type="button"
                onClick={toggleVideoFullscreen}
                aria-label={isExpanded ? 'Sair da tela cheia do vídeo Picolinato de Cromo' : 'Abrir vídeo Picolinato de Cromo em tela cheia'}
                title={isExpanded ? 'Sair da tela cheia' : 'Tela cheia'}
                className={`absolute z-40 flex items-center justify-center rounded-md bg-black/70 font-bold text-white shadow-md hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${isExpanded
                  ? 'right-4 top-4 h-10 w-10 text-xl'
                  : 'right-1 top-1 h-6 w-6 text-lg sm:right-2 sm:top-2 sm:h-8 sm:w-8'}`}
              >
                <span aria-hidden="true">{isExpanded ? '✕' : '⛶'}</span>
              </button>
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

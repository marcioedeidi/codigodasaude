import React, { useState } from 'react'

type TestimonialVideo = {
  src: string
  label: string
}

const videos: TestimonialVideo[] = [
  { src: 'videos/VID-20260710-WA0034.mp4', label: 'Depoimento 1' },
  { src: 'videos/VID-20260710-WA0037.mp4', label: 'Depoimento 2' },
  { src: 'videos/VID-20260710-WA0039.mp4', label: 'Depoimento 3' },
  { src: 'videos/VID-20260710-WA0040.mp4', label: 'Depoimento 4' },
  { src: 'videos/VID_20260711_202934_087.mp4', label: 'Depoimento 5' },
  { src: 'videos/VID_20260711_203427_248.mp4', label: 'Depoimento 6' },
  { src: 'videos/VID_20260711_203605_713.mp4', label: 'Depoimento 7' },
  { src: 'videos/VID_20260711_203747_736.mp4', label: 'Depoimento 8' },
  { src: 'videos/VID_20260711_204757_995.mp4.mov', label: 'Depoimento 9' },
]

const TestimonialGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null)

  const getVideoUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`

  const positionPreviewFrame = (video: HTMLVideoElement) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return

    const previewTime = Math.min(0.7, Math.max(0.15, video.duration * 0.03))

    try {
      video.currentTime = previewTime
      video.pause()
    } catch {
      // Alguns navegadores móveis podem bloquear o seek inicial; nesse caso,
      // o próprio primeiro quadro carregado pelo vídeo continua sendo exibido.
    }
  }

  return (
    <>
      <section
        className="w-full bg-[#f1f6ec] px-3 py-8 sm:px-5 md:py-10"
        aria-label="Depoimentos em vídeo de clientes"
      >
        <div className="mx-auto w-full max-w-[1420px]">
          <div className="mb-7 text-center md:mb-9">
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#10372f] sm:text-4xl md:text-5xl">
              Histórias reais. Resultados que transformam.
            </h2>
            <div className="mx-auto mt-3 flex w-48 items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-[#44a99c]" />
              <span className="text-xl text-[#168f82]">♥</span>
              <span className="h-px flex-1 bg-[#44a99c]" />
            </div>
            <p className="mx-auto mt-3 max-w-3xl text-base font-semibold leading-relaxed text-[#235e55] sm:text-lg">
              Depoimentos em vídeo de pessoas que compartilharam sua experiência com nossos produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Assistir ${video.label}`}
                className="group relative aspect-video w-full overflow-hidden rounded-[22px] border-4 border-white bg-[#dcefe9] text-left shadow-[0_12px_28px_rgba(29,91,80,0.16)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(29,91,80,0.22)] focus-visible:ring-4 focus-visible:ring-[#168f82]/60"
              >
                <video
                  src={getVideoUrl(video.src)}
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  tabIndex={-1}
                  onLoadedMetadata={(event) => positionPreviewFrame(event.currentTarget)}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#092f29]/30 via-transparent to-white/5" />
                <div className="pointer-events-none absolute -left-7 -top-7 h-24 w-24 rounded-full bg-[#cdece4]/45 blur-xl" />
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#b8e5db]/45 blur-2xl" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white bg-black/28 text-white shadow-xl backdrop-blur-[2px] transition duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px]">
                    <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>

                <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/60 bg-[#0d5148]/72 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-sm backdrop-blur-sm">
                  Depoimento {String(index + 1).padStart(2, '0')}
                </div>
              </button>
            ))}
          </div>

          <div className="mx-auto mt-7 max-w-5xl rounded-full border border-[#9dd9cf] bg-[#d8f1ec] px-5 py-3 text-center text-sm font-bold text-[#155f55] shadow-sm sm:text-base">
            Toque em qualquer depoimento para assistir ao vídeo completo.
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.label}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar vídeo"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-3xl font-bold leading-none text-white shadow-lg"
            >
              ×
            </button>

            <video
              key={activeVideo.src}
              src={getVideoUrl(activeVideo.src)}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="max-h-[85vh] w-full bg-black object-contain"
            >
              Seu navegador não conseguiu reproduzir este vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default TestimonialGallery

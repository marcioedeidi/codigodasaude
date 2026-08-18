import React, { useState } from 'react'

type TestimonialVideo = {
  src: string
  label: string
}

type Brand = 'velmora' | 'alwaysfit'

const velmoraVideos: TestimonialVideo[] = [
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

const alwaysFitVideos: TestimonialVideo[] = [
  { src: 'videos/VID-20260813-WA0022.mp4', label: 'Depoimento 1' },
  { src: 'videos/VID-20260813-WA0023.mp4', label: 'Depoimento 2' },
  { src: 'videos/VID-20260813-WA0024.mp4', label: 'Depoimento 3' },
  { src: 'videos/VID-20260813-WA0025.mp4', label: 'Depoimento 4' },
  { src: 'videos/VID-20260813-WA0026.mp4', label: 'Depoimento 5' },
  { src: 'videos/VID-20260813-WA0027.mp4', label: 'Depoimento 6' },
  { src: 'videos/VID-20260813-WA0028.mp4', label: 'Depoimento 7' },
]

type Props = {
  brand?: Brand
  videoIndexes?: number[]
}

const TestimonialGallery: React.FC<Props> = ({ brand = 'velmora', videoIndexes }) => {
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null)
  const allVideos = brand === 'alwaysfit' ? alwaysFitVideos : velmoraVideos
  const videos = videoIndexes ? videoIndexes.map((index) => allVideos[index - 1]).filter(Boolean) : allVideos
  const isAlwaysFit = brand === 'alwaysfit'
  const brandName = isAlwaysFit ? 'Always Fit' : 'Velmora'

  const getVideoUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`

  const positionPreviewFrame = (video: HTMLVideoElement) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return
    const previewTime = Math.min(0.8, Math.max(0.15, video.duration * 0.03))
    try {
      video.currentTime = previewTime
      video.pause()
    } catch {
      // Alguns navegadores móveis podem bloquear o seek inicial.
    }
  }

  return (
    <>
      <section id={`depoimentos-${brand}`} className="w-full bg-[#f3f8f3] px-3 py-10 sm:px-5 md:py-14" aria-label={`Depoimentos em vídeo da ${brandName}`}>
        <div className="mx-auto w-full max-w-[1420px]">
          <div className="mb-8 text-center md:mb-10">
            <span className="inline-flex rounded-full border border-[#8fd1c6] bg-[#def3ee] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#146d63] sm:text-sm">
              Depoimentos em vídeo — {brandName}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#10372f] sm:text-4xl md:text-5xl">Histórias reais. Experiências compartilhadas.</h2>
            <div className="mx-auto mt-3 flex w-48 items-center justify-center gap-3" aria-hidden="true"><span className="h-px flex-1 bg-[#44a99c]" /><span className="text-xl text-[#168f82]">♥</span><span className="h-px flex-1 bg-[#44a99c]" /></div>
            <p className="mx-auto mt-3 max-w-3xl text-base font-semibold leading-relaxed text-[#235e55] sm:text-lg">Assista aos relatos de pessoas que decidiram compartilhar a própria experiência com a {brandName}.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {videos.map((video, index) => (
              <button key={video.src} type="button" onClick={() => setActiveVideo(video)} aria-label={`Assistir ${video.label} da ${brandName}`} className="group relative aspect-[9/16] w-[calc(50%-0.375rem)] max-w-[260px] overflow-hidden rounded-[22px] border-[5px] border-white bg-[#dcefe9] text-left shadow-[0_12px_28px_rgba(29,91,80,0.16)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(29,91,80,0.22)] focus-visible:ring-4 focus-visible:ring-[#168f82]/60 sm:w-[calc(33.333%-0.85rem)] lg:w-[calc(25%-0.95rem)]">
                <video src={getVideoUrl(video.src)} muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1} onLoadedMetadata={(event) => positionPreviewFrame(event.currentTarget)} className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#092f29]/45 via-transparent to-white/5" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-black/30 text-white shadow-xl backdrop-blur-[2px] transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16"><svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></div>
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/60 bg-[#0d5148]/78 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-sm backdrop-blur-sm">{video.label}</div>
              </button>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#9dd9cf] bg-[#d8f1ec] px-5 py-3 text-center text-sm font-bold text-[#155f55] shadow-sm sm:text-base">Toque em qualquer vídeo para assistir ao depoimento completo.</div>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-[#4d746d] sm:text-sm">Relatos individuais de experiência. As percepções podem variar de pessoa para pessoa.</p>
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={activeVideo.label} onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Fechar vídeo" onClick={() => setActiveVideo(null)} className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-3xl font-bold leading-none text-white shadow-lg">×</button>
            <video key={activeVideo.src} src={getVideoUrl(activeVideo.src)} controls autoPlay playsInline preload="metadata" className="max-h-[88vh] w-full bg-black object-contain">Seu navegador não conseguiu reproduzir este vídeo.</video>
          </div>
        </div>
      )}
    </>
  )
}

export default TestimonialGallery

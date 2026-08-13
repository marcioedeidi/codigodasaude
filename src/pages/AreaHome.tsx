import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type VideoHotspot = {
  src: string
  label: string
  left: string
  top: string
  width: string
  height: string
}

const AreaHome: React.FC = () => {
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-final-clean-v3.webp?v=hero-final-clean-v3`
  const testimonialsImage = `${import.meta.env.BASE_URL}assets/testimonials-fold-v2-real.webp?v=testimonials-fold-v4`
  const [activeVideo, setActiveVideo] = useState<VideoHotspot | null>(null)

  const videoHotspots: VideoHotspot[] = [
    {
      src: `${import.meta.env.BASE_URL}videos/VID-20260710-WA0034.mp4`,
      label: 'Depoimento 1',
      left: '9.18%',
      top: '15.88%',
      width: '26.82%',
      height: '28.68%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID-20260710-WA0037.mp4`,
      label: 'Depoimento 2',
      left: '36.46%',
      top: '15.88%',
      width: '27.21%',
      height: '28.68%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID-20260710-WA0039.mp4`,
      label: 'Depoimento 3',
      left: '64.26%',
      top: '15.88%',
      width: '27.21%',
      height: '28.68%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID-20260710-WA0040.mp4`,
      label: 'Depoimento 4',
      left: '9.18%',
      top: '45.58%',
      width: '26.82%',
      height: '23.69%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID_20260711_202934_087.mp4`,
      label: 'Depoimento 5',
      left: '36.46%',
      top: '45.58%',
      width: '27.21%',
      height: '23.69%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID_20260711_203427_248.mp4`,
      label: 'Depoimento 6',
      left: '64.26%',
      top: '45.58%',
      width: '27.21%',
      height: '23.69%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID_20260711_203605_713.mp4`,
      label: 'Depoimento 7',
      left: '9.18%',
      top: '70.42%',
      width: '26.82%',
      height: '16.39%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID_20260711_203747_736.mp4`,
      label: 'Depoimento 8',
      left: '36.46%',
      top: '70.42%',
      width: '27.21%',
      height: '16.39%',
    },
    {
      src: `${import.meta.env.BASE_URL}videos/VID_20260711_204757_995.mp4.mov`,
      label: 'Depoimento 9',
      left: '64.26%',
      top: '70.42%',
      width: '27.21%',
      height: '16.39%',
    },
  ]

  return (
    <>
      <main className="w-full bg-[#9fded7]">
        <section className="w-full overflow-hidden">
          <div
            className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
            style={{ aspectRatio: '1536 / 920' }}
          >
            <img
              src={heroImage}
              alt="Código da Saúde — Velmo Black Drink, e-book exclusivo e benefícios"
              className="absolute inset-0 block h-full w-full select-none object-contain"
              draggable={false}
            />

            <Link
              to="/produtos"
              aria-label="Conhecer os produtos"
              className="absolute left-[3.97%] top-[57.28%] z-20 h-[8.92%] w-[22.40%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
            />

            <Link
              to="/cadastro"
              aria-label="Falar no WhatsApp"
              className="absolute left-[27.34%] top-[57.28%] z-20 h-[8.92%] w-[12.30%] rounded-[20px] bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-white/90"
            />
          </div>
        </section>

        <section className="w-full overflow-hidden bg-[#f1f6ec]" aria-label="Depoimentos de clientes">
          <div
            className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
            style={{ aspectRatio: '1536 / 781' }}
          >
            <img
              src={testimonialsImage}
              alt="Histórias reais e depoimentos de clientes do Código da Saúde"
              className="absolute inset-0 block h-full w-full select-none object-contain"
              draggable={false}
            />

            {videoHotspots.map((video) => (
              <button
                key={video.src}
                type="button"
                aria-label={`Assistir ${video.label}`}
                title={`Assistir ${video.label}`}
                onClick={() => setActiveVideo(video)}
                className="absolute z-20 cursor-pointer rounded-[14px] bg-transparent outline-none transition focus-visible:ring-4 focus-visible:ring-[#0f8f84]/80"
                style={{
                  left: video.left,
                  top: video.top,
                  width: video.width,
                  height: video.height,
                }}
              />
            ))}
          </div>
        </section>
      </main>

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
              src={activeVideo.src}
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

export default AreaHome

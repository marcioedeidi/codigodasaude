import React from 'react'
import { useNavigate } from 'react-router-dom'

const FiberSlim: React.FC = () => {
  const navigate = useNavigate()
  const pageImage = `${import.meta.env.BASE_URL}assets/fiberslim-page-v1.webp?v=fiberslim-v1`

  return (
    <main className="w-full bg-[#dff4f0]">
      <section className="w-full overflow-hidden">
        <div
          className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
          style={{ aspectRatio: '1024 / 606' }}
        >
          <img
            src={pageImage}
            alt="Código da Saúde — Fiber Slim"
            className="absolute inset-0 block h-full w-full select-none object-contain"
            draggable={false}
          />

          <button
            type="button"
            onClick={() => navigate('/cadastro')}
            aria-label="Quero experimentar o Fiber Slim"
            title="Quero experimentar o Fiber Slim"
            className="absolute z-20 cursor-pointer rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#00a896]/70"
            style={{ left: '58.2%', top: '72.7%', width: '27.4%', height: '9.8%' }}
          />
        </div>
      </section>
    </main>
  )
}

export default FiberSlim

import React from 'react'
import productImage from '../assets/Produtos/always-fit-curcumin-pro.jpeg'

const ProCurcumin: React.FC = () => {
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
                src={import.meta.env.BASE_URL + 'videos/VID-20260813-WA0022.mp4'}
                controls
                playsInline
                preload="metadata"
                className="block h-full w-full object-cover"
                aria-label="Depoimento 1 do produto Pro Curcumin"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProCurcumin

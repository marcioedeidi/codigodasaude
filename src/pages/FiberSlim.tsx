import React from 'react'
import productImage from '../assets/Produtos/fiberslim.jpg'
import TestimonialGallery from '../components/TestimonialGallery'

const FiberSlim: React.FC = () => {
  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(15,91,82,0.12)]">
            <img
              src={productImage}
              alt="Fiber Slim"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>
      <TestimonialGallery brand="velmora" videoIndexes={[1]} />
    </main>
  )
}

export default FiberSlim

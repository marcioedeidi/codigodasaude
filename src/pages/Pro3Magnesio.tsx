import React from 'react'

const Pro3Magnesio: React.FC = () => {
  const productImage = `${import.meta.env.BASE_URL}assets/alwaysfit/pro3-magnesio.svg`

  return (
    <main className="w-full bg-[#f3f8f3]">
      <section className="w-full">
        <div className="mx-auto w-full">
          <div className="relative overflow-hidden">
            <img
              src={productImage}
              alt="AlwaysFit Pro3 Magnésio + Vitamina D3 + K2"
              className="block h-auto w-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Pro3Magnesio

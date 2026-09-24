import React from 'react'

const Pro3Magnesio: React.FC = () => {
  const productImage =
    'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-pro3-1frasco_1__11zon_1c68d9d8-5d77-4f5b-85c9-69b3cd767ca1_1200x.webp?v=1783636176'

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

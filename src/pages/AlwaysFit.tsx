import React from 'react'

const products = [
  {
    name: 'Picolinato de Cromo',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-picolinato-1frasco_11zon_2_1200x.webp?v=1750724263'
  },
  {
    name: 'CoQ10',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-coq10-01_11zon_1784f395-ef5b-4f3b-a7b0-2e835a35d1c4.webp?v=1780929784'
  },
  {
    name: 'NAC',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-nac-01_3__11zon.webp?v=1776370468'
  },
  {
    name: 'Fits36',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-fits36-1frasco_11zon_800x.webp?v=1778598620'
  },
  {
    name: 'Fit Hair',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-fithair-1frasco_11zon_5074b251-776e-45d5-974f-7fb2a8393ed3.webp?v=1761578728'
  },
  {
    name: 'Pro Curcumin',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-procurcumin-1frasco_11zon_a8e6cf0a-cdcb-4ed8-9958-d6a68f997165.webp?v=1775763718'
  },
  {
    name: 'Pro3 Magnésio',
    image: 'https://alwaysfit.com.br/cdn/shop/files/alwaysfit-pro3-1frasco_1__11zon_1c68d9d8-5d77-4f5b-85c9-69b3cd767ca1_1200x.webp?v=1783636176'
  }
]

const AlwaysFit: React.FC = () => {
  return (
    <main className="w-full bg-[#a8ded6]">
      <section className="mx-auto w-full max-w-[1536px] p-6">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#064f46]">Produtos AlwaysFit</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="rounded-2xl bg-white p-4 shadow">
              <img src={product.image} alt={`Produto AlwaysFit ${product.name}`} className="mx-auto h-48 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AlwaysFit

import React from 'react'
import { Link } from 'react-router-dom'
import proCurcumin from '../assets/Produtos/always-fit-curcumin-pro.jpeg'
import picolinatoCromo from '../assets/Produtos/always-fit-picolanatodecromo.jpeg'
import pro3Magnesio from '../assets/Produtos/alwaysfit-manesio-vitaminad.jpeg'

const products = [
  {
    name: 'Picolinato de Cromo',
    image: picolinatoCromo,
    route: '/produtos/picolinato-cromo'
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
    image: proCurcumin,
    route: '/produtos/pro-curcumin',
    video: 'videos/VID-20260813-WA0022.mp4'
  },
  {
    name: 'Pro3 Magnésio',
    image: pro3Magnesio,
    route: '/produtos/pro3-magnesio'
  }
]

const AlwaysFit: React.FC = () => {
  return (
    <main className="w-full bg-[#a8ded6]">
      <section className="mx-auto w-full max-w-[1536px] p-6">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#064f46]">Produtos AlwaysFit</h1>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => {
            const card = (
              <div className="group relative block w-full rounded-2xl bg-white p-4 text-left shadow transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={product.image}
                  alt={'Produto AlwaysFit ' + product.name}
                  className="mx-auto block h-48 w-full object-contain"
                />

                {product.video && (
                  <div className="mt-4 overflow-hidden rounded-xl bg-black">
                    <video
                      src={`${import.meta.env.BASE_URL}${product.video}`}
                      controls
                      playsInline
                      preload="metadata"
                      className="block aspect-video w-full object-cover"
                      aria-label={'Depoimento — ' + product.name}
                    />
                  </div>
                )}
              </div>
            )

            return product.route ? (
              <Link
                key={product.name}
                to={product.route}
                className="block w-full cursor-pointer rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#064f46]"
                aria-label={'Abrir produto AlwaysFit ' + product.name}
              >
                {card}
              </Link>
            ) : (
              <div key={product.name}>{card}</div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default AlwaysFit

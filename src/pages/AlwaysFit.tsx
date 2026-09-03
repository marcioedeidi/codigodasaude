import React from 'react'

const products = [
  'picolinato-cromo.svg',
  'q10.svg',
  'nac.svg',
  'fits36.svg',
  'fit-hair.svg',
  'pro-curcumin.svg',
  'pro3-magnesio.svg'
]

const AlwaysFit: React.FC = () => {
  return (
    <main className="w-full bg-[#a8ded6]">
      <section className="mx-auto w-full max-w-[1536px] p-6">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#064f46]">Produtos AlwaysFit</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product} className="rounded-2xl bg-white p-4 shadow">
              <img src={`${import.meta.env.BASE_URL}assets/alwaysfit/${product}`} alt={`Produto AlwaysFit ${product}`} className="mx-auto h-48 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AlwaysFit

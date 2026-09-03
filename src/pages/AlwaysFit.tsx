import React from 'react'

const AlwaysFit: React.FC = () => {
  const image = `${import.meta.env.BASE_URL}assets/alwaysfit/alwaysfit-produtos.webp`

  return (
    <main className="w-full bg-[#a8ded6]">
      <section className="mx-auto w-full max-w-[1536px] overflow-hidden">
        <img src={image} alt="Produtos AlwaysFit" className="block h-auto w-full object-contain" />
      </section>
      <section className="mx-auto grid w-full max-w-[1536px] grid-cols-2 gap-4 p-6 md:grid-cols-4">
        <a href="/produtos" className="rounded-xl bg-white p-4 text-center font-bold text-[#064f46]">Ver todos os produtos</a>
      </section>
    </main>
  )
}

export default AlwaysFit

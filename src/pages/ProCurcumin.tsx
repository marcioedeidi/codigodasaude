import React from 'react'
import proCurcumin from '../assets/Produtos/always-fit-curcumin-pro.jpeg'

const ProCurcumin: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#dff4f0] p-8">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-xl md:flex-row">
        <img src={proCurcumin} alt="AlwaysFit Pro Curcumin" className="h-96 w-full object-contain md:w-1/2" />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-[#064f46]">AlwaysFit Pro Curcumin</h1>
          <p className="mt-4 text-lg text-gray-700">Ação anti-inflamatória e antioxidante com curcumina, vitaminas, minerais e colágeno tipo II.</p>
        </div>
      </section>
    </main>
  )
}

export default ProCurcumin

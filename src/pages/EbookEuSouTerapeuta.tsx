import React from 'react'
import ebookTerapeutaCard from '../assets/livros/E-book Terapeuta_ Fé e Autocuidado.png'

const EbookEuSouTerapeuta: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="relative mx-auto w-full max-w-[1536px]">
      <img
        src={ebookTerapeutaCard}
        alt="E-book Eu Sou Terapeuta e Também Tenho Medo"
        className="block h-auto w-full select-none"
        draggable={false}
      />
      <a
        href="https://go.hotmart.com/J107807538W"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar Eu Sou Terapeuta e Também Tenho Medo pela Hotmart"
        title="Comprar Eu Sou Terapeuta e Também Tenho Medo"
        className="absolute left-[45%] top-[82%] z-10 block h-[12%] w-[47%] cursor-pointer"
      />
    </div>
  </main>
)

export default EbookEuSouTerapeuta

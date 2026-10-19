import React from 'react'
import ebookTerapeutaCard from '../assets/livros/E-book Terapeuta_ Fé e Autocuidado.png'

const EbookEuSouTerapeuta: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="mx-auto w-full max-w-[1536px]">
      <img
        src={ebookTerapeutaCard}
        alt="E-book Eu Sou Terapeuta e Também Tenho Medo"
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </div>
  </main>
)

export default EbookEuSouTerapeuta

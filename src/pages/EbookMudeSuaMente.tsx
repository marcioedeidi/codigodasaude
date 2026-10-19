import React from 'react'
import ebookMudeSuaMenteCard from '../assets/livros/WhatsApp Image 2026-10-14 at 20.49.48.jpeg'

const EbookMudeSuaMente: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="mx-auto w-full max-w-[1536px]">
      <img
        src={ebookMudeSuaMenteCard}
        alt="E-book Mude Sua Mente, Transforme Sua Vida"
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </div>
  </main>
)

export default EbookMudeSuaMente

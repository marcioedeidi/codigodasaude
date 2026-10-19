import React from 'react'
import ebookMudeSuaMenteCard from '../assets/livros/WhatsApp Image 2026-10-14 at 20.49.48.jpeg'

const EbookMudeSuaMente: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="relative mx-auto w-full max-w-[1536px]">
      <img
        src={ebookMudeSuaMenteCard}
        alt="E-book Mude Sua Mente, Transforme Sua Vida"
        className="block h-auto w-full select-none"
        draggable={false}
      />
      <a
        href="https://go.hotmart.com/W106848599T"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar Mude Sua Mente, Transforme Sua Vida pela Hotmart"
        title="Comprar Mude Sua Mente, Transforme Sua Vida"
        className="absolute left-[45%] top-[83%] z-10 block h-[12%] w-[46%] cursor-pointer"
      />
    </div>
  </main>
)

export default EbookMudeSuaMente

import React from 'react'
import firstEbookCard from '../assets/livros/Banner de E-book sobre Equilíbrio Emocional ultima ediçao.png'

const EbookMulherForte: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="relative mx-auto w-full max-w-[1536px]">
      <img
        src={firstEbookCard}
        alt="E-book Mulher Forte, Mente Cansada"
        className="block h-auto w-full select-none"
        draggable={false}
      />
      <a
        href="https://go.hotmart.com/F104668912F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar Mulher Forte, Mente Cansada pela Hotmart"
        title="Comprar Mulher Forte, Mente Cansada"
        className="absolute left-[45%] top-[81%] z-10 block h-[14%] w-[48%] cursor-pointer"
      />
    </div>
  </main>
)

export default EbookMulherForte

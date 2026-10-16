import React from 'react'
import firstEbookCard from '../assets/livros/Banner de E-book sobre Equilíbrio Emocional ultima ediçao.png'

const EbookMulherForte: React.FC = () => (
  <main className="min-h-[calc(100vh-104px)] w-full bg-[#9fded7]">
    <div className="mx-auto w-full max-w-[1536px]">
      <img
        src={firstEbookCard}
        alt="E-book Mulher Forte, Mente Cansada"
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </div>
  </main>
)

export default EbookMulherForte

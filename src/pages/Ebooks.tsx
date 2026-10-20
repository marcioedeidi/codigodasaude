import React from 'react'
import { Link } from 'react-router-dom'
import launchHero from '../assets/livros/Livro Roxo à Beira-Mar com Lótus.png'
import ebookCollection from '../assets/livros/E-books que transformam vidas ultima ediçao.png'

const Ebooks: React.FC = () => (
  <main id="ebooks" className="w-full bg-[#9fded7]">
    <h1 className="sr-only">E-books Código da Saúde</h1>

    <section aria-label="Lançamento do livro Eu Sou Terapeuta e Também Tenho Medo" className="w-full bg-[#9fded7]">
      <div className="mx-auto w-full max-w-[1536px]">
        <img
          src={launchHero}
          alt="Lançamento: Eu Sou Terapeuta e Também Tenho Medo, na areia da praia, com mar verde-água e três flores de lótus"
          className="block h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </section>

    <section aria-labelledby="colecao-ebooks" className="w-full bg-[#e9f8f4] px-3 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
      <div className="mx-auto w-full max-w-[1536px]">
        <h2 id="colecao-ebooks" className="mb-6 text-center font-serif text-3xl font-bold text-[#10372f] sm:text-4xl">
          Conheça nossos e-books
        </h2>

        <div className="relative w-full">
          <img
            src={ebookCollection}
            alt="Coleção de e-books Código da Saúde: Mulher Forte, Mente Cansada; Mude Sua Mente, Transforme Sua Vida; Eu Sou Terapeuta e Também Tenho Medo"
            className="block h-auto w-full select-none"
            draggable={false}
          />
          <Link
            to="/ebooks/mulher-forte-mente-cansada"
            aria-label="Abrir Mulher Forte, Mente Cansada"
            className="absolute left-[6.9%] top-[88.5%] z-10 h-[7.5%] w-[23.8%] cursor-pointer rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#087e76]"
          />
          <Link
            to="/ebooks/mude-sua-mente-transforme-sua-vida"
            aria-label="Abrir Mude Sua Mente, Transforme Sua Vida"
            className="absolute left-[38.3%] top-[88.5%] z-10 h-[7.5%] w-[23.4%] cursor-pointer rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#087e76]"
          />
          <Link
            to="/ebooks/eu-sou-terapeuta-e-tambem-tenho-medo"
            aria-label="Abrir Eu Sou Terapeuta e Também Tenho Medo"
            className="absolute left-[69.3%] top-[88.5%] z-10 h-[7.5%] w-[23.9%] cursor-pointer rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#087e76]"
          />
        </div>
      </div>
    </section>
  </main>
)

export default Ebooks

import React from 'react'
import productImage from '../assets/Produtos/alwaysfit-fits36.jpeg'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

const Fits36: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f3f8f3]">
        <section className="w-full">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden">
              <img
                src={productImage}
                alt="AlwaysFit Fits36 Advanced Formula"
                className="block h-auto w-full object-contain"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full">
            <img
              src={footerImage}
              alt="Código da Saúde"
              className="block w-full"
              draggable={false}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Fits36

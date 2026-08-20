import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type ClickArea = {
  name: string
  left: string
  top: string
  width: string
  height: string
}

const clickAreas: ClickArea[] = [
  { name: 'Velmo Black Drink', left: '8.2%', top: '52.5%', width: '10.8%', height: '3.4%' },
  { name: 'Combo Velmo Black Drink', left: '28.0%', top: '52.5%', width: '10.9%', height: '3.4%' },
  { name: 'Velmo Black Cápsulas', left: '48.0%', top: '52.5%', width: '10.6%', height: '3.4%' },
  { name: 'Creatina Gummy', left: '66.0%', top: '52.5%', width: '10.4%', height: '3.4%' },
  { name: 'Fiber Slim', left: '81.9%', top: '52.5%', width: '10.3%', height: '3.4%' },
  { name: 'Termo Drink', left: '7.0%', top: '82.5%', width: '8.6%', height: '3.2%' },
  { name: 'CreaGym', left: '21.7%', top: '82.5%', width: '8.7%', height: '3.2%' },
  { name: 'Skin-Fit', left: '36.2%', top: '82.5%', width: '8.6%', height: '3.2%' },
  { name: 'Movimint', left: '50.6%', top: '82.5%', width: '8.7%', height: '3.2%' },
  { name: 'Calminol', left: '66.0%', top: '82.5%', width: '8.6%', height: '3.2%' },
  { name: 'HeyHair', left: '82.0%', top: '82.5%', width: '8.8%', height: '3.2%' },
]

const Produtos: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `${import.meta.env.BASE_URL}assets/produtos-page-v3.webp?v=produtos-v3-fiel`

  const handleProductClick = (name: string) => {
    if (name === 'Velmo Black Drink') {
      navigate('/produtos/velmo-black-drink')
      return
    }

    if (name === 'Combo Velmo Black Drink') {
      navigate('/produtos/combo-velmo-black')
      return
    }

    setSelected(name)

    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      setSelected(null)
    }, 2400)
  }

  return (
    <main className="w-full bg-[#dff4f0]">
      <section className="w-full overflow-hidden">
        <div
          className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
          style={{ aspectRatio: '1536 / 911' }}
        >
          <img
            src={pageImage}
            alt="Código da Saúde — Nossas Soluções"
            className="absolute inset-0 block h-full w-full select-none object-contain"
            draggable={false}
          />

          {clickAreas.map((area) => (
            <button
              key={area.name}
              type="button"
              aria-label={`Conhecer ${area.name}`}
              title={`Conhecer ${area.name}`}
              onClick={() => handleProductClick(area.name)}
              className="absolute z-20 cursor-pointer rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#00a896]/70"
              style={{
                left: area.left,
                top: area.top,
                width: area.width,
                height: area.height,
              }}
            />
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-center text-sm font-semibold text-white shadow-2xl md:text-base">
          {selected} selecionado. Vamos preparar a página individual deste produto.
        </div>
      )}
    </main>
  )
}

export default Produtos

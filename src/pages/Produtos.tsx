import React, { useRef, useState } from 'react'

type ClickArea = {
  name: string
  left: string
  top: string
  width: string
  height: string
}

const clickAreas: ClickArea[] = [
  { name: 'Velmo Black Drink', left: '7.7%', top: '52.3%', width: '11.2%', height: '4.2%' },
  { name: 'Combo Velmo Black Drink', left: '27.5%', top: '52.3%', width: '11.3%', height: '4.2%' },
  { name: 'Velmo Black Cápsulas', left: '47.7%', top: '52.3%', width: '11.2%', height: '4.2%' },
  { name: 'Creatina Gummy', left: '65.7%', top: '52.3%', width: '11.1%', height: '4.2%' },
  { name: 'Fiber Slim', left: '81.5%', top: '52.3%', width: '11.2%', height: '4.2%' },
  { name: 'Termo Drink', left: '6.6%', top: '82.2%', width: '9.3%', height: '4.0%' },
  { name: 'CreaGym', left: '21.3%', top: '82.2%', width: '9.3%', height: '4.0%' },
  { name: 'Skin-Fit', left: '36.4%', top: '82.2%', width: '9.3%', height: '4.0%' },
  { name: 'Movimint', left: '50.2%', top: '82.2%', width: '9.4%', height: '4.0%' },
  { name: 'Calminol', left: '65.6%', top: '82.2%', width: '9.3%', height: '4.0%' },
  { name: 'HeyHair', left: '81.8%', top: '82.2%', width: '9.3%', height: '4.0%' },
]

const Produtos: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `${import.meta.env.BASE_URL}assets/produtos-page-v1.webp?v=produtos-v1`

  const handleProductClick = (name: string) => {
    setSelected(name)

    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      setSelected(null)
    }, 2600)
  }

  return (
    <main className="w-full bg-[#dff4f0]">
      <section className="w-full overflow-hidden">
        <div
          className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
          style={{ aspectRatio: '1536 / 912' }}
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
              className="absolute z-20 cursor-pointer rounded-full bg-transparent outline-none transition focus-visible:ring-4 focus-visible:ring-[#00a896]/70"
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
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-center text-sm font-semibold text-white shadow-2xl md:text-base">
          {selected} selecionado. A página individual será ligada a este botão depois.
        </div>
      )}
    </main>
  )
}

export default Produtos

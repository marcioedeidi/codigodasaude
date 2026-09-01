import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type ClickArea = {
  name: string
  left: string
  top: string
  width: string
  height: string
}

type PriceArea = ClickArea & {
  price: string
}

const clickAreas: ClickArea[] = [
  { name: 'Velmo Black Drink', left: '8.2%', top: '54.0%', width: '10.8%', height: '3.6%' },
  { name: 'Combo Velmo Black Drink', left: '28.0%', top: '54.0%', width: '10.9%', height: '3.6%' },
  { name: 'Velmo Black Cápsulas', left: '48.0%', top: '54.0%', width: '10.6%', height: '3.6%' },
  { name: 'Creatina Gummy', left: '66.0%', top: '54.0%', width: '10.4%', height: '3.6%' },
  { name: 'Fiber Slim', left: '81.9%', top: '54.0%', width: '10.3%', height: '3.6%' },
  { name: 'CreaGym', left: '23.1%', top: '90.2%', width: '8.7%', height: '3.5%' },
  { name: 'Skin-Fit', left: '37.7%', top: '90.2%', width: '8.6%', height: '3.5%' },
  { name: 'Movimint', left: '52.1%', top: '90.2%', width: '8.7%', height: '3.5%' },
  { name: 'Calminol', left: '67.1%', top: '90.2%', width: '8.6%', height: '3.5%' },
  { name: 'HeyHair', left: '82.0%', top: '90.2%', width: '8.8%', height: '3.5%' },
]

const priceAreas: PriceArea[] = [
  { name: 'Velmo Black Drink', price: 'A partir de R$ 197,90', left: '7.0%', top: '49.8%', width: '13.0%', height: '3.0%' },
  { name: 'Combo Velmo Black Drink', price: 'A partir de R$ 463,50', left: '26.0%', top: '49.8%', width: '15.0%', height: '3.0%' },
  { name: 'Velmo Black Cápsulas', price: 'A partir de R$ 197,90', left: '46.8%', top: '49.8%', width: '13.2%', height: '3.0%' },
  { name: 'Creatina Gummy', price: 'A partir de R$ 197,00', left: '64.8%', top: '49.8%', width: '13.0%', height: '3.0%' },
  { name: 'Fiber Slim', price: 'A partir de R$ 209,90', left: '80.8%', top: '49.8%', width: '12.4%', height: '3.0%' },
  { name: 'CreaGym', price: 'A partir de R$ 197,00', left: '21.8%', top: '85.8%', width: '11.4%', height: '2.8%' },
  { name: 'Skin-Fit', price: 'A partir de R$ 209,90', left: '36.3%', top: '85.8%', width: '11.4%', height: '2.8%' },
  { name: 'Movimint', price: 'A partir de R$ 197,00', left: '50.8%', top: '85.8%', width: '11.7%', height: '2.8%' },
  { name: 'Calminol', price: 'A partir de R$ 197,00', left: '65.8%', top: '85.8%', width: '11.7%', height: '2.8%' },
  { name: 'HeyHair', price: 'A partir de R$ 197,00', left: '80.8%', top: '85.8%', width: '11.8%', height: '2.8%' },
]

const Produtos: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `${import.meta.env.BASE_URL}assets/produtos-page-v4.webp?v=produtos-v4-final`

  const handleProductClick = (name: string) => {
    if (name === 'Velmo Black Drink') { navigate('/produtos/velmo-black-drink'); return }
    if (name === 'Combo Velmo Black Drink') { navigate('/produtos/combo-velmo-black'); return }
    if (name === 'Velmo Black Cápsulas') { navigate('/produtos/velmo-caps'); return }
    if (name === 'Creatina Gummy') { navigate('/produtos/creatina-gummy'); return }
    if (name === 'Fiber Slim') { window.location.assign(`${import.meta.env.BASE_URL}produtos/fiber-slim`); return }
    if (name === 'CreaGym') { window.location.assign(`${import.meta.env.BASE_URL}produtos/creagym`); return }
    if (name === 'Skin-Fit') { window.location.assign(`${import.meta.env.BASE_URL}produtos/skin-fit`); return }
    if (name === 'Movimint') { window.location.assign(`${import.meta.env.BASE_URL}produtos/movimint`); return }
    if (name === 'Calminol') { window.location.assign(`${import.meta.env.BASE_URL}produtos/calminol`); return }
    if (name === 'HeyHair') { window.location.assign(`${import.meta.env.BASE_URL}produtos/heyhair`); return }
    setSelected(name)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setSelected(null), 2400)
  }

  return (
    <main className="w-full bg-[#dff4f0]">
      <section className="w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1672px] overflow-hidden" style={{ aspectRatio: '1672 / 941' }}>
          <img src={pageImage} alt="Código da Saúde — Nossas Soluções" className="absolute inset-0 block h-full w-full select-none object-contain" draggable={false} />

          {priceAreas.map((area) => (
            <div
              key={`price-${area.name}`}
              aria-hidden="true"
              className="pointer-events-none absolute z-10 flex items-center justify-center whitespace-nowrap text-center font-extrabold tracking-tight text-[#064f46]"
              style={{
                left: area.left,
                top: area.top,
                width: area.width,
                height: area.height,
                fontSize: 'clamp(8px, 1.05vw, 18px)',
                lineHeight: 1,
              }}
            >
              {area.price}
            </div>
          ))}

          {clickAreas.map((area) => (
            <button
              key={area.name}
              type="button"
              aria-label={`Conhecer ${area.name}`}
              title={`Conhecer ${area.name}`}
              onClick={() => handleProductClick(area.name)}
              className="absolute z-20 cursor-pointer rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-[#00a896]/70"
              style={{ left: area.left, top: area.top, width: area.width, height: area.height }}
            />
          ))}
        </div>
      </section>
      {selected && <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-center text-sm font-semibold text-white shadow-2xl md:text-base">{selected} selecionado.</div>}
    </main>
  )
}

export default Produtos

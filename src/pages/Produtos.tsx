import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import footerImage from '../assets/footer/rodape.png'
import Navbar from '../components/layout/Navbar'

type ClickArea = { name: string; left: string; top: string; width: string; height: string }

const clickAreas: ClickArea[] = [
  { name: 'Velmo Black Drink', left: '8%', top: '50%', width: '12%', height: '10%' },
  { name: 'Combo Velmo Black Drink', left: '27%', top: '50%', width: '12%', height: '10%' },
  { name: 'Velmo Black Cápsulas', left: '47%', top: '50%', width: '12%', height: '10%' },
  { name: 'Creatina Gummy', left: '65%', top: '50%', width: '12%', height: '10%' },
  { name: 'Fiber Slim', left: '80%', top: '50%', width: '12%', height: '10%' },
]

const extraClickAreas: ClickArea[] = [
  { name: 'Pro Curcumin', left: '38%', top: '76%', width: '25%', height: '22%' },
  { name: 'Picolinato de Cromo', left: '64%', top: '53%', width: '25%', height: '22%' },
]

const Produtos: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `${import.meta.env.BASE_URL}assets/produtos-page-v4.webp?v=produtos-v5`
  const extraPageImage = `${import.meta.env.BASE_URL}assets/WhatsApp Image 2026-09-03 at 00.54.50.jpeg`

  const handleProductClick = (name: string) => {
    if (name === 'Pro Curcumin') {
      navigate('/produtos/pro-curcumin')
      return
    }
    if (name === 'Picolinato de Cromo') {
      navigate('/produtos/picolinato-cromo')
      return
    }
    if (name === 'Velmo Black Drink') return navigate('/produtos/velmo-black-drink')
    if (name === 'Combo Velmo Black Drink') return navigate('/produtos/combo-velmo-black')
    if (name === 'Velmo Black Cápsulas') return navigate('/produtos/velmo-caps')
    if (name === 'Creatina Gummy') return navigate('/produtos/creatina-gummy')
    if (name === 'Celuglow') return navigate('/produtos/celuglow')

    setSelected(name)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setSelected(null), 2000)
  }

  return (
    <>
      <Navbar />

      <main className="w-full bg-[#dff4f0]">
        <section className="w-full overflow-hidden">
          <div className="relative mx-auto w-full max-w-[1672px] overflow-hidden" style={{aspectRatio:'1672 / 941'}}>
            <img
              src={pageImage}
              alt="Código da Saúde — Produtos"
              className="absolute inset-0 block h-full w-full select-none object-contain pointer-events-none"
            />

            {clickAreas.map(area => (
              <button
                key={area.name}
                type="button"
                aria-label={area.name}
                onClick={() => handleProductClick(area.name)}
                className="absolute cursor-pointer bg-transparent border-0 p-0"
                style={{
                  left: area.left,
                  top: area.top,
                  width: area.width,
                  height: area.height,
                  zIndex: 100,
                  pointerEvents: 'auto'
                }}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="relative mx-auto max-w-[1672px]">
            <img src={extraPageImage} alt="Código da Saúde — Nossas Soluções" className="block w-full" />

            {extraClickAreas.map(area => (
              <button
                key={area.name}
                type="button"
                aria-label={area.name}
                onClick={() => handleProductClick(area.name)}
                className="absolute cursor-pointer bg-transparent border-0 p-0"
                style={{
                  left: area.left,
                  top: area.top,
                  width: area.width,
                  height: area.height,
                  zIndex: 100,
                  pointerEvents: 'auto'
                }}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1672px]">
            <img src={footerImage} alt="Código da Saúde" className="w-full" />
          </div>
        </section>

        {selected && (
          <div className="fixed bottom-5 left-1/2 z-[200] -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-white">
            {selected} selecionado.
          </div>
        )}
      </main>
    </>
  )
}

export default Produtos

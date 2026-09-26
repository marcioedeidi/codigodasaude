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
  { name: 'Celuglow', left: '7.7%', top: '90.2%', width: '8.8%', height: '3.5%' },
  { name: 'CreaGym', left: '23.1%', top: '90.2%', width: '8.7%', height: '3.5%' },
  { name: 'Skin-Fit', left: '37.7%', top: '90.2%', width: '8.6%', height: '3.5%' },
  { name: 'Movimint', left: '52.1%', top: '90.2%', width: '8.7%', height: '3.5%' },
  { name: 'Calminol', left: '67.1%', top: '90.2%', width: '8.6%', height: '3.5%' },
  { name: 'HeyHair', left: '82%', top: '90.2%', width: '8.8%', height: '3.5%' },
]

const extraClickAreas: ClickArea[] = [
  { name: 'NAC', left: '7%', top: '93%', width: '10%', height: '5%' },
  { name: 'Pro3 Magnésio', left: '26%', top: '93%', width: '10%', height: '5%' },
  { name: 'Pro Curcumin', left: '45%', top: '93%', width: '10%', height: '5%' },
  { name: 'Q10', left: '9%', top: '56%', width: '13%', height: '6%' },
  { name: 'Fit Dreams', left: '27%', top: '56%', width: '13%', height: '6%' },
  { name: 'Fit Hair', left: '44%', top: '56%', width: '13%', height: '6%' },
  { name: 'Vitaminas B6 B9 B12', left: '63%', top: '93%', width: '11%', height: '5%' },
  { name: 'Picolinato de Cromo', left: '63%', top: '56%', width: '11%', height: '5%' },
  { name: 'Fits36', left: '80%', top: '56%', width: '13%', height: '6%' },
]

const Produtos: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `${import.meta.env.BASE_URL}assets/produtos-page-v4.webp?v=produtos-v5`
  const extraPageImage = `${import.meta.env.BASE_URL}assets/WhatsApp Image 2026-09-03 at 00.54.50.jpeg`

  const handleProductClick = (name: string) => {
    if (name === 'Fit Dreams') {
      navigate('/produtos/fitdreams')
      return
    }
    if (name === 'Q10') {
      navigate('/produtos/q10')
      return
    }
    if (name === 'NAC') {
      navigate('/produtos/nac')
      return
    }
    if (name === 'Fits36') {
      navigate('/produtos/fits36')
      return
    }
    if (name === 'Fit Hair') {
      navigate('/produtos/fithair')
      return
    }
    if (name === 'Vitaminas B6 B9 B12') {
      navigate('/produtos/vitaminas-b6-b9-b12')
      return
    }
    if (name === 'Pro Curcumin') {
      navigate('/produtos/pro-curcumin')
      return
    }
    if (name === 'Picolinato de Cromo') {
      navigate('/produtos/picolinato-cromo')
      return
    }
    if (name === 'Pro3 Magnésio') {
      navigate('/produtos/pro3-magnesio')
      return
    }
    if (name === 'Velmo Black Drink') return navigate('/produtos/velmo-black-drink')
    if (name === 'Combo Velmo Black Drink') return navigate('/produtos/combo-velmo-black')
    if (name === 'Velmo Black Cápsulas') return navigate('/produtos/velmo-caps')
    if (name === 'Creatina Gummy') return navigate('/produtos/creatina-gummy')
    if (name === 'Celuglow') return navigate('/produtos/celuglow')
    if (name === 'CreaGym') return navigate('/produtos/creagym')
    if (name === 'Skin-Fit') return navigate('/produtos/skin-fit')
    if (name === 'Movimint') return navigate('/produtos/movimint')
    if (name === 'Calminol') return navigate('/produtos/calminol')
    if (name === 'HeyHair') return navigate('/produtos/heyhair')

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
            <img src={pageImage} alt="Código da Saúde — Produtos" className="absolute inset-0 block h-full w-full select-none object-contain pointer-events-none" />
            {clickAreas.map(area => (
              <button key={area.name} type="button" aria-label={area.name} onClick={() => handleProductClick(area.name)} className="absolute cursor-pointer bg-transparent border-0 p-0" style={{ left: area.left, top: area.top, width: area.width, height: area.height, zIndex: 100, pointerEvents: 'auto' }} />
            ))}
          </div>
        </section>
        <section>
          <div className="relative mx-auto max-w-[1672px]">
            <img src={extraPageImage} alt="Código da Saúde — Nossas Soluções" className="block w-full" />
            <div
              className="absolute overflow-hidden rounded-[10px] bg-black shadow-md"
              style={{ left: '45%', top: '76%', width: '10%', height: '17%', zIndex: 80 }}
            >
              <video
                src={`${import.meta.env.BASE_URL}videos/VID-20260813-WA0022.mp4`}
                controls
                playsInline
                preload="metadata"
                className="block h-full w-full object-cover"
                aria-label="Depoimento 1 — Always Fit Pro Curcumin"
              />
            </div>
            {extraClickAreas.map(area => (
              <button key={area.name} type="button" aria-label={area.name} onClick={() => handleProductClick(area.name)} className="absolute cursor-pointer bg-transparent border-0 p-0" style={{ left: area.left, top: area.top, width: area.width, height: area.height, zIndex: 100, pointerEvents: 'auto' }} />
            ))}
          </div>
        </section>
        <section><div className="mx-auto w-full overflow-hidden" style={{ aspectRatio: '1536 / 788' }}><img src={footerImage} alt="Código da Saúde" className="block h-auto w-full max-w-none" style={{ transform: 'translateY(-14.453125%)' }} draggable={false} /></div></section>
        {selected && <div className="fixed bottom-5 left-1/2 z-[200] -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-white">{selected} selecionado.</div>}
      </main>
    </>
  )
}

export default Produtos
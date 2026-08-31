import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import part01 from '../assets/produtosPageV5/part01'
import part02 from '../assets/produtosPageV5/part02'
import part03 from '../assets/produtosPageV5/part03'
import part03a from '../assets/produtosPageV5/part03a'
import part04 from '../assets/produtosPageV5/part04'
import part05 from '../assets/produtosPageV5/part05'
import part06 from '../assets/produtosPageV5/part06'
import part07 from '../assets/produtosPageV5/part07'
import part08 from '../assets/produtosPageV5/part08'
import part09 from '../assets/produtosPageV5/part09'
import part10 from '../assets/produtosPageV5/part10'
import part11 from '../assets/produtosPageV5/part11'
import part12 from '../assets/produtosPageV5/part12'

type ClickArea = {
  name: string
  left: string
  top: string
  width: string
  height: string
}

// Áreas transparentes posicionadas sobre os botões da nova arte.
// Os destinos permanecem exatamente os mesmos da versão anterior.
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

const Produtos: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const pageImage = `data:image/webp;base64,${part01}${part02}${part03}${part03a}${part04}${part05}${part06}${part07}${part08}${part09}${part10}${part11}${part12}`

  const handleProductClick = (name: string) => {
    if (name === 'Velmo Black Drink') { navigate('/produtos/velmo-black-drink'); return }
    if (name === 'Combo Velmo Black Drink') { navigate('/produtos/combo-velmo-black'); return }
    if (name === 'Velmo Black Cápsulas') { navigate('/produtos/velmo-caps'); return }
    if (name === 'Creatina Gummy') { navigate('/produtos/creatina-gummy'); return }
    if (name === 'Fiber Slim') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/fiber-slim`)
      return
    }
    if (name === 'CreaGym') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/creagym`)
      return
    }
    if (name === 'Skin-Fit') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/skin-fit`)
      return
    }
    if (name === 'Movimint') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/movimint`)
      return
    }
    if (name === 'Calminol') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/calminol`)
      return
    }
    if (name === 'HeyHair') {
      window.location.assign(`${import.meta.env.BASE_URL}produtos/heyhair`)
      return
    }

    setSelected(name)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setSelected(null), 2400)
  }

  return (
    <main className="w-full bg-[#dff4f0]">
      <section className="w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1672px] overflow-hidden" style={{ aspectRatio: '1672 / 941' }}>
          <img src={pageImage} alt="Código da Saúde — Nossas Soluções" className="absolute inset-0 block h-full w-full select-none object-contain" draggable={false} />
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
      {selected && <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-2xl bg-[#064f46] px-5 py-3 text-center text-sm font-semibold text-white shadow-2xl md:text-base">{selected} selecionado. Vamos preparar a página individual deste produto.</div>}
    </main>
  )
}

export default Produtos

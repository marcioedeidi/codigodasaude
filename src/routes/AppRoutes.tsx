import React, { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import AreaHome from '../pages/AreaHome'
import Cadastro from '../pages/Cadastro'
import Produtos from '../pages/Produtos'
import FiberSlim from '../pages/FiberSlim'
import Depoimentos from '../pages/Depoimentos'
import Ebooks from '../pages/Ebooks'
import Sobre from '../pages/Sobre'
import ProtectedLayout from '../components/layout/ProtectedLayout'
import Footer from '../components/layout/Footer'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const scrollTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    scrollTop()

    // O navegador pode tentar restaurar a posição antiga depois da troca de rota.
    // Reforçamos o topo após o próximo ciclo de pintura para impedir isso.
    const frame1 = window.requestAnimationFrame(scrollTop)
    const frame2 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollTop)
    })

    return () => {
      window.cancelAnimationFrame(frame1)
      window.cancelAnimationFrame(frame2)
    }
  }, [pathname])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}

const AppRoutes: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/inicio" element={<AreaHome />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/fiberslim" element={<FiberSlim />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes

import React, { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import AreaHome from '../pages/AreaHome'
import Cadastro from '../pages/Cadastro'
import Produtos from '../pages/Produtos'
import VelmoBlackDrink from '../pages/VelmoBlackDrink'
import ComboVelmoBlack from '../pages/ComboVelmoBlack'
import VelmoCaps from '../pages/VelmoCaps'
import CreatinaGummy from '../pages/CreatinaGummy'
import FiberSlim from '../pages/FiberSlim'
import ThermoDrink from '../pages/ThermoDrink'
import CreaGym from '../pages/CreaGym'
import SkinFit from '../pages/SkinFit'
import Movimint from '../pages/movimint'
import Depoimentos from '../pages/Depoimentos'
import Sobre from '../pages/Sobre'
import ProtectedLayout from '../components/layout/ProtectedLayout'
import Footer from '../components/layout/Footer'

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const scrollToTarget = () => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) { target.scrollIntoView({ behavior: 'auto', block: 'start' }); return }
      }
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    scrollToTarget()
    const frame1 = window.requestAnimationFrame(scrollToTarget)
    const frame2 = window.requestAnimationFrame(() => window.requestAnimationFrame(scrollToTarget))
    return () => { window.cancelAnimationFrame(frame1); window.cancelAnimationFrame(frame2) }
  }, [pathname, hash])

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  return null
}

const AppRoutes: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/inicio" element={<AreaHome />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/velmo-black-drink" element={<VelmoBlackDrink />} />
          <Route path="/produtos/combo-velmo-black" element={<ComboVelmoBlack />} />
          <Route path="/produtos/velmo-caps" element={<VelmoCaps />} />
          <Route path="/produtos/creatina-gummy" element={<CreatinaGummy />} />
          <Route path="/produtos/fiber-slim" element={<FiberSlim />} />
          <Route path="/produtos/thermo-drink" element={<ThermoDrink />} />
          <Route path="/produtos/creagym" element={<CreaGym />} />
          <Route path="/produtos/skin-fit" element={<SkinFit />} />
          <Route path="/produtos/movimint" element={<Movimint />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/ebooks" element={<Navigate to="/inicio#ebooks" replace />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes

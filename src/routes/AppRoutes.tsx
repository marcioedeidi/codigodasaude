import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Produtos from '../pages/Produtos'
import FiberSlim from '../pages/FiberSlim'
import Depoimentos from '../pages/Depoimentos'
import Ebooks from '../pages/Ebooks'
import Sobre from '../pages/Sobre'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const AppRoutes: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/fiberslim" element={<FiberSlim />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes

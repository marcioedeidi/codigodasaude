import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const ProtectedLayout: React.FC = () => {
  const location = useLocation()
  const unlocked = localStorage.getItem('codigo_saude_cadastro_concluido') === '1'
  const isProdutos = location.pathname === '/produtos'

  if (!unlocked) {
    return <Navigate to="/cadastro" replace />
  }

  return (
    <>
      <Navbar />
      <Outlet />
      {!isProdutos && <Footer />}
    </>
  )
}

export default ProtectedLayout

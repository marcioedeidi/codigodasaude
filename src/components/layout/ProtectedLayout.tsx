import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const ProtectedLayout: React.FC = () => {
  const unlocked = localStorage.getItem('codigo_saude_cadastro_concluido') === '1'

  if (!unlocked) {
    return <Navigate to="/cadastro" replace />
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default ProtectedLayout

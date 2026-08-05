import React from 'react'
import { Hero, Benefits, Products, Contact } from '@components/sections'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Products />
      <Contact />
    </div>
  )
}

export default Home

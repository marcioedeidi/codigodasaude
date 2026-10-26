import React from 'react'
import { Hero, Benefits, Products, Contact } from '@components/sections'
import Quiz from './Quiz'

const Home: React.FC = () => {
  return (
    <div>
      <div className="codigo-saude-hero-continuo">
        <Hero />
        <Quiz embedded />
      </div>
      <Benefits />
      <Products />
      <Contact />
    </div>
  )
}

export default Home

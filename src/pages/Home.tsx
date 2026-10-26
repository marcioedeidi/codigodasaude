import React from 'react'
import { Hero, Benefits, Products, Contact } from '@components/sections'
import Quiz from './Quiz'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Quiz embedded />
      <Benefits />
      <Products />
      <Contact />
    </div>
  )
}

export default Home

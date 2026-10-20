import React from 'react'
import TestimonialGallery from '../components/TestimonialGallery'

const Depoimentos: React.FC = () => {
  return (
    <main>
      <TestimonialGallery brand="velmora" compact />
      <TestimonialGallery brand="alwaysfit" compact />
    </main>
  )
}

export default Depoimentos

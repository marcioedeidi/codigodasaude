import React from 'react'
import { motion } from 'framer-motion'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '', id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`section-padding bg-white ${className}`}
    >
      <div className="container-max">{children}</div>
    </motion.div>
  )
}

export default PageContainer

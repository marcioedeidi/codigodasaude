import { useEffect, useState } from 'react'

interface UseScrollProps {
  threshold?: number
}

export function useScroll({ threshold = 0 }: UseScrollProps = {}) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > threshold)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isScrollingDown }
}

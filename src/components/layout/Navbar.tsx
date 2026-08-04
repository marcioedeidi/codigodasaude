import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoSmall from '../../assets/logoSmall'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navLinks = [
    { label: 'Benefícios', href: 'beneficios' },
    { label: 'Produtos', href: 'produtos' },
    { label: 'Contato', href: 'contato' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7c39a]/50 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-max flex items-center justify-between px-4 py-3">
        <RouterLink to="/" className="flex items-center" aria-label="Código da Saúde">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={logoSmall}
            alt="Código da Saúde"
            className="h-[58px] w-auto object-contain md:h-[68px]"
          />
        </RouterLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-semibold text-[#29463e] transition-colors hover:text-[#159a92]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="p-2 text-[#29463e] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[#d7c39a]/40 bg-white md:hidden"
        >
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full rounded px-4 py-2 text-left font-semibold text-[#29463e] hover:bg-[#e9f8f5]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Navbar

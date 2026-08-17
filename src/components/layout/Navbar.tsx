import { useState } from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Início', to: '/inicio', icon: '⌂' },
  { label: 'Produtos', to: '/produtos', icon: '▢' },
  { label: 'E-books', to: '/inicio#ebooks', icon: '▤' },
  { label: 'Sobre nós', to: '/sobre', icon: '♡' },
  { label: 'Depoimentos', to: '/depoimentos', icon: '◯' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoSmall = `${import.meta.env.BASE_URL}assets/logo-small.webp`

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-bold transition-colors md:text-base ${
      isActive
        ? 'text-[#082f2b] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-[#087e76]'
        : 'text-[#102a27] hover:text-[#087e76]'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-[linear-gradient(90deg,#bdeee8_0%,#91d9d0_50%,#bcebe6_100%)] shadow-[0_5px_22px_rgba(4,79,72,0.12)]">
      <div className="mx-auto flex min-h-[104px] w-full max-w-[1536px] items-center justify-between gap-5 px-7 py-2 lg:px-10">
        <RouterLink to="/inicio" className="flex shrink-0 items-center" aria-label="Código da Saúde">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={logoSmall}
            alt="Código da Saúde"
            className="h-[82px] w-auto max-w-[250px] object-contain md:h-[90px]"
          />
        </RouterLink>

        <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              <span className="text-[28px] font-light leading-none" aria-hidden="true">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <RouterLink
          to="/cadastro"
          className="hidden min-w-[250px] items-center justify-center gap-3 rounded-[20px] bg-[#063c38] px-6 py-4 text-lg font-black text-white shadow-[0_10px_24px_rgba(2,54,49,0.25)] transition hover:-translate-y-0.5 hover:bg-[#042f2c] sm:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-lg" aria-hidden="true">◔</span>
          Falar no WhatsApp
        </RouterLink>

        <button
          className="rounded-xl bg-white/55 p-3 text-[#183c37] shadow-sm lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/60 bg-[#d8f4f0] px-4 py-4 lg:hidden"
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold ${
                    isActive ? 'bg-white text-[#0d655f]' : 'text-[#29463e] hover:bg-white/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <RouterLink
              to="/cadastro"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#063c38] px-4 py-3 text-center font-bold text-white"
            >
              Falar no WhatsApp
            </RouterLink>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Navbar

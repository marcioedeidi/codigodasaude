import { useState } from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Início', to: '/inicio', icon: '⌂' },
  { label: 'Produtos', to: '/produtos', icon: '▢' },
  { label: 'E-books', to: '/ebooks', icon: '▤' },
  { label: 'Sobre nós', to: '/sobre', icon: '♡' },
  { label: 'Depoimentos', to: '/depoimentos', icon: '◯' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoSmall = `${import.meta.env.BASE_URL}assets/logo-small.webp`

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors md:text-base ${
      isActive
        ? 'text-[#0d655f] after:absolute after:-bottom-2 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-[#169c95]'
        : 'text-[#1f312d] hover:text-[#159a92]'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#d7c39a]/40 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-max flex items-center justify-between gap-4 px-4 py-3">
          <RouterLink to="/inicio" className="flex shrink-0 items-center" aria-label="Código da Saúde">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={logoSmall}
              alt="Código da Saúde"
              className="h-[58px] w-auto object-contain md:h-[72px]"
            />
          </RouterLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                <span className="text-xl leading-none" aria-hidden="true">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          <RouterLink
            to="/cadastro"
            className="hidden items-center gap-2 rounded-2xl bg-[#075b55] px-5 py-3 font-bold text-white shadow-lg shadow-[#075b55]/20 transition hover:bg-[#064a45] sm:flex"
          >
            <span className="text-xl" aria-hidden="true">◉</span>
            Falar no WhatsApp
          </RouterLink>

          <button
            className="rounded-xl p-2 text-[#29463e] lg:hidden"
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
            className="border-t border-[#d7c39a]/40 bg-white px-4 py-4 lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-semibold ${
                      isActive ? 'bg-[#e4f5f2] text-[#0d655f]' : 'text-[#29463e] hover:bg-[#f2f8f6]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <RouterLink
                to="/cadastro"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#075b55] px-4 py-3 text-center font-bold text-white"
              >
                Falar no WhatsApp
              </RouterLink>
            </div>
          </motion.nav>
        )}
      </header>

      <div className="border-b border-[#0f7771]/20 bg-[#0d8983] text-white">
        <div className="container-max flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs font-medium md:text-sm">
          <span>♢ Compra segura</span>
          <span className="hidden opacity-60 md:inline">|</span>
          <span>▣ Acesso simples</span>
          <span className="hidden opacity-60 md:inline">|</span>
          <span>☆ Informação clara e atendimento humano</span>
        </div>
      </div>
    </>
  )
}

export default Navbar

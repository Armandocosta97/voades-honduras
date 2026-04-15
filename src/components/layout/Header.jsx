import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contacts } from '../../data/contacts.js'
import { navItems } from '../../data/nav.js'
import Button from '../ui/Button.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <NavLink className="site-logo" onClick={closeMenu} to="/">
          VOADES Honduras
        </NavLink>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          aria-label="Primary navigation"
          className={isMenuOpen ? 'site-nav-shell is-open' : 'site-nav-shell'}
          id="mobile-navigation"
        >
          <ul className="site-nav">
            {navItems.map((link) => (
              <li key={link.href}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  end={link.href === '/'}
                  onClick={closeMenu}
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <Button href={contacts.whatsappHref} variant="primary-green">
              WhatsApp
            </Button>
            <Button href={contacts.phoneHref} variant="outline-blue">
              Llamar
            </Button>
          </div>
        </nav>
      </div>

      {isMenuOpen ? (
        <button
          aria-label="Cerrar menu"
          className="menu-backdrop"
          onClick={closeMenu}
          type="button"
        />
      ) : null}
    </header>
  )
}

export default Header

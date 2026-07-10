import { useEffect, useState } from 'react'
import { navLinks, headerCta } from '../data/homepage'
import { useRoute, isActiveLink } from '../router'
import MobileMenu from './MobileMenu'
import './Header.css'

const logo = `${import.meta.env.BASE_URL}assets/img/enhanze-logo.png`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const path = useRoute()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="site-header__inner container container--wide">
          <a href="#/" className="site-header__logo" aria-label="Enhanze Clinic — home">
            <img src={logo} alt="Enhanze — Skin, Body, Health" width={668} height={336} />
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {navLinks.map((link) => {
                const active = isActiveLink(link.href, path)
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={active ? 'is-active' : undefined}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href={headerCta.href} className="btn btn--solid site-header__cta">
              {headerCta.label}
            </a>
            <button
              className="site-header__burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

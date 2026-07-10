import { useEffect, useRef } from 'react'
import { navLinks, headerCta, contact } from '../data/homepage'
import { useRoute, isActiveLink } from '../router'
import './MobileMenu.css'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const path = useRoute()

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="mobile-menu__top">
        <span className="mobile-menu__brand">Enhanze Clinic</span>
        <button
          ref={closeRef}
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
        >
          Close
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      <nav aria-label="Mobile">
        <ul className="mobile-menu__list">
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: open ? `${0.06 + i * 0.04}s` : '0s' }}>
              <a
                href={link.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className={isActiveLink(link.href, path) ? 'is-active' : undefined}
                aria-current={isActiveLink(link.href, path) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-menu__foot">
        <a
          href={headerCta.href}
          className="btn btn--solid"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          {headerCta.label}
        </a>
        <p>
          {contact.clinicName}
          <br />
          {contact.addressLine}
        </p>
      </div>
    </div>
  )
}

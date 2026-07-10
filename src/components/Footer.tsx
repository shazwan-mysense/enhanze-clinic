import { footer, contact, navLinks } from '../data/homepage'
import './Footer.css'

const year = new Date().getFullYear()

const socials = [
  {
    label: 'Instagram', // PLACEHOLDER — link real profile
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook', // PLACEHOLDER — link real profile
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.5h-2.4C11.9 2.5 10.5 4 10.5 6.5v2h-2V12h2v9.5H14V12h2.6l.4-3.5H14z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src={footer.logo}
              alt="Enhanze — Skin, Body, Health"
              width={668}
              height={336}
              loading="lazy"
            />
            <p>{footer.description}</p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__col">
            <h3>Contact</h3>
            <ul className="footer__contact">
              <li>{contact.clinicName}</li>
              <li>{contact.addressLine}</li>
              {/* PLACEHOLDER values below — confirm before launch */}
              <li>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsappNumber}`}>
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>{footer.disclaimer}</p>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {footer.registration}. All rights reserved.
          </p>
          <ul>
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* quick links kept for crawlers/keyboard users on very small screens */}
      <nav className="visually-hidden" aria-label="All pages">
        <ul>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

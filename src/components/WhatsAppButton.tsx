import { useEffect, useState } from 'react'
import { contact } from '../data/homepage'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  // gentle entrance shortly after load
  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 1400)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <a
      className={`wa-button${visible ? ' wa-button--visible' : ''}`}
      href={`https://wa.me/${contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Enhanze Clinic on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 4C9.55 4 4.28 9.27 4.28 15.76c0 2.07.54 4.09 1.57 5.88L4.2 27.8l6.32-1.6a11.72 11.72 0 0 0 5.52 1.38h.01c6.48 0 11.76-5.27 11.76-11.76 0-3.14-1.23-6.1-3.45-8.32A11.7 11.7 0 0 0 16.04 4zm0 21.6h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.75.95 1-3.5-.23-.36a9.77 9.77 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.8-9.79a9.73 9.73 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.79 9.8zm5.38-7.33c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.77.96-.94 1.15-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.49-.5-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.86 1.2 3.06.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4.24-.7.24-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
      <span className="wa-button__label">WhatsApp</span>
    </a>
  )
}

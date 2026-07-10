import { useEffect, useRef } from 'react'
import type { BaItem } from '../data/beforeAfter'
import { ComparisonLabels } from './BeforeAfterGallery'
import './BeforeAfterModal.css'

interface Props {
  item: BaItem
  onClose: () => void
}

export default function BeforeAfterModal({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.classList.add('modal-open')

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      // the close button is the only focusable control — keep focus on it
      if (e.key === 'Tab') {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
      previouslyFocused.current?.focus()
    }
  }, [onClose])

  return (
    <div className="ba-modal" role="dialog" aria-modal="true" aria-label={`${item.title} — enlarged comparison`}>
      <div className="ba-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="ba-modal__dialog">
        <button
          ref={closeRef}
          type="button"
          className="ba-modal__close"
          onClick={onClose}
          aria-label="Close enlarged comparison"
        >
          Close
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="ba-modal__media">
          <img src={item.image} alt={item.alt} width={1264} height={848} />
          <ComparisonLabels />
        </div>
        <div className="ba-modal__body">
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </div>
      </div>
    </div>
  )
}

import type { CSSProperties } from 'react'
import { credibility } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import './CredibilityStrip.css'

export default function CredibilityStrip() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="credibility" aria-label="About the clinic at a glance">
      <div className="container container--wide">
        <div className="credibility__row reveal" ref={ref}>
          {credibility.map((item, i) => (
            <div
              key={item.title}
              className="credibility__item"
              style={{ '--reveal-delay': `${i * 0.08}s` } as CSSProperties}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

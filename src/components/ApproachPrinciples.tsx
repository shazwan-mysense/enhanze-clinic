import type { CSSProperties } from 'react'
import { aboutApproach } from '../data/about'
import { useReveal } from '../hooks/useReveal'
import './ApproachPrinciples.css'

export default function ApproachPrinciples() {
  const textRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="approach" aria-labelledby="approach-heading">
      <div className="container container--wide approach__grid">
        <div className="approach__text reveal" ref={textRef}>
          <p className="eyebrow">{aboutApproach.eyebrow}</p>
          <h2 id="approach-heading">{aboutApproach.heading}</h2>
          {aboutApproach.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="approach__para">
              {p}
            </p>
          ))}
        </div>

        <div className="approach__list reveal" ref={listRef}>
          {aboutApproach.principles.map((principle, i) => (
            <div
              key={principle.title}
              className="approach__item"
              style={{ '--reveal-delay': `${i * 0.08}s` } as CSSProperties}
            >
              <h3>{principle.title}</h3>
              <p>{principle.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

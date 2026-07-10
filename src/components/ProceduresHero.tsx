import { proceduresHero } from '../data/procedures'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './ProceduresHero.css'

export default function ProceduresHero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="p-hero" aria-labelledby="p-hero-heading">
      <div className="p-hero__media">
        <img
          src={proceduresHero.image}
          alt={proceduresHero.imageAlt}
          width={1376}
          height={768}
          {...({ fetchpriority: 'high' } as object)}
        />
      </div>
      <div className="p-hero__inner container container--wide">
        <div className="p-hero__content reveal" ref={ref}>
          <p className="eyebrow">{proceduresHero.eyebrow}</p>
          <h1 id="p-hero-heading">{proceduresHero.heading}</h1>
          <p className="p-hero__desc">{proceduresHero.description}</p>
          <div className="p-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(proceduresHero.primary.targetId)}
            >
              {proceduresHero.primary.label}
            </button>
            <a href={proceduresHero.secondary.href} className="btn btn--outline">
              {proceduresHero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

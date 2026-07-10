import { pricingHero } from '../../data/pricing'
import { useReveal } from '../../hooks/useReveal'
import { scrollToId } from '../../utils/scrollToId'
import './PricingHero.css'

export default function PricingHero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="pr-hero" aria-labelledby="pr-hero-heading">
      <div className="pr-hero__media">
        <img
          src={pricingHero.image}
          alt={pricingHero.imageAlt}
          width={2544}
          height={1456}
          {...({ fetchpriority: 'high' } as object)}
        />
      </div>
      <div className="pr-hero__inner container container--wide">
        <div className="pr-hero__content reveal" ref={ref}>
          <p className="eyebrow">{pricingHero.eyebrow}</p>
          <h1 id="pr-hero-heading">{pricingHero.heading}</h1>
          <p className="pr-hero__desc">{pricingHero.description}</p>
          <div className="pr-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(pricingHero.primary.targetId)}
            >
              {pricingHero.primary.label}
            </button>
            <a href={pricingHero.secondary.href} className="btn btn--outline">
              {pricingHero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

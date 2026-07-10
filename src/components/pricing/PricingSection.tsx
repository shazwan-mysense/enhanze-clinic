import type { PricingCategory } from '../../data/pricing'
import { useReveal } from '../../hooks/useReveal'
import PricingGroup from './PricingGroup'
import './PricingSection.css'

export default function PricingSection({ category }: { category: PricingCategory }) {
  const headRef = useReveal<HTMLDivElement>()
  const imgRef = useReveal<HTMLDivElement>()
  const groupsRef = useReveal<HTMLDivElement>()

  return (
    <section
      className={`psec psec--${category.theme}${category.imageSide === 'left' ? ' psec--img-left' : ''}`}
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="container container--wide">
        <div className={`psec__intro${category.image ? '' : ' psec__intro--no-image'}`}>
          <div className="psec__intro-text reveal" ref={headRef}>
            <p className="eyebrow">{category.eyebrow}</p>
            <h2 id={`${category.id}-heading`}>{category.heading}</h2>
            <p className="psec__desc">{category.description}</p>
          </div>
          {category.image && (
            <div className="reveal-img psec__media" ref={imgRef}>
              <img
                src={category.image}
                alt={category.imageAlt ?? ''}
                loading="lazy"
                decoding="async"
                width={1344}
                height={768}
              />
            </div>
          )}
        </div>

        <div className="psec__groups reveal" ref={groupsRef}>
          {category.groups.map((group, i) => (
            <PricingGroup key={group.title} group={group} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

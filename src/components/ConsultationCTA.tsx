import { consultation } from '../data/homepage'
import type { NavLink } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import './ConsultationCTA.css'

export interface ConsultationContent {
  label: string
  heading: string
  description: string
  primary: NavLink
  secondary: NavLink
  image: string
  imageAlt: string
}

/** Defaults to the homepage consultation content; other pages can
 *  pass their own copy while keeping the identical composition. */
export default function ConsultationCTA({
  content = consultation,
}: {
  content?: ConsultationContent
}) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="consult" aria-labelledby="consult-heading">
      <img
        className="consult__bg"
        src={content.image}
        alt={content.imageAlt}
        loading="lazy"
        decoding="async"
        width={1376}
        height={768}
      />
      <div className="consult__inner container container--wide">
        <div className="consult__content reveal" ref={ref}>
          <p className="eyebrow">{content.label}</p>
          <h2 id="consult-heading">{content.heading}</h2>
          <p className="consult__desc">{content.description}</p>
          <div className="consult__actions">
            <a href={content.primary.href} className="btn btn--solid">
              {content.primary.label}
            </a>
            <a href={content.secondary.href} className="btn btn--outline">
              {content.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

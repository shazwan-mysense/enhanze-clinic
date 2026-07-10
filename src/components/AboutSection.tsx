import { about } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import './AboutSection.css'

export default function AboutSection() {
  const textRef = useReveal<HTMLDivElement>()
  const imgRef = useReveal<HTMLDivElement>()
  const factsRef = useReveal<HTMLDivElement>()

  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container container--wide about__grid">
        <div className="about__text reveal" ref={textRef}>
          <p className="eyebrow">{about.label}</p>
          <h2 id="about-heading">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="about__para">
              {p}
            </p>
          ))}
          <a href={about.cta.href} className="text-link">
            {about.cta.label}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="about__media">
          <div className="about__year" aria-hidden="true">
            2001
          </div>
          <div className="reveal-img about__frame" ref={imgRef}>
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              decoding="async"
              width={1206}
              height={819}
            />
          </div>
          <div className="about__facts reveal" ref={factsRef}>
            {about.facts.map((fact) => (
              <div key={fact.value} className="about__fact">
                <span className="about__fact-value">{fact.value}</span>
                <span className="about__fact-detail">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

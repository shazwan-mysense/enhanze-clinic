import type { CSSProperties } from 'react'
import { aboutDoctor } from '../data/about'
import { useReveal } from '../hooks/useReveal'
import './DoctorProfileFeature.css'

export default function DoctorProfileFeature() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()
  const credsRef = useReveal<HTMLUListElement>()

  return (
    <section className="docprofile" id="about-doctor" aria-labelledby="docprofile-heading">
      <div className="container container--wide docprofile__grid">
        <div className="docprofile__media">
          <div className="reveal-img docprofile__portrait" ref={imgRef}>
            <img
              src={aboutDoctor.image}
              alt={aboutDoctor.imageAlt}
              loading="lazy"
              decoding="async"
              width={1500}
              height={2258}
            />
          </div>
          <p className="docprofile__quote" aria-label="Doctor’s philosophy">
            “{aboutDoctor.quote}”
          </p>
        </div>

        <div className="docprofile__text reveal" ref={textRef}>
          <p className="eyebrow">{aboutDoctor.eyebrow}</p>
          <h2 id="docprofile-heading">{aboutDoctor.heading}</h2>

          <p className="docprofile__name">{aboutDoctor.name}</p>
          <p className="docprofile__role">{aboutDoctor.title}</p>
          <p className="docprofile__experience">{aboutDoctor.experienceLine}</p>

          <ul className="docprofile__creds" ref={credsRef} aria-label="Credentials">
            {aboutDoctor.credentials.map((credential, i) => (
              <li
                key={credential}
                className="reveal"
                style={{ '--reveal-delay': `${i * 0.07}s` } as CSSProperties}
              >
                {credential}
              </li>
            ))}
          </ul>

          {aboutDoctor.bio.map((p) => (
            <p key={p.slice(0, 24)} className="docprofile__para">
              {p}
            </p>
          ))}

          <a href={aboutDoctor.cta.href} className="text-link docprofile__cta">
            {aboutDoctor.cta.label}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

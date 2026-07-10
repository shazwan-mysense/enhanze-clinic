import { doctor } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import './DoctorFeature.css'

export default function DoctorFeature() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section className="doctor" aria-labelledby="doctor-heading">
      <div className="container container--wide doctor__grid">
        <div className="doctor__media">
          <div className="reveal-img doctor__portrait" ref={imgRef}>
            <img
              src={doctor.image}
              alt={doctor.imageAlt}
              loading="lazy"
              decoding="async"
              width={1500}
              height={2258}
            />
          </div>
          <span className="doctor__rule" aria-hidden="true" />
        </div>

        <div className="doctor__text reveal" ref={textRef}>
          <p className="eyebrow">{doctor.label}</p>
          <h2 id="doctor-heading">{doctor.heading}</h2>

          <p className="doctor__name">{doctor.name}</p>
          <p className="doctor__experience">{doctor.experienceLine}</p>

          {doctor.bio.map((p) => (
            <p key={p.slice(0, 24)} className="doctor__para">
              {p}
            </p>
          ))}

          <a href={doctor.cta.href} className="btn btn--outline-light doctor__cta">
            {doctor.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

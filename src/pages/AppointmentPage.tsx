import { useEffect } from 'react'
import AppointmentForm from '../components/AppointmentForm'
import ConsultationProcess from '../components/ConsultationProcess'
import PricingFAQ from '../components/pricing/PricingFAQ'
import {
  appointmentHero,
  appointmentIntro,
  appointmentForm,
  appointmentGuidance,
  appointmentProcess,
  appointmentFaq,
} from '../data/appointment'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './AppointmentPage.css'

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function AppointmentHero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="ap-hero" aria-labelledby="ap-hero-heading">
      <div className="ap-hero__media">
        <img
          src={appointmentHero.image}
          alt={appointmentHero.imageAlt}
          width={1344}
          height={752}
          {...({ fetchpriority: 'high' } as object)}
        />
      </div>
      <div className="ap-hero__inner container container--wide">
        <div className="ap-hero__content reveal" ref={ref}>
          <p className="eyebrow">{appointmentHero.eyebrow}</p>
          <h1 id="ap-hero-heading">{appointmentHero.heading}</h1>
          <p className="ap-hero__desc">{appointmentHero.description}</p>
          <div className="ap-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(appointmentHero.primary.targetId)}
            >
              {appointmentHero.primary.label}
            </button>
            <a
              href={appointmentHero.secondary.href}
              className="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp the clinic (opens in a new tab)"
            >
              {appointmentHero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

function AppointmentIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="ap-intro" aria-labelledby="ap-intro-heading">
      <div className="container container--wide ap-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{appointmentIntro.eyebrow}</p>
          <h2 id="ap-intro-heading">{appointmentIntro.heading}</h2>
        </div>
        <div className="ap-intro__copy reveal" ref={rightRef}>
          <p>{appointmentIntro.body}</p>
          <p className="ap-intro__statement">{appointmentIntro.statement}</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Form section                                                        */
/* ------------------------------------------------------------------ */

function AppointmentFormSection() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section className="ap-form" id="appointment-form" aria-labelledby="ap-form-heading">
      <div className="container container--wide ap-form__grid">
        <div className="ap-form__head reveal" ref={headRef}>
          <p className="eyebrow">{appointmentForm.eyebrow}</p>
          <h2 id="ap-form-heading">{appointmentForm.heading}</h2>
          <p className="ap-form__intro">{appointmentForm.intro}</p>
        </div>
        <AppointmentForm />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Consultation guidance                                               */
/* ------------------------------------------------------------------ */

function ConsultationGuidance() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section className="ap-guide" aria-labelledby="ap-guide-heading">
      <div className="container container--wide ap-guide__grid">
        <div className="ap-guide__media">
          <div className="reveal-img ap-guide__frame" ref={imgRef}>
            <img
              src={appointmentGuidance.image}
              alt={appointmentGuidance.imageAlt}
              loading="lazy"
              decoding="async"
              width={1024}
              height={768}
            />
          </div>
          <span className="ap-guide__rule" aria-hidden="true" />
        </div>
        <div className="ap-guide__text reveal" ref={textRef}>
          <p className="eyebrow">{appointmentGuidance.eyebrow}</p>
          <h2 id="ap-guide-heading">{appointmentGuidance.heading}</h2>
          <p className="ap-guide__body">{appointmentGuidance.body}</p>
          <ul className="ap-guide__list">
            {appointmentGuidance.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AppointmentPage() {
  useEffect(() => {
    document.title = 'Appointments — Enhanze Clinic'
  }, [])

  return (
    <>
      <AppointmentHero />
      <AppointmentIntro />
      <AppointmentFormSection />
      <ConsultationGuidance />
      <ConsultationProcess content={appointmentProcess} headingId="ap-process-heading" />
      <PricingFAQ content={appointmentFaq} headingId="ap-faq-heading" />
    </>
  )
}

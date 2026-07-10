import { useEffect } from 'react'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import { ComparisonLabels } from '../components/BeforeAfterGallery'
import ConsultationCTA from '../components/ConsultationCTA'
import SectionHeading from '../components/SectionHeading'
import {
  baHero,
  baIntro,
  baGuidance,
  baTestimonials,
  baCta,
} from '../data/beforeAfter'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './BeforeAfterPage.css'

/* ------------------------------------------------------------------ */
/* Hero — split editorial panel with the comparison visual             */
/* ------------------------------------------------------------------ */

function BaHero() {
  const textRef = useReveal<HTMLDivElement>()
  const imgRef = useReveal<HTMLDivElement>()

  return (
    <section className="ba-hero" aria-labelledby="ba-hero-heading">
      <div className="container container--wide ba-hero__grid">
        <div className="ba-hero__content reveal" ref={textRef}>
          <p className="eyebrow">{baHero.eyebrow}</p>
          <h1 id="ba-hero-heading">{baHero.heading}</h1>
          <p className="ba-hero__desc">{baHero.description}</p>
          <div className="ba-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(baHero.primary.targetId)}
            >
              {baHero.primary.label}
            </button>
            <a href={baHero.secondary.href} className="btn btn--outline">
              {baHero.secondary.label}
            </a>
          </div>
        </div>

        <div className="ba-hero__media">
          <div className="reveal-img ba-hero__frame" ref={imgRef}>
            <div className="ba-hero__img-wrap">
              <img
                src={baHero.image}
                alt={baHero.imageAlt}
                width={1344}
                height={752}
                {...({ fetchpriority: 'high' } as object)}
              />
              <ComparisonLabels />
            </div>
          </div>
          <span className="ba-hero__rule" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Introduction + prototype disclaimer                                 */
/* ------------------------------------------------------------------ */

function BaIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="ba-intro" aria-labelledby="ba-intro-heading">
      <div className="container container--wide ba-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{baIntro.eyebrow}</p>
          <h2 id="ba-intro-heading">{baIntro.heading}</h2>
        </div>
        <div className="ba-intro__copy reveal" ref={rightRef}>
          <p>{baIntro.body}</p>
          <p>{baIntro.supporting}</p>
          <p className="ba-intro__disclaimer">{baIntro.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Guidance                                                            */
/* ------------------------------------------------------------------ */

function BaGuidance() {
  const textRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section className="ba-guidance" aria-labelledby="ba-guidance-heading">
      <div className="container container--wide ba-guidance__grid">
        <div className="reveal" ref={textRef}>
          <p className="eyebrow">{baGuidance.eyebrow}</p>
          <h2 id="ba-guidance-heading">{baGuidance.heading}</h2>
          <p className="ba-guidance__body">{baGuidance.body}</p>
        </div>
        <ul className="ba-guidance__list reveal" ref={listRef}>
          {baGuidance.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Testimonials — verbatim from the current site                       */
/* ------------------------------------------------------------------ */

function BaTestimonials() {
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="ba-quotes" aria-labelledby="ba-quotes-heading">
      <div className="container container--wide">
        <SectionHeading
          id="ba-quotes-heading"
          label={baTestimonials.eyebrow}
          heading={baTestimonials.heading}
          description={baTestimonials.note}
          dark
        />
        <div className="ba-quotes__grid reveal" ref={listRef}>
          {baTestimonials.items.map((t) => (
            <figure key={t.name} className="ba-quote">
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function BeforeAfterPage() {
  useEffect(() => {
    document.title = 'Before & After — Enhanze Clinic'
  }, [])

  return (
    <>
      <BaHero />
      <BaIntro />
      <section className="ba-gallery-section" id="ba-gallery" aria-label="Comparison gallery">
        <div className="container container--wide">
          <BeforeAfterGallery />
        </div>
      </section>
      <BaGuidance />
      <BaTestimonials />
      <ConsultationCTA content={baCta} />
    </>
  )
}

import { useEffect } from 'react'
import AboutTimeline from '../components/AboutTimeline'
import ApproachPrinciples from '../components/ApproachPrinciples'
import DoctorProfileFeature from '../components/DoctorProfileFeature'
import ConsultationCTA from '../components/ConsultationCTA'
import {
  aboutHero,
  aboutIntro,
  aboutStory,
  aboutExperience,
  aboutCta,
} from '../data/about'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './AboutPage.css'

/* ------------------------------------------------------------------ */
/* Hero — split editorial panel (the clinic photo is 1206px wide, so   */
/* it is framed rather than stretched full-bleed)                      */
/* ------------------------------------------------------------------ */

function AboutHero() {
  const textRef = useReveal<HTMLDivElement>()
  const imgRef = useReveal<HTMLDivElement>()

  return (
    <section className="a-hero" aria-labelledby="a-hero-heading">
      <div className="container container--wide a-hero__grid">
        <div className="a-hero__content reveal" ref={textRef}>
          <p className="eyebrow">{aboutHero.eyebrow}</p>
          <h1 id="a-hero-heading">{aboutHero.heading}</h1>
          <p className="a-hero__desc">{aboutHero.description}</p>
          <div className="a-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(aboutHero.primary.targetId)}
            >
              {aboutHero.primary.label}
            </button>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => scrollToId(aboutHero.secondary.targetId)}
            >
              {aboutHero.secondary.label}
            </button>
          </div>
        </div>

        <div className="a-hero__media">
          <div className="reveal-img a-hero__frame" ref={imgRef}>
            <img
              src={aboutHero.image}
              alt={aboutHero.imageAlt}
              width={1206}
              height={819}
              {...({ fetchpriority: 'high' } as object)}
            />
          </div>
          <span className="a-hero__rule" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Company introduction                                                */
/* ------------------------------------------------------------------ */

function AboutIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="a-intro" id="about-intro" aria-labelledby="a-intro-heading">
      <div className="container container--wide a-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{aboutIntro.eyebrow}</p>
          <h2 id="a-intro-heading">{aboutIntro.heading}</h2>
          <p className="a-intro__fact">{aboutIntro.fact}</p>
        </div>
        <div className="a-intro__copy reveal" ref={rightRef}>
          {aboutIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Clinic story                                                        */
/* ------------------------------------------------------------------ */

function AboutStory() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section className="a-story" aria-labelledby="a-story-heading">
      <div className="container container--wide a-story__grid">
        <div className="a-story__media">
          <div className="reveal-img a-story__frame" ref={imgRef}>
            <img
              src={aboutStory.image}
              alt={aboutStory.imageAlt}
              loading="lazy"
              decoding="async"
              width={2400}
              height={1600}
            />
          </div>
          <span className="a-story__rule" aria-hidden="true" />
        </div>
        <div className="a-story__text reveal" ref={textRef}>
          <p className="eyebrow">{aboutStory.eyebrow}</p>
          <h2 id="a-story-heading">{aboutStory.heading}</h2>
          {aboutStory.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="a-story__para">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Clinic experience                                                   */
/* ------------------------------------------------------------------ */

function AboutExperience() {
  const textRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section className="a-exp" aria-labelledby="a-exp-heading">
      <div className="container container--wide a-exp__grid">
        <div className="reveal" ref={textRef}>
          <p className="eyebrow">{aboutExperience.eyebrow}</p>
          <h2 id="a-exp-heading">{aboutExperience.heading}</h2>
          <p className="a-exp__body">{aboutExperience.body}</p>
        </div>
        <ul className="a-exp__list reveal" ref={listRef}>
          {aboutExperience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us — Enhanze Clinic'
  }, [])

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutTimeline />
      <ApproachPrinciples />
      <AboutExperience />
      <DoctorProfileFeature />
      <ConsultationCTA content={aboutCta} />
    </>
  )
}

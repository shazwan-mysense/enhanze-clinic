import { useEffect } from 'react'
import ConsultationCTA from '../components/ConsultationCTA'
import PricingFAQ from '../components/pricing/PricingFAQ'
import type { TreatmentPageData } from '../data/treatments'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './TreatmentPage.css'

function Reveal({ children, className = 'reveal' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function TreatmentPage({ data }: { data: TreatmentPageData }) {
  useEffect(() => {
    document.title = data.docTitle
  }, [data])

  return (
    <>
      {/* hero */}
      <section className="tp-hero" aria-labelledby="tp-hero-heading">
        <div className="tp-hero__media">
          <img
            src={data.hero.image}
            alt={data.hero.imageAlt}
            width={1344}
            height={768}
            style={{ objectPosition: data.hero.focus }}
            {...({ fetchpriority: 'high' } as object)}
          />
        </div>
        <div className="tp-hero__inner container container--wide">
          <Reveal>
            <p className="eyebrow">{data.hero.eyebrow}</p>
            <h1 id="tp-hero-heading">{data.hero.heading}</h1>
            <p className="tp-hero__desc">{data.hero.description}</p>
            <div className="tp-hero__actions">
              <a href="#/appointment" className="btn btn--solid">
                Book a Consultation
              </a>
              <button type="button" className="btn btn--outline" onClick={() => scrollToId('tp-intro')}>
                Learn More
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* intro */}
      <section className="tp-intro" id="tp-intro" aria-labelledby="tp-intro-heading">
        <div className="container container--wide tp-grid">
          <Reveal>
            <p className="eyebrow">{data.intro.eyebrow}</p>
            <h2 id="tp-intro-heading">{data.intro.heading}</h2>
          </Reveal>
          <Reveal className="reveal tp-copy">
            {data.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* highlights */}
      <section className="tp-highlights" aria-labelledby="tp-hl-heading">
        <div className="container container--wide tp-grid tp-grid--start">
          <Reveal>
            <p className="eyebrow">{data.highlights.eyebrow}</p>
            <h2 id="tp-hl-heading">{data.highlights.heading}</h2>
          </Reveal>
          <Reveal className="reveal tp-hl-list">
            {data.highlights.items.map((item) => (
              <div key={item.title} className="tp-hl-item">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* stats */}
      <section className="tp-stats" aria-label="Key figures">
        <div className="container container--wide">
          <Reveal className="reveal tp-stats__row">
            {data.stats.map((s) => (
              <div key={s.label} className="tp-stat">
                <span className="tp-stat__value">{s.value}</span>
                <span className="tp-stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* areas */}
      <section className="tp-areas" aria-labelledby="tp-areas-heading">
        <div className="container container--wide tp-grid tp-grid--start">
          <Reveal>
            <p className="eyebrow">{data.areas.eyebrow}</p>
            <h2 id="tp-areas-heading">{data.areas.heading}</h2>
            <p className="tp-muted">{data.areas.description}</p>
          </Reveal>
          <Reveal className="reveal tp-areas__groups">
            {data.areas.groups.map((g) => (
              <div key={g.title} className="tp-areas__group">
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* comparison */}
      <section className="tp-compare" aria-labelledby="tp-cmp-heading">
        <div className="container container--wide">
          <Reveal>
            <p className="eyebrow">{data.comparison.eyebrow}</p>
            <h2 id="tp-cmp-heading">{data.comparison.heading}</h2>
            <p className="tp-muted tp-compare__note">{data.comparison.note}</p>
          </Reveal>
          <Reveal className="reveal tp-compare__wrap">
            <table className="tp-compare__table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{data.comparison.columns[0]}</th>
                  <th scope="col">{data.comparison.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.comparison.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>{r.a}</td>
                    <td>{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* steps */}
      <section className="tp-steps" aria-labelledby="tp-steps-heading">
        <div className="container container--wide">
          <Reveal>
            <p className="eyebrow">{data.steps.eyebrow}</p>
            <h2 id="tp-steps-heading">{data.steps.heading}</h2>
          </Reveal>
          <Reveal className="reveal tp-steps__row">
            {data.steps.items.map((s, i) => (
              <div key={s.name} className="tp-step">
                <span className="tp-step__count">Step {i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <PricingFAQ content={data.faq} headingId={`tp-faq-${data.slug}`} />
      <ConsultationCTA content={data.cta} />
    </>
  )
}

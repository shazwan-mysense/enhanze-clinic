import { useEffect } from 'react'
import type { ReactNode } from 'react'
import ConsultationCTA from '../components/ConsultationCTA'
import PricingFAQ from '../components/pricing/PricingFAQ'
import {
  categoryImage,
  categoryImageAlt,
  priceNote,
  serviceBySlug,
  serviceCta,
  serviceHref,
  serviceProcess,
} from '../data/services'
import type { ServicePageData } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './ServicePage.css'

function Reveal({ children, className = 'reveal' }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  useEffect(() => {
    document.title = data.docTitle
  }, [data])

  const hasPrices = data.treatments.items.length > 0
  const related = data.related
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is ServicePageData => Boolean(s))

  return (
    <>
      {/* hero */}
      <section className="sp-hero" aria-labelledby="sp-hero-heading">
        <div className="sp-hero__media">
          <img
            src={categoryImage[data.category]}
            alt={categoryImageAlt[data.category]}
            width={1344}
            height={768}
            {...({ fetchpriority: 'high' } as object)}
          />
        </div>
        <div className="sp-hero__inner container container--wide">
          <Reveal>
            <nav className="sp-crumbs" aria-label="Breadcrumb">
              <a href="#/procedures">Procedures</a>
              <span aria-hidden="true">/</span>
              <span>{data.eyebrow}</span>
            </nav>
            <p className="eyebrow">{data.eyebrow}</p>
            <h1 id="sp-hero-heading">{data.label}</h1>
            <p className="sp-hero__desc">{data.heroDescription}</p>
            <div className="sp-hero__actions">
              <a href="#/appointment" className="btn btn--solid">
                Book a Consultation
              </a>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => scrollToId('sp-treatments')}
              >
                {hasPrices ? 'View Treatment Options' : 'Ask the Clinic'}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* overview */}
      <section className="sp-overview" aria-labelledby="sp-overview-heading">
        <div className="container container--wide sp-grid">
          <Reveal>
            <p className="eyebrow">{data.overview.eyebrow}</p>
            <h2 id="sp-overview-heading">{data.overview.heading}</h2>
          </Reveal>
          <Reveal className="reveal sp-copy">
            {data.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* contributing factors */}
      <section className="sp-factors" aria-labelledby="sp-factors-heading">
        <div className="container container--wide sp-grid sp-grid--start">
          <Reveal>
            <p className="eyebrow">{data.factors.eyebrow}</p>
            <h2 id="sp-factors-heading">{data.factors.heading}</h2>
          </Reveal>
          <Reveal className="reveal sp-factor-list">
            {data.factors.items.map((item) => (
              <div key={item.title} className="sp-factor">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* treatments offered */}
      <section className="sp-treatments" id="sp-treatments" aria-labelledby="sp-treatments-heading">
        <div className="container container--wide">
          <Reveal>
            <p className="eyebrow">{data.treatments.eyebrow}</p>
            <h2 id="sp-treatments-heading">{data.treatments.heading}</h2>
            <p className="sp-muted">{data.treatments.description}</p>
          </Reveal>

          {hasPrices ? (
            <Reveal className="reveal sp-price-wrap">
              <ul className="sp-prices">
                {data.treatments.items.map((row) => (
                  <li key={row.name}>
                    <span className="sp-prices__name">{row.name}</span>
                    <span className="sp-prices__dots" aria-hidden="true" />
                    <span className="sp-prices__price">{row.price}</span>
                  </li>
                ))}
              </ul>
              <p className="sp-price-note">{priceNote}</p>
              <a href="#/price" className="sp-price-link">
                View the full treatment price list
                <span aria-hidden="true"> →</span>
              </a>
            </Reveal>
          ) : (
            <Reveal className="reveal sp-enquire">
              <p>
                Treatment options for this concern are confirmed during consultation. The clinic
                can advise what is currently available and suitable for you.
              </p>
              <div className="sp-enquire__actions">
                <a href="#/appointment" className="btn btn--solid">
                  Book a Consultation
                </a>
                <a href="#/contact" className="btn btn--outline">
                  Contact the Clinic
                </a>
              </div>
            </Reveal>
          )}

          {data.signature && (
            <Reveal className="reveal sp-signature">
              <p className="sp-signature__label">Signature treatments often discussed for this concern</p>
              <div className="sp-signature__links">
                {data.signature.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.name}
                    <span aria-hidden="true"> →</span>
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* what to expect */}
      <section className="sp-process" aria-labelledby="sp-process-heading">
        <div className="container container--wide">
          <Reveal>
            <p className="eyebrow">{serviceProcess.eyebrow}</p>
            <h2 id="sp-process-heading">{serviceProcess.heading}</h2>
          </Reveal>
          <Reveal className="reveal sp-steps">
            {serviceProcess.steps.map((step, i) => (
              <div key={step.name} className="sp-step">
                <span className="sp-step__count">Step {i + 1}</span>
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <PricingFAQ content={data.faq} headingId={`sp-faq-${data.slug}`} />

      {/* related concerns */}
      {related.length > 0 && (
        <section className="sp-related" aria-labelledby="sp-related-heading">
          <div className="container container--wide">
            <Reveal>
              <p className="eyebrow">Explore More</p>
              <h2 id="sp-related-heading">Related Concerns</h2>
            </Reveal>
            <Reveal className="reveal sp-related__grid">
              {related.map((item) => (
                <a key={item.slug} className="sp-related__card" href={serviceHref(item.slug)}>
                  <span className="sp-related__cat">{item.eyebrow}</span>
                  <span className="sp-related__name">{item.label}</span>
                  <span className="sp-related__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <ConsultationCTA content={serviceCta} />
    </>
  )
}

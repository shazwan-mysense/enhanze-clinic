import { useEffect } from 'react'
import GeneralEnquiryForm from '../components/GeneralEnquiryForm'
import PricingFAQ from '../components/pricing/PricingFAQ'
import { contact, whatsappLink, emailLink, mapsLink, mapsEmbedSrc } from '../data/contact'
import {
  contactHero,
  contactMethods,
  enquirySection,
  visitClinic,
  mapTitle,
  contactFaq,
} from '../data/contactPage'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './ContactPage.css'

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function ContactHero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="c-hero" aria-labelledby="c-hero-heading">
      <div className="c-hero__media">
        <img
          src={contactHero.image}
          alt={contactHero.imageAlt}
          width={1344}
          height={752}
          {...({ fetchpriority: 'high' } as object)}
        />
      </div>
      <div className="c-hero__inner container container--wide">
        <div className="c-hero__content reveal" ref={ref}>
          <p className="eyebrow">{contactHero.eyebrow}</p>
          <h1 id="c-hero-heading">{contactHero.heading}</h1>
          <p className="c-hero__desc">{contactHero.description}</p>
          <div className="c-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(contactHero.primary.targetId)}
            >
              {contactHero.primary.label}
            </button>
            <a
              href={contactHero.secondary.href}
              className="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp the clinic (opens in a new tab)"
            >
              {contactHero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Direct contact methods                                              */
/* ------------------------------------------------------------------ */

function ContactMethods() {
  const ref = useReveal<HTMLUListElement>()

  return (
    <section className="c-methods" aria-label="Direct contact methods">
      <div className="container container--wide">
        <ul className="c-methods__row reveal" ref={ref}>
          {contactMethods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                className="c-methods__item"
                {...(method.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="c-methods__label">{method.label}</span>
                <span className="c-methods__value">
                  {method.value}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Enquiry section — clinic info + form                                */
/* ------------------------------------------------------------------ */

function EnquirySection() {
  const infoRef = useReveal<HTMLDivElement>()

  return (
    <section className="c-enquiry" id="enquiry-form" aria-labelledby="c-enquiry-heading">
      <div className="container container--wide c-enquiry__grid">
        <div className="c-enquiry__info reveal" ref={infoRef}>
          <p className="eyebrow">{enquirySection.eyebrow}</p>
          <h2 id="c-enquiry-heading">{enquirySection.heading}</h2>
          <p className="c-enquiry__intro">{enquirySection.intro}</p>

          <address className="c-enquiry__details">
            <p className="c-enquiry__clinic">{contact.clinicName}</p>
            <p className="c-enquiry__address">
              {contact.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <ul>
              <li>
                <span>Telephone</span>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <span>Hotline</span>
                <a href={contact.hotlineHref}>{contact.hotline}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <span>Email</span>
                <a href={emailLink}>{contact.email}</a>
              </li>
            </ul>
          </address>

          <div className="c-enquiry__appointment">
            <p>{enquirySection.appointmentNote}</p>
            <a href={enquirySection.appointmentLink.href} className="btn btn--outline">
              {enquirySection.appointmentLink.label}
            </a>
          </div>
        </div>

        <GeneralEnquiryForm />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Visit the clinic + map                                              */
/* ------------------------------------------------------------------ */

function VisitClinic() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()
  const mapRef = useReveal<HTMLDivElement>()

  return (
    <section className="c-visit" aria-labelledby="c-visit-heading">
      <div className="container container--wide">
        <div className="c-visit__grid">
          <div className="c-visit__media">
            <div className="reveal-img c-visit__frame" ref={imgRef}>
              <img
                src={visitClinic.image}
                alt={visitClinic.imageAlt}
                loading="lazy"
                decoding="async"
                width={1206}
                height={819}
              />
            </div>
            <span className="c-visit__rule" aria-hidden="true" />
          </div>
          <div className="c-visit__text reveal" ref={textRef}>
            <p className="eyebrow">{visitClinic.eyebrow}</p>
            <h2 id="c-visit-heading">{visitClinic.heading}</h2>
            <p className="c-visit__body">{visitClinic.body}</p>
            <p className="c-visit__address">
              <strong>{contact.clinicName}</strong>
              {contact.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <div className="c-visit__actions">
              <a
                href={mapsLink}
                className="btn btn--solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
              <a href={contact.phoneHref} className="btn btn--outline">
                Call the Clinic
              </a>
              <a href="#/appointment" className="btn btn--outline">
                Request an Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="c-visit__map reveal" ref={mapRef}>
          <iframe
            src={mapsEmbedSrc}
            title={mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us — Enhanze Clinic'
  }, [])

  return (
    <>
      <ContactHero />
      <ContactMethods />
      <EnquirySection />
      <VisitClinic />
      <PricingFAQ content={contactFaq} headingId="c-faq-heading" />
    </>
  )
}

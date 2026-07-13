import { useEffect } from 'react'
import ProceduresHero from '../components/ProceduresHero'
import ProcedureCategoryFeature from '../components/ProcedureCategoryFeature'
import TreatmentDirectory from '../components/TreatmentDirectory'
import ConsultationProcess from '../components/ConsultationProcess'
import ConsultationCTA from '../components/ConsultationCTA'
import { proceduresIntro, proceduresCta } from '../data/procedures'
import { signatureTreatments } from '../data/treatments'
import { useReveal } from '../hooks/useReveal'
import './ProceduresPage.css'

function ProceduresIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="p-intro" aria-labelledby="p-intro-heading">
      <div className="container container--wide p-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{proceduresIntro.eyebrow}</p>
          <h2 id="p-intro-heading">{proceduresIntro.heading}</h2>
        </div>
        <div className="p-intro__copy reveal" ref={rightRef}>
          <p>{proceduresIntro.body}</p>
          <p className="p-intro__statement">{proceduresIntro.statement}</p>
        </div>
      </div>
    </section>
  )
}

function SignatureTreatments() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="p-signature" aria-labelledby="p-sig-heading">
      <div className="container container--wide">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow">{signatureTreatments.eyebrow}</p>
          <h2 id="p-sig-heading">{signatureTreatments.heading}</h2>
        </div>
        <div className="p-signature__grid reveal" ref={gridRef}>
          {signatureTreatments.items.map((t) => (
            <a key={t.name} href={t.href} className="p-signature__card">
              <div className="p-signature__media">
                <img src={t.image} alt={t.alt} loading="lazy" decoding="async" width={1344} height={768} />
              </div>
              <div className="p-signature__body">
                <h3>{t.name}</h3>
                <p className="p-signature__tagline">{t.tagline}</p>
                <p>{t.description}</p>
                <span className="p-signature__cta">
                  Discover {t.name}
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProceduresPage() {
  useEffect(() => {
    document.title = 'Procedures — Enhanze Clinic'
  }, [])

  return (
    <>
      <ProceduresHero />
      <ProceduresIntro />
      <section
        className="p-categories"
        id="areas-of-care"
        aria-label="Treatment categories"
      >
        <div className="container container--wide">
          <ProcedureCategoryFeature />
        </div>
      </section>
      <SignatureTreatments />
      <TreatmentDirectory />
      <ConsultationProcess />
      <ConsultationCTA content={proceduresCta} />
    </>
  )
}

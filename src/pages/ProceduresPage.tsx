import { useEffect } from 'react'
import ProceduresHero from '../components/ProceduresHero'
import ProcedureCategoryFeature from '../components/ProcedureCategoryFeature'
import TreatmentDirectory from '../components/TreatmentDirectory'
import ConsultationProcess from '../components/ConsultationProcess'
import ConsultationCTA from '../components/ConsultationCTA'
import { proceduresIntro, proceduresCta } from '../data/procedures'
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
      <TreatmentDirectory />
      <ConsultationProcess />
      <ConsultationCTA content={proceduresCta} />
    </>
  )
}

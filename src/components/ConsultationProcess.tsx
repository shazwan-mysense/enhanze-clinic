import { consultationProcess } from '../data/procedures'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import './ConsultationProcess.css'

const STEP_WORDS = ['Step One', 'Step Two', 'Step Three', 'Step Four']

export interface ProcessContent {
  eyebrow: string
  heading: string
  steps: { name: string; detail: string }[]
}

/** Defaults to the Procedures-page content; other pages can pass
 *  their own steps while keeping the identical composition. */
export default function ConsultationProcess({
  content = consultationProcess,
  headingId = 'process-heading',
}: {
  content?: ProcessContent
  headingId?: string
}) {
  const ref = useReveal<HTMLOListElement>()

  return (
    <section className="process" aria-labelledby={headingId}>
      <div className="container container--wide">
        <SectionHeading id={headingId} label={content.eyebrow} heading={content.heading} />
        <ol className="process__steps reveal" ref={ref}>
          {content.steps.map((step, i) => (
            <li key={step.name} className="process__step">
              <span className="process__count">{STEP_WORDS[i]}</span>
              <h3>{step.name}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { useId, useState } from 'react'
import { pricingFaq } from '../../data/pricing'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../SectionHeading'
import './PricingFAQ.css'

export interface FaqContent {
  eyebrow: string
  heading: string
  items: { question: string; answer: string }[]
}

/** Accessible FAQ accordion. Defaults to the Price-page content;
 *  other pages can pass their own items with the same styling. */
export default function PricingFAQ({
  content = pricingFaq,
  headingId = 'pfaq-heading',
}: {
  content?: FaqContent
  headingId?: string
}) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="pfaq" aria-labelledby={headingId}>
      <div className="container container--wide">
        <SectionHeading id={headingId} label={content.eyebrow} heading={content.heading} />
        <div className="pfaq__list reveal" ref={listRef}>
          {content.items.map((item, i) => {
            const open = openIndex === i
            const panelId = `${baseId}-panel-${i}`
            return (
              <div key={item.question} className={`pfaq__item${open ? ' pfaq__item--open' : ''}`}>
                <button
                  type="button"
                  className="pfaq__question"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.question}</span>
                  <span className="pfaq__icon" aria-hidden="true" />
                </button>
                <div id={panelId} className="pfaq__panel">
                  <div className="pfaq__panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

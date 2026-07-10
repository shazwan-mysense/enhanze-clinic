import { useEffect, useMemo, useState } from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingCategoryNav from '../components/pricing/PricingCategoryNav'
import PricingSection from '../components/pricing/PricingSection'
import PricingGroup from '../components/pricing/PricingGroup'
import PricingSearch from '../components/pricing/PricingSearch'
import PricingFAQ from '../components/pricing/PricingFAQ'
import ConsultationCTA from '../components/ConsultationCTA'
import {
  pricingIntro,
  pricingCategories,
  pricingNotes,
  pricingCta,
} from '../data/pricing'
import { useReveal } from '../hooks/useReveal'
import './PricePage.css'

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

function PricingIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="pr-intro" aria-labelledby="pr-intro-heading">
      <div className="container container--wide pr-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{pricingIntro.eyebrow}</p>
          <h2 id="pr-intro-heading">{pricingIntro.heading}</h2>
        </div>
        <div className="pr-intro__copy reveal" ref={rightRef}>
          <p>{pricingIntro.body}</p>
          <p className="pr-intro__statement">{pricingIntro.statement}</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Important pricing information                                       */
/* ------------------------------------------------------------------ */

function PricingNotice() {
  const headRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section className="pr-notes" aria-labelledby="pr-notes-heading">
      <div className="container container--wide pr-notes__grid">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow">{pricingNotes.eyebrow}</p>
          <h2 id="pr-notes-heading">{pricingNotes.heading}</h2>
        </div>
        <ul className="pr-notes__list reveal" ref={listRef}>
          {pricingNotes.notes.map((note) => (
            <li key={note.slice(0, 24)}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PricePage() {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState<string | null>(pricingCategories[0].id)

  const searchActive = query.trim().length > 0

  useEffect(() => {
    document.title = 'Treatment Pricing — Enhanze Clinic'
  }, [])

  /* scroll-spy for the category navigation */
  useEffect(() => {
    if (searchActive) return
    const onScroll = () => {
      const marker = window.scrollY + 150
      let current = pricingCategories[0].id
      for (const category of pricingCategories) {
        const el = document.getElementById(category.id)
        if (el && el.offsetTop <= marker) current = category.id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [searchActive])

  /* local search over group titles and treatment names */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return pricingCategories
      .map((category) => ({
        category,
        groups: category.groups
          .map((group) =>
            group.title.toLowerCase().includes(q)
              ? group
              : { ...group, treatments: group.treatments.filter((t) => t.name.toLowerCase().includes(q)) },
          )
          .filter((group) => group.treatments.length > 0),
      }))
      .filter((entry) => entry.groups.length > 0)
  }, [query])

  const resultCount = useMemo(
    () => results.reduce((sum, e) => sum + e.groups.reduce((s, g) => s + g.treatments.length, 0), 0),
    [results],
  )

  return (
    <>
      <PricingHero />
      <PricingIntro />

      <div id="pricing-directory" className="pr-directory">
        <div className="pr-directory__tools">
          <div className="container container--wide">
            <PricingSearch query={query} onChange={setQuery} resultCount={resultCount} />
          </div>
        </div>

        <PricingCategoryNav
          categories={pricingCategories}
          activeId={searchActive ? null : activeId}
          onNavigate={() => setQuery('')}
        />

        {searchActive ? (
          <section className="pr-results" aria-label="Search results">
            <div className="container container--wide">
              {results.length === 0 ? (
                <div className="pr-results__empty">
                  <p className="pr-results__empty-title">No matching treatment was found.</p>
                  <p>
                    Try another term or{' '}
                    <a href="#/contact" className="pr-results__empty-link">
                      contact the clinic
                    </a>{' '}
                    for guidance.
                  </p>
                </div>
              ) : (
                results.map(({ category, groups }) => (
                  <div key={category.id} className="pr-results__category">
                    <h2>{category.navLabel}</h2>
                    <div className="pr-results__groups">
                      {groups.map((group) => (
                        <PricingGroup key={group.title} group={group} staticOpen />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        ) : (
          pricingCategories.map((category) => (
            <PricingSection key={category.id} category={category} />
          ))
        )}
      </div>

      <PricingNotice />
      <PricingFAQ />
      <ConsultationCTA content={pricingCta} />
    </>
  )
}

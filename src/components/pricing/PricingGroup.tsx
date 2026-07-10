import { useEffect, useId, useState } from 'react'
import type { TreatmentGroup } from '../../data/pricing'
import PricingRow from './PricingRow'
import './PricingGroup.css'

const MOBILE_QUERY = '(max-width: 880px)'

interface Props {
  group: TreatmentGroup
  /** open on first render even on mobile (first group of a category) */
  defaultOpen?: boolean
  /** render fully expanded with no toggle (search results) */
  staticOpen?: boolean
}

export default function PricingGroup({ group, defaultOpen = false, staticOpen = false }: Props) {
  const regionId = useId()
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )
  const [open, setOpen] = useState(() => defaultOpen || !isMobile)

  // desktop always shows every group; the accordion only exists on mobile
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = () => {
      setIsMobile(mq.matches)
      if (!mq.matches) setOpen(true)
    }
    mq.addEventListener('change', onChange)
    // resize fallback for browsers/webviews with unreliable mq events
    window.addEventListener('resize', onChange)
    return () => {
      mq.removeEventListener('change', onChange)
      window.removeEventListener('resize', onChange)
    }
  }, [])

  const collapsible = isMobile && !staticOpen
  const expanded = staticOpen || open

  return (
    <div className={`pgroup${expanded ? ' pgroup--open' : ''}`}>
      {collapsible ? (
        <button
          type="button"
          className="pgroup__head pgroup__head--toggle"
          aria-expanded={expanded}
          aria-controls={regionId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="pgroup__title">
            {group.title}
            <span className="pgroup__count"> · {group.treatments.length}</span>
          </span>
          <span className="pgroup__icon" aria-hidden="true" />
        </button>
      ) : (
        <h4 className="pgroup__head">
          <span className="pgroup__title">{group.title}</span>
        </h4>
      )}

      <div id={regionId} className="pgroup__panel">
        <div className="pgroup__panel-inner">
          {group.note && <p className="pgroup__note">{group.note}</p>}
          <ul>
            {group.treatments.map((treatment) => (
              <PricingRow key={treatment.name} treatment={treatment} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

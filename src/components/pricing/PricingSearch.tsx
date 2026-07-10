import { useId } from 'react'
import './PricingSearch.css'

interface Props {
  query: string
  onChange: (value: string) => void
  resultCount: number
}

export default function PricingSearch({ query, onChange, resultCount }: Props) {
  const inputId = useId()
  const active = query.trim().length > 0

  return (
    <div className="psearch" role="search">
      <label className="psearch__label" htmlFor={inputId}>
        Search treatments
      </label>
      <div className="psearch__field">
        <svg
          className="psearch__icon"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          aria-hidden="true"
        >
          <circle cx="6.2" cy="6.2" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <input
          id={inputId}
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search treatments or concerns"
          autoComplete="off"
        />
        {active && (
          <button
            type="button"
            className="psearch__clear"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            Clear
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        )}
      </div>
      {active && (
        <p className="psearch__status" role="status">
          {resultCount === 0
            ? 'No matching treatment found'
            : `${resultCount} matching treatment${resultCount === 1 ? '' : 's'}`}
        </p>
      )}
    </div>
  )
}

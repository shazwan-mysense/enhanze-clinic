import { useState } from 'react'
import type { CSSProperties } from 'react'
import { baCategories, baItems } from '../data/beforeAfter'
import type { BaCategory, BaItem } from '../data/beforeAfter'
import BeforeAfterModal from './BeforeAfterModal'
import './BeforeAfterGallery.css'

function ComparisonLabels() {
  return (
    <>
      <span className="ba-label ba-label--before">Before</span>
      <span className="ba-label ba-label--after">After</span>
    </>
  )
}

export { ComparisonLabels }

export default function BeforeAfterGallery() {
  const [category, setCategory] = useState<BaCategory>('body')
  const [activeItem, setActiveItem] = useState<BaItem | null>(null)

  const items = baItems.filter((item) => item.category === category)

  return (
    <div className="ba-gallery">
      <div
        className="ba-filter"
        role="group"
        aria-label="Filter comparisons by category"
      >
        {baCategories.map((cat) => {
          const active = cat.id === category
          return (
            <button
              key={cat.id}
              type="button"
              className={`ba-filter__btn${active ? ' ba-filter__btn--active' : ''}`}
              aria-pressed={active}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* key re-runs the entrance animation when the filter changes */}
      <ul className="ba-grid" key={category}>
        {items.map((item, i) => (
          <li
            key={item.title}
            className="ba-card"
            style={{ '--card-delay': `${i * 0.07}s` } as CSSProperties}
          >
            <button
              type="button"
              className="ba-card__button"
              onClick={() => setActiveItem(item)}
              aria-label={`View larger comparison: ${item.title}`}
            >
              <div className="ba-card__media">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={1264}
                  height={848}
                />
                <ComparisonLabels />
              </div>
              <div className="ba-card__body">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.concern}</p>
                </div>
                <span className="ba-card__view">
                  View Comparison
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {activeItem && (
        <BeforeAfterModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </div>
  )
}

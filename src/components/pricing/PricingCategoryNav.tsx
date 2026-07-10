import { scrollToId } from '../../utils/scrollToId'
import './PricingCategoryNav.css'

interface NavCategory {
  id: string
  navLabel: string
}

interface Props {
  categories: NavCategory[]
  activeId: string | null
  /** invoked before scrolling, e.g. to clear an active search */
  onNavigate?: () => void
}

export default function PricingCategoryNav({ categories, activeId, onNavigate }: Props) {
  const go = (id: string) => {
    onNavigate?.()
    // wait a frame so cleared search results re-render the sections first
    requestAnimationFrame(() => scrollToId(id))
  }

  return (
    <nav className="pnav" aria-label="Pricing categories">
      <div className="container container--wide">
        <ul className="pnav__list">
          {categories.map((category) => {
            const active = category.id === activeId
            return (
              <li key={category.id}>
                <button
                  type="button"
                  className={`pnav__item${active ? ' pnav__item--active' : ''}`}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => go(category.id)}
                >
                  {category.navLabel}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

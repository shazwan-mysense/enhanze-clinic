import { procedureCategories } from '../data/procedures'
import type { ProcedureCategory } from '../data/procedures'
import { useReveal } from '../hooks/useReveal'
import { scrollToId } from '../utils/scrollToId'
import './ProcedureCategoryFeature.css'

function CategoryPanel({
  category,
  featured = false,
}: {
  category: ProcedureCategory
  featured?: boolean
}) {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <article className={`pcat${featured ? ' pcat--featured' : ''}`}>
      <button
        type="button"
        className="pcat__link"
        onClick={() => scrollToId(category.directoryId)}
        aria-label={`${category.linkLabel} — jump to the ${category.name} treatment list`}
      >
        <div className="reveal-img pcat__media" ref={imgRef}>
          <img
            src={category.image}
            alt={category.alt}
            loading="lazy"
            decoding="async"
            width={896}
            height={1152}
          />
        </div>
        <div className="pcat__body reveal" ref={textRef}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <span className="pcat__cta">
            {category.linkLabel}
            <span className="arrow" aria-hidden="true">
              ↓
            </span>
          </span>
        </div>
      </button>
    </article>
  )
}

export default function ProcedureCategoryFeature() {
  const [skin, body, health] = procedureCategories

  return (
    <div className="pcat-grid">
      <CategoryPanel category={skin} featured />
      <div className="pcat-grid__side">
        <CategoryPanel category={body} />
        <CategoryPanel category={health} />
      </div>
    </div>
  )
}

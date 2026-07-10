import type { CSSProperties } from 'react'
import { categories, categoriesIntro } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import './TreatmentCategories.css'

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[number]
  index: number
}) {
  const ref = useReveal<HTMLElement>()

  return (
    <article
      ref={ref}
      className="category reveal"
      style={{ '--reveal-delay': `${index * 0.1}s` } as CSSProperties}
    >
      <a href={category.link.href} className="category__link" aria-label={category.link.label}>
        <div className="category__media">
          <img
            src={category.image}
            alt={category.alt}
            loading="lazy"
            decoding="async"
            width={896}
            height={1152}
          />
        </div>
        <div className="category__body">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <span className="category__cta">
            {category.link.label}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  )
}

export default function TreatmentCategories() {
  return (
    <section className="categories" aria-labelledby="categories-heading">
      <div className="container container--wide">
        <SectionHeading
          id="categories-heading"
          label={categoriesIntro.label}
          heading={categoriesIntro.heading}
          description={categoriesIntro.description}
        />
        <div className="categories__grid">
          {categories.map((category, i) => (
            <CategoryCard key={category.name} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

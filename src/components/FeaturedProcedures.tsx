import { featuredProcedures } from '../data/homepage'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import './FeaturedProcedures.css'

export default function FeaturedProcedures() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="procedures" aria-labelledby="procedures-heading">
      <div className="container container--wide">
        <SectionHeading
          id="procedures-heading"
          label={featuredProcedures.label}
          heading={featuredProcedures.heading}
          dark
        />
        <div className="procedures__grid reveal" ref={ref}>
          {featuredProcedures.groups.map((group) => (
            <div key={group.name} className="procedures__group">
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href={featuredProcedures.itemHref}>
                      <span>{item}</span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

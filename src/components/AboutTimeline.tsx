import { aboutMilestones } from '../data/about'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import './AboutTimeline.css'

export default function AboutTimeline() {
  const rowRef = useReveal<HTMLDivElement>()

  return (
    <section className="atl" aria-labelledby="atl-heading">
      <div className="container container--wide">
        <SectionHeading
          id="atl-heading"
          label={aboutMilestones.eyebrow}
          heading={aboutMilestones.heading}
        />
        <div className="atl__row reveal" ref={rowRef}>
          <div className="atl__year">
            <span className="atl__year-value">{aboutMilestones.yearItem.year}</span>
            <p>{aboutMilestones.yearItem.detail}</p>
          </div>
          {aboutMilestones.items.map((item) => (
            <div key={item.title} className="atl__item">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

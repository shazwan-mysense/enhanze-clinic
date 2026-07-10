import { directoryGroups, directoryIntro, treatmentHref } from '../data/procedures'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import './TreatmentDirectory.css'

function DirectoryGroupList({ group }: { group: (typeof directoryGroups)[number] }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="tdir__group reveal" id={group.id} ref={ref}>
      <h3>{group.name}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item.slug}>
            {/* PLACEHOLDER route — individual treatment pages do not exist yet */}
            <a href={treatmentHref(item.slug)}>
              <span>{item.label}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function TreatmentDirectory() {
  return (
    <section
      className="tdir"
      id="treatment-directory"
      aria-labelledby="directory-heading"
    >
      <div className="container container--wide">
        <SectionHeading
          id="directory-heading"
          label={directoryIntro.eyebrow}
          heading={directoryIntro.heading}
          description={directoryIntro.description}
        />
        <div className="tdir__grid">
          {directoryGroups.map((group) => (
            <DirectoryGroupList key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

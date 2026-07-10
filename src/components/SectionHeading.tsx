import { useReveal } from '../hooks/useReveal'
import './SectionHeading.css'

interface Props {
  label: string
  heading: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  id?: string
}

export default function SectionHeading({
  label,
  heading,
  description,
  align = 'left',
  dark = false,
  id,
}: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`section-heading reveal section-heading--${align}${dark ? ' section-heading--dark' : ''}`}
    >
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{heading}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  )
}

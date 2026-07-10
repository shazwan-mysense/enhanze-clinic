import type { Treatment } from '../../data/pricing'
import './PricingRow.css'

export default function PricingRow({ treatment }: { treatment: Treatment }) {
  return (
    <li className="prow">
      <div className="prow__name">
        <span>{treatment.name}</span>
        {treatment.note && <span className="prow__note">{treatment.note}</span>}
      </div>
      <span className="prow__price">{treatment.price}</span>
    </li>
  )
}

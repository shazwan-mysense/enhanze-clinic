/**
 * Canonical Enhanze Clinic contact configuration — the single source
 * of truth consumed by the Contact page, Footer, mobile menu and the
 * floating WhatsApp button. Verified against client-supplied details
 * (July 2026).
 */

export const contact = {
  clinicName: 'Enhanze Aesthetic Clinic',
  /** short single-line form used in the footer / mobile menu */
  addressLine: 'Phileo Damansara 1, Petaling Jaya, Selangor',
  /** full postal address, one array item per line */
  addressLines: [
    'Suite 206, Level 2, Block D,',
    'Phileo Damansara 1,',
    '46350 Petaling Jaya, Selangor',
  ],
  phone: '603-7960 1788',
  phoneHref: 'tel:+60379601788',
  hotline: '1300-88-1788',
  hotlineHref: 'tel:+601300881788',
  whatsappNumber: '60123453779', // digits only, used in wa.me link
  whatsappDisplay: '6012-345 3779',
  email: 'enquiry@enhanzeclinic.com',
  mapsQuery:
    'Enhanze Aesthetic Clinic, Block D, Phileo Damansara 1, 46350 Petaling Jaya, Selangor',
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}`
export const emailLink = `mailto:${contact.email}`
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`
/** query-based embed — no API key required or exposed */
export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`

/**
 * Social profiles — the current site shows Facebook/Instagram icons.
 * TODO: Confirm exact profile URLs with client; placeholders are not
 * rendered as live links until confirmed.
 */
export const socials = {
  instagram: '', // PLACEHOLDER
  facebook: '', // PLACEHOLDER
  youtube: '', // PLACEHOLDER
}

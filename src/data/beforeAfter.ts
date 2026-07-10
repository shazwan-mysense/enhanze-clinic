/**
 * Before / After page content.
 *
 * IMPORTANT: the comparison images are illustrative visuals created for
 * this redesign prototype — they are NOT verified Enhanze Clinic patient
 * results. The page displays a clear disclaimer; replace all gallery
 * imagery with verified, consented clinic photos before production.
 *
 * Testimonials are transcribed verbatim from the live
 * enhanzeclinic.com/before-after/ page (July 2026), original wording
 * preserved. TODO: confirm reviewer name display format with client —
 * the source widget concatenates name and age (e.g. "Putri Affea38").
 */

import type { ConsultationContent } from '../components/ConsultationCTA'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const baHero = {
  eyebrow: 'Before & After',
  heading: 'Illustrative Treatment Comparisons',
  description:
    'Browse example treatment categories across body and skin concerns. These visuals are used for redesign presentation only and should be replaced with verified clinic imagery in production.',
  primary: { label: 'Explore Comparisons', targetId: 'ba-gallery' },
  secondary: { label: 'Book a Consultation', href: '#/appointment' },
  image: img('before-after-hero.png'),
  imageAlt: 'Illustrative skin comparison visual for the Enhanze Clinic redesign',
}

/* ------------------------------------------------------------------ */
/* Introduction + prototype disclaimer                                 */
/* ------------------------------------------------------------------ */

export const baIntro = {
  eyebrow: 'Important Note',
  heading: 'Understanding the Gallery',
  body: 'This page presents illustrative comparison visuals grouped by treatment concern. For the final production website, all comparison imagery should be replaced with verified Enhanze Clinic before-and-after images used with appropriate patient consent.',
  supporting:
    'Individual concerns, suitability and results vary. A consultation is important before considering any treatment approach.',
  disclaimer:
    'Illustrative visuals are used for this redesign presentation only. Final website imagery should be replaced with verified Enhanze Clinic before-and-after images used with appropriate consent.',
}

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export type BaCategory = 'body' | 'skin'

export interface BaItem {
  category: BaCategory
  title: string
  concern: string
  image: string
  alt: string
  /** shown inside the enlarged view */
  caption: string
}

export const baCategories: { id: BaCategory; label: string }[] = [
  { id: 'body', label: 'Body' },
  { id: 'skin', label: 'Skin' },
]

export const baItems: BaItem[] = [
  {
    category: 'body',
    title: 'Abdomen Contour',
    concern: 'Illustrative midsection comparison visual.',
    image: img('before-after-body-abdomen.png'),
    alt: 'Illustrative before and after style body contour comparison',
    caption:
      'Illustrative visual for the abdomen treatment area. Replace with a verified clinic image in production.',
  },
  {
    category: 'body',
    title: 'Upper Arm Contour',
    concern: 'Illustrative upper-arm comparison visual.',
    image: img('before-after-body-upper-arms.png'),
    alt: 'Illustrative before and after style upper-arm comparison',
    caption:
      'Illustrative visual for the upper-arm treatment area. Replace with a verified clinic image in production.',
  },
  {
    category: 'body',
    title: 'Thigh Texture',
    concern: 'Illustrative thigh-area comparison visual.',
    image: img('before-after-body-thigh-texture.png'),
    alt: 'Illustrative before and after style thigh comparison',
    caption:
      'Illustrative visual for the thigh treatment area. Replace with a verified clinic image in production.',
  },
  {
    category: 'body',
    title: 'Waist Contour',
    concern: 'Illustrative waistline comparison visual.',
    image: img('before-after-body-waist-contour.png'),
    alt: 'Illustrative before and after style waistline comparison',
    caption:
      'Illustrative visual for the waistline treatment area. Replace with a verified clinic image in production.',
  },
  {
    category: 'skin',
    title: 'Acne & Texture',
    concern: 'Illustrative acne and texture comparison visual.',
    image: img('before-after-skin-acne.png'),
    alt: 'Illustrative before and after style acne and texture comparison',
    caption:
      'Illustrative visual for acne and texture concerns. Replace with a verified clinic image in production.',
  },
  {
    category: 'skin',
    title: 'Pigmentation',
    concern: 'Illustrative pigmentation comparison visual.',
    image: img('before-after-skin-pigmentation.png'),
    alt: 'Illustrative before and after style pigmentation comparison',
    caption:
      'Illustrative visual for pigmentation concerns. Replace with a verified clinic image in production.',
  },
  {
    category: 'skin',
    title: 'Jawline Definition',
    concern: 'Illustrative lower-face contour comparison visual.',
    image: img('before-after-skin-jawline.png'),
    alt: 'Illustrative before and after style jawline comparison',
    caption:
      'Illustrative visual for lower-face contour concerns. Replace with a verified clinic image in production.',
  },
  {
    category: 'skin',
    title: 'Neck Firmness',
    concern: 'Illustrative neck-area comparison visual.',
    image: img('before-after-skin-neck.png'),
    alt: 'Illustrative before and after style neck-area comparison',
    caption:
      'Illustrative visual for neck-area concerns. Replace with a verified clinic image in production.',
  },
]

/* ------------------------------------------------------------------ */
/* Guidance section                                                    */
/* ------------------------------------------------------------------ */

export const baGuidance = {
  eyebrow: 'What to Keep in Mind',
  heading: 'Every Treatment Journey Is Personal',
  body: 'Treatment suitability, planning and outcomes vary according to individual concerns, treatment areas and professional assessment. Comparison imagery should be interpreted carefully, and a consultation is important before deciding on any treatment approach.',
  points: [
    'Results vary by individual',
    'Consultation helps determine suitability',
    'A treatment plan may differ from person to person',
    'Final production galleries should use verified clinic images',
  ],
}

/* ------------------------------------------------------------------ */
/* Testimonials — verbatim from the live site, wording untouched       */
/* ------------------------------------------------------------------ */

export const baTestimonials = {
  eyebrow: 'Patient Experiences',
  heading: 'In Their Own Words',
  note: 'Testimonials from the current Enhanze Clinic website, reproduced verbatim.',
  items: [
    {
      quote:
        'My severe acne that I have been struggling for 9 years have cleared in 6 months! And the staffs are all very friendly and the clinic environment is so comfortable.',
      name: 'Putri Affea', // TODO: confirm display format (source shows "Putri Affea33")
    },
    {
      quote:
        'You are definitely in good hands when u r with Dr Tina. She listens to clients, make her diagnostic and suggest solutions. Fabulous results.',
      name: 'Coach Maya Maria', // TODO: confirm display format (source shows "Coach Maya Maria38")
    },
    {
      quote:
        'Probably the oldest and the best Aesthetic Clinic in Malaysia, Dr Sutina is very experience and knowlegeable would never go to anyone else',
      name: 'Loudior Line', // TODO: confirm display format (source shows "Loudior Line45")
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Consultation CTA (shared component)                                 */
/* ------------------------------------------------------------------ */

export const baCta: ConsultationContent = {
  label: 'Need Personalised Guidance?',
  heading: 'Discuss Your Concerns with the Enhanze Team',
  description:
    'Speak with the clinic about your concerns, suitable options and the next steps for consultation in a professional and comfortable setting.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

/**
 * Procedures page content. Individual treatment links point to
 * placeholder routes (#/procedures/<slug>) that currently resolve
 * back to this page — swap them for real pages later without
 * touching component code.
 */

import type { ConsultationContent } from '../components/ConsultationCTA'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const proceduresHero = {
  eyebrow: 'Our Procedures',
  heading: 'Personalised Care for Skin, Body and Health',
  description:
    'Explore consultation-led aesthetic and wellness treatments designed around your individual concerns, goals and suitability.',
  primary: { label: 'Explore Treatments', targetId: 'areas-of-care' },
  secondary: { label: 'Book a Consultation', href: '#/appointment' },
  image: img('procedures-hero.png'),
  imageAlt:
    'A doctor performing a facial treatment on a reclining patient at Enhanze Clinic',
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

export const proceduresIntro = {
  eyebrow: 'Finding the Right Approach',
  heading: 'Begin with the Right Treatment Conversation',
  body: 'Every treatment journey at Enhanze begins with understanding your concerns, expectations and suitability. Explore our main areas of care, then speak with the clinic team for personalised guidance.',
  statement:
    'Treatment recommendations should be based on professional consultation rather than trends or one-size-fits-all solutions.',
}

/* ------------------------------------------------------------------ */
/* Category showcase                                                   */
/* ------------------------------------------------------------------ */

export interface ProcedureCategory {
  name: string
  description: string
  linkLabel: string
  /** id of the matching treatment-directory group to scroll to */
  directoryId: string
  image: string
  alt: string
}

export const procedureCategories: ProcedureCategory[] = [
  {
    name: 'Skin',
    description:
      'Treatments focused on skin quality, tone, texture, rejuvenation and individual aesthetic concerns.',
    linkLabel: 'Explore Skin Treatments',
    directoryId: 'directory-skin',
    image: img('home-service-skin.png'),
    alt: 'Practitioner applying a serum treatment to a reclining patient',
  },
  {
    name: 'Body',
    description:
      'Consultation-led body treatments developed around contouring, confidence and individual goals.',
    linkLabel: 'Explore Body Treatments',
    directoryId: 'directory-body',
    image: img('home-service-body.png'),
    alt: 'Woman in activewear standing in a bright clinic corridor',
  },
  {
    name: 'Health',
    description:
      'Professional services supporting wellbeing, preventive care and healthier lifestyle decisions.',
    linkLabel: 'Explore Health Services',
    directoryId: 'directory-health',
    image: img('home-service-health.png'),
    alt: 'Two doctors reviewing notes with a patient during a consultation',
  },
]

/* ------------------------------------------------------------------ */
/* Treatment directory                                                 */
/* ------------------------------------------------------------------ */

export const directoryIntro = {
  eyebrow: 'Explore Treatments',
  heading: 'Areas of Care',
  description:
    'Browse the clinic’s main treatment areas and use them as a starting point for a professional consultation.',
}

export interface DirectoryGroup {
  name: string
  id: string
  items: { label: string; slug: string }[]
}

export const directoryGroups: DirectoryGroup[] = [
  {
    name: 'Skin Treatments',
    id: 'directory-skin',
    items: [
      { label: 'Acne', slug: 'acne' },
      { label: 'Dull and Dry Skin', slug: 'dull-and-dry-skin' },
      { label: 'Wrinkles', slug: 'wrinkles' },
      { label: 'Pigmentation', slug: 'pigmentation' },
      { label: 'Open Pores', slug: 'open-pores' },
      { label: 'Skin Tags', slug: 'skin-tags' },
      { label: 'Sagging Skin', slug: 'sagging-skin' },
      { label: 'Scarring', slug: 'scarring' },
      { label: 'Hair Removal', slug: 'hair-removal' },
      { label: 'Lip Rejuvenation', slug: 'lip-rejuvenation' },
    ],
  },
  {
    name: 'Body Treatments',
    id: 'directory-body',
    items: [
      { label: 'Stubborn Fat', slug: 'stubborn-fat' },
      { label: 'Stretch Marks', slug: 'stretch-marks' },
      { label: 'Loose Skin', slug: 'loose-skin' },
      { label: 'Cellulite', slug: 'cellulite' },
      { label: 'Excessive Sweating', slug: 'excessive-sweating' },
      { label: 'Spider Veins', slug: 'spider-veins' },
      { label: 'Pelvic Floor Support', slug: 'pelvic-floor-support' },
      { label: 'Hair Loss', slug: 'hair-loss' },
      { label: 'Hair Removal', slug: 'body-hair-removal' },
    ],
  },
  {
    name: 'Health and Wellness',
    id: 'directory-health',
    items: [
      { label: 'Lifestyle Medicine', slug: 'lifestyle-medicine' },
      { label: 'Hormonal Health', slug: 'hormonal-health' },
      { label: 'Medical Screening', slug: 'medical-screening' },
      { label: 'Regenerative Therapy', slug: 'regenerative-therapy' },
      { label: 'Weight Management', slug: 'weight-management' },
      { label: 'TMS Therapy', slug: 'tms-therapy' },
    ],
  },
]

/** Placeholder route for a treatment until its page exists */
export const treatmentHref = (slug: string) => `#/procedures/${slug}`

/* ------------------------------------------------------------------ */
/* Consultation process                                                */
/* ------------------------------------------------------------------ */

export const consultationProcess = {
  eyebrow: 'How It Begins',
  heading: 'A Considered Approach to Your Treatment Plan',
  steps: [
    {
      name: 'Consultation',
      detail:
        'Discuss your concerns, medical background, expectations and treatment goals with the clinic team.',
    },
    {
      name: 'Assessment',
      detail:
        'Suitable options can be considered based on your needs, condition and professional assessment.',
    },
    {
      name: 'Personalised Plan',
      detail:
        'Receive clear guidance on the recommended approach, preparation and aftercare where applicable.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Consultation CTA (reuses the homepage component)                    */
/* ------------------------------------------------------------------ */

export const proceduresCta: ConsultationContent = {
  label: 'Personalised Guidance',
  heading: 'Not Sure Which Treatment Is Right for You?',
  description:
    'Speak with the Enhanze team about your concerns, goals and suitable treatment options in a professional and comfortable setting.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

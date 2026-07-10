/**
 * Treatment Pricing page content.
 *
 * Every treatment name and price below was transcribed from the live
 * Enhanze Clinic pricing page (enhanzeclinic.com/price/, July 2026).
 * Do not edit prices here without client confirmation.
 *
 * NOTE: several spellings below look like typos but they appear exactly
 * this way on the live site and are preserved deliberately:
 *   - "Fine Thradlift"            TODO: confirm spelling with client (Threadlift?)
 *   - "UV Thread Shaping"         TODO: confirm with client (V Thread Shaping?)
 *   - "Laserlypolisis"            TODO: confirm with client (Laser Lipolysis?)
 *   - "Hyperhydrosis"             TODO: confirm with client (Hyperhidrosis?)
 */

import type { ConsultationContent } from '../components/ConsultationCTA'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface Treatment {
  name: string
  price: string
  note?: string
}

export interface TreatmentGroup {
  title: string
  /** shown under the group title, e.g. a shared footnote */
  note?: string
  treatments: Treatment[]
}

export interface PricingCategory {
  id: string
  navLabel: string
  eyebrow: string
  heading: string
  description: string
  image?: string
  imageAlt?: string
  /** visual treatment of the section */
  theme: 'light' | 'deep' | 'dark'
  imageSide?: 'left' | 'right'
  groups: TreatmentGroup[]
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const pricingHero = {
  eyebrow: 'Treatment Pricing',
  heading: 'Clearer Guidance for Your Treatment Journey',
  description:
    'Explore Enhanze Clinic’s treatment pricing across skin, body and wellness services. Final recommendations and costs may depend on the treatment area, individual needs and professional assessment.',
  primary: { label: 'View Treatment Prices', targetId: 'pricing-directory' },
  secondary: { label: 'Book a Consultation', href: '#/appointment' },
  image: img('price-hero.png'),
  imageAlt:
    'Abstract composition of flowing ivory and warm orange ribbons above a marble surface',
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

export const pricingIntro = {
  eyebrow: 'Before You Begin',
  heading: 'Treatment Pricing Should Be Viewed in Context',
  body: 'The prices shown provide a general reference for the treatments currently offered by Enhanze Clinic. The final treatment approach and cost may vary depending on the treatment area, individual concerns, treatment plan and professional assessment.',
  statement:
    'A consultation may be required before the clinic can confirm the most suitable treatment option and final price.',
}

/* ------------------------------------------------------------------ */
/* Pricing directory                                                   */
/* ------------------------------------------------------------------ */

export const pricingCategories: PricingCategory[] = [
  {
    id: 'pricing-skin-face',
    navLabel: 'Skin & Face',
    eyebrow: 'Skin & Face',
    heading: 'Treatments for Skin Quality, Facial Contour and Rejuvenation',
    description:
      'Browse the clinic’s skin and facial treatment options, including services focused on texture, tone, firmness and individual aesthetic concerns.',
    image: img('price-category-skin.png'),
    imageAlt:
      'A woman receiving a facial treatment with a handheld device in a softly lit clinic room',
    theme: 'light',
    imageSide: 'right',
    groups: [
      {
        title: 'Face Skin Tightening / Lifting',
        treatments: [
          { name: 'RF Tightening', price: 'From RM500' },
          { name: 'Endermolift', price: 'From RM300' },
          { name: 'Sublime Jawline Lift', price: 'From RM600' },
          { name: 'Fine Thradlift', price: 'From RM800' }, // TODO: confirm spelling with client
          { name: '4D Laser Lift', price: 'From RM1800' },
          { name: 'Liquid Face Lift', price: 'From RM2250' },
          { name: 'Happy Lift', price: 'From RM2500' },
          { name: 'Ultherapy Face', price: 'From RM4800' },
          { name: 'Aptos Threadlift', price: 'From RM4800' },
          { name: 'Thermage Face', price: 'From RM7200' },
        ],
      },
      {
        title: 'Skin Rejuvenation',
        treatments: [
          { name: 'O2 Infusion Hydration', price: 'From RM480' },
          { name: 'Oxygeneo', price: 'From RM480' },
          { name: 'Pigmentation Treatment', price: 'From RM550' },
          { name: 'Mesoglow', price: 'From RM650' },
          { name: 'Vampire Facial', price: 'From RM800' },
          { name: 'Pore Reduction', price: 'From RM800' },
          { name: 'Pico Laser Lightening', price: 'From RM1200' },
          { name: 'Skin Beauty Booster', price: 'From RM1200' },
          { name: 'Acne Scar Reduction', price: 'From RM1200' },
        ],
      },
      {
        title: 'V Shape Face',
        treatments: [
          { name: 'Ultra RF Face', price: 'From RM500' },
          { name: 'BTX Jawline', price: 'From RM1500' },
          { name: 'UV Thread Shaping', price: 'From RM3000' }, // TODO: confirm name with client
        ],
      },
      {
        title: 'Eyes',
        treatments: [
          { name: 'Undereye Dark Circle Laser', price: 'From RM400' },
          { name: 'Eye Wrinkles Reduction', price: 'From RM600' },
          { name: 'Tear Trough Filler', price: 'From RM1500' },
          { name: 'Thermage Eyes', price: 'From RM2800' },
        ],
      },
      {
        title: 'Hand Rejuvenation',
        treatments: [
          { name: 'Hand Veins', price: 'From RM500' },
          { name: 'Hand Skin Booster', price: 'From RM1200' },
          { name: 'Hand Liquid Lift', price: 'From RM1500' },
        ],
      },
    ],
  },
  {
    id: 'pricing-body',
    navLabel: 'Body',
    eyebrow: 'Body',
    heading: 'Body Treatments and Personalised Contouring Options',
    description:
      'Explore consultation-led body treatments developed around individual concerns, treatment areas and personal goals.',
    image: img('price-category-body.png'),
    imageAlt:
      'A practitioner using a contouring device on a seated patient in a clinic room',
    theme: 'deep',
    imageSide: 'left',
    groups: [
      {
        title: 'Fat Reduction',
        treatments: [
          { name: 'Lipodissolve Therapy', price: 'From RM300' },
          { name: 'Accent Ultrasound Lipolysis', price: 'From RM600' },
          { name: 'Liposonix', price: 'From RM800' },
          { name: 'VME (Abdomen, Thighs)', price: 'From RM1500' },
          { name: 'Coolsculpting', price: 'From RM2500' },
          { name: 'Laserlypolisis (Smartlipo/Accusculpt)', price: 'From RM4000' }, // TODO: confirm spelling with client
          { name: 'Airsculpting', price: 'From RM9000' },
        ],
      },
      {
        title: 'Body Firming',
        treatments: [
          { name: 'Lipomassage', price: 'From RM300' },
          { name: 'Tightsculpting', price: 'From RM1200' },
          { name: 'Thermage Body', price: 'From RM8000' },
          { name: 'Ultherapy Body', price: 'From RM8000' },
        ],
      },
      {
        title: 'Weight Loss Programs',
        treatments: [
          { name: 'Bodyworkz', price: 'From RM500' },
          { name: 'Medical Weight Loss Program', price: 'RM550/Month', note: '6-month program' },
          { name: 'Smart Diet Program', price: 'From RM2500' },
          { name: 'Rapid Weight Loss Program (RWL)', price: 'From RM3500' },
        ],
      },
      {
        title: 'Stretch Marks',
        treatments: [
          { name: 'Micro Needling MNT', price: 'From RM450' },
          { name: 'PRP – HA', price: 'From RM800' },
          { name: 'ETWO Sublative', price: 'From RM800' },
          { name: 'Laser Stretch Mark', price: 'From RM800' },
        ],
      },
      {
        title: 'Cellulite',
        treatments: [
          { name: 'X-Wave Shock Therapy', price: 'From RM300' },
          { name: 'Endermologie', price: 'From RM300' },
          { name: 'Mesocellulite', price: 'From RM450' },
        ],
      },
    ],
  },
  {
    id: 'pricing-targeted',
    navLabel: 'Hair, Veins & Sweating',
    eyebrow: 'Targeted Treatment Areas',
    heading: 'Treatments for Specific Concerns',
    description:
      'Browse additional treatments addressing specific concerns such as unwanted hair, hair loss, excessive sweating and visible veins.',
    theme: 'dark',
    groups: [
      {
        title: 'Hair Removal',
        note: 'Price applicable for one treatment area only.',
        treatments: [
          { name: 'Face (Lips, Chin, Full Face, Upper Neck)', price: 'From RM500' },
          { name: 'Intimate Area (Bikini Line/Brazilian)', price: 'From RM600' },
          { name: 'Body (Body, Forearm, Chest, Leg, Underarms)', price: 'From RM700' },
        ],
      },
      {
        title: 'Hair Loss',
        treatments: [
          { name: 'Mesopecia', price: 'From RM350' },
          { name: 'Hair Filler', price: 'From RM1500' },
          { name: 'PRP Scalp & Follicle Regeneration', price: 'From RM1800' },
          { name: 'Stemcell', price: 'From RM6600' },
          { name: 'Regenera Cell Treatment', price: 'From RM8000' },
        ],
      },
      {
        title: 'Excessive Sweating (Hyperhydrosis)', // TODO: confirm spelling with client
        treatments: [
          { name: 'BTA Injection Palms/Underarms', price: 'From RM1200' },
          { name: 'Laser Hyperhydrosis (Underarms)', price: 'From RM3000' },
        ],
      },
      {
        title: 'Veins',
        treatments: [{ name: 'Laser Vein Removal', price: 'From RM350' }],
      },
    ],
  },
  {
    id: 'pricing-health',
    navLabel: 'Health & Wellness',
    eyebrow: 'Health & Wellness',
    heading: 'Health and Wellness Services',
    description:
      'Explore consultation-led wellness services designed to support personal wellbeing and informed health decisions.',
    image: img('price-category-health.png'),
    imageAlt:
      'A consultant reviewing a wellness plan on a clipboard with a patient at a bright table',
    theme: 'light',
    imageSide: 'right',
    groups: [
      {
        title: 'Female Wellness',
        treatments: [
          { name: 'Labial Vulvo-Perineal Whitening', price: 'From RM1200' },
          { name: 'Monalisa Touch Vaginal Rejuvenation (V2LR)', price: 'From RM1500' },
          { name: 'Laser Vaginal Rejuvenation (Intimalase)', price: 'From RM1800' },
          { name: 'Laser Urinary Incontinence (Incontilase)', price: 'From RM2200' },
          { name: 'Viveve By Geneveve V-Tight (Vaginal Tightening)', price: 'From RM7200' },
          { name: 'Viveve By Geneveve G-Spot (Sexual Enhancement)', price: 'From RM7200' },
        ],
      },
      {
        title: 'Drip Clinic',
        treatments: [
          { name: 'Skin Light', price: 'RM350' },
          { name: 'Skin Clear', price: 'RM350' },
          { name: 'I-Recover', price: 'RM350' },
          { name: 'Male Stamina', price: 'RM350' },
          { name: 'I-Age Lock', price: 'RM400' },
          { name: 'Immune Boost', price: 'RM650' },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Important pricing information                                       */
/* ------------------------------------------------------------------ */

export const pricingNotes = {
  eyebrow: 'Good to Know',
  heading: 'Important Pricing Information',
  notes: [
    'Displayed prices are intended as a general reference for the treatments currently offered by the clinic.',
    'The final cost may vary depending on the treatment area and your individual treatment plan.',
    'Some services require a consultation or assessment before a suitable option can be confirmed.',
    'Multiple sessions may be recommended depending on individual needs.',
    'Promotions, packages or updated prices are only displayed once confirmed by the clinic.',
    'Please contact Enhanze Clinic for current availability and final pricing.',
  ],
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const pricingFaq = {
  eyebrow: 'Common Questions',
  heading: 'Pricing Questions, Answered',
  items: [
    {
      question: 'Are the prices shown final?',
      answer:
        'The displayed prices provide a general reference. Final pricing may depend on the treatment area, selected treatment plan and individual assessment.',
    },
    {
      question: 'Do I need a consultation before treatment?',
      answer:
        'Some treatments require a consultation or assessment so the clinic can understand your concerns and discuss suitable options.',
    },
    {
      question: 'Why do some treatments show a starting price?',
      answer:
        'A starting price may be shown when the final cost varies according to the treatment area, number of sessions or personalised plan.',
    },
    {
      question: 'Can I confirm the price through WhatsApp?',
      answer:
        'The clinic team can provide general information through WhatsApp, although some services may still require an in-person consultation before final pricing is confirmed.',
    },
    {
      question: 'Are packages or promotions included?',
      answer:
        'Only confirmed packages or promotions are displayed. Please contact the clinic for the latest information.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Consultation CTA (reuses the shared component)                      */
/* ------------------------------------------------------------------ */

export const pricingCta: ConsultationContent = {
  label: 'Need Personalised Guidance?',
  heading: 'Confirm Your Treatment Options with the Enhanze Team',
  description:
    'Speak with the clinic about your concerns, suitable treatment options and the pricing information relevant to your needs.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

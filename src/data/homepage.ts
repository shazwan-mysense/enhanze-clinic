/**
 * All homepage content lives here so copy, links and contact details
 * can be edited without touching component code.
 *
 * Anything marked PLACEHOLDER must be replaced with confirmed
 * client information before production.
 */

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Contact — PLACEHOLDERS: replace with confirmed clinic details      */
/* ------------------------------------------------------------------ */

// Canonical contact details live in src/data/contact.ts; re-exported
// here so existing imports keep working.
export { contact, whatsappLink } from './contact'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string
  href: string
}

// "#/…" links are handled by the hash router (src/router.tsx).
// Routes without a page yet fall back to the homepage for now.
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Procedures', href: '#/procedures' },
  { label: 'Price', href: '#/price' },
  { label: 'About Us', href: '#/about' },
  { label: 'Before / After', href: '#/before-after' },
  { label: 'News & Events', href: '#/news' },
  { label: 'Appointment', href: '#/appointment' },
  { label: 'Contact Us', href: '#/contact' },
]

export const headerCta: NavLink = { label: 'Book Appointment', href: '#/appointment' }

/* ------------------------------------------------------------------ */
/* Hero slider                                                         */
/* ------------------------------------------------------------------ */

export interface HeroSlide {
  id: string
  image: string
  alt: string
  eyebrow: string
  heading: string
  description: string
  primary: NavLink
  secondary: NavLink
  /**
   * light-left  — dark text over the image's left negative space
   * dark-right  — light text over a dark image, right aligned
   * panel-right — solid ivory content panel on the right edge
   */
  layout: 'light-left' | 'dark-right' | 'panel-right'
  /** object-position for the desktop full-bleed image */
  focusDesktop: string
  /** object-position for the stacked mobile image */
  focusMobile: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'skin-tightening',
    image: img('home-hero-skin-tightening-desktop.png'),
    alt: 'Woman with a handheld skin-tightening device at Enhanze Clinic',
    eyebrow: 'Advanced Skin Rejuvenation',
    heading: 'Non-Invasive Skin Tightening',
    description:
      'Support firmer, smoother-looking skin with personalised non-surgical treatments designed around your needs.',
    primary: { label: 'Explore Skin Treatments', href: '#/procedures' },
    secondary: { label: 'Book a Consultation', href: '#/appointment' },
    layout: 'light-left',
    focusDesktop: '78% 30%',
    focusMobile: '82% 25%',
  },
  {
    id: 'airsculpting',
    image: img('home-hero-airsculpting-desktop.png'),
    alt: 'Woman in activewear standing in a warmly lit clinic reception',
    eyebrow: 'Body Contouring',
    heading: 'Shape Your Confidence',
    description:
      'Discover targeted, non-invasive body treatments developed to support your personal aesthetic goals.',
    primary: { label: 'Explore Body Treatments', href: '#/procedures' },
    secondary: { label: 'Speak to Our Team', href: '#/contact' },
    layout: 'dark-right',
    focusDesktop: '30% 25%',
    focusMobile: '32% 20%',
  },
  {
    id: 'thread-lifting',
    image: img('home-hero-thread-lifting-desktop.png'),
    alt: 'Woman in soft ivory clothing photographed against a warm backdrop',
    eyebrow: 'Facial Rejuvenation',
    heading: 'A Refined Lift Without Surgery',
    description:
      'Explore personalised non-surgical lifting treatments with professional consultation and carefully planned care.',
    primary: { label: 'Discover Thread Lifting', href: '#/procedures' },
    secondary: { label: 'Book an Appointment', href: '#/appointment' },
    layout: 'panel-right',
    focusDesktop: '0% 30%',
    focusMobile: '0% 30%',
  },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  label: 'Established in Malaysia',
  heading: 'A Medical Aesthetic Clinic Built Around Personalised Care',
  paragraphs: [
    'Aesthetic Medical Services Sdn Bhd was incorporated in Malaysia in 2001, and under the Enhanze Aesthetic name the clinic was established to meet a growing demand for professionally conducted medical aesthetic procedures. More than two decades later, that founding purpose has not changed.',
    'Enhanze combines medical experience with a considered, individual approach to aesthetic care. Every treatment journey begins with a consultation — understanding your concerns, your expectations and your suitability — before any procedure is recommended.',
  ],
  facts: [
    { value: 'Since 2001', detail: 'Incorporated in Malaysia' },
    { value: 'Consultation first', detail: 'Every treatment begins with one' },
  ],
  cta: { label: 'Discover Our Story', href: '#/about' },
  image: img('home-clinic-interior.png'),
  imageAlt: 'Reception area of Enhanze Clinic with warm timber panelling',
}

/* ------------------------------------------------------------------ */
/* Credibility strip                                                   */
/* ------------------------------------------------------------------ */

export const credibility = [
  { title: 'Established 2001', detail: 'Over two decades of practice in Malaysia' },
  { title: 'Medical Aesthetic Care', detail: 'Procedures conducted professionally' },
  { title: 'Skin · Body · Health', detail: 'Care across three areas of focus' },
  { title: 'Personalised Consultations', detail: 'Treatment plans built around you' },
]

/* ------------------------------------------------------------------ */
/* Doctor                                                              */
/* ------------------------------------------------------------------ */

export const doctor = {
  label: 'Medical Director',
  heading: 'Experience Guided by Care and Clinical Judgement',
  name: 'Dato’ Dr. N. Sutina Nordin',
  experienceLine: 'More than 20 years in aesthetic medicine',
  bio: [
    'Dr. Sutina is an experienced and reputable doctor, and a pioneer of aesthetic medicine in Malaysia. Across more than twenty years of practice, she has guided patients through their treatment decisions with the same measured, consultation-led approach the clinic was founded on.',
    'She remains active in advancing her skills through conferences and workshops, so the care offered at Enhanze continues to reflect current professional practice.',
  ],
  cta: { label: 'Meet Our Doctor', href: '#/about' },
  image: img('home-doctor-dr-sutina-nordin.jpg'),
  imageAlt: 'Portrait of Dato’ Dr. N. Sutina Nordin, Medical Director of Enhanze Clinic',
}

/* ------------------------------------------------------------------ */
/* Treatment categories                                                */
/* ------------------------------------------------------------------ */

export const categoriesIntro = {
  label: 'Explore Enhanze',
  heading: 'Treatments Designed Around You',
  description:
    'Explore personalised aesthetic and wellness treatments across skin, body and health, guided by professional consultation.',
}

export const categories = [
  {
    name: 'Skin',
    description:
      'Treatments focused on skin quality, texture, tone, rejuvenation and individual aesthetic concerns.',
    link: { label: 'Explore Skin Treatments', href: '#/procedures' },
    image: img('home-service-skin.png'),
    alt: 'Practitioner applying a serum treatment to a reclining patient',
  },
  {
    name: 'Body',
    description:
      'Non-surgical body treatments developed around contouring, confidence and individual goals.',
    link: { label: 'Explore Body Treatments', href: '#/procedures' },
    image: img('home-service-body.png'),
    alt: 'Woman in activewear standing in a bright clinic corridor',
  },
  {
    name: 'Health',
    description:
      'Consultation-led services supporting personal wellbeing, preventive care and healthier lifestyle decisions.',
    link: { label: 'Explore Health Services', href: '#/procedures' },
    image: img('home-service-health.png'),
    alt: 'Two doctors reviewing notes with a patient during a consultation',
  },
]

/* ------------------------------------------------------------------ */
/* Featured procedures                                                 */
/* ------------------------------------------------------------------ */

export const featuredProcedures = {
  label: 'Popular Areas of Care',
  heading: 'Find the Treatment Path That Fits Your Concern',
  groups: [
    {
      name: 'Skin',
      items: [
        'Skin Tightening',
        'Pigmentation',
        'Acne and Acne Scarring',
        'Skin Rejuvenation',
        'Hair Removal',
      ],
    },
    {
      name: 'Body',
      items: [
        'Body Contouring',
        'Stubborn Fat',
        'Cellulite',
        'Stretch Marks',
        'Pelvic Floor Support',
      ],
    },
    {
      name: 'Health',
      items: [
        'Lifestyle Medicine',
        'Medical Screening',
        'Hormonal Health',
        'Weight Management',
        'Regenerative Therapy',
      ],
    },
  ],
  itemHref: '/procedures',
}

/* ------------------------------------------------------------------ */
/* Consultation CTA                                                    */
/* ------------------------------------------------------------------ */

export const consultation = {
  label: 'Begin with a Conversation',
  heading: 'Your Treatment Journey Should Start with the Right Consultation',
  description:
    'Speak with the Enhanze team about your concerns, goals and suitable treatment options in a professional and comfortable setting.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  logo: img('enhanze-logo.png'),
  description:
    'A medical aesthetic clinic established in Malaysia since 2001, offering personalised, consultation-led care across skin, body and health.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Procedures', href: '#/procedures' },
        { label: 'Price', href: '#/price' },
        { label: 'Before / After', href: '#/before-after' },
        { label: 'News & Events', href: '#/news' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#/about' },
        { label: 'Our Doctor', href: '#/about' },
        { label: 'Contact Us', href: '#/contact' },
        { label: 'Appointment', href: '#/appointment' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' }, // PLACEHOLDER — link when page exists
    { label: 'Terms of Use', href: '#' }, // PLACEHOLDER — link when page exists
  ],
  disclaimer:
    'The information on this website is provided for general educational purposes only and is not a substitute for professional medical advice, diagnosis or treatment. Individual results vary. Please consult a registered medical practitioner about your own circumstances.',
  registration: 'Aesthetic Medical Services Sdn Bhd', // PLACEHOLDER — add registration / licence no. if required
}

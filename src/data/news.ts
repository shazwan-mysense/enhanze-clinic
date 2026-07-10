/**
 * News & Events page content.
 *
 * Article titles and publication dates are transcribed from the live
 * enhanzeclinic.com news listing (July 2026) — do not edit without
 * client confirmation. Excerpts are new editorial summaries written
 * for this redesign; they intentionally avoid medical claims.
 *
 * Individual article pages do not exist yet: links point to
 * #/news/<slug>, which renders a polished "coming soon" view.
 */

import type { ConsultationContent } from '../components/ConsultationCTA'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const newsHero = {
  eyebrow: 'News & Events',
  heading: 'Insights for More Informed Treatment Decisions',
  description:
    'Explore educational articles, clinic guidance and treatment-related information across skin, body and wellness.',
  primary: { label: 'Explore Articles', targetId: 'news-featured' },
  secondary: { label: 'Book a Consultation', href: '#/appointment' },
  image: img('news-hero.png'),
  imageAlt:
    'Editorial desk scene representing Enhanze Clinic news and educational articles',
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

export const newsIntro = {
  eyebrow: 'From the Clinic',
  heading: 'Clearer Information, Thoughtfully Presented',
  body: 'The Enhanze Clinic journal brings together educational content covering common concerns, available treatment categories and considerations before seeking professional aesthetic care.',
  statement:
    'Articles provide general information only and should not replace personalised medical consultation or assessment.',
}

/* ------------------------------------------------------------------ */
/* Topics                                                              */
/* ------------------------------------------------------------------ */

export type NewsTopic =
  | 'Skin'
  | 'Body'
  | 'Face'
  | 'Treatment Technology'
  | 'Clinic Guides'
  | 'Hair & Wellness'

export const newsTopics: Array<'All Articles' | NewsTopic> = [
  'All Articles',
  'Skin',
  'Body',
  'Face',
  'Treatment Technology',
  'Clinic Guides',
  'Hair & Wellness',
]

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export interface NewsArticle {
  id: string
  slug: string
  title: string
  category: NewsTopic
  excerpt: string
  image: string
  alt: string
  /** verified from the live site listing */
  date: string
  featured?: boolean
  keywords: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'stretch-mark-treatment',
    slug: 'cara-hilangkan-stretch-mark',
    title: 'Cara Hilangkan Stretch Mark dengan Rawatan yang Berkesan',
    category: 'Body',
    excerpt:
      'Explore common causes of stretch marks, treatment considerations and the role of professional assessment.',
    image: img('news-stretch-mark-treatment.png'),
    alt: 'Woman reviewing a stretch-mark concern for an educational clinic article',
    date: '31 March 2026',
    featured: true,
    keywords: ['stretch marks', 'body', 'skin texture', 'rawatan'],
  },
  {
    id: 'acne-scars-guide',
    slug: 'parut-jerawat',
    title: 'Parut Jerawat: Jenis, Punca & Rawatan Terbaik di Malaysia',
    category: 'Skin',
    excerpt:
      'Learn about different acne-scar patterns, common causes and the treatment options that may be discussed during consultation.',
    image: img('news-acne-scars-guide.png'),
    alt: 'Woman examining acne marks and skin texture in a mirror',
    date: '30 March 2026',
    keywords: ['acne', 'scars', 'parut jerawat', 'skin'],
  },
  {
    id: 'v-shape-face',
    slug: 'v-shape-face-without-surgery',
    title: 'How to Get a V Shape Face Without Surgery in Malaysia',
    category: 'Face',
    excerpt:
      'Explore non-surgical facial-contouring considerations and why treatment planning should be personalised.',
    image: img('news-v-shape-face.png'),
    alt: 'Woman examining her jawline in a clinic mirror',
    date: '27 March 2026',
    keywords: ['v shape', 'jawline', 'contour', 'face'],
  },
  {
    id: 'facial-pigmentation',
    slug: 'jeragat-muka',
    title: 'Jeragat Muka: Punca & Cara Hilangkan Dengan Berkesan',
    category: 'Skin',
    excerpt:
      'Understand common pigmentation concerns and the importance of identifying suitable treatment approaches.',
    image: img('news-facial-pigmentation.png'),
    alt: 'Woman examining facial pigmentation on her cheek',
    date: '26 March 2026',
    keywords: ['pigmentation', 'jeragat', 'freckles', 'skin tone'],
  },
  {
    id: 'common-skin-concerns',
    slug: 'masalah-kulit-wajah',
    title: 'Masalah Kulit Wajah: Punca, Jenis & Cara Rawatan Berkesan',
    category: 'Skin',
    excerpt:
      'A general guide to common facial skin concerns, possible contributing factors and when to seek professional advice.',
    image: img('news-common-skin-concerns.png'),
    alt: 'Woman reviewing common facial skin concerns in a mirror',
    date: '25 March 2026',
    keywords: ['skin concerns', 'masalah kulit', 'facial skin'],
  },
  {
    id: 'pico-laser-pigmentation',
    slug: 'pico-laser-pigmentation',
    title: 'Pico Laser for Freckles, Pigmentation & Scars',
    category: 'Treatment Technology',
    excerpt:
      'Learn how Pico laser technology may be considered for selected pigmentation, freckle and scar-related concerns.',
    image: img('news-pico-laser-pigmentation.png'),
    alt: 'Client receiving a professional non-invasive laser treatment',
    date: '24 March 2026',
    keywords: ['pico laser', 'pigmentation', 'freckles', 'laser'],
  },
  {
    id: 'pico-laser-comparison',
    slug: 'pico-laser-comparison',
    title: 'Pico Laser vs Other Lasers: Which Is Better?',
    category: 'Treatment Technology',
    excerpt:
      'Compare general differences between laser technologies and why suitability depends on the concern and professional assessment.',
    image: img('news-pico-laser-comparison.png'),
    alt: 'Two aesthetic laser handpieces arranged for comparison',
    date: '20 March 2026',
    keywords: ['pico laser', 'laser comparison', 'technology'],
  },
  {
    id: 'choosing-aesthetic-clinic',
    slug: 'how-to-choose-aesthetic-clinic',
    title: 'Aesthetic Clinic Near Me: How to Choose the Right One',
    category: 'Clinic Guides',
    excerpt:
      'Consider the practical factors that may help when selecting a professional aesthetic clinic in Malaysia.',
    image: img('news-choosing-aesthetic-clinic.png'),
    alt: 'Client reviewing appointment information inside a clinic reception area',
    date: '18 March 2026',
    keywords: ['aesthetic clinic', 'choosing', 'guide', 'malaysia'],
  },
  {
    id: 'lip-augmentation',
    slug: 'lip-augmentation-malaysia',
    title: 'Lip Augmentation Malaysia: Does It Hurt & Side Effects',
    category: 'Face',
    excerpt:
      'Explore common questions around lip augmentation, comfort, consultation and potential side effects.',
    image: img('news-lip-augmentation.png'),
    alt: 'Woman examining her natural lip shape in a mirror',
    date: '16 March 2026',
    keywords: ['lip augmentation', 'lips', 'filler'],
  },
  {
    id: 'hair-loss-aftercare',
    slug: 'hair-loss-aftercare',
    title: 'Hair Loss Treatment Near Me: What to Expect After Care',
    category: 'Hair & Wellness',
    excerpt:
      'Understand general aftercare considerations and follow-up expectations after seeking treatment for hair concerns.',
    image: img('news-hair-loss-aftercare.png'),
    alt: 'Woman examining her hairline as part of hair-care follow-up',
    date: '13 March 2026',
    keywords: ['hair loss', 'aftercare', 'wellness', 'scalp'],
  },
]

export const articleHref = (slug: string) => `#/news/${slug}`

export const newsDisclaimer =
  'Content is provided for general educational purposes and does not replace professional medical consultation, diagnosis or treatment.'

/* ------------------------------------------------------------------ */
/* Clinic updates                                                      */
/* ------------------------------------------------------------------ */

export const newsUpdates = {
  eyebrow: 'Stay Informed',
  heading: 'Clinic Updates and Educational Guidance',
  body: 'Follow Enhanze Clinic for new educational articles, clinic updates and information about available treatment categories.',
  actions: [
    { label: 'Follow on Instagram', href: '#', style: 'outline-light' }, // PLACEHOLDER — link real profile
    { label: 'Contact the Clinic', href: '#/contact', style: 'outline-light' },
    { label: 'Book a Consultation', href: '#/appointment', style: 'solid' },
  ],
}

/* ------------------------------------------------------------------ */
/* Consultation CTA (shared component)                                 */
/* ------------------------------------------------------------------ */

export const newsCta: ConsultationContent = {
  label: 'Need Personalised Guidance?',
  heading: 'Articles Are a Starting Point, Not a Diagnosis',
  description:
    'Speak with the Enhanze team about your concerns, suitable treatment options and the next steps for professional consultation.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

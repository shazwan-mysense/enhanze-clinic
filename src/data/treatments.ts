/**
 * Signature treatment pages (Endolift, Ultherapy Prime) — mock designs
 * based on Yu Xuan's content drafts + the Asana USP brief.
 *
 * TODO: Body copy marked below should be replaced with Yu Xuan's final
 * approved wording where the source draft was not fully legible.
 * Claims retained from the source material: Ultherapy FDA clearance,
 * 2,000,000+ worldwide treatments, 90%+ satisfaction, 20+ years, LCP.
 */

import type { ConsultationContent } from '../components/ConsultationCTA'
import type { FaqContent } from '../components/pricing/PricingFAQ'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

export interface TreatmentPageData {
  slug: string
  docTitle: string
  hero: { eyebrow: string; heading: string; description: string; image: string; imageAlt: string; focus: string }
  intro: { eyebrow: string; heading: string; paragraphs: string[] }
  highlights: { eyebrow: string; heading: string; items: { title: string; detail: string }[] }
  areas: { eyebrow: string; heading: string; description: string; groups: { title: string; items: string[] }[] }
  stats: { value: string; label: string }[]
  comparison: { eyebrow: string; heading: string; note: string; columns: [string, string]; rows: { label: string; a: string; b: string }[] }
  steps: { eyebrow: string; heading: string; items: { name: string; detail: string }[] }
  faq: FaqContent
  cta: ConsultationContent
}

const sharedCtaImage = img('home-consultation-cta.png')
const sharedCtaAlt =
  'A clinician showing treatment information on a tablet to a patient during a consultation'

/* ------------------------------------------------------------------ */
/* Endolift                                                            */
/* ------------------------------------------------------------------ */

export const endolift: TreatmentPageData = {
  slug: 'endolift',
  docTitle: 'Endolift — Enhanze Clinic',
  hero: {
    eyebrow: 'Endolift',
    heading: 'Lift. Tighten. Sculpt.',
    description:
      'A minimally invasive laser treatment designed to support lifting, tightening and re-contouring of the face, neck and selected body areas — performed under medical supervision at Enhanze Clinic.',
    image: img('price-category-skin.png'),
    imageAlt: 'A woman receiving a facial laser treatment in a softly lit clinic room',
    focus: '70% 25%',
  },
  intro: {
    eyebrow: 'What Is Endolift?',
    heading: 'Laser Lifting That Works from the Inside Out',
    // TODO: Replace with Yu Xuan's final approved paragraphs.
    paragraphs: [
      'Endolift is a minimally invasive laser treatment that uses a very fine optical fibre — thinner than a strand of hair — placed just beneath the skin to deliver laser energy directly to the deeper layers.',
      'The energy is designed to stimulate collagen remodelling and support skin retraction, which is why Endolift is often considered for skin laxity and facial-contour concerns. Suitability is always confirmed through professional consultation and assessment.',
    ],
  },
  highlights: {
    eyebrow: 'Why Enhanze',
    heading: 'What Makes Endolift at Enhanze Special',
    items: [
      { title: 'More Than 20 Years of Experience', detail: 'Treatments guided by the clinic’s two decades of medical aesthetic practice in Malaysia.' },
      { title: 'LCP-Certified Doctors', detail: 'Performed by doctors holding the Letter of Credentialing and Privileging (MOH).' },
      { title: 'Safety First, Results a Must', detail: 'The clinic’s founding philosophy — responsible planning before any procedure.' },
      { title: 'Instant Results', detail: 'Contour changes may be visible soon after treatment, with continued improvement as collagen remodels.' },
      { title: 'Minimal Downtime', detail: 'Designed so most patients can return to daily activities quickly after their session.' },
    ],
  },
  areas: {
    eyebrow: 'Treatment Areas',
    heading: 'Where Endolift May Be Applied',
    description:
      'Treatment areas are confirmed during consultation according to individual concerns and suitability.',
    // TODO: Confirm the final area list against Yu Xuan's draft.
    groups: [
      { title: 'Face & Neck', items: ['Brows', 'Cheeks', 'Jawline', 'Double chin', 'Neck'] },
      { title: 'Body', items: ['Upper arms', 'Abdomen', 'Inner thighs', 'Knees'] },
    ],
  },
  stats: [
    { value: '90%+', label: 'Patient satisfaction rates' },
    { value: '20+', label: 'Years of experience at Enhanze Clinic' },
    { value: 'LCP', label: 'Letter of Credentialing and Privileging-certified doctors' },
  ],
  comparison: {
    eyebrow: 'How It Compares',
    heading: 'Endolift and Ultherapy Prime',
    note: 'A general comparison — the suitable option depends on your concerns and professional assessment.', // TODO: align cells with Yu Xuan's final table
    columns: ['Endolift', 'Ultherapy Prime'],
    rows: [
      { label: 'Method', a: 'Laser energy delivered under the skin through a fine optical fibre', b: 'Micro-focused ultrasound delivered from outside the skin' },
      { label: 'Target areas', a: 'Face, neck and selected body areas', b: 'Face, brow, jawline, neck and décolletage lines' },
      { label: 'Results', a: 'Contour changes may appear soon after treatment', b: 'Gradual lifting as collagen rebuilds over months' },
      { label: 'Downtime', a: 'Minimal — most return to daily activities quickly', b: 'Typically none' },
      { label: 'Suitability', a: 'Confirmed through consultation', b: 'Confirmed through consultation' },
    ],
  },
  steps: {
    eyebrow: 'The Procedure',
    heading: 'How an Endolift Session Works',
    items: [
      { name: 'Consultation & Assessment', detail: 'Your concerns, expectations and suitability are reviewed with the doctor.' },
      { name: 'Preparation & Local Anaesthesia', detail: 'The treatment area is prepared and numbed for comfort.' },
      { name: 'Treatment Session', detail: 'The fine laser fibre is guided beneath the skin to treat the planned areas.' },
      { name: 'Recovery & Results Tracking', detail: 'Aftercare guidance is provided and progress is reviewed at follow-up.' },
    ],
  },
  faq: {
    eyebrow: 'Endolift FAQ',
    heading: 'Questions About Endolift',
    items: [
      { question: 'How is Endolift different from Ultherapy Prime?', answer: 'Endolift delivers laser energy beneath the skin through a fine fibre, while Ultherapy Prime uses focused ultrasound from outside the skin. The clinic can advise which approach may suit your concerns after assessment.' },
      { question: 'Is Endolift painful?', answer: 'The treatment is performed under local anaesthesia to keep you comfortable. Sensations vary by individual and treatment area.' },
      { question: 'How long does a session take?', answer: 'Session length depends on the areas being treated and is confirmed during consultation.' },
      { question: 'Is there any downtime?', answer: 'Endolift is designed with minimal downtime in mind. Any temporary effects and aftercare steps are explained before treatment.' },
      { question: 'Who is a good candidate for Endolift?', answer: 'Suitability depends on your skin condition, concerns and medical background, and is confirmed through professional consultation.' },
    ],
  },
  cta: {
    label: 'Considering Endolift?',
    heading: 'Discuss Your Suitability with the Enhanze Team',
    description: 'Speak with the clinic about your concerns, expectations and whether Endolift may be a suitable option for you.',
    primary: { label: 'Book a Consultation', href: '#/appointment' },
    secondary: { label: 'Contact the Clinic', href: '#/contact' },
    image: sharedCtaImage,
    imageAlt: sharedCtaAlt,
  },
}

/* ------------------------------------------------------------------ */
/* Ultherapy Prime                                                     */
/* ------------------------------------------------------------------ */

export const ultherapyPrime: TreatmentPageData = {
  slug: 'ultherapy-prime',
  docTitle: 'Ultherapy Prime — Enhanze Clinic',
  hero: {
    eyebrow: 'Ultherapy Prime',
    heading: 'FDA-Cleared, Non-Surgical Skin Lifting',
    description:
      'Micro-focused ultrasound with real-time imaging, designed to lift and tighten sagging skin on the face, brow and neck — without surgery or needles.',
    image: img('home-hero-skin-tightening-desktop.png'),
    imageAlt: 'A woman with a handheld skin-tightening device in a warm clinic setting',
    focus: '78% 30%',
  },
  intro: {
    eyebrow: 'What Is Ultherapy Prime?',
    heading: 'The Next Generation of Ultherapy',
    // TODO: Replace with Yu Xuan's final approved paragraphs.
    paragraphs: [
      'Ultherapy Prime is the latest generation of the Ultherapy platform. It uses micro-focused ultrasound to reach the deeper foundation layers of the skin — the same layers addressed in surgical lifting — without cutting the surface.',
      'Real-time ultrasound imaging lets the doctor see the layers being treated and place energy precisely, supporting natural-looking lifting as collagen gradually rebuilds. Suitability is confirmed through professional consultation.',
    ],
  },
  highlights: {
    eyebrow: 'Why Ultherapy Prime',
    heading: 'What Makes Ultherapy Prime Special',
    items: [
      { title: 'U.S. FDA-Cleared', detail: 'An FDA-cleared non-invasive skin lifting treatment.' },
      { title: 'The World’s Leading Choice', detail: 'One of the most widely chosen non-invasive lifting treatments, with more than 2,000,000 treatments performed worldwide.' },
      { title: 'Recognised as the Gold Standard', detail: 'Widely recognised as the gold standard for non-surgical skin lifting.' },
      { title: 'Real-Time Imaging', detail: 'Ultrasound visualisation helps the doctor see and treat the right layer precisely.' },
      { title: 'LCP-Certified Doctors', detail: 'Performed by doctors holding the Letter of Credentialing and Privileging (MOH).' },
    ],
  },
  areas: {
    eyebrow: 'Treatment Areas',
    heading: 'Where Ultherapy Prime May Be Applied',
    description:
      'Treatment areas are confirmed during consultation according to individual concerns and suitability.',
    // TODO: Confirm the final area list against Yu Xuan's draft.
    groups: [
      { title: 'Face & Brow', items: ['Brow line', 'Cheeks', 'Chin', 'Jawline'] },
      { title: 'Neck & Chest', items: ['Under the chin', 'Neck', 'Décolletage lines'] },
    ],
  },
  stats: [
    { value: '2,000,000+', label: 'Treatments performed worldwide' },
    { value: '20+', label: 'Years of experience at Enhanze Clinic' },
    { value: 'LCP', label: 'Letter of Credentialing and Privileging-certified doctors' },
  ],
  comparison: {
    eyebrow: 'How It Compares',
    heading: 'Ultherapy and Ultherapy Prime',
    note: 'A general comparison of the two generations.', // TODO: align cells with Yu Xuan's final table
    columns: ['Ultherapy Prime', 'Classic Ultherapy'],
    rows: [
      { label: 'Release', a: '2025', b: '2008' },
      { label: 'Comfort', a: 'More comfortable delivery designed into the newer platform', b: 'Effective, with a firmer treatment sensation' },
      { label: 'Imaging', a: 'Enhanced real-time visualisation for greater precision', b: 'Real-time imaging' },
      { label: 'Treatment time', a: 'Streamlined sessions', b: 'Longer session times' },
      { label: 'Treatment areas', a: 'Face, brow, neck and décolletage', b: 'Face, brow, neck and décolletage' },
    ],
  },
  steps: {
    eyebrow: 'The Procedure',
    heading: 'How an Ultherapy Prime Session Works',
    items: [
      { name: 'Skin Assessment & Consultation', detail: 'Your skin condition, concerns and suitability are reviewed with the doctor.' },
      { name: 'Preparation & Ultrasound Imaging', detail: 'The area is prepared and imaged so energy can be placed precisely.' },
      { name: 'Treatment Session', detail: 'Micro-focused ultrasound is delivered to the planned areas.' },
      { name: 'Aftercare & Results Tracking', detail: 'You can usually resume your day immediately; progress is reviewed over the following months.' },
    ],
  },
  faq: {
    eyebrow: 'Ultherapy Prime FAQ',
    heading: 'Questions About Ultherapy Prime',
    items: [
      { question: 'What can I expect during the treatment?', answer: 'The doctor images the treatment area, then delivers focused ultrasound energy in passes. You may feel brief warmth or tingling as energy is deposited.' },
      { question: 'Is Ultherapy Prime painful?', answer: 'Comfort varies by individual. The Prime platform is designed to be more comfortable than earlier generations, and the team will guide you through managing any discomfort.' },
      { question: 'Is there any downtime?', answer: 'There is typically no downtime — most patients return to normal activities immediately.' },
      { question: 'When will I see results?', answer: 'Some initial effect may be visible early, with gradual improvement over two to three months as collagen rebuilds. Individual results vary.' },
      { question: 'Who is a good candidate for Ultherapy Prime?', answer: 'Often considered for mild to moderate skin laxity. Suitability is confirmed through professional consultation and assessment.' },
    ],
  },
  cta: {
    label: 'Considering Ultherapy Prime?',
    heading: 'Discuss Your Suitability with the Enhanze Team',
    description: 'Speak with the clinic about your concerns, expectations and whether Ultherapy Prime may be a suitable option for you.',
    primary: { label: 'Book a Consultation', href: '#/appointment' },
    secondary: { label: 'Contact the Clinic', href: '#/contact' },
    image: sharedCtaImage,
    imageAlt: sharedCtaAlt,
  },
}

/* Featured band on the Procedures page */
export const signatureTreatments = {
  eyebrow: 'Signature Treatments',
  heading: 'Explore Our Featured Lifting Treatments',
  items: [
    { name: 'Endolift', tagline: 'Lift. Tighten. Sculpt.', description: 'Minimally invasive laser lifting for the face, neck and selected body areas.', href: '#/procedures/endolift', image: endolift.hero.image, alt: endolift.hero.imageAlt },
    { name: 'Ultherapy Prime', tagline: 'FDA-cleared, non-surgical lifting', description: 'Micro-focused ultrasound with real-time imaging for face, brow and neck.', href: '#/procedures/ultherapy-prime', image: ultherapyPrime.hero.image, alt: ultherapyPrime.hero.imageAlt },
  ],
}

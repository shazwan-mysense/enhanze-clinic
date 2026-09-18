/**
 * Individual service (concern) pages — one per item in the Procedures
 * treatment directory. Routes: #/procedures/<slug>
 *
 * ──────────────────────────────────────────────────────────────────
 * CONTENT STATUS — READ BEFORE PUBLISHING
 *
 * 1. TREATMENT LISTS + PRICES are real: every entry is copied from
 *    ./pricing.ts, which was transcribed from the client's live price
 *    page (July 2026). Nothing here invents a treatment or a price.
 *
 * 2. DESCRIPTIVE COPY (overview paragraphs, contributing factors,
 *    FAQ answers) is drafted general information written for this
 *    redesign. It deliberately avoids outcome claims, timelines and
 *    success rates, and routes every recommendation back to
 *    professional consultation.
 *    TODO: Dato' Dr. Sutina / the clinic must review and approve all
 *    clinical wording before this goes live. Malaysian medical
 *    advertising rules (Medicines (Advertisement and Sale) Act 1956)
 *    restrict claims about results.
 *
 * 3. SERVICES WITH NO PRICED TREATMENTS are marked `treatments: []`.
 *    Those pages render an enquiry block instead of a price table.
 *    TODO: ask the client which treatments to list for each.
 * ──────────────────────────────────────────────────────────────────
 */

import type { ConsultationContent } from '../components/ConsultationCTA'
import type { FaqContent } from '../components/pricing/PricingFAQ'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type ServiceCategory = 'Skin' | 'Body' | 'Health'

export interface ServicePriceRow {
  name: string
  price: string
}

export interface ServicePageData {
  slug: string
  label: string
  category: ServiceCategory
  /** small label above the H1 */
  eyebrow: string
  docTitle: string
  /** drafted meta description for the SEO handover */
  metaDescription: string
  heroDescription: string
  overview: { eyebrow: string; heading: string; paragraphs: string[] }
  factors: { eyebrow: string; heading: string; items: { title: string; detail: string }[] }
  treatments: {
    eyebrow: string
    heading: string
    description: string
    items: ServicePriceRow[]
  }
  /** optional cross-links to the signature treatment pages */
  signature?: { name: string; href: string }[]
  faq: FaqContent
  /** slugs of sibling services shown at the foot of the page */
  related: string[]
}

/* ------------------------------------------------------------------ */
/* Shared blocks (identical on every service page)                     */
/* ------------------------------------------------------------------ */

export const categoryImage: Record<ServiceCategory, string> = {
  Skin: img('price-category-skin.png'),
  Body: img('price-category-body.png'),
  Health: img('price-category-health.png'),
}

export const categoryImageAlt: Record<ServiceCategory, string> = {
  Skin: 'Close view of a facial treatment being performed in a clinic room',
  Body: 'Body contouring treatment being carried out in a clinic setting',
  Health: 'Doctor discussing wellness options with a patient during a consultation',
}

export const serviceProcess = {
  eyebrow: 'What to Expect',
  heading: 'How Treatment Begins at Enhanze',
  steps: [
    {
      name: 'Consultation',
      detail: 'Discuss your concern, medical background and expectations with the clinic team.',
    },
    {
      name: 'Assessment',
      detail: 'The doctor examines the area and considers which options are appropriate for you.',
    },
    {
      name: 'Personalised Plan',
      detail: 'You receive clear guidance on the suggested approach, preparation and any aftercare.',
    },
    {
      name: 'Review',
      detail: 'Progress is reviewed at follow-up so the plan can be adjusted where needed.',
    },
  ],
}

export const priceNote =
  'Prices are a general reference and may vary with treatment area, individual needs and professional assessment. Final pricing is confirmed after consultation.'

export const emptyTreatmentsNote =
  'Treatment options for this concern are discussed during consultation. Contact the clinic to ask what is currently available and suitable for you.'

export const serviceCta: ConsultationContent = {
  label: 'Personalised Guidance',
  heading: 'Speak with the Enhanze Team About Your Concern',
  description:
    'Every concern is different. Book a consultation to discuss your situation, suitable options and what to expect.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

const SIGNATURE = [
  { name: 'Endolift', href: '#/procedures/endolift' },
  { name: 'Ultherapy Prime', href: '#/procedures/ultherapy-prime' },
]

/* ================================================================== */
/* SKIN                                                                */
/* ================================================================== */

export const services: ServicePageData[] = [
  {
    slug: 'acne',
    label: 'Acne',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Acne Treatment — Enhanze Clinic',
    metaDescription:
      'Consultation-led acne care at Enhanze Clinic, Petaling Jaya. Explore treatment options for congested, acne-prone skin and post-acne marks.',
    heroDescription:
      'Consultation-led care for acne-prone skin, from active congestion to the marks breakouts can leave behind.',
    overview: {
      eyebrow: 'Understanding Acne',
      heading: 'A Skin Condition Worth Assessing Properly',
      paragraphs: [
        'Acne develops when pores become blocked with oil and dead skin cells, which can lead to congestion, inflammation and breakouts. It commonly appears on the face, but also affects the neck, chest and back, and it is not limited to teenagers.',
        'Because several factors can contribute at the same time, the clinic begins with assessment rather than a fixed treatment. Skin with active breakouts is usually approached differently from skin where the main concern is the marks and texture left afterwards.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Oil Production', detail: 'Higher oil production can make pores more likely to become blocked.' },
        { title: 'Hormonal Changes', detail: 'Hormonal shifts are a commonly discussed factor in adult acne.' },
        { title: 'Pore Congestion', detail: 'Build-up in the pores can contribute to persistent breakouts.' },
        { title: 'Skin Barrier Condition', detail: 'A disrupted barrier may affect how the skin responds to products and treatment.' },
        { title: 'Post-Acne Marks', detail: 'Marks and uneven texture may remain after breakouts have settled.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Acne-Prone Skin',
      description:
        'The options below are offered at the clinic. Which of them is appropriate depends on your skin and the doctor’s assessment.',
      items: [
        { name: 'Skin Clear (Drip)', price: 'RM350' },
        { name: 'Micro Needling MNT', price: 'From RM450' },
        { name: 'Pore Reduction', price: 'From RM800' },
        { name: 'Vampire Facial', price: 'From RM800' },
        { name: 'Acne Scar Reduction', price: 'From RM1200' },
      ],
    },
    faq: {
      eyebrow: 'Acne FAQ',
      heading: 'Questions About Acne Treatment',
      items: [
        {
          question: 'Do I need a consultation before treatment?',
          answer:
            'Yes. Acne has several possible contributing factors, so the clinic assesses your skin before suggesting any option.',
        },
        {
          question: 'Can active acne and acne scars be treated together?',
          answer:
            'They are usually approached as separate stages. The doctor will advise on sequencing during consultation.',
        },
        {
          question: 'Will I need more than one session?',
          answer:
            'Treatment plans vary by individual. The number of sessions, if any, is discussed after assessment.',
        },
        {
          question: 'Can I still use my own skincare?',
          answer:
            'Bring your current products or a list to the consultation so the team can advise on what to continue or pause.',
        },
      ],
    },
    related: ['scarring', 'open-pores', 'dull-and-dry-skin'],
  },

  {
    slug: 'dull-and-dry-skin',
    label: 'Dull and Dry Skin',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Dull and Dry Skin — Enhanze Clinic',
    metaDescription:
      'Hydration and skin rejuvenation options at Enhanze Clinic, Petaling Jaya, for skin that looks dull, dry or tired.',
    heroDescription:
      'Options for skin that looks tired, dry or lacking brightness, chosen after professional assessment.',
    overview: {
      eyebrow: 'Understanding Dull Skin',
      heading: 'When Skin Loses Its Freshness',
      paragraphs: [
        'Skin can begin to look dull or feel dry for many reasons, including dehydration, build-up of dead skin cells, sun exposure, sleep and general lifestyle. The change is often gradual, which is why people usually notice it in photographs before they notice it in the mirror.',
        'At the clinic, this concern is assessed rather than assumed. Skin that is dehydrated is handled differently from skin that is dry, and the approach may differ again where dullness sits alongside pigmentation or texture.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Dehydration', detail: 'Skin lacking water can look flat and feel tight, even when it is oily.' },
        { title: 'Surface Build-Up', detail: 'Accumulated dead skin cells can reduce how well the skin reflects light.' },
        { title: 'Sun Exposure', detail: 'Cumulative exposure is commonly discussed as a factor in skin quality.' },
        { title: 'Barrier Condition', detail: 'A compromised barrier can leave skin dry, sensitive or reactive.' },
        { title: 'Lifestyle Factors', detail: 'Sleep, hydration and stress are reviewed as part of the consultation.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Dull and Dry Skin',
      description:
        'The options below are offered at the clinic. Suitability depends on your skin condition and the doctor’s assessment.',
      items: [
        { name: 'Skin Light (Drip)', price: 'RM350' },
        { name: 'O2 Infusion Hydration', price: 'From RM480' },
        { name: 'Oxygeneo', price: 'From RM480' },
        { name: 'Mesoglow', price: 'From RM650' },
        { name: 'Skin Beauty Booster', price: 'From RM1200' },
      ],
    },
    faq: {
      eyebrow: 'Skin Quality FAQ',
      heading: 'Questions About Dull and Dry Skin',
      items: [
        {
          question: 'Is dull skin the same as dry skin?',
          answer:
            'Not necessarily. Dryness relates to oil, dehydration relates to water, and dullness can come from either or from surface build-up. The consultation clarifies which applies.',
        },
        {
          question: 'Can oily skin be dehydrated?',
          answer:
            'Yes, this combination is common and is one reason assessment matters before choosing an approach.',
        },
        {
          question: 'Is there any downtime with hydration treatments?',
          answer:
            'This depends on the specific treatment. Any expected downtime and aftercare is explained beforehand.',
        },
        {
          question: 'How do I know which option suits me?',
          answer:
            'The doctor reviews your skin and concerns during consultation and advises accordingly.',
        },
      ],
    },
    related: ['pigmentation', 'open-pores', 'wrinkles'],
  },

  {
    slug: 'wrinkles',
    label: 'Wrinkles',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Wrinkles and Fine Lines — Enhanze Clinic',
    metaDescription:
      'Non-surgical options for wrinkles and fine lines at Enhanze Clinic, Petaling Jaya. Consultation-led assessment by LCP-certified doctors.',
    heroDescription:
      'Non-surgical options for fine lines and wrinkles, planned around your features and professional assessment.',
    overview: {
      eyebrow: 'Understanding Wrinkles',
      heading: 'Lines Form for More Than One Reason',
      paragraphs: [
        'Fine lines and wrinkles develop as the skin’s collagen and elastin change over time. Repeated facial movement, sun exposure and volume loss in the deeper layers all play a part, which is why lines appear in different patterns on different faces.',
        'Because the cause differs from person to person, the clinic assesses the type and depth of lines before discussing options. Lines that appear with movement are considered separately from lines visible when the face is at rest.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Collagen Change', detail: 'Collagen and elastin naturally change with age, affecting firmness.' },
        { title: 'Facial Movement', detail: 'Repeated expression can contribute to lines in specific areas.' },
        { title: 'Sun Exposure', detail: 'Cumulative UV exposure is commonly discussed in relation to skin ageing.' },
        { title: 'Volume Loss', detail: 'Changes in the deeper layers can affect how lines and folds appear.' },
        { title: 'Skin Hydration', detail: 'Dehydrated skin can make fine lines appear more noticeable.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Wrinkles and Fine Lines',
      description:
        'The options below are offered at the clinic. The doctor advises which may be appropriate after assessing your skin.',
      items: [
        { name: 'RF Tightening', price: 'From RM500' },
        { name: 'Eye Wrinkles Reduction', price: 'From RM600' },
        { name: 'Fine Thradlift', price: 'From RM800' },
        { name: '4D Laser Lift', price: 'From RM1800' },
        { name: 'Liquid Face Lift', price: 'From RM2250' },
        { name: 'Thermage Face', price: 'From RM7200' },
      ],
    },
    signature: SIGNATURE,
    faq: {
      eyebrow: 'Wrinkles FAQ',
      heading: 'Questions About Wrinkles and Fine Lines',
      items: [
        {
          question: 'Are all wrinkles treated the same way?',
          answer:
            'No. Lines that appear with movement and lines visible at rest are usually approached differently, which is confirmed during assessment.',
        },
        {
          question: 'Is surgery required?',
          answer:
            'The treatments listed on this page are non-surgical. The doctor will explain what each involves during consultation.',
        },
        {
          question: 'When should I start considering treatment?',
          answer:
            'There is no fixed age. The clinic assesses your skin and concerns and advises what is reasonable for your situation.',
        },
        {
          question: 'Will my face still look natural?',
          answer:
            'Planning around your own features is part of the consultation. Discuss your expectations openly with the doctor.',
        },
      ],
    },
    related: ['sagging-skin', 'dull-and-dry-skin', 'lip-rejuvenation'],
  },

  {
    slug: 'pigmentation',
    label: 'Pigmentation',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Pigmentation Treatment — Enhanze Clinic',
    metaDescription:
      'Pigmentation and uneven skin tone options at Enhanze Clinic, Petaling Jaya, including Pico laser. Assessment by LCP-certified doctors.',
    heroDescription:
      'Assessment-led options for dark spots, uneven tone and other pigmentation concerns.',
    overview: {
      eyebrow: 'Understanding Pigmentation',
      heading: 'Not All Dark Spots Are the Same',
      paragraphs: [
        'Pigmentation appears when melanin is produced unevenly in the skin. It can show up as freckles, sun spots, melasma or the darker marks left after inflammation, and each of these behaves differently.',
        'Identifying the type matters before anything else, because an approach suited to one form of pigmentation may not suit another. This is assessed by the doctor during consultation.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Sun Exposure', detail: 'UV exposure is one of the most commonly discussed contributors.' },
        { title: 'Hormonal Influence', detail: 'Hormonal factors are often raised in relation to melasma.' },
        { title: 'Post-Inflammatory Marks', detail: 'Darker marks can remain after acne or skin irritation.' },
        { title: 'Skin Type', detail: 'Individual skin type affects how pigmentation presents and is managed.' },
        { title: 'Daily Protection', detail: 'Sun protection habits are reviewed as part of any pigmentation discussion.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Pigmentation',
      description:
        'The options below are offered at the clinic. The suitable choice depends on the type of pigmentation identified during assessment.',
      items: [
        { name: 'Skin Light (Drip)', price: 'RM350' },
        { name: 'Undereye Dark Circle Laser', price: 'From RM400' },
        { name: 'Pigmentation Treatment', price: 'From RM550' },
        { name: 'Pico Laser Lightening', price: 'From RM1200' },
      ],
    },
    faq: {
      eyebrow: 'Pigmentation FAQ',
      heading: 'Questions About Pigmentation',
      items: [
        {
          question: 'Why does the clinic need to identify the type first?',
          answer:
            'Different forms of pigmentation respond differently, so identifying the type guides which option is considered.',
        },
        {
          question: 'Does pigmentation come back?',
          answer:
            'Pigmentation can recur, particularly with sun exposure. Ongoing protection is discussed as part of the plan.',
        },
        {
          question: 'Is sunscreen still necessary after treatment?',
          answer:
            'Sun protection is generally advised regardless of treatment. The team will give you specific aftercare guidance.',
        },
        {
          question: 'Can melasma be treated?',
          answer:
            'Melasma is assessed individually, as it behaves differently from sun spots. The doctor will advise during consultation.',
        },
      ],
    },
    related: ['dull-and-dry-skin', 'scarring', 'acne'],
  },

  {
    slug: 'open-pores',
    label: 'Open Pores',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Open Pores Treatment — Enhanze Clinic',
    metaDescription:
      'Treatment options for enlarged or open pores at Enhanze Clinic, Petaling Jaya. Consultation-led assessment and planning.',
    heroDescription:
      'Options for enlarged pores and uneven skin texture, selected after the doctor assesses your skin.',
    overview: {
      eyebrow: 'Understanding Open Pores',
      heading: 'Pore Size Is Influenced by Several Things',
      paragraphs: [
        'Pores can appear larger where oil production is higher, where the skin has lost some firmness, or where congestion has stretched them over time. They are most commonly noticed across the nose, cheeks and forehead.',
        'Because appearance is affected by both oil and skin firmness, the clinic assesses which factor is more relevant for you before discussing any option.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Oil Production', detail: 'Higher oil production is frequently linked to more visible pores.' },
        { title: 'Congestion', detail: 'Build-up within the pore can make it appear more prominent.' },
        { title: 'Skin Firmness', detail: 'Reduced firmness around the pore can affect how large it looks.' },
        { title: 'Texture and Scarring', detail: 'Existing texture from past breakouts may be assessed alongside pores.' },
        { title: 'Skincare Routine', detail: 'Current products and habits are reviewed during consultation.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Open Pores',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'Micro Needling MNT', price: 'From RM450' },
        { name: 'Ultra RF Face', price: 'From RM500' },
        { name: 'Pore Reduction', price: 'From RM800' },
        { name: 'ETWO Sublative', price: 'From RM800' },
      ],
    },
    faq: {
      eyebrow: 'Open Pores FAQ',
      heading: 'Questions About Open Pores',
      items: [
        {
          question: 'Can pores be closed permanently?',
          answer:
            'Pores are a normal part of skin structure. Treatment discussions focus on appearance and skin condition rather than removal.',
        },
        {
          question: 'Is this related to acne?',
          answer:
            'Pore congestion and acne can occur together. The doctor will assess whether both should be addressed.',
        },
        {
          question: 'How many sessions are needed?',
          answer:
            'This varies by individual and is discussed after assessment.',
        },
        {
          question: 'Is there downtime?',
          answer:
            'It depends on the treatment. Expected downtime and aftercare are explained before anything is scheduled.',
        },
      ],
    },
    related: ['acne', 'scarring', 'dull-and-dry-skin'],
  },

  {
    slug: 'skin-tags',
    label: 'Skin Tags',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Skin Tags — Enhanze Clinic',
    metaDescription:
      'Skin tag assessment and removal enquiries at Enhanze Clinic, Petaling Jaya. Speak with the clinic about suitable options.',
    heroDescription:
      'Assessment and advice for skin tags, with options discussed directly with the clinic.',
    overview: {
      eyebrow: 'Understanding Skin Tags',
      heading: 'Small Growths That Should Still Be Checked',
      paragraphs: [
        'Skin tags are small, soft growths that commonly appear where skin folds or rubs together, such as the neck, underarms and eyelids. They are usually harmless, but they can catch on clothing or jewellery and become uncomfortable.',
        'Any new or changing skin growth should be examined by a doctor rather than self-diagnosed, so the clinic begins with an in-person assessment.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Skin Friction', detail: 'Areas where skin rubs together are common sites for skin tags.' },
        { title: 'Common Locations', detail: 'The neck, underarms and eyelid area are frequently affected.' },
        { title: 'Comfort and Irritation', detail: 'Tags that catch on clothing or jewellery may cause discomfort.' },
        { title: 'Appearance Concerns', detail: 'Visible locations are a common reason people seek assessment.' },
        { title: 'Medical Review', detail: 'Any changing growth should be examined by a doctor.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'Skin Tags FAQ',
      heading: 'Questions About Skin Tags',
      items: [
        {
          question: 'Should I remove a skin tag myself?',
          answer:
            'No. Removal should be carried out by a medical professional after the growth has been examined.',
        },
        {
          question: 'Are skin tags harmful?',
          answer:
            'They are usually harmless, but any new or changing growth should be assessed by a doctor.',
        },
        {
          question: 'How do I find out my options?',
          answer:
            'Contact the clinic to arrange an assessment. Suitable options are discussed after the doctor examines the area.',
        },
        {
          question: 'Do skin tags come back?',
          answer:
            'New skin tags can develop over time. This is something to discuss with the doctor during your visit.',
        },
      ],
    },
    related: ['scarring', 'open-pores', 'pigmentation'],
  },

  {
    slug: 'sagging-skin',
    label: 'Sagging Skin',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Sagging Skin and Skin Lifting — Enhanze Clinic',
    metaDescription:
      'Non-surgical lifting and skin tightening options at Enhanze Clinic, Petaling Jaya, including Ultherapy and thread lifting.',
    heroDescription:
      'Non-surgical lifting and tightening options for skin laxity on the face and neck.',
    overview: {
      eyebrow: 'Understanding Skin Laxity',
      heading: 'Firmness Changes in the Deeper Layers',
      paragraphs: [
        'Skin laxity becomes noticeable when the deeper support structures of the skin change, often showing first along the jawline, cheeks and neck. It is a gradual process influenced by age, sun exposure and individual factors.',
        'The clinic assesses the degree and location of laxity before discussing options, since approaches suited to mild laxity differ from those considered for more advanced changes.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Collagen Change', detail: 'Reduced collagen affects the skin’s structural support.' },
        { title: 'Facial Volume', detail: 'Changes in underlying volume can affect how skin sits on the face.' },
        { title: 'Sun Exposure', detail: 'Cumulative UV exposure is commonly discussed as a contributing factor.' },
        { title: 'Weight Changes', detail: 'Significant weight change may affect skin firmness.' },
        { title: 'Individual Factors', detail: 'Skin type and personal history are considered during assessment.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Sagging Skin',
      description:
        'The options below are offered at the clinic. Which is appropriate depends on the assessment of your skin and concerns.',
      items: [
        { name: 'Endermolift', price: 'From RM300' },
        { name: 'RF Tightening', price: 'From RM500' },
        { name: 'Sublime Jawline Lift', price: 'From RM600' },
        { name: 'Fine Thradlift', price: 'From RM800' },
        { name: 'Ultherapy Face', price: 'From RM4800' },
        { name: 'Aptos Threadlift', price: 'From RM4800' },
        { name: 'Thermage Face', price: 'From RM7200' },
      ],
    },
    signature: SIGNATURE,
    faq: {
      eyebrow: 'Skin Lifting FAQ',
      heading: 'Questions About Sagging Skin',
      items: [
        {
          question: 'Is a facelift the only option?',
          answer:
            'The treatments listed here are non-surgical. The doctor will explain what each involves and what is realistic for your situation.',
        },
        {
          question: 'How do I know which treatment suits me?',
          answer:
            'Suitability depends on the degree and location of laxity, which is confirmed during assessment.',
        },
        {
          question: 'Is there downtime?',
          answer:
            'This varies between treatments. Expected downtime and aftercare are explained before treatment.',
        },
        {
          question: 'How long do results last?',
          answer:
            'This differs by individual and treatment. The doctor will set out what to expect during consultation.',
        },
      ],
    },
    related: ['wrinkles', 'loose-skin', 'dull-and-dry-skin'],
  },

  {
    slug: 'scarring',
    label: 'Scarring',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Scar Treatment — Enhanze Clinic',
    metaDescription:
      'Acne scarring and scar texture options at Enhanze Clinic, Petaling Jaya. Assessment-led planning by LCP-certified doctors.',
    heroDescription:
      'Options for acne scarring and uneven skin texture, planned around the scar type identified at consultation.',
    overview: {
      eyebrow: 'Understanding Scarring',
      heading: 'Scar Type Guides the Approach',
      paragraphs: [
        'Scars form as part of the skin’s natural healing process, and they can present very differently. Some sit below the surrounding skin, some sit above it, and some show mainly as a change in colour rather than texture.',
        'Identifying the type and depth is the first step at the clinic, because options considered for indented scarring may not be appropriate for raised or discoloured scars.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Scar Type', detail: 'Indented, raised and discoloured scars are assessed differently.' },
        { title: 'Original Cause', detail: 'Acne, injury or surgery may all leave different scar patterns.' },
        { title: 'Healing Response', detail: 'Individual healing tendencies are considered during assessment.' },
        { title: 'Scar Age', detail: 'How long a scar has been present is part of the discussion.' },
        { title: 'Skin Tone', detail: 'Skin tone can influence which options are appropriate.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Scarring',
      description:
        'The options below are offered at the clinic, with the appropriate choice confirmed after assessment.',
      items: [
        { name: 'Micro Needling MNT', price: 'From RM450' },
        { name: 'ETWO Sublative', price: 'From RM800' },
        { name: 'PRP – HA', price: 'From RM800' },
        { name: 'Laser Stretch Mark', price: 'From RM800' },
        { name: 'Acne Scar Reduction', price: 'From RM1200' },
      ],
    },
    faq: {
      eyebrow: 'Scarring FAQ',
      heading: 'Questions About Scar Treatment',
      items: [
        {
          question: 'Can scars be removed completely?',
          answer:
            'Discussions focus on the appearance and texture of scars. The doctor will explain what is realistic for your scar type.',
        },
        {
          question: 'Does it matter how old the scar is?',
          answer:
            'Scar age is one of the factors reviewed during assessment and may influence the approach.',
        },
        {
          question: 'Can acne scars be treated while I still get breakouts?',
          answer:
            'Active acne is usually addressed first. The doctor will advise on sequencing.',
        },
        {
          question: 'How many sessions will I need?',
          answer:
            'This varies by individual and scar type, and is discussed after assessment.',
        },
      ],
    },
    related: ['acne', 'open-pores', 'stretch-marks'],
  },

  {
    slug: 'hair-removal',
    label: 'Hair Removal',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Facial Hair Removal — Enhanze Clinic',
    metaDescription:
      'Laser hair removal for the face at Enhanze Clinic, Petaling Jaya. Covers lips, chin, full face and upper neck.',
    heroDescription:
      'Hair removal for the face, including lips, chin, full face and upper neck areas.',
    overview: {
      eyebrow: 'Understanding Hair Removal',
      heading: 'A Treatment Planned Around Your Skin and Hair',
      paragraphs: [
        'Unwanted facial hair is a common concern and can be influenced by genetics and hormonal factors. Many people find shaving, waxing or threading inconvenient to maintain over time.',
        'At the clinic, hair and skin type are assessed together before treatment, because both influence how the area is approached and how sessions are planned.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Treatment Area', detail: 'Lips, chin, full face and upper neck are priced as separate areas.' },
        { title: 'Hair and Skin Type', detail: 'Both are assessed together before any session is planned.' },
        { title: 'Hormonal Factors', detail: 'Hormonal influences may be discussed where relevant.' },
        { title: 'Session Planning', detail: 'Hair grows in cycles, so sessions are usually spaced over time.' },
        { title: 'Aftercare', detail: 'Sun protection and skin aftercare guidance is provided.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Facial Hair Removal at the Clinic',
      description:
        'Pricing is by treatment area. The clinic confirms suitability before the first session.',
      items: [{ name: 'Face (Lips, Chin, Full Face, Upper Neck)', price: 'From RM500' }],
    },
    faq: {
      eyebrow: 'Hair Removal FAQ',
      heading: 'Questions About Facial Hair Removal',
      items: [
        {
          question: 'How many sessions are usually needed?',
          answer:
            'Hair grows in cycles, so treatment is typically spread across multiple sessions. The clinic advises after assessment.',
        },
        {
          question: 'Is it suitable for all skin types?',
          answer:
            'Skin and hair type are assessed before treatment to confirm suitability.',
        },
        {
          question: 'Should I shave or wax before my appointment?',
          answer:
            'The clinic will give you preparation instructions when your session is scheduled.',
        },
        {
          question: 'Do you treat body areas as well?',
          answer:
            'Yes. Body and intimate areas are priced separately — see the body hair removal page.',
        },
      ],
    },
    related: ['body-hair-removal', 'excessive-sweating', 'open-pores'],
  },

  {
    slug: 'lip-rejuvenation',
    label: 'Lip Rejuvenation',
    category: 'Skin',
    eyebrow: 'Skin Concern',
    docTitle: 'Lip Rejuvenation — Enhanze Clinic',
    metaDescription:
      'Lip rejuvenation enquiries at Enhanze Clinic, Petaling Jaya. Options discussed after professional consultation.',
    heroDescription:
      'Lip enhancement and rejuvenation discussed with the clinic, planned around your features.',
    overview: {
      eyebrow: 'Understanding Lip Rejuvenation',
      heading: 'Proportion Matters More Than Volume',
      paragraphs: [
        'Lips change over time in shape, definition and hydration, and concerns vary from person to person. Some people notice a loss of border definition, others a change in fullness or fine lines around the mouth.',
        'The clinic approaches this with proportion in mind, assessing the lips in the context of the whole face rather than treating fullness as a goal in itself.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Volume Change', detail: 'Fullness can change gradually over time.' },
        { title: 'Border Definition', detail: 'The lip border may become less defined.' },
        { title: 'Lines Around the Mouth', detail: 'Fine lines in this area are commonly raised during consultation.' },
        { title: 'Facial Proportion', detail: 'Lips are assessed in relation to the rest of the face.' },
        { title: 'Personal Preference', detail: 'Your expectations are discussed openly before anything is planned.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'Lip Rejuvenation FAQ',
      heading: 'Questions About Lip Rejuvenation',
      items: [
        {
          question: 'Will my lips look obviously treated?',
          answer:
            'Your expectations are discussed during consultation, and the doctor plans around your facial proportions.',
        },
        {
          question: 'Is a consultation required?',
          answer:
            'Yes. The doctor assesses your lips and discusses suitable options before anything is scheduled.',
        },
        {
          question: 'What is the pricing?',
          answer:
            'Pricing depends on the approach discussed at consultation. Contact the clinic for current information.',
        },
        {
          question: 'How long does an appointment take?',
          answer:
            'This depends on what is planned and is confirmed when you book.',
        },
      ],
    },
    related: ['wrinkles', 'dull-and-dry-skin', 'sagging-skin'],
  },

  /* ================================================================ */
  /* BODY                                                              */
  /* ================================================================ */

  {
    slug: 'stubborn-fat',
    label: 'Stubborn Fat',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Stubborn Fat Reduction — Enhanze Clinic',
    metaDescription:
      'Non-surgical fat reduction options at Enhanze Clinic, Petaling Jaya, including CoolSculpting and Liposonix. Assessment-led planning.',
    heroDescription:
      'Non-surgical options for localised fat that has not responded to diet and exercise.',
    overview: {
      eyebrow: 'Understanding Stubborn Fat',
      heading: 'Some Areas Respond Differently',
      paragraphs: [
        'Certain areas of the body can hold fat that is resistant to diet and exercise, commonly the abdomen, flanks, thighs and upper arms. Where the body stores fat is influenced by genetics and individual factors rather than effort alone.',
        'These treatments are intended for localised areas in people already close to their usual weight. They are not a substitute for weight loss, and the clinic will say so plainly if a different approach would serve you better.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Treatment Area', detail: 'The specific area and amount of tissue is assessed in person.' },
        { title: 'Skin Condition', detail: 'Skin firmness in the area is considered alongside fat reduction.' },
        { title: 'Overall Goals', detail: 'Whether contouring or weight management suits you better is discussed.' },
        { title: 'Medical Background', detail: 'Your medical history is reviewed before any option is considered.' },
        { title: 'Lifestyle Factors', detail: 'Diet and activity remain part of the wider conversation.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Stubborn Fat',
      description:
        'The options below are offered at the clinic. Which is appropriate depends on the area and the doctor’s assessment.',
      items: [
        { name: 'Lipodissolve Therapy', price: 'From RM300' },
        { name: 'Accent Ultrasound Lipolysis', price: 'From RM600' },
        { name: 'Liposonix', price: 'From RM800' },
        { name: 'VME (Abdomen, Thighs)', price: 'From RM1500' },
        { name: 'Coolsculpting', price: 'From RM2500' },
        { name: 'Laserlypolisis (Smartlipo/Accusculpt)', price: 'From RM4000' },
        { name: 'Airsculpting', price: 'From RM9000' },
      ],
    },
    faq: {
      eyebrow: 'Fat Reduction FAQ',
      heading: 'Questions About Stubborn Fat',
      items: [
        {
          question: 'Is this a weight loss treatment?',
          answer:
            'No. These options are intended for localised areas. If weight management is the priority, the clinic will discuss that instead.',
        },
        {
          question: 'How is the right option chosen?',
          answer:
            'The doctor assesses the area, your skin condition and your goals before recommending an approach.',
        },
        {
          question: 'Is there downtime?',
          answer:
            'This varies considerably between the options listed. Expected downtime is explained before treatment.',
        },
        {
          question: 'Will the fat return?',
          answer:
            'Long-term outcome depends on lifestyle and individual factors, which the doctor will discuss with you.',
        },
      ],
    },
    related: ['loose-skin', 'cellulite', 'weight-management'],
  },

  {
    slug: 'stretch-marks',
    label: 'Stretch Marks',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Stretch Mark Treatment — Enhanze Clinic',
    metaDescription:
      'Stretch mark treatment options at Enhanze Clinic, Petaling Jaya, including laser and micro needling. Consultation-led assessment.',
    heroDescription:
      'Options for stretch marks on the abdomen, thighs, arms and other areas.',
    overview: {
      eyebrow: 'Understanding Stretch Marks',
      heading: 'Marks Left by Rapid Change',
      paragraphs: [
        'Stretch marks form when the skin stretches faster than it can adapt, which is why they are common after pregnancy, growth spurts and significant weight change. They usually start reddish or purple and fade to a paler tone over time.',
        'How long a mark has been present affects how it is assessed, so the clinic examines the area in person before discussing options.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Rapid Growth or Weight Change', detail: 'Fast changes in body size are the most common cause.' },
        { title: 'Pregnancy', detail: 'Stretch marks are frequently raised as a post-pregnancy concern.' },
        { title: 'Mark Age', detail: 'Newer and older marks are assessed differently.' },
        { title: 'Skin Type', detail: 'Individual skin type can influence how marks appear.' },
        { title: 'Location', detail: 'Abdomen, thighs, hips and arms are commonly affected areas.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Stretch Marks',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'Micro Needling MNT', price: 'From RM450' },
        { name: 'PRP – HA', price: 'From RM800' },
        { name: 'ETWO Sublative', price: 'From RM800' },
        { name: 'Laser Stretch Mark', price: 'From RM800' },
      ],
    },
    faq: {
      eyebrow: 'Stretch Marks FAQ',
      heading: 'Questions About Stretch Marks',
      items: [
        {
          question: 'Can stretch marks be removed completely?',
          answer:
            'Discussions focus on the appearance and texture of the marks. The doctor will explain what is realistic for your skin.',
        },
        {
          question: 'Does it matter if the marks are old?',
          answer:
            'Yes, mark age is one of the factors reviewed during assessment.',
        },
        {
          question: 'Can I be treated while pregnant or breastfeeding?',
          answer:
            'Tell the clinic if you are pregnant or breastfeeding. Suitability is assessed on an individual basis.',
        },
        {
          question: 'How many sessions are needed?',
          answer:
            'This varies by individual and is discussed after assessment.',
        },
      ],
    },
    related: ['loose-skin', 'scarring', 'cellulite'],
  },

  {
    slug: 'loose-skin',
    label: 'Loose Skin',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Loose Skin and Body Firming — Enhanze Clinic',
    metaDescription:
      'Body firming and skin tightening options at Enhanze Clinic, Petaling Jaya, including Thermage and Ultherapy for the body.',
    heroDescription:
      'Body firming options for skin laxity after weight change, pregnancy or over time.',
    overview: {
      eyebrow: 'Understanding Loose Skin',
      heading: 'Firmness Can Lag Behind Body Change',
      paragraphs: [
        'Skin does not always contract at the same pace as changes in body size. Loose skin is commonly noticed on the abdomen, upper arms and thighs after weight loss or pregnancy, and it can also develop gradually with age.',
        'The clinic assesses the degree of laxity and the condition of the skin before discussing options, as mild and more advanced laxity are approached differently.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Weight Change', detail: 'Significant loss or gain can affect skin firmness.' },
        { title: 'Pregnancy', detail: 'Abdominal skin laxity is a common post-pregnancy concern.' },
        { title: 'Collagen Change', detail: 'Skin structure changes gradually over time.' },
        { title: 'Area Involved', detail: 'Abdomen, arms and thighs behave differently and are assessed separately.' },
        { title: 'Degree of Laxity', detail: 'Mild and more advanced laxity are approached differently.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Loose Skin',
      description:
        'The options below are offered at the clinic, with the appropriate choice confirmed after assessment.',
      items: [
        { name: 'Lipomassage', price: 'From RM300' },
        { name: 'Bodyworkz', price: 'From RM500' },
        { name: 'Tightsculpting', price: 'From RM1200' },
        { name: 'Thermage Body', price: 'From RM8000' },
        { name: 'Ultherapy Body', price: 'From RM8000' },
      ],
    },
    faq: {
      eyebrow: 'Body Firming FAQ',
      heading: 'Questions About Loose Skin',
      items: [
        {
          question: 'Is surgery the only option for loose skin?',
          answer:
            'The treatments listed here are non-surgical. The doctor will explain what is realistic for your degree of laxity.',
        },
        {
          question: 'Should I finish losing weight first?',
          answer:
            'This is worth discussing at consultation, as timing can affect planning.',
        },
        {
          question: 'Can fat reduction and firming be combined?',
          answer:
            'The doctor will advise whether addressing both is appropriate in your case.',
        },
        {
          question: 'How long before I see a change?',
          answer:
            'This varies by treatment and individual, and will be explained during consultation.',
        },
      ],
    },
    related: ['stubborn-fat', 'stretch-marks', 'sagging-skin'],
  },

  {
    slug: 'cellulite',
    label: 'Cellulite',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Cellulite Treatment — Enhanze Clinic',
    metaDescription:
      'Cellulite treatment options at Enhanze Clinic, Petaling Jaya, including Endermologie and X-Wave. Consultation-led assessment.',
    heroDescription:
      'Options for dimpled skin texture on the thighs, hips and other common areas.',
    overview: {
      eyebrow: 'Understanding Cellulite',
      heading: 'A Common and Normal Skin Texture',
      paragraphs: [
        'Cellulite is the dimpled appearance that occurs where fibrous bands beneath the skin pull downward while fat pushes upward. It is very common, affects people across all body types, and is not a sign of poor health.',
        'Because several structures are involved, the clinic assesses the area in person and is direct about what each option can and cannot address.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Skin Structure', detail: 'Fibrous bands beneath the skin contribute to the dimpled appearance.' },
        { title: 'Genetics', detail: 'Individual factors influence how cellulite presents.' },
        { title: 'Circulation', detail: 'Circulation in the area is sometimes raised during consultation.' },
        { title: 'Skin Firmness', detail: 'Firmness of the overlying skin affects appearance.' },
        { title: 'Common Areas', detail: 'Thighs, hips and buttocks are the most frequently discussed areas.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Cellulite',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'X-Wave Shock Therapy', price: 'From RM300' },
        { name: 'Endermologie', price: 'From RM300' },
        { name: 'Mesocellulite', price: 'From RM450' },
      ],
    },
    faq: {
      eyebrow: 'Cellulite FAQ',
      heading: 'Questions About Cellulite',
      items: [
        {
          question: 'Is cellulite caused by being overweight?',
          answer:
            'Cellulite occurs across all body types and is influenced by skin structure rather than weight alone.',
        },
        {
          question: 'Will treatment remove it permanently?',
          answer:
            'Discussions focus on appearance. The doctor will explain what is realistic during consultation.',
        },
        {
          question: 'How many sessions are involved?',
          answer:
            'These treatments are typically planned as a course. The clinic advises after assessment.',
        },
        {
          question: 'Does exercise help?',
          answer:
            'Lifestyle factors are part of the wider conversation and are discussed alongside any treatment.',
        },
      ],
    },
    related: ['stubborn-fat', 'loose-skin', 'stretch-marks'],
  },

  {
    slug: 'excessive-sweating',
    label: 'Excessive Sweating',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Excessive Sweating Treatment — Enhanze Clinic',
    metaDescription:
      'Treatment options for excessive sweating (hyperhidrosis) of the underarms and palms at Enhanze Clinic, Petaling Jaya.',
    heroDescription:
      'Options for excessive underarm and palm sweating, assessed and planned by the clinic.',
    overview: {
      eyebrow: 'Understanding Excessive Sweating',
      heading: 'More Than Ordinary Perspiration',
      paragraphs: [
        'Sweating is normal, but some people sweat well beyond what is needed to regulate temperature. When this happens regularly at the underarms, palms or soles, it can affect clothing choices, daily comfort and confidence at work or socially.',
        'The clinic assesses the pattern and affected areas first, and reviews your medical background before discussing any option.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Affected Areas', detail: 'Underarms and palms are the most commonly treated areas.' },
        { title: 'Pattern and Triggers', detail: 'When and how sweating occurs is discussed during consultation.' },
        { title: 'Daily Impact', detail: 'How it affects work, clothing and social situations is relevant.' },
        { title: 'Medical Background', detail: 'Your medical history is reviewed before any option is considered.' },
        { title: 'Previous Attempts', detail: 'What you have already tried helps guide the conversation.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Excessive Sweating',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'BTA Injection Palms/Underarms', price: 'From RM1200' },
        { name: 'Laser Hyperhydrosis (Underarms)', price: 'From RM3000' },
      ],
    },
    faq: {
      eyebrow: 'Excessive Sweating FAQ',
      heading: 'Questions About Excessive Sweating',
      items: [
        {
          question: 'How do I know if my sweating is excessive?',
          answer:
            'If sweating regularly affects your daily routine or clothing, it is worth discussing with a doctor.',
        },
        {
          question: 'Which areas can be treated?',
          answer:
            'The clinic lists treatment for the underarms and palms. Other areas can be raised at consultation.',
        },
        {
          question: 'How long does treatment last?',
          answer:
            'Duration varies by individual and treatment, and is explained during consultation.',
        },
        {
          question: 'Is a consultation required first?',
          answer:
            'Yes. Your medical background is reviewed before any option is considered.',
        },
      ],
    },
    related: ['body-hair-removal', 'hair-removal', 'spider-veins'],
  },

  {
    slug: 'spider-veins',
    label: 'Spider Veins',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Spider Vein Treatment — Enhanze Clinic',
    metaDescription:
      'Laser treatment options for spider veins and visible hand veins at Enhanze Clinic, Petaling Jaya.',
    heroDescription:
      'Options for fine visible veins on the face, legs and hands, assessed by the clinic.',
    overview: {
      eyebrow: 'Understanding Spider Veins',
      heading: 'Fine Vessels Close to the Surface',
      paragraphs: [
        'Spider veins are small blood vessels that become visible near the surface of the skin, often appearing on the legs, around the nose or across the cheeks. They can also become more noticeable on the backs of the hands over time.',
        'Visible veins can have different underlying causes, so the clinic examines the area and reviews your history before discussing options.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Location', detail: 'Facial, leg and hand veins are assessed separately.' },
        { title: 'Vessel Size', detail: 'The size and depth of the vessels affects the approach.' },
        { title: 'Standing and Occupation', detail: 'Prolonged standing is commonly raised in relation to leg veins.' },
        { title: 'Individual Factors', detail: 'Family history and skin type are considered during assessment.' },
        { title: 'Medical Review', detail: 'Underlying vein health may need review before cosmetic treatment.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Visible Veins',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'Laser Vein Removal', price: 'From RM350' },
        { name: 'Hand Veins', price: 'From RM500' },
      ],
    },
    faq: {
      eyebrow: 'Spider Veins FAQ',
      heading: 'Questions About Spider Veins',
      items: [
        {
          question: 'Are spider veins a health problem?',
          answer:
            'They are often a cosmetic concern, but the doctor will assess whether any underlying review is needed.',
        },
        {
          question: 'Can facial and leg veins both be treated?',
          answer:
            'They are assessed separately, as vessel size and location affect the approach.',
        },
        {
          question: 'Will they come back?',
          answer:
            'New vessels can appear over time. This is discussed as part of your consultation.',
        },
        {
          question: 'How many sessions are needed?',
          answer:
            'This varies by individual and is confirmed after assessment.',
        },
      ],
    },
    related: ['excessive-sweating', 'loose-skin', 'pigmentation'],
  },

  {
    slug: 'pelvic-floor-support',
    label: 'Pelvic Floor Support',
    category: 'Body',
    eyebrow: 'Women’s Wellness',
    docTitle: 'Pelvic Floor Support — Enhanze Clinic',
    metaDescription:
      'Women’s intimate wellness and pelvic floor support options at Enhanze Clinic, Petaling Jaya. Private, consultation-led care.',
    heroDescription:
      'Private, consultation-led care for pelvic floor and intimate wellness concerns.',
    overview: {
      eyebrow: 'Understanding Pelvic Floor Concerns',
      heading: 'A Common Concern That Is Rarely Discussed',
      paragraphs: [
        'Changes to pelvic floor support are common after childbirth and around menopause, and can affect comfort, confidence and daily activities. Many women live with these changes for years before raising them.',
        'Consultations for this area are private and unhurried. The doctor reviews your history and concerns and explains what each option involves before anything is planned.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Childbirth History', detail: 'Pregnancy and delivery history is reviewed during consultation.' },
        { title: 'Hormonal Stage', detail: 'Changes around menopause are commonly discussed.' },
        { title: 'Daily Impact', detail: 'How symptoms affect activity and comfort is part of the assessment.' },
        { title: 'Medical Background', detail: 'Your general medical history is reviewed before any option is considered.' },
        { title: 'Privacy', detail: 'These consultations are conducted privately and without pressure.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Women’s Wellness',
      description:
        'The options below are offered at the clinic. Suitability is confirmed after a private consultation.',
      items: [
        { name: 'Monalisa Touch Vaginal Rejuvenation (V2LR)', price: 'From RM1500' },
        { name: 'Laser Vaginal Rejuvenation (Intimalase)', price: 'From RM1800' },
        { name: 'Laser Urinary Incontinence (Incontilase)', price: 'From RM2200' },
        { name: 'Viveve By Geneveve V-Tight (Vaginal Tightening)', price: 'From RM7200' },
      ],
    },
    faq: {
      eyebrow: 'Women’s Wellness FAQ',
      heading: 'Questions About Pelvic Floor Support',
      items: [
        {
          question: 'Is the consultation private?',
          answer:
            'Yes. These consultations are conducted privately and at your own pace.',
        },
        {
          question: 'Can I see a female doctor?',
          answer:
            'Let the clinic know your preference when booking and the team will advise on availability.',
        },
        {
          question: 'Is a consultation required before treatment?',
          answer:
            'Yes. Your history and concerns are reviewed before any option is considered.',
        },
        {
          question: 'What if I am unsure about proceeding?',
          answer:
            'A consultation carries no obligation. You are free to take time before deciding.',
        },
      ],
    },
    related: ['hormonal-health', 'regenerative-therapy', 'weight-management'],
  },

  {
    slug: 'hair-loss',
    label: 'Hair Loss',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Hair Loss Treatment — Enhanze Clinic',
    metaDescription:
      'Hair loss and scalp treatment options at Enhanze Clinic, Petaling Jaya, including PRP and Regenera. Assessment-led planning.',
    heroDescription:
      'Scalp and hair loss options, planned after the clinic assesses the pattern and possible causes.',
    overview: {
      eyebrow: 'Understanding Hair Loss',
      heading: 'The Pattern Tells the Doctor a Lot',
      paragraphs: [
        'Hair loss can develop gradually or suddenly, and the pattern often points toward the underlying cause. Hereditary thinning, hormonal changes, stress, nutrition and certain medical conditions can all play a part.',
        'Because the cause guides the approach, the clinic assesses the scalp and reviews your history before discussing options. Earlier assessment generally gives more to work with.',
      ],
    },
    factors: {
      eyebrow: 'What May Contribute',
      heading: 'Factors Often Discussed During Consultation',
      items: [
        { title: 'Hereditary Pattern', detail: 'Family history is commonly reviewed during assessment.' },
        { title: 'Hormonal Changes', detail: 'Hormonal factors can contribute in both men and women.' },
        { title: 'Stress and Illness', detail: 'Significant stress or illness may affect the hair cycle.' },
        { title: 'Nutrition', detail: 'Nutritional factors are sometimes raised during consultation.' },
        { title: 'Scalp Condition', detail: 'The condition of the scalp itself is examined.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Treatments Offered for Hair Loss',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'Mesopecia', price: 'From RM350' },
        { name: 'Hair Filler', price: 'From RM1500' },
        { name: 'PRP Scalp & Follicle Regeneration', price: 'From RM1800' },
        { name: 'Stemcell', price: 'From RM6600' },
        { name: 'Regenera Cell Treatment', price: 'From RM8000' },
      ],
    },
    faq: {
      eyebrow: 'Hair Loss FAQ',
      heading: 'Questions About Hair Loss',
      items: [
        {
          question: 'When should I seek assessment?',
          answer:
            'If you notice increased shedding or thinning, earlier assessment generally gives more options to consider.',
        },
        {
          question: 'Does the clinic treat hair loss in women?',
          answer:
            'Yes. Hair loss affects both men and women, and the pattern is assessed individually.',
        },
        {
          question: 'Will I need ongoing treatment?',
          answer:
            'This depends on the cause and the approach agreed. The doctor will explain during consultation.',
        },
        {
          question: 'Are results guaranteed?',
          answer:
            'No treatment can be guaranteed. The doctor will explain what is realistic for your situation.',
        },
      ],
    },
    related: ['regenerative-therapy', 'hormonal-health', 'scarring'],
  },

  {
    slug: 'body-hair-removal',
    label: 'Hair Removal',
    category: 'Body',
    eyebrow: 'Body Concern',
    docTitle: 'Body Hair Removal — Enhanze Clinic',
    metaDescription:
      'Laser hair removal for body and intimate areas at Enhanze Clinic, Petaling Jaya. Pricing by treatment area.',
    heroDescription:
      'Hair removal for body and intimate areas, priced by the area being treated.',
    overview: {
      eyebrow: 'Understanding Hair Removal',
      heading: 'Planned Around the Area and Your Skin',
      paragraphs: [
        'Body hair removal is a practical concern for many people, particularly where shaving or waxing causes irritation, ingrown hairs or simply takes too much upkeep.',
        'Treatment is planned by area, and hair and skin type are assessed together beforehand, since both influence how sessions are spaced and carried out.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Treatment Area', detail: 'Body and intimate areas are priced separately.' },
        { title: 'Hair and Skin Type', detail: 'Both are assessed before the first session.' },
        { title: 'Session Spacing', detail: 'Hair grows in cycles, so sessions are usually spread over time.' },
        { title: 'Skin Sensitivity', detail: 'Any history of irritation or ingrown hairs is discussed.' },
        { title: 'Aftercare', detail: 'Sun protection and aftercare guidance is provided.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Body Hair Removal at the Clinic',
      description:
        'Pricing is by treatment area. The clinic confirms suitability before the first session.',
      items: [
        { name: 'Intimate Area (Bikini Line/Brazilian)', price: 'From RM600' },
        { name: 'Body (Body, Forearm, Chest, Leg, Underarms)', price: 'From RM700' },
      ],
    },
    faq: {
      eyebrow: 'Hair Removal FAQ',
      heading: 'Questions About Body Hair Removal',
      items: [
        {
          question: 'How many sessions will I need?',
          answer:
            'Hair grows in cycles, so treatment is typically spread across several sessions. The clinic advises after assessment.',
        },
        {
          question: 'Are intimate areas treated privately?',
          answer:
            'Yes. Treatment is carried out privately and professionally.',
        },
        {
          question: 'How should I prepare?',
          answer:
            'The clinic provides preparation instructions when your session is scheduled.',
        },
        {
          question: 'Can facial areas be treated too?',
          answer:
            'Yes, facial areas are priced separately — see the facial hair removal page.',
        },
      ],
    },
    related: ['hair-removal', 'excessive-sweating', 'spider-veins'],
  },

  /* ================================================================ */
  /* HEALTH AND WELLNESS                                               */
  /* ================================================================ */

  {
    slug: 'lifestyle-medicine',
    label: 'Lifestyle Medicine',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'Lifestyle Medicine — Enhanze Clinic',
    metaDescription:
      'Lifestyle medicine consultations at Enhanze Clinic, Petaling Jaya. Speak with the clinic about preventive and everyday health support.',
    heroDescription:
      'Support for everyday health decisions, discussed with the clinic team.',
    overview: {
      eyebrow: 'Understanding Lifestyle Medicine',
      heading: 'Health Built Around Daily Habits',
      paragraphs: [
        'Lifestyle medicine looks at the everyday factors that shape long-term health, including nutrition, activity, sleep, stress and other daily routines.',
        'At Enhanze, this begins as a conversation about your current situation and what you would like to change, rather than a fixed programme.',
      ],
    },
    factors: {
      eyebrow: 'What Is Discussed',
      heading: 'Areas Commonly Covered',
      items: [
        { title: 'Nutrition', detail: 'Everyday eating patterns are reviewed as part of the conversation.' },
        { title: 'Physical Activity', detail: 'Current activity levels and practical changes are discussed.' },
        { title: 'Sleep', detail: 'Sleep quality and routine are commonly raised.' },
        { title: 'Stress', detail: 'Day-to-day stress and its effects are part of the discussion.' },
        { title: 'Preventive Outlook', detail: 'Longer-term health planning can be discussed with the doctor.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'Lifestyle Medicine FAQ',
      heading: 'Questions About Lifestyle Medicine',
      items: [
        {
          question: 'What happens at the first appointment?',
          answer:
            'The doctor discusses your current health, routine and what you would like to work on.',
        },
        {
          question: 'Is this the same as weight management?',
          answer:
            'They can overlap. The clinic also runs specific weight management programmes — see that page.',
        },
        {
          question: 'Do I need a referral?',
          answer:
            'No referral is required. Contact the clinic to arrange an appointment.',
        },
        {
          question: 'What does it cost?',
          answer:
            'Contact the clinic for current consultation information.',
        },
      ],
    },
    related: ['weight-management', 'medical-screening', 'hormonal-health'],
  },

  {
    slug: 'hormonal-health',
    label: 'Hormonal Health',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'Hormonal Health — Enhanze Clinic',
    metaDescription:
      'Hormonal health consultations at Enhanze Clinic, Petaling Jaya. Discuss symptoms and assessment options with the clinic.',
    heroDescription:
      'Consultation and guidance for concerns that may relate to hormonal changes.',
    overview: {
      eyebrow: 'Understanding Hormonal Health',
      heading: 'Symptoms That Are Easy to Dismiss',
      paragraphs: [
        'Hormonal changes can influence energy, mood, sleep, weight, skin and hair, and the symptoms are often put down to stress or ageing instead.',
        'The clinic begins with a conversation about your symptoms and history, and will advise whether further assessment is appropriate.',
      ],
    },
    factors: {
      eyebrow: 'What Is Discussed',
      heading: 'Areas Commonly Covered',
      items: [
        { title: 'Energy and Sleep', detail: 'Persistent fatigue or disturbed sleep is commonly raised.' },
        { title: 'Weight Changes', detail: 'Unexplained changes in weight may be discussed.' },
        { title: 'Skin and Hair', detail: 'Changes in skin or hair can be part of the picture.' },
        { title: 'Life Stage', detail: 'Perimenopause, menopause and other life stages are considered.' },
        { title: 'Medical History', detail: 'Your general medical background is reviewed.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'Hormonal Health FAQ',
      heading: 'Questions About Hormonal Health',
      items: [
        {
          question: 'What symptoms are worth raising?',
          answer:
            'Persistent changes in energy, sleep, mood, weight, skin or hair are all reasonable to discuss with a doctor.',
        },
        {
          question: 'Will I need tests?',
          answer:
            'The doctor will advise whether further assessment is appropriate after discussing your symptoms.',
        },
        {
          question: 'Does this relate to menopause?',
          answer:
            'Menopause and perimenopause are among the life stages commonly discussed.',
        },
        {
          question: 'Is this service for men as well?',
          answer:
            'Hormonal health can affect both men and women. Contact the clinic to discuss your situation.',
        },
      ],
    },
    related: ['weight-management', 'pelvic-floor-support', 'hair-loss'],
  },

  {
    slug: 'medical-screening',
    label: 'Medical Screening',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'Medical Screening — Enhanze Clinic',
    metaDescription:
      'Health screening enquiries at Enhanze Clinic, Petaling Jaya. Contact the clinic about available screening options.',
    heroDescription:
      'Health screening discussed and arranged through the clinic team.',
    overview: {
      eyebrow: 'Understanding Medical Screening',
      heading: 'Checking In Before Symptoms Appear',
      paragraphs: [
        'Health screening is about establishing a baseline and identifying things worth monitoring, often before any symptoms are noticed.',
        'What is appropriate differs with age, medical history and individual risk factors, so the clinic advises on a case-by-case basis.',
      ],
    },
    factors: {
      eyebrow: 'What Is Discussed',
      heading: 'Areas Commonly Covered',
      items: [
        { title: 'Age and Life Stage', detail: 'Appropriate screening differs across age groups.' },
        { title: 'Medical History', detail: 'Personal and family history is reviewed.' },
        { title: 'Current Symptoms', detail: 'Any existing concerns are discussed first.' },
        { title: 'Baseline Records', detail: 'Screening can establish a reference point for future comparison.' },
        { title: 'Follow-Up', detail: 'The doctor explains what happens after results are available.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'Medical Screening FAQ',
      heading: 'Questions About Medical Screening',
      items: [
        {
          question: 'What screening does the clinic offer?',
          answer:
            'Contact the clinic for current information on available screening options.',
        },
        {
          question: 'How often should I be screened?',
          answer:
            'This depends on your age, history and individual factors, and is advised by the doctor.',
        },
        {
          question: 'Do I need to fast beforehand?',
          answer:
            'Any preparation instructions are provided when your appointment is arranged.',
        },
        {
          question: 'How are results explained?',
          answer:
            'The doctor discusses your results with you and explains any recommended follow-up.',
        },
      ],
    },
    related: ['lifestyle-medicine', 'hormonal-health', 'weight-management'],
  },

  {
    slug: 'regenerative-therapy',
    label: 'Regenerative Therapy',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'Regenerative Therapy — Enhanze Clinic',
    metaDescription:
      'Regenerative treatment options at Enhanze Clinic, Petaling Jaya, including PRP and cell-based treatments. Consultation-led assessment.',
    heroDescription:
      'Treatments that work with the body’s own repair processes, assessed case by case.',
    overview: {
      eyebrow: 'Understanding Regenerative Therapy',
      heading: 'Working with the Body’s Own Processes',
      paragraphs: [
        'Regenerative treatments aim to support the body’s natural repair processes, and are used in aesthetic medicine for concerns affecting skin and scalp among others.',
        'This is an area where careful assessment matters. The clinic reviews your medical background and explains what each option involves, without overstating what it can achieve.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Treatment',
      items: [
        { title: 'Concern Being Treated', detail: 'Skin, scalp and other concerns are assessed individually.' },
        { title: 'Medical Background', detail: 'Your history is reviewed before any option is considered.' },
        { title: 'Suitability', detail: 'Not everyone is a suitable candidate, and the doctor will say so.' },
        { title: 'Expectations', detail: 'Realistic expectations are discussed openly at consultation.' },
        { title: 'Planning', detail: 'Session planning and aftercare are explained beforehand.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Regenerative Treatments Offered',
      description:
        'The options below are offered at the clinic, with suitability confirmed after assessment.',
      items: [
        { name: 'PRP – HA', price: 'From RM800' },
        { name: 'Vampire Facial', price: 'From RM800' },
        { name: 'PRP Scalp & Follicle Regeneration', price: 'From RM1800' },
        { name: 'Stemcell', price: 'From RM6600' },
        { name: 'Regenera Cell Treatment', price: 'From RM8000' },
      ],
    },
    faq: {
      eyebrow: 'Regenerative Therapy FAQ',
      heading: 'Questions About Regenerative Therapy',
      items: [
        {
          question: 'What does regenerative treatment involve?',
          answer:
            'This depends on the specific treatment. The doctor explains what each involves during consultation.',
        },
        {
          question: 'Is everyone suitable?',
          answer:
            'No. Suitability is assessed individually and the doctor will advise if it is not appropriate for you.',
        },
        {
          question: 'What results can I expect?',
          answer:
            'Outcomes vary between individuals. Expectations are discussed openly before anything is planned.',
        },
        {
          question: 'Is a consultation required?',
          answer:
            'Yes. Your medical background is reviewed before any treatment is considered.',
        },
      ],
    },
    related: ['hair-loss', 'scarring', 'lifestyle-medicine'],
  },

  {
    slug: 'weight-management',
    label: 'Weight Management',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'Weight Management Programmes — Enhanze Clinic',
    metaDescription:
      'Medically supervised weight management programmes at Enhanze Clinic, Petaling Jaya. Consultation-led planning and review.',
    heroDescription:
      'Medically supervised weight management, planned and reviewed with the clinic team.',
    overview: {
      eyebrow: 'Understanding Weight Management',
      heading: 'Supervised, Not Improvised',
      paragraphs: [
        'Weight is influenced by many factors, including metabolism, hormones, medical conditions, medication, routine and eating patterns. Programmes that ignore this tend not to hold.',
        'The clinic runs structured programmes with medical supervision, beginning with an assessment of your health and goals rather than a fixed plan applied to everyone.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Starting',
      items: [
        { title: 'Medical Background', detail: 'Existing conditions and medication are reviewed.' },
        { title: 'Current Routine', detail: 'Eating patterns and activity are discussed honestly.' },
        { title: 'Goals', detail: 'What you want to achieve, and over what period, is agreed together.' },
        { title: 'Programme Fit', detail: 'The clinic advises which programme structure suits your situation.' },
        { title: 'Ongoing Review', detail: 'Progress is reviewed so the plan can be adjusted.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Weight Management Programmes',
      description:
        'The programmes below are offered at the clinic. The doctor advises which is appropriate after assessment.',
      items: [
        { name: 'Medical Weight Loss Program', price: 'RM550/Month' },
        { name: 'Smart Diet Program', price: 'From RM2500' },
        { name: 'Rapid Weight Loss Program (RWL)', price: 'From RM3500' },
      ],
    },
    faq: {
      eyebrow: 'Weight Management FAQ',
      heading: 'Questions About Weight Management',
      items: [
        {
          question: 'How do the programmes differ?',
          answer:
            'They differ in structure and duration. The doctor explains which suits your situation at consultation.',
        },
        {
          question: 'Is the programme medically supervised?',
          answer:
            'Yes. Your medical background is reviewed and progress is monitored throughout.',
        },
        {
          question: 'Is this the same as body contouring?',
          answer:
            'No. Contouring treatments address localised areas and are listed separately under body concerns.',
        },
        {
          question: 'What happens after the programme ends?',
          answer:
            'Maintaining changes is part of the discussion from the beginning.',
        },
      ],
    },
    related: ['stubborn-fat', 'lifestyle-medicine', 'loose-skin'],
  },

  {
    slug: 'tms-therapy',
    label: 'TMS Therapy',
    category: 'Health',
    eyebrow: 'Health and Wellness',
    docTitle: 'TMS Therapy — Enhanze Clinic',
    metaDescription:
      'TMS therapy enquiries at Enhanze Clinic, Petaling Jaya. Speak with the clinic about assessment and suitability.',
    heroDescription:
      'Enquiries and assessment for TMS therapy, discussed directly with the clinic.',
    overview: {
      eyebrow: 'Understanding TMS Therapy',
      heading: 'Assessed Individually, Always',
      paragraphs: [
        'TMS (transcranial magnetic stimulation) is a non-invasive therapy delivered under medical supervision. It is used in specific clinical situations, and suitability is determined by a doctor.',
        'Because this sits within a regulated area of medicine, the clinic does not set out treatment information publicly. Contact the team to arrange a consultation and discuss your situation directly.',
      ],
    },
    factors: {
      eyebrow: 'What Is Assessed',
      heading: 'Points Reviewed Before Anything Is Planned',
      items: [
        { title: 'Medical Assessment', detail: 'A doctor assesses whether the therapy is appropriate for you.' },
        { title: 'Medical History', detail: 'Your background and any current treatment is reviewed.' },
        { title: 'Existing Care', detail: 'Any care you are already receiving is taken into account.' },
        { title: 'Suitability', detail: 'The clinic will advise directly if it is not suitable.' },
        { title: 'Privacy', detail: 'These consultations are handled privately and confidentially.' },
      ],
    },
    treatments: {
      eyebrow: 'At Enhanze',
      heading: 'Discuss Options with the Clinic',
      description: emptyTreatmentsNote,
      items: [],
    },
    faq: {
      eyebrow: 'TMS Therapy FAQ',
      heading: 'Questions About TMS Therapy',
      items: [
        {
          question: 'How do I find out if this is suitable for me?',
          answer:
            'Contact the clinic to arrange a consultation. Suitability is determined by a doctor after assessment.',
        },
        {
          question: 'Is a referral needed?',
          answer:
            'Contact the clinic to ask about the current process for this service.',
        },
        {
          question: 'Is the consultation confidential?',
          answer:
            'Yes. Consultations are handled privately and confidentially.',
        },
        {
          question: 'Can I discuss it before committing?',
          answer:
            'Yes. A consultation carries no obligation to proceed.',
        },
      ],
    },
    related: ['lifestyle-medicine', 'medical-screening', 'hormonal-health'],
  },
]

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                      */
/* ------------------------------------------------------------------ */

export const serviceBySlug = (slug: string): ServicePageData | undefined =>
  services.find((s) => s.slug === slug)

export const serviceHref = (slug: string) => `#/procedures/${slug}`

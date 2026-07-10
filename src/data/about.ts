/**
 * About page content. Factual statements are based on the live
 * enhanzeclinic.com About Us page (July 2026).
 *
 * TODO: Confirm exact regulatory wording with client before production
 * use — the old site claims equipment approvals by "the U.S. FDA and
 * the Malaysian Health Ministry"; that broad claim is intentionally
 * NOT repeated here until tied to specific confirmed equipment.
 */

import type { ConsultationContent } from '../components/ConsultationCTA'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const aboutHero = {
  eyebrow: 'About Enhanze',
  heading: 'A Considered Approach to Medical Aesthetic Care',
  description:
    'Established in Malaysia in 2001, Enhanze Clinic provides consultation-led aesthetic care across skin, body and wellness.',
  primary: { label: 'Discover Our Story', targetId: 'about-intro' },
  secondary: { label: 'Meet Our Medical Director', targetId: 'about-doctor' },
  image: img('about-hero-clinic-interior.png'),
  imageAlt: 'Enhanze Clinic interior and reception area',
}

/* ------------------------------------------------------------------ */
/* Company introduction                                                */
/* ------------------------------------------------------------------ */

export const aboutIntro = {
  eyebrow: 'Our Beginning',
  heading: 'Established with a Clear Purpose',
  paragraphs: [
    'Aesthetic Medical Services Sdn Bhd was incorporated in Malaysia in 2001. Operating under the Enhanze Aesthetic brand, the clinic was established in response to the growing demand for professionally supervised, non-surgical aesthetic treatments.',
    'From the beginning, the clinic’s purpose has been to provide a setting where individual concerns can be discussed carefully and treatment options can be considered through professional consultation.',
  ],
  fact: 'Established in Malaysia in 2001',
}

/* ------------------------------------------------------------------ */
/* Clinic story                                                        */
/* ------------------------------------------------------------------ */

export const aboutStory = {
  eyebrow: 'The Enhanze Story',
  heading: 'Growing Alongside Medical Aesthetic Care in Malaysia',
  paragraphs: [
    'Enhanze Clinic has developed alongside Malaysia’s evolving medical-aesthetic industry while maintaining a focus on professional consultation, responsible treatment planning and reliable patient care.',
    'The clinic continues to provide an environment where aesthetic and wellness concerns can be discussed clearly, with treatment options considered according to individual needs, suitability and expectations.',
  ],
  image: img('about-clinic-story-interior.jpg'),
  imageAlt: 'Interior detail inside Enhanze Clinic',
}

/* ------------------------------------------------------------------ */
/* Milestones                                                          */
/* ------------------------------------------------------------------ */

export const aboutMilestones = {
  eyebrow: 'Milestones',
  heading: 'A Practice Built Over Two Decades',
  yearItem: {
    year: '2001',
    detail: 'Aesthetic Medical Services Sdn Bhd was incorporated in Malaysia.',
  },
  items: [
    {
      title: 'Professional Consultation',
      detail:
        'Treatment journeys begin with understanding individual concerns, expectations and suitability.',
    },
    {
      title: 'Skin, Body and Wellness',
      detail: 'The clinic’s areas of care span aesthetic and wellness-related services.',
    },
    {
      title: 'Continued Development',
      detail:
        'The clinic’s medical leadership continues to participate in professional learning, workshops and conferences.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Approach                                                            */
/* ------------------------------------------------------------------ */

export const aboutApproach = {
  eyebrow: 'Our Approach',
  heading: 'Care Built on Experience, Responsibility and Trust',
  paragraphs: [
    'Enhanze Clinic approaches aesthetic care through professional consultation, thoughtful treatment planning and a clear understanding of each individual’s concerns.',
    'The clinic aims to provide a comfortable environment where treatment options can be discussed responsibly and expectations can be addressed with clarity.',
  ],
  principles: [
    {
      title: 'Professional Consultation',
      detail:
        'Every treatment journey begins with a discussion of concerns, expectations and suitability.',
    },
    {
      title: 'Responsible Planning',
      detail:
        'Treatment options should be considered according to individual needs rather than trends or one-size-fits-all solutions.',
    },
    {
      title: 'Patient Comfort',
      detail:
        'The clinic experience should feel professional, respectful and comfortable from consultation through follow-up.',
    },
    {
      title: 'Continued Medical Learning',
      detail:
        'Ongoing professional development supports informed and responsible clinical practice.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Clinic experience                                                   */
/* ------------------------------------------------------------------ */

export const aboutExperience = {
  eyebrow: 'Inside Enhanze',
  heading: 'A Professional Setting Designed for Personal Care',
  body: 'The clinic environment is intended to support private consultation, careful assessment and a comfortable treatment experience. Each stage should allow visitors to understand their available options and make informed decisions.',
  items: [
    'Private consultation',
    'Personalised discussion',
    'Clear treatment guidance',
    'Professional follow-up',
  ],
}

/* ------------------------------------------------------------------ */
/* Medical Director                                                    */
/* ------------------------------------------------------------------ */

export const aboutDoctor = {
  eyebrow: 'Medical Director',
  heading: 'Experience Guided by Continuous Learning',
  quote: 'Less is More',
  name: 'Dato’ Dr. N. Sutina Nordin, DSPN.',
  title: 'Medical Director & Medical Aesthetic Consultant',
  experienceLine: 'More than 20 years in aesthetic medicine',
  credentials: [
    'MBBS, CPSA, PGC Dip Derm',
    'Diplomate Aesthetic Medicine (US)',
    'Board Certified Aesthetic Medicine (US)',
    'LCP Certified (MOH)',
  ],
  bio: [
    'Dato’ Dr. N. Sutina Nordin is an experienced medical aesthetic practitioner and a pioneer within Malaysia’s developing aesthetic-medicine field. With more than 20 years of experience, she continues to develop her knowledge through professional conferences, training and workshops.',
    'Her work reflects a considered approach to aesthetic care, combining clinical judgement, continued learning and an understanding of each patient’s individual concerns.',
    // The live site lists her as trainer/KOL for named procedures and brands.
    // TODO: Confirm with client whether the full brand list should appear here.
    'She is also involved in training and professional education across a range of medical aesthetic procedures.',
  ],
  cta: { label: 'View Doctor Profile', href: '#/about' }, // PLACEHOLDER — dedicated profile page pending
  image: img('about-doctor-dr-sutina-full.jpg'),
  imageAlt: 'Dato’ Dr. N. Sutina Nordin, Medical Director of Enhanze Clinic',
}

/* ------------------------------------------------------------------ */
/* Consultation CTA (shared component)                                 */
/* ------------------------------------------------------------------ */

export const aboutCta: ConsultationContent = {
  label: 'Begin with a Conversation',
  heading: 'Discuss Your Concerns with the Enhanze Team',
  description:
    'Speak with the clinic about your concerns, expectations and suitable treatment options in a professional and comfortable setting.',
  primary: { label: 'Book an Appointment', href: '#/appointment' },
  secondary: { label: 'Contact the Clinic', href: '#/contact' },
  image: img('home-consultation-cta.png'),
  imageAlt:
    'A clinician showing treatment information on a tablet to a patient during a consultation',
}

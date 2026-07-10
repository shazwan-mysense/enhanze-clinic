/**
 * Contact page content. Business details come from ./contact.ts —
 * do not duplicate numbers or addresses here.
 *
 * PROTOTYPE NOTE: the enquiry form validates client-side only and
 * does not transmit or store any information.
 * TODO: Connect the Contact form to the client-approved WordPress
 * enquiry workflow during production development.
 */

import type { FaqContent } from '../components/pricing/PricingFAQ'
import { contact, whatsappLink, emailLink } from './contact'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const contactHero = {
  eyebrow: 'Contact Enhanze',
  heading: 'We’re Here to Help with Your Enquiry',
  description:
    'Contact the Enhanze team for general enquiries, clinic information, treatment questions or assistance before your visit.',
  primary: { label: 'Send an Enquiry', targetId: 'enquiry-form' },
  secondary: { label: 'WhatsApp the Clinic', href: whatsappLink },
  image: img('contact-hero.png'),
  imageAlt:
    'Client reviewing clinic contact information on her smartphone inside a modern aesthetic clinic',
}

/* ------------------------------------------------------------------ */
/* Direct contact methods                                              */
/* ------------------------------------------------------------------ */

export const contactMethods = [
  {
    label: 'Call the Clinic',
    value: contact.phone,
    href: contact.phoneHref,
    external: false,
  },
  {
    label: 'Hotline',
    value: contact.hotline,
    href: contact.hotlineHref,
    external: false,
  },
  {
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: whatsappLink,
    external: true,
  },
  {
    label: 'Email',
    value: contact.email,
    href: emailLink,
    external: false,
  },
]

/* ------------------------------------------------------------------ */
/* Enquiry section                                                     */
/* ------------------------------------------------------------------ */

export const enquirySection = {
  eyebrow: 'General Enquiries',
  heading: 'Send a Message to the Enhanze Team',
  intro:
    'Use this form for general clinic enquiries, treatment information, pricing questions, feedback or assistance before your visit.',
  appointmentNote:
    'To request a preferred appointment date and time, please use the dedicated Appointment page.',
  appointmentLink: { label: 'Request an Appointment', href: '#/appointment' },
}

export const enquiryForm = {
  subjects: [
    'General enquiry',
    'Treatment information',
    'Pricing enquiry',
    'Clinic location',
    'Existing appointment',
    'Feedback',
    'Other',
  ],
  contactMethods: ['Phone call', 'WhatsApp', 'Email'],
  messagePlaceholder: 'Tell us how the clinic can assist with your enquiry.',
  messageMaxLength: 700,
  consentLabel: 'I agree that Enhanze Clinic may contact me regarding this enquiry.',
  submitLabel: 'Send Enquiry',
  success: {
    heading: 'Enquiry Details Validated',
    message:
      'Thank you. Your enquiry details have been validated within this redesign prototype. The production website will connect this form to Enhanze Clinic’s approved enquiry workflow.',
    resetLabel: 'Prepare Another Enquiry',
  },
}

/* ------------------------------------------------------------------ */
/* Visit the clinic                                                    */
/* ------------------------------------------------------------------ */

export const visitClinic = {
  eyebrow: 'Visit Enhanze',
  heading: 'Find the Clinic in Petaling Jaya',
  body: 'Enhanze Clinic is located at Phileo Damansara 1 in Petaling Jaya. Contact the clinic directly if you require assistance with directions before your visit.',
  image: img('about-hero-clinic-interior.png'),
  imageAlt: 'Reception and interior area of Enhanze Clinic',
  // TODO: Confirm clinic opening hours with the client before adding
  // an opening-hours block — none are displayed until confirmed.
}

export const mapTitle =
  'Map showing the location of Enhanze Aesthetic Clinic in Petaling Jaya'

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const contactFaq: FaqContent = {
  eyebrow: 'Contact Information',
  heading: 'Common Questions Before Contacting Us',
  items: [
    {
      question: 'How can I contact Enhanze Clinic?',
      answer:
        'You may call the clinic, use the hotline, send a WhatsApp message, email the team or submit the general enquiry form.',
    },
    {
      question: 'Can I ask about treatment prices through WhatsApp?',
      answer:
        'You may request general pricing information through WhatsApp. Some treatments may still require consultation or assessment before final pricing can be confirmed.',
    },
    {
      question: 'Should I use this form to request an appointment?',
      answer:
        'Use the dedicated Appointment page when you want to provide a preferred service, date and time. This Contact form is intended for general enquiries.',
    },
    {
      question: 'Where is Enhanze Clinic located?',
      answer:
        'The clinic is located at Suite 206, Level 2, Block D, Phileo Damansara 1, Petaling Jaya, Selangor.',
    },
    {
      question: 'Can the clinic recommend a treatment through email or WhatsApp?',
      answer:
        'The team may provide general information, but personalised treatment recommendations should be based on professional consultation and assessment.',
    },
  ],
}

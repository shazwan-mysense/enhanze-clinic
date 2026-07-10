/**
 * Appointment page content and form configuration.
 *
 * PROTOTYPE NOTE: the appointment form validates entirely client-side
 * and does not transmit or store any user information.
 * TODO: Connect this form to the client-approved WordPress booking or
 * enquiry workflow during production development.
 */

import type { ProcessContent } from '../components/ConsultationProcess'
import type { FaqContent } from '../components/pricing/PricingFAQ'
import { whatsappLink } from './homepage'

const img = (file: string) => `${import.meta.env.BASE_URL}assets/img/${file}`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const appointmentHero = {
  eyebrow: 'Appointments',
  heading: 'Request a Consultation at Enhanze Clinic',
  description:
    'Share your preferred service, date and contact details. The Enhanze team will confirm availability and guide you through the next steps.',
  primary: { label: 'Request an Appointment', targetId: 'appointment-form' },
  secondary: { label: 'WhatsApp the Clinic', href: whatsappLink },
  image: img('appointment-hero.png'),
  imageAlt:
    'Client reviewing an appointment on her smartphone inside a modern aesthetic clinic',
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

export const appointmentIntro = {
  eyebrow: 'Before You Book',
  heading: 'Choose a Preferred Time and Tell Us What You Would Like to Discuss',
  body: 'Use the appointment form to provide your preferred date, time and service category. Your submission will be treated as an appointment request and remains subject to confirmation by the Enhanze team.',
  statement:
    'You do not need to know the exact treatment you require. Select General Consultation if you would like professional guidance.',
}

/* ------------------------------------------------------------------ */
/* Form configuration                                                  */
/* ------------------------------------------------------------------ */

export const appointmentForm = {
  eyebrow: 'Appointment Request',
  heading: 'Tell Us Your Preferred Appointment Details',
  intro:
    'Complete the form below and the clinic team will contact you to confirm availability.',
  services: [
    'Acne and acne scarring',
    'Pigmentation and uneven tone',
    'Skin rejuvenation',
    'Facial contouring',
    'Skin tightening',
    'Body contouring',
    'Hair concerns',
    'Health and wellness',
    'General consultation',
    'Other',
  ],
  times: ['Morning', 'Afternoon', 'Evening', 'No preference'],
  contactMethods: ['Phone call', 'WhatsApp', 'Email'],
  notesPlaceholder:
    'Briefly describe your concern or anything the clinic should know before contacting you.',
  notesMaxLength: 500,
  consentLabel:
    'I agree that Enhanze Clinic may contact me regarding this appointment request. I understand that submitting this form does not confirm an appointment.',
  submitLabel: 'Submit Appointment Request',
  success: {
    heading: 'Appointment Request Validated',
    message:
      'Thank you. Your details have been validated within this redesign prototype. The production website will connect this form to Enhanze Clinic’s approved appointment workflow.',
    resetLabel: 'Prepare Another Request',
  },
}

/* ------------------------------------------------------------------ */
/* Consultation guidance                                               */
/* ------------------------------------------------------------------ */

export const appointmentGuidance = {
  eyebrow: 'Preparing for Your Consultation',
  heading: 'A More Useful Consultation Begins with Clear Information',
  body: 'You may briefly describe the concern you would like to discuss and the outcome you hope to understand. During the consultation, the clinic can review your needs, discuss suitable options and explain the next steps.',
  points: [
    'Identify the main concern you would like to discuss',
    'Select General Consultation if you are unsure about the treatment',
    'Prepare relevant previous treatment information when requested',
    'Ask questions about suitability, expectations and aftercare',
    'Wait for appointment confirmation before visiting the clinic',
  ],
  image: img('appointment-consultation.png'),
  imageAlt:
    'Client reviewing consultation information on a tablet inside a private clinic room',
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const appointmentProcess: ProcessContent = {
  eyebrow: 'What Happens Next',
  heading: 'From Request to Confirmation',
  steps: [
    {
      name: 'Submit Your Preference',
      detail: 'Provide your preferred service category, date, time and contact method.',
    },
    {
      name: 'Clinic Confirmation',
      detail:
        'The Enhanze team will review availability and contact you using your selected contact method once the production workflow is connected.',
    },
    {
      name: 'Attend Your Consultation',
      detail: 'Visit the clinic only after your appointment details have been confirmed.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const appointmentFaq: FaqContent = {
  eyebrow: 'Booking Information',
  heading: 'Questions About Appointments',
  items: [
    {
      question: 'Does submitting the form confirm my appointment?',
      answer:
        'No. Your preferred date and time remain subject to availability. The clinic must confirm the appointment directly with you.',
    },
    {
      question: 'Do I need to know which treatment I want?',
      answer:
        'No. Select General Consultation if you are unsure. The clinic can discuss suitable options based on your concerns and professional assessment.',
    },
    {
      question: 'Can I request an appointment through WhatsApp?',
      answer:
        'Yes. You may use the clinic’s WhatsApp contact for general appointment enquiries. Availability must still be confirmed by the clinic.',
    },
    {
      question: 'Can I select an exact appointment time?',
      answer:
        'The prototype allows you to provide a general time preference. Final appointment timing depends on clinic availability.',
    },
    {
      question: 'What information should I include in the notes?',
      answer:
        'You may briefly describe the concern you would like to discuss. Avoid submitting highly sensitive medical details through the prototype form.',
    },
  ],
}

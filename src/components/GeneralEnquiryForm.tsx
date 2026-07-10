import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { enquiryForm } from '../data/contactPage'
import { useReveal } from '../hooks/useReveal'
// reuses the shared form styling introduced by the Appointment page
import './AppointmentForm.css'

/**
 * PROTOTYPE: validates entirely client-side; nothing is transmitted
 * or stored anywhere.
 * TODO: Connect the Contact form to the client-approved WordPress
 * enquiry workflow during production development.
 */

interface FormValues {
  name: string
  phone: string
  email: string
  subject: string
  contactMethod: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  contactMethod: '',
  message: '',
  consent: false,
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'

  const phoneDigits = values.phone.replace(/[\s-]/g, '')
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a contact number.'
  } else if (!/^\+?\d{7,15}$/.test(phoneDigits)) {
    errors.phone = 'Please enter a valid contact number, e.g. 012-345 3779.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.subject) errors.subject = 'Please select a subject.'

  if (!values.contactMethod)
    errors.contactMethod = 'Please choose how you would like to be contacted.'

  if (!values.message.trim()) errors.message = 'Please enter your enquiry message.'

  if (!values.consent)
    errors.consent = 'Please confirm you agree to be contacted about this enquiry.'

  return errors
}

export default function GeneralEnquiryForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [succeeded, setSucceeded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const revealRef = useReveal<HTMLDivElement>()

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors).find((k) => nextErrors[k as keyof FormValues])
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus()
      return
    }
    // prototype only — no data leaves the page
    setSucceeded(true)
  }

  const err = (key: keyof FormValues, id: string) =>
    errors[key] ? (
      <p className="af__error" id={id}>
        {errors[key]}
      </p>
    ) : null

  if (succeeded) {
    return (
      <div className="af__success" role="status" aria-live="polite">
        <span className="af__success-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22">
            <path d="M4 11.5l5 5L18 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <h3>{enquiryForm.success.heading}</h3>
        <p>{enquiryForm.success.message}</p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setValues(INITIAL_VALUES)
            setErrors({})
            setSucceeded(false)
          }}
        >
          {enquiryForm.success.resetLabel}
        </button>
      </div>
    )
  }

  return (
    <div ref={revealRef} className="reveal">
      <form ref={formRef} className="af" onSubmit={onSubmit} noValidate>
        <p className="af__required-note">
          Fields marked <span aria-hidden="true">*</span>
          <span className="visually-hidden">asterisk</span> are required.
        </p>

        <div className="af__grid">
          <div className="af__field">
            <label htmlFor="ef-name">
              Full Name <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="ef-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => set('name', e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'ef-name-error' : undefined}
            />
            {err('name', 'ef-name-error')}
          </div>

          <div className="af__field">
            <label htmlFor="ef-phone">
              Contact Number <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="ef-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="e.g. 012-345 3779"
              value={values.phone}
              onChange={(e) => set('phone', e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'ef-phone-error' : undefined}
            />
            {err('phone', 'ef-phone-error')}
          </div>

          <div className="af__field">
            <label htmlFor="ef-email">
              Email Address <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="ef-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => set('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'ef-email-error' : undefined}
            />
            {err('email', 'ef-email-error')}
          </div>

          <div className="af__field">
            <label htmlFor="ef-subject">
              Subject <span className="af__req" aria-hidden="true">*</span>
            </label>
            <select
              id="ef-subject"
              name="subject"
              required
              value={values.subject}
              onChange={(e) => set('subject', e.target.value)}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'ef-subject-error' : undefined}
            >
              <option value="">Please select</option>
              {enquiryForm.subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {err('subject', 'ef-subject-error')}
          </div>

          <fieldset
            className="af__field af__field--full af__radios"
            aria-describedby={errors.contactMethod ? 'ef-contact-error' : undefined}
          >
            <legend>
              Preferred Contact Method <span className="af__req" aria-hidden="true">*</span>
            </legend>
            <div className="af__radio-row">
              {enquiryForm.contactMethods.map((method) => (
                <label key={method} className="af__radio">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={values.contactMethod === method}
                    onChange={() => set('contactMethod', method)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
            {err('contactMethod', 'ef-contact-error')}
          </fieldset>

          <div className="af__field af__field--full">
            <label htmlFor="ef-message">
              Message <span className="af__req" aria-hidden="true">*</span>
            </label>
            <textarea
              id="ef-message"
              name="message"
              rows={6}
              required
              maxLength={enquiryForm.messageMaxLength}
              placeholder={enquiryForm.messagePlaceholder}
              value={values.message}
              onChange={(e) => set('message', e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? 'ef-message-error ef-message-count' : 'ef-message-count'
              }
            />
            <p className="af__help af__count" id="ef-message-count">
              {values.message.length}/{enquiryForm.messageMaxLength} characters
            </p>
            {err('message', 'ef-message-error')}
          </div>

          <div className="af__field af__field--full">
            <label className="af__consent">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={(e) => set('consent', e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'ef-consent-error' : undefined}
              />
              <span>
                {enquiryForm.consentLabel} <span className="af__req" aria-hidden="true">*</span>
              </span>
            </label>
            {err('consent', 'ef-consent-error')}
          </div>
        </div>

        <button type="submit" className="btn btn--solid af__submit">
          {enquiryForm.submitLabel}
        </button>
        <p className="af__prototype-note">
          Prototype form — no information is transmitted or stored.
        </p>
      </form>
    </div>
  )
}

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { appointmentForm } from '../data/appointment'
import { useReveal } from '../hooks/useReveal'
import './AppointmentForm.css'

/**
 * PROTOTYPE: validates entirely client-side; nothing is transmitted
 * or stored anywhere.
 * TODO: Connect this form to the client-approved WordPress booking or
 * enquiry workflow during production development.
 */

interface FormValues {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  contactMethod: string
  notes: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  contactMethod: '',
  notes: '',
  consent: false,
}

function todayISO(): string {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  return new Date(now.getTime() - offset * 60000).toISOString().slice(0, 10)
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'

  // lenient: digits with optional +, spaces and hyphens (Malaysian formats welcome)
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

  if (!values.service) errors.service = 'Please select a preferred service.'

  if (!values.date) {
    errors.date = 'Please choose a preferred date.'
  } else if (values.date < todayISO()) {
    errors.date = 'Please choose a date that is not in the past.'
  }

  if (!values.time) errors.time = 'Please select a preferred time.'

  if (!values.contactMethod)
    errors.contactMethod = 'Please choose how you would like to be contacted.'

  if (!values.consent)
    errors.consent = 'Please confirm you agree to be contacted about this request.'

  return errors
}

export default function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [succeeded, setSucceeded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const revealRef = useReveal<HTMLDivElement>()

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }))
    // clear the field's error as soon as the user edits it
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors).find((k) => nextErrors[k as keyof FormValues])
    if (firstError) {
      const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)
      el?.focus()
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
        <h3>{appointmentForm.success.heading}</h3>
        <p>{appointmentForm.success.message}</p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setValues(INITIAL_VALUES)
            setErrors({})
            setSucceeded(false)
          }}
        >
          {appointmentForm.success.resetLabel}
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
            <label htmlFor="af-name">
              Full Name <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="af-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => set('name', e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'af-name-error' : undefined}
            />
            {err('name', 'af-name-error')}
          </div>

          <div className="af__field">
            <label htmlFor="af-phone">
              Contact Number <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="af-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="e.g. 012-345 3779"
              value={values.phone}
              onChange={(e) => set('phone', e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'af-phone-error' : undefined}
            />
            {err('phone', 'af-phone-error')}
          </div>

          <div className="af__field af__field--full">
            <label htmlFor="af-email">
              Email Address <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="af-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => set('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'af-email-error' : undefined}
            />
            {err('email', 'af-email-error')}
          </div>

          <div className="af__field af__field--full">
            <label htmlFor="af-service">
              Preferred Service <span className="af__req" aria-hidden="true">*</span>
            </label>
            <select
              id="af-service"
              name="service"
              required
              value={values.service}
              onChange={(e) => set('service', e.target.value)}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'af-service-error' : undefined}
            >
              <option value="">Please select</option>
              {appointmentForm.services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {err('service', 'af-service-error')}
          </div>

          <div className="af__field">
            <label htmlFor="af-date">
              Preferred Appointment Date <span className="af__req" aria-hidden="true">*</span>
            </label>
            <input
              id="af-date"
              name="date"
              type="date"
              required
              min={todayISO()}
              value={values.date}
              onChange={(e) => set('date', e.target.value)}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? 'af-date-error' : 'af-date-help'}
            />
            <p className="af__help" id="af-date-help">
              Subject to clinic availability.
            </p>
            {err('date', 'af-date-error')}
          </div>

          <div className="af__field">
            <label htmlFor="af-time">
              Preferred Time <span className="af__req" aria-hidden="true">*</span>
            </label>
            <select
              id="af-time"
              name="time"
              required
              value={values.time}
              onChange={(e) => set('time', e.target.value)}
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? 'af-time-error' : undefined}
            >
              <option value="">Please select</option>
              {appointmentForm.times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {err('time', 'af-time-error')}
          </div>

          <fieldset
            className="af__field af__field--full af__radios"
            aria-describedby={errors.contactMethod ? 'af-contact-error' : undefined}
          >
            <legend>
              Preferred Contact Method <span className="af__req" aria-hidden="true">*</span>
            </legend>
            <div className="af__radio-row">
              {appointmentForm.contactMethods.map((method) => (
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
            {err('contactMethod', 'af-contact-error')}
          </fieldset>

          <div className="af__field af__field--full">
            <label htmlFor="af-notes">Additional Notes</label>
            <textarea
              id="af-notes"
              name="notes"
              rows={5}
              maxLength={appointmentForm.notesMaxLength}
              placeholder={appointmentForm.notesPlaceholder}
              value={values.notes}
              onChange={(e) => set('notes', e.target.value)}
              aria-describedby="af-notes-count"
            />
            <p className="af__help af__count" id="af-notes-count">
              {values.notes.length}/{appointmentForm.notesMaxLength} characters
            </p>
          </div>

          <div className="af__field af__field--full">
            <label className="af__consent">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={(e) => set('consent', e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'af-consent-error' : undefined}
              />
              <span>
                {appointmentForm.consentLabel} <span className="af__req" aria-hidden="true">*</span>
              </span>
            </label>
            {err('consent', 'af-consent-error')}
          </div>
        </div>

        <button type="submit" className="btn btn--solid af__submit">
          {appointmentForm.submitLabel}
        </button>
        <p className="af__prototype-note">
          Prototype form — no information is transmitted or stored.
        </p>
      </form>
    </div>
  )
}

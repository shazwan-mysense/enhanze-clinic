import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent } from 'react'
import { heroSlides } from '../data/homepage'
import './HeroSlider.css'

const AUTOPLAY_MS = 6500

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number>()

  const count = heroSlides.length

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  )

  /* autoplay — paused on hover, focus or reduced-motion preference */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduced) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timerRef.current)
  }, [paused, count, index]) // `index` resets the interval after manual navigation

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <section
      className="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured treatments"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div className="hero__track">
        {heroSlides.map((slide, i) => {
          const active = i === index
          return (
            <article
              key={slide.id}
              className={`hero-slide hero-slide--${slide.layout}${active ? ' hero-slide--active' : ''}`}
              aria-hidden={!active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.heading}`}
              // keep links in hidden slides out of the tab order
              {...(!active ? { inert: '' as never } : {})}
            >
              <div className="hero-slide__media">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  style={
                    {
                      '--focus-desktop': slide.focusDesktop,
                      '--focus-mobile': slide.focusMobile,
                    } as CSSProperties
                  }
                  loading={i === 0 ? 'eager' : 'lazy'}
                  width={1280}
                  height={720}
                  {...(i === 0 ? ({ fetchpriority: 'high' } as object) : {})}
                />
              </div>

              <div className="hero-slide__inner container container--wide">
                <div className="hero-slide__content">
                  <p className="eyebrow hero-slide__eyebrow">{slide.eyebrow}</p>
                  <h2 className="hero-slide__heading">{slide.heading}</h2>
                  <p className="hero-slide__desc">{slide.description}</p>
                  <div className="hero-slide__actions">
                    <a href={slide.primary.href} className="btn btn--solid" tabIndex={active ? 0 : -1}>
                      {slide.primary.label}
                    </a>
                    <a
                      href={slide.secondary.href}
                      className={`btn ${slide.layout === 'dark-right' ? 'btn--outline-light' : 'btn--outline'}`}
                      tabIndex={active ? 0 : -1}
                    >
                      {slide.secondary.label}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="hero__controls container container--wide">
        <div className="hero__dots" role="group" aria-label="Choose slide">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              className={`hero__dot${i === index ? ' hero__dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}: ${slide.heading}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="hero__arrows">
          <button className="hero__arrow" aria-label="Previous slide" onClick={() => goTo(index - 1)}>
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M7 1L2 6l5 5M2 6h16" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button className="hero__arrow" aria-label="Next slide" onClick={() => goTo(index + 1)}>
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M11 1l5 5-5 5M16 6H0" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

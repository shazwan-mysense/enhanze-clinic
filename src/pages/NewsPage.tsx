import { useEffect } from 'react'
import NewsExplorer from '../components/NewsExplorer'
import ConsultationCTA from '../components/ConsultationCTA'
import {
  newsHero,
  newsIntro,
  newsArticles,
  newsUpdates,
  newsCta,
  articleHref,
} from '../data/news'
import { useReveal } from '../hooks/useReveal'
import { useRoute } from '../router'
import { scrollToId } from '../utils/scrollToId'
import './NewsPage.css'

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function NewsHero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="n-hero" aria-labelledby="n-hero-heading">
      <div className="n-hero__media">
        <img
          src={newsHero.image}
          alt={newsHero.imageAlt}
          width={1344}
          height={752}
          {...({ fetchpriority: 'high' } as object)}
        />
      </div>
      <div className="n-hero__inner container container--wide">
        <div className="n-hero__content reveal" ref={ref}>
          <p className="eyebrow">{newsHero.eyebrow}</p>
          <h1 id="n-hero-heading">{newsHero.heading}</h1>
          <p className="n-hero__desc">{newsHero.description}</p>
          <div className="n-hero__actions">
            <button
              type="button"
              className="btn btn--solid"
              onClick={() => scrollToId(newsHero.primary.targetId)}
            >
              {newsHero.primary.label}
            </button>
            <a href={newsHero.secondary.href} className="btn btn--outline">
              {newsHero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Introduction                                                        */
/* ------------------------------------------------------------------ */

function NewsIntro() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section className="n-intro" aria-labelledby="n-intro-heading">
      <div className="container container--wide n-intro__grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">{newsIntro.eyebrow}</p>
          <h2 id="n-intro-heading">{newsIntro.heading}</h2>
        </div>
        <div className="n-intro__copy reveal" ref={rightRef}>
          <p>{newsIntro.body}</p>
          <p className="n-intro__statement">{newsIntro.statement}</p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured article                                                    */
/* ------------------------------------------------------------------ */

function FeaturedArticle() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()
  const article = newsArticles.find((a) => a.featured) ?? newsArticles[0]

  return (
    <section className="n-featured" id="news-featured" aria-labelledby="n-featured-heading">
      <div className="container container--wide">
        <p className="n-featured__tag reveal" ref={textRef}>
          Featured Article
        </p>
        <article className="n-featured__grid">
          <a
            href={articleHref(article.slug)}
            className="n-featured__media-link"
            aria-label={`Read featured article: ${article.title}`}
          >
            <div className="reveal-img n-featured__media" ref={imgRef}>
              <img
                src={article.image}
                alt={article.alt}
                width={2224}
                height={1664}
                loading="eager"
              />
            </div>
          </a>
          <div className="n-featured__body">
            <p className="n-featured__meta">
              <span>{article.category}</span>
              <span aria-hidden="true"> · </span>
              <time>{article.date}</time>
            </p>
            <h2 id="n-featured-heading">
              <a href={articleHref(article.slug)}>{article.title}</a>
            </h2>
            <p className="n-featured__excerpt">
              Understand common causes of stretch marks, available treatment approaches and
              why professional assessment matters when considering suitable options.
            </p>
            <a href={articleHref(article.slug)} className="text-link">
              Read Article
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Clinic updates                                                      */
/* ------------------------------------------------------------------ */

function ClinicUpdates() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="n-updates" aria-labelledby="n-updates-heading">
      <div className="container container--wide n-updates__inner reveal" ref={ref}>
        <div>
          <p className="eyebrow">{newsUpdates.eyebrow}</p>
          <h2 id="n-updates-heading">{newsUpdates.heading}</h2>
          <p className="n-updates__body">{newsUpdates.body}</p>
        </div>
        <div className="n-updates__actions">
          {newsUpdates.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`btn ${action.style === 'solid' ? 'btn--solid' : 'btn--outline-light'}`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Article "coming soon" view for #/news/<slug>                        */
/* ------------------------------------------------------------------ */

function ArticleComingSoon({ slug }: { slug: string }) {
  const ref = useReveal<HTMLDivElement>()
  const article = newsArticles.find((a) => a.slug === slug)

  useEffect(() => {
    document.title = `${article ? article.title : 'Article'} — Enhanze Clinic`
  }, [article])

  return (
    <section className="n-soon" aria-labelledby="n-soon-heading">
      <div className="container container--wide n-soon__inner reveal" ref={ref}>
        <p className="eyebrow">Coming Soon</p>
        <h1 id="n-soon-heading">
          {article ? article.title : 'This article is being prepared'}
        </h1>
        <p className="n-soon__body">
          The full article page is part of the next phase of this redesign. In the
          meantime, you can browse the article directory or speak with the clinic for
          personalised guidance.
        </p>
        <div className="n-soon__actions">
          <a href="#/news" className="btn btn--solid">
            Back to News &amp; Events
          </a>
          <a href="#/contact" className="btn btn--outline">
            Contact the Clinic
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NewsPage() {
  const path = useRoute()
  const slug = path.startsWith('/news/') ? path.slice('/news/'.length) : null

  useEffect(() => {
    if (!slug) document.title = 'News & Events — Enhanze Clinic'
  }, [slug])

  if (slug) {
    return <ArticleComingSoon slug={slug} />
  }

  return (
    <>
      <NewsHero />
      <NewsIntro />
      <FeaturedArticle />
      <section className="n-directory" aria-label="Article directory">
        <div className="container container--wide">
          <NewsExplorer />
        </div>
      </section>
      <ClinicUpdates />
      <ConsultationCTA content={newsCta} />
    </>
  )
}

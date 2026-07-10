import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { useId } from 'react'
import { newsArticles, newsTopics, newsDisclaimer, articleHref } from '../data/news'
import type { NewsArticle } from '../data/news'
import './NewsExplorer.css'

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

function ArticleCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <li
      className="news-card"
      style={{ '--card-delay': `${(index % 6) * 0.06}s` } as CSSProperties}
    >
      <article>
        <a
          href={articleHref(article.slug)}
          className="news-card__link"
          aria-label={`Read article: ${article.title}`}
        >
          <div className="news-card__media">
            <img
              src={article.image}
              alt={article.alt}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
            />
          </div>
          <div className="news-card__body">
            <p className="news-card__meta">
              <span className="news-card__category">{article.category}</span>
              <span aria-hidden="true"> · </span>
              <time>{article.date}</time>
            </p>
            <h3>{article.title}</h3>
            <p className="news-card__excerpt">{article.excerpt}</p>
            <span className="news-card__read">
              Read Article
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </a>
      </article>
    </li>
  )
}

/* ------------------------------------------------------------------ */
/* Explorer — topic filter + search + grid                             */
/* ------------------------------------------------------------------ */

export default function NewsExplorer() {
  const searchId = useId()
  const [topic, setTopic] = useState<(typeof newsTopics)[number]>('All Articles')
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return newsArticles.filter((a) => {
      if (topic !== 'All Articles' && a.category !== topic) return false
      if (!q) return true
      const haystack = [a.title, a.excerpt, a.category, ...a.keywords]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [topic, query])

  return (
    <div className="news-explorer">
      <div className="news-explorer__tools">
        <div className="news-topics" role="group" aria-label="Filter articles by topic">
          {newsTopics.map((t) => {
            const active = t === topic
            return (
              <button
                key={t}
                type="button"
                className={`news-topics__btn${active ? ' news-topics__btn--active' : ''}`}
                aria-pressed={active}
                onClick={() => setTopic(t)}
              >
                {t}
              </button>
            )
          })}
        </div>

        <div className="news-search" role="search">
          <label className="news-search__label" htmlFor={searchId}>
            Search articles
          </label>
          <div className="news-search__field">
            <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
              <circle cx="6.2" cy="6.2" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              id={searchId}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search treatments, concerns or topics"
              autoComplete="off"
            />
            {query.trim() && (
              <button
                type="button"
                className="news-search__clear"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                Clear
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="news-explorer__count" role="status">
        {results.length === 0
          ? 'No matching articles'
          : `${results.length} article${results.length === 1 ? '' : 's'}`}
      </p>

      {results.length === 0 ? (
        <div className="news-empty">
          <p className="news-empty__title">No matching articles were found.</p>
          <p>
            Try another keyword or{' '}
            <a href="#/contact" className="news-empty__link">
              contact the clinic
            </a>{' '}
            for guidance.
          </p>
        </div>
      ) : (
        <ul className="news-grid" key={`${topic}-${query.trim()}`}>
          {results.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </ul>
      )}

      <p className="news-explorer__disclaimer">{newsDisclaimer}</p>
    </div>
  )
}

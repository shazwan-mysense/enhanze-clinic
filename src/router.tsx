import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Minimal hash-based router — no dependencies, and hash URLs
 * (e.g. #/procedures) work on GitHub Pages without a 404 fallback.
 *
 * Links are plain anchors: <a href="#/procedures">…</a>.
 * Any hash that does not start with "#/" is ignored, so the router
 * never fights in-page anchor behaviour (in-page scrolling is done
 * with scrollIntoView instead of raw anchors).
 */

function parseHash(): string {
  const hash = window.location.hash
  return hash.startsWith('#/') ? hash.slice(1) : '/'
}

const RouteContext = createContext<string>('/')

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(parseHash)

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash()
      setPath((prev) => {
        if (prev !== next) {
          // new page: start at the top, instantly (smooth scroll between
          // pages reads as a glitch, and reloading isn't happening anyway)
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
        }
        return next
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return <RouteContext.Provider value={path}>{children}</RouteContext.Provider>
}

/** Current route path, e.g. "/" or "/procedures" */
export function useRoute(): string {
  return useContext(RouteContext)
}

/** True when `href` (a "#/…" link) matches the current route */
export function isActiveLink(href: string, path: string): boolean {
  if (!href.startsWith('#/')) return false
  const target = href.slice(1)
  return target === '/' ? path === '/' : path.startsWith(target)
}

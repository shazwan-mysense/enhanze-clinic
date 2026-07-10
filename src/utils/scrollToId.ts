/**
 * Smooth-scroll to an element by id without touching the URL hash
 * (raw #anchors would conflict with the hash router).
 * Falls back to an instant jump when the user prefers reduced motion.
 */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
}

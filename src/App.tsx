import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ProceduresPage from './pages/ProceduresPage'
import PricePage from './pages/PricePage'
import AboutPage from './pages/AboutPage'
import BeforeAfterPage from './pages/BeforeAfterPage'
import NewsPage from './pages/NewsPage'
import AppointmentPage from './pages/AppointmentPage'
import ContactPage from './pages/ContactPage'
import TreatmentPage from './pages/TreatmentPage'
import ServicePage from './pages/ServicePage'
import { endolift, ultherapyPrime } from './data/treatments'
import { serviceBySlug } from './data/services'
import { RouterProvider, useRoute } from './router'

function CurrentPage() {
  const path = useRoute()
  // "/procedures/<slug>" resolves to a signature treatment page, then to
  // a service (concern) page; anything else under /procedures falls back
  // to the Procedures page, and unknown routes to the homepage, so no
  // link ever dead-ends.
  // `key` forces a remount when moving between two pages that share a
  // component: the reveal observer adds `.is-visible` imperatively, so a
  // reused node would keep (or lose) that class when React rewrites
  // className, leaving sections stuck invisible.
  if (path === '/procedures/endolift') return <TreatmentPage key="endolift" data={endolift} />
  if (path === '/procedures/ultherapy-prime')
    return <TreatmentPage key="ultherapy-prime" data={ultherapyPrime} />
  if (path.startsWith('/procedures/')) {
    const service = serviceBySlug(path.slice('/procedures/'.length))
    if (service) return <ServicePage key={service.slug} data={service} />
  }
  if (path.startsWith('/procedures')) return <ProceduresPage />
  if (path.startsWith('/price')) return <PricePage />
  if (path.startsWith('/about')) return <AboutPage />
  if (path.startsWith('/before-after')) return <BeforeAfterPage />
  if (path.startsWith('/news')) return <NewsPage />
  if (path.startsWith('/appointment')) return <AppointmentPage />
  if (path.startsWith('/contact')) return <ContactPage />
  return <HomePage />
}

export default function App() {
  return (
    <RouterProvider>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <CurrentPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </RouterProvider>
  )
}

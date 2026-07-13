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
import { endolift, ultherapyPrime } from './data/treatments'
import { RouterProvider, useRoute } from './router'

function CurrentPage() {
  const path = useRoute()
  // "/procedures" and its future children (e.g. /procedures/acne)
  // all resolve to the Procedures page for now; unknown routes fall
  // back to the homepage so placeholder links never dead-end.
  if (path === '/procedures/endolift') return <TreatmentPage data={endolift} />
  if (path === '/procedures/ultherapy-prime') return <TreatmentPage data={ultherapyPrime} />
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

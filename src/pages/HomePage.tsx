import { useEffect } from 'react'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import CredibilityStrip from '../components/CredibilityStrip'
import DoctorFeature from '../components/DoctorFeature'
import TreatmentCategories from '../components/TreatmentCategories'
import FeaturedProcedures from '../components/FeaturedProcedures'
import ConsultationCTA from '../components/ConsultationCTA'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Enhanze Clinic — Medical Aesthetic Clinic in Malaysia'
  }, [])

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <CredibilityStrip />
      <DoctorFeature />
      <TreatmentCategories />
      <FeaturedProcedures />
      <ConsultationCTA />
    </>
  )
}

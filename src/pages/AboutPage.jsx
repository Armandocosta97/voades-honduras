import PageMeta from '../components/layout/PageMeta.jsx'
import AboutFinalCtaSection from '../components/sections/AboutFinalCtaSection.jsx'
import AboutHistorySection from '../components/sections/AboutHistorySection.jsx'
import AboutMissionSection from '../components/sections/AboutMissionSection.jsx'
import AboutPageHeroSection from '../components/sections/AboutPageHeroSection.jsx'
import '../styles/about-page.css'

function AboutPage() {
  return (
    <div className="about-page">
      <PageMeta
        description="Conoce la historia, misión, visión y forma de servicio de VOADES Honduras."
        title="Nuestra historia | VOADES Honduras"
      />
      <AboutPageHeroSection />
      <AboutHistorySection />
      <AboutMissionSection />
      <AboutFinalCtaSection />
    </div>
  )
}

export default AboutPage

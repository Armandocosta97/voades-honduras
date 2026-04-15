import PageMeta from '../components/layout/PageMeta.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import TrustPointsSection from '../components/sections/TrustPointsSection.jsx'

function HomePage() {
  return (
    <div className="home-page">
      <PageMeta
        description="VOADES Honduras ofrece escucha, orientación y acompañamiento cercano con contacto directo por WhatsApp, llamada y redes."
        title="VOADES Honduras | Escucha, orientación y acompañamiento"
      />
      <HeroSection />
      <TrustPointsSection />
    </div>
  )
}

export default HomePage

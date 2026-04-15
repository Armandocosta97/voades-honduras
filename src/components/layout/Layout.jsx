import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FloatingWhatsApp from './FloatingWhatsApp.jsx'
import MobileContactBar from './MobileContactBar.jsx'
import StructuredData from './StructuredData.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function Layout({ children }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <StructuredData />
      <ScrollToTop />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  )
}

export default Layout

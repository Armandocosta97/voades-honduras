import PageMeta from '../components/layout/PageMeta.jsx'
import ContactChannelsGrid from '../components/ui/ContactChannelsGrid.jsx'
import { siteImages } from '../data/siteImages.js'
import '../styles/contact-page.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <PageMeta
        description="Contacta con VOADES Honduras por WhatsApp, llamada, Facebook o Instagram para pedir ayuda u orientación."
        title="Contacto | VOADES Honduras"
      />

      <section className="section contact-hero">
        <div className="container contact-hero__layout">
          <div className="contact-hero__copy stack-md">
            <span className="page-eyebrow">Contacto</span>
            <div className="stack-sm">
              <h1>Estamos aquí para escucharte.</h1>
              <p className="contact-hero__lead">
                Si tú o alguien necesita ayuda, puedes escribirnos o llamarnos por
                el canal que te resulte más cómodo. También puedes seguirnos y
                contactarnos por nuestras redes sociales.
              </p>
            </div>
          </div>

          <div className="contact-hero__media">
            <div className="contact-hero__blob contact-hero__blob--green" />
            <div className="contact-hero__blob contact-hero__blob--blue" />
            <img
              alt={siteImages.supportEmbrace.alt}
              className="contact-hero__image"
              loading="lazy"
              src={siteImages.supportEmbrace.src}
            />
          </div>
        </div>
      </section>

      <section className="section contact-actions">
        <div className="container stack-lg">
          <p className="contact-actions__intro">
            Elige el canal que te resulte más fácil y contáctanos directamente.
          </p>

          <ContactChannelsGrid />
        </div>
      </section>
    </div>
  )
}

export default ContactPage

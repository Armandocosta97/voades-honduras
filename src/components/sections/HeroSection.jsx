import { contacts } from '../../data/contacts.js'
import { siteImages } from '../../data/siteImages.js'
import Button from '../ui/Button.jsx'

function HeroSection() {
  return (
    <section className="hero-section hero-section--poster">
      <div className="container">
        <div className="hero-poster">
          <div className="hero-poster__blob hero-poster__blob--left" />
          <div className="hero-poster__blob hero-poster__blob--right" />

          <div className="hero-poster__brand">
            <span className="hero-poster__brand-mark">voades</span>
            <span className="hero-poster__brand-subtitle">VOCES AMIGAS DE ESPERANZA</span>
          </div>

          <div className="hero-poster__content">
            <div className="hero-poster__copy stack-md">
              <span className="page-eyebrow">Atención psicológica y comunitaria</span>
              <h1>ESCUCHAR, ORIENTAR Y ACOMPAÑAR CON ESPERANZA</h1>
              <p className="hero-poster__lead">
                Si tú o alguien necesita apoyo psicológico, en VOADES queremos
                ponértelo fácil: escucharte con atención, orientarte con claridad
                y responderte por el canal que te resulte más cercano.
              </p>

              <div className="hero-poster__info">
                <div className="hero-poster__info-row">
                  <span>WhatsApp</span>
                  <strong>{contacts.whatsapp}</strong>
                </div>
                <div className="hero-poster__info-row">
                  <span>Llamada</span>
                  <strong>{contacts.phone}</strong>
                </div>
                <div className="hero-poster__info-row">
                  <span>Horario</span>
                  <strong>{contacts.schedule}</strong>
                </div>
              </div>
            </div>

            <div className="hero-poster__media">
              <div className="hero-poster__photo-frame">
                <img
                  alt={siteImages.homePortrait.alt}
                  className="hero-poster__photo"
                  src={siteImages.homePortrait.src}
                />
              </div>
              <div className="hero-poster__mini-card">
                <span>Escucha</span>
                <strong>que acompaña de verdad</strong>
              </div>
            </div>
          </div>

          <div className="hero-poster__actions">
            <div className="button-row">
              <Button href={contacts.whatsappHref} variant="primary-green">
                Escribir por WhatsApp
              </Button>
              <Button href={contacts.phoneHref} variant="secondary-blue">
                Llamar ahora
              </Button>
              <Button href="/courses" variant="ghost">
                Ver talleres y cursos
              </Button>
            </div>
            <p>
              Cuando escribes o llamas, te responde una persona para orientarte y
              ayudarte a dar el siguiente paso con calma.
            </p>
            <div className="hero-poster__cta-blob" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

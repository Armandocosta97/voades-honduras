import Button from '../ui/Button.jsx'
import { contacts } from '../../data/contacts.js'
import SectionTitle from '../ui/SectionTitle.jsx'

function ContactQuickSection() {
  return (
    <section className="section section--alt home-contact-section">
      <div className="container home-contact-shell">
        <div className="stack-lg">
          <SectionTitle
            eyebrow="Contacto rápido"
            subtitle="La sección se vuelve más útil cuando actúa como panel de contacto y no como una parrilla uniforme."
            title="Habla con nosotros por el canal que prefieras"
          />
          <div className="contact-quick-actions">
            <Button href={contacts.whatsappHref} variant="primary-green">
              Abrir WhatsApp
            </Button>
            <Button href={contacts.phoneHref} variant="secondary-blue">
              Llamar ahora
            </Button>
          </div>
        </div>

        <div className="home-contact-board">
          <a className="home-contact-chip" href={contacts.whatsappHref} rel="noreferrer" target="_blank">
            <span>WhatsApp</span>
            <strong>{contacts.whatsapp}</strong>
          </a>
          <a className="home-contact-chip" href={contacts.phoneHref}>
            <span>Teléfono</span>
            <strong>{contacts.phone}</strong>
          </a>
          <a className="home-contact-chip" href={contacts.facebookHref} rel="noreferrer" target="_blank">
            <span>Facebook</span>
            <strong>{contacts.facebook}</strong>
          </a>
          <a className="home-contact-chip" href={contacts.mapsHref} rel="noreferrer" target="_blank">
            <span>Ubicación</span>
            <strong>{`${contacts.address}, ${contacts.city}`}</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactQuickSection

import { contacts } from '../../data/contacts.js'

function FloatingWhatsApp() {
  return (
    <a
      aria-label="Abrir WhatsApp de VOADES Honduras"
      className="floating-whatsapp"
      href={contacts.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      WA
    </a>
  )
}

export default FloatingWhatsApp

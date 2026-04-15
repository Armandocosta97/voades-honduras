import { contacts } from '../../data/contacts.js'
import Button from '../ui/Button.jsx'

function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">
      <div className="mobile-contact-bar__inner">
        <Button fullWidth href={contacts.whatsappHref} variant="primary-green">
          WhatsApp
        </Button>
        <Button fullWidth href={contacts.phoneHref} variant="secondary-blue">
          Llamar ahora
        </Button>
      </div>
    </div>
  )
}

export default MobileContactBar

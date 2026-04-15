import { contacts } from '../../data/contacts.js'
import Button from '../ui/Button.jsx'

function FinalCtaStripSection() {
  return (
    <section className="section home-final-cta-section">
      <div className="container">
        <div className="final-cta-strip final-cta-strip--home">
          <div className="stack-xs">
            <span className="page-eyebrow">Contacto directo</span>
            <h2>Si necesitas apoyo, la mejor interfaz sigue siendo hablar con alguien.</h2>
            <p>
              La Home termina con una salida clara: escribir, llamar o seguir navegando
              sin perder el sentido humano del sitio.
            </p>
          </div>

          <div className="button-row">
            <Button href={contacts.whatsappHref} variant="primary-green">
              Escribir ahora
            </Button>
            <Button href={contacts.phoneHref} variant="secondary-blue">
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaStripSection

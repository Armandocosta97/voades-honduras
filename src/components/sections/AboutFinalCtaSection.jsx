import { contacts } from '../../data/contacts.js'
import Button from '../ui/Button.jsx'

function AboutFinalCtaSection() {
  return (
    <section className="section about-final-cta">
      <div className="container about-final-cta__layout">
        <div className="stack-xs">
          <span className="page-eyebrow">Siguiente paso</span>
          <h2>Si esta forma de acompanar resuena contigo, estamos listos para escucharte.</h2>
          <p>
            Puedes escribirnos para pedir ayuda, conocer mejor el trabajo de
            VOADES Honduras o dar el primer paso hacia el voluntariado.
          </p>
        </div>

        <div className="button-row">
          <Button href="/contact" variant="secondary-blue">
            Ir a contacto
          </Button>
          <Button href="/volunteer" variant="primary-green">
            Ver voluntariado
          </Button>
          <Button href={contacts.whatsappHref} variant="outline-blue">
            Escribir por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutFinalCtaSection

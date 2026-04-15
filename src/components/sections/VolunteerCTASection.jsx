import Button from '../ui/Button.jsx'
import { contacts } from '../../data/contacts.js'
import { siteImages } from '../../data/siteImages.js'
import SectionTitle from '../ui/SectionTitle.jsx'

const benefits = [
  {
    title: 'No necesitas experiencia previa',
    description: 'Te acompañamos paso a paso para empezar con seguridad.',
  },
  {
    title: 'Tu tiempo puede generar impacto',
    description: 'Cada aporte suma cuando existe organización y trato humano.',
  },
  {
    title: 'Aprendes mientras colaboras',
    description: 'El proceso busca formar y servir al mismo tiempo.',
  },
]

function VolunteerCTASection() {
  return (
    <section className="section home-volunteer-section">
      <div className="container home-volunteer-shell">
        <div className="home-volunteer-shell__media">
          <img
            alt={siteImages.communityJoy.alt}
            className="home-volunteer-shell__image"
            loading="lazy"
            src={siteImages.communityJoy.src}
          />
        </div>
        <div className="home-volunteer-shell__content stack-lg">
          <SectionTitle
            eyebrow="Voluntariado"
            subtitle="Un bloque más emocional y menos cuadriculado, con beneficios legibles y un punto de entrada directo."
            title="Sumarte también puede empezar hoy"
          />

          <div className="home-benefit-list">
            {benefits.map((benefit) => (
              <article className="home-benefit-item" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>

          <div className="button-row">
            <Button href="/volunteer" variant="primary-green">
              Quiero ser voluntario
            </Button>
            <Button href={contacts.whatsappHref} variant="outline-blue">
              Hablar primero por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunteerCTASection

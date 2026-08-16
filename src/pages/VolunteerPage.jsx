import PageMeta from '../components/layout/PageMeta.jsx'
import Button from '../components/ui/Button.jsx'
import { contacts } from '../data/contacts.js'
import { siteImages } from '../data/siteImages.js'
import '../styles/volunteer-page.css'

function VolunteerPage() {
  return (
    <div className="volunteer-page">
      <PageMeta
        description="Conoce cómo sumarte al voluntariado de VOADES Honduras y recibir formación para acompañar con cercanía."
        title="Voluntariado | VOADES Honduras"
      />

      <section className="section volunteer-hero">
        <div className="container volunteer-hero__layout">
          <div className="volunteer-hero__copy stack-md">
            <span className="page-eyebrow">Voluntariado</span>
            <div className="stack-sm">
              <h1>Ayudar también se aprende.</h1>
              <p className="volunteer-hero__lead">
                Si quieres formar parte de VOADES Honduras, contáctanos. Para
                integrarte al voluntariado hay un curso de formación pensado para
                acompañar con respeto, claridad y cercanía humana.
              </p>
            </div>

            <div className="button-row">
              <Button href={contacts.whatsappHref} variant="primary-green">
                Quiero ser voluntario
              </Button>
              <Button href="/contact" variant="outline-blue">
                Contacto
              </Button>
            </div>
          </div>

          <div className="volunteer-hero__media">
            <div className="volunteer-hero__blob volunteer-hero__blob--green" />
            <div className="volunteer-hero__blob volunteer-hero__blob--blue" />
            <img
              alt={siteImages.volunteerTeam.alt}
              className="volunteer-hero__image"
              loading="lazy"
              src={siteImages.volunteerTeam.src}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default VolunteerPage

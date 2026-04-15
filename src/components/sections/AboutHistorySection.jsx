import { organization } from '../../data/organization.js'
import { siteImages } from '../../data/siteImages.js'
import SectionTitle from '../ui/SectionTitle.jsx'

function AboutHistorySection() {
  return (
    <section className="section about-story-section">
      <div className="container stack-xl">
        <div className="about-story-section__layout">
          <div className="about-story-section__copy stack-md">
            <SectionTitle
              eyebrow="Historia"
              subtitle="Una forma de servicio que fue creciendo desde la escucha."
              title="Una vocacion de servicio hecha cercana"
            />
            <p>
              {organization.historyIntro} Con el tiempo, VOADES Honduras fue
              tomando forma como un espacio de escucha, orientacion y presencia
              humana.
            </p>
            <p>
              Hoy esa historia se traduce en algo concreto: una puerta de entrada
              clara para pedir ayuda, conocer talleres y acercarse al
              voluntariado sin complicaciones.
            </p>
          </div>

          <figure className="about-story-section__media">
            <img
              alt={siteImages.communityMeeting.alt}
              className="about-story-section__image"
              loading="lazy"
              src={siteImages.communityMeeting.src}
            />
            <figcaption>Escuchar bien tambien es una forma de acompanar.</figcaption>
          </figure>
        </div>

        <blockquote className="about-story-section__quote">
          <p>
            Queremos que cada persona encuentre una respuesta cercana, clara y
            humana desde el primer contacto.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

export default AboutHistorySection

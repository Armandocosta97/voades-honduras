import { helpAreas } from '../../data/helpAreas.js'
import { siteImages } from '../../data/siteImages.js'
import SectionTitle from '../ui/SectionTitle.jsx'
function HelpAreasSection() {
  return (
    <section className="section home-help-section">
      <div className="container home-split-section">
        <div className="home-split-section__intro stack-lg">
          <SectionTitle
            eyebrow="Áreas de ayuda"
            subtitle="La sección ahora funciona como una pieza editorial: una imagen protagonista y tres bloques más limpios."
            title="Cómo acompañamos a la comunidad"
          />
          <figure className="home-feature-figure">
            <img
              alt={siteImages.communityMeeting.alt}
              className="home-feature-figure__image"
              loading="lazy"
              src={siteImages.communityMeeting.src}
            />
            <figcaption>Escucha, orientación y procesos con un lenguaje claro.</figcaption>
          </figure>
        </div>
        <div className="home-list-stack">
          {helpAreas.map((area, index) => (
            <article className="home-list-card" key={area.title}>
              <div className="home-list-card__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="stack-2xs">
                <span className="value-card__eyebrow">Área principal</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HelpAreasSection

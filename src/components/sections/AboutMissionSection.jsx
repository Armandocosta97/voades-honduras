import { organization } from '../../data/organization.js'
import { helpAreas } from '../../data/helpAreas.js'
import SectionTitle from '../ui/SectionTitle.jsx'

function AboutMissionSection() {
  return (
    <section className="section section--alt about-values-section">
      <div className="container stack-xl">
        <div className="about-values-section__intro stack-lg">
          <SectionTitle
            eyebrow="Mision y valores"
            subtitle="Lo que hacemos nace de una idea simple: estar cerca y orientar con claridad."
            title="Lo que nos mueve cada dia"
          />

          <div className="about-values-section__copy content-narrow stack-md">
            <p>
              {organization.longMission} Queremos que el apoyo se sienta cercano,
              util y facil de encontrar.
            </p>
            <p>
              Nuestra vision es ser una referencia confiable para quienes necesitan
              orientacion y para quienes desean servir con sentido.
            </p>
          </div>

          <div className="about-values-section__tokens" aria-label="Valores de VOADES Honduras">
            {organization.values.map((value) => (
              <span className="about-values-section__token" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="about-support-section stack-lg">
          <SectionTitle
            eyebrow="Como ayudamos hoy"
            subtitle="Tres formas concretas en las que hoy buscamos estar presentes."
            title="Como acompanamos hoy"
          />

          <div className="about-support-section__grid">
            {helpAreas.map((area, index) => (
              <article className="about-support-section__item" key={area.title}>
                <span className="about-support-section__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="stack-2xs">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionSection

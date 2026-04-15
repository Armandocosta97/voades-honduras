import { helpAreas } from '../../data/helpAreas.js'
import SectionTitle from '../ui/SectionTitle.jsx'
import ValueCard from '../ui/ValueCard.jsx'

function AboutWorkTodaySection() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <SectionTitle
          eyebrow="Nuestro trabajo hoy"
          subtitle="Estas son algunas de las formas en que hoy buscamos servir a la comunidad."
          title="Cómo acompañamos actualmente"
        />

        <div className="grid-3">
          {helpAreas.map((area, index) => (
            <ValueCard
              description={area.description}
              eyebrow={`Área ${String(index + 1).padStart(2, '0')}`}
              icon={String(index + 1).padStart(2, '0')}
              key={area.title}
              title={area.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutWorkTodaySection

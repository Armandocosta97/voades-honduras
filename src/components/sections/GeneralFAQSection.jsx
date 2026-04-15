import { faqs } from '../../data/faqs.js'
import FAQAccordion from '../ui/FAQAccordion.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function GeneralFAQSection() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          subtitle="Respuestas base para resolver dudas comunes antes del contacto directo."
          title="Lo esencial antes de escribirnos"
        />
        <FAQAccordion items={faqs.general} />
      </div>
    </section>
  )
}

export default GeneralFAQSection

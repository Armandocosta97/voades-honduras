import ContactChannelsGrid from '../ui/ContactChannelsGrid.jsx'

function TrustPointsSection() {
  return (
    <section className="section home-trust-section">
      <div className="container">
        <div className="home-trust-heading">
          <span className="page-eyebrow">Base de confianza</span>
          <p>
            Si tú o alguien necesita apoyo emocional o ayuda psicológica, en VOADES
            encontrarás una respuesta cercana y directa. Puedes escribirnos o
            llamarnos por el canal que te resulte más fácil, y te orientaremos con
            trato humano desde el primer contacto.
          </p>
        </div>

        <ContactChannelsGrid />
      </div>
    </section>
  )
}

export default TrustPointsSection

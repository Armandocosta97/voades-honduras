function ValueCard({ title, description, icon, eyebrow }) {
  return (
    <article className="card value-card stack-sm">
      {icon ? <span className="value-card__icon" aria-hidden="true">{icon}</span> : null}
      {eyebrow ? <span className="value-card__eyebrow">{eyebrow}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default ValueCard

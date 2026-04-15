function StepCard({ step, title, description }) {
  return (
    <article className="card step-card stack-sm">
      <span className="step-card__number">{step}</span>
      <div className="stack-2xs">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default StepCard

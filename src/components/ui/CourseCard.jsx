import Button from './Button.jsx'

function CourseCard({
  category,
  title,
  shortDescription,
  target,
  duration,
  whatsappHref,
  whatsappLabel = 'Consultar por WhatsApp',
}) {
  return (
    <article className="card course-card stack-md">
      <div className="stack-sm">
        <div className="course-card__topline">
          <span className="pill">{category}</span>
          <small>Respuesta directa</small>
        </div>
        <div className="stack-xs">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>
      </div>
      <dl className="course-card__meta">
        <div>
          <dt>Dirigido a</dt>
          <dd>{target}</dd>
        </div>
        <div>
          <dt>Duración</dt>
          <dd>{duration}</dd>
        </div>
      </dl>
      <Button href={whatsappHref} variant="secondary-blue">
        {whatsappLabel}
      </Button>
    </article>
  )
}

export default CourseCard

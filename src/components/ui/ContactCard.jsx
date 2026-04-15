import IconCircle from './IconCircle.jsx'

function ContactCard({ icon, title, text, href, linkLabel }) {
  const opensNewTab = href?.startsWith('http')

  return (
    <article className="card contact-card stack-sm">
      <IconCircle icon={icon} label={title} />
      <div className="stack-2xs">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {href ? (
        <a
          className="contact-card__link"
          href={href}
          rel={opensNewTab ? 'noreferrer' : undefined}
          target={opensNewTab ? '_blank' : undefined}
        >
          {linkLabel}
        </a>
      ) : null}
    </article>
  )
}

export default ContactCard

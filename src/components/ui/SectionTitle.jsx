function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align} stack-sm`}>
      {eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
      <div className="stack-xs">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default SectionTitle

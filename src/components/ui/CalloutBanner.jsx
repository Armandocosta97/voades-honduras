function CalloutBanner({ eyebrow, title, text, actions }) {
  return (
    <div className="callout-banner">
      <div className="stack-xs">
        {eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {actions ? <div className="button-row">{actions}</div> : null}
    </div>
  )
}

export default CalloutBanner

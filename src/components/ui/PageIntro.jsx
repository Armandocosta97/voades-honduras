function PageIntro({ eyebrow, title, subtitle, actions, image }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div className="stack-md">
          <span className="page-eyebrow">{eyebrow}</span>
          <div className="stack-sm">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {actions ? <div className="button-row">{actions}</div> : null}
        </div>
        <div className="page-hero__visual page-hero__visual--compact card">
          {image ? (
            <img
              alt={image.alt}
              className="page-hero__image"
              loading="lazy"
              src={image.src}
            />
          ) : null}
          <div className="stack-sm">
            <span className="pill">Atención humana</span>
            <p>
              Priorizamos lectura clara, contacto directo y un diseño limpio para
              que la información importante se entienda rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageIntro

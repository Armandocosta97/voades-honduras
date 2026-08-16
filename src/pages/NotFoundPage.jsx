import PageMeta from '../components/layout/PageMeta.jsx'
import Button from '../components/ui/Button.jsx'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <PageMeta
        description="La página que buscas no existe. Volvé al inicio de VOADES Honduras o escribinos directamente."
        title="Página no encontrada | VOADES Honduras"
      />
      <section className="section not-found-page__section">
        <div className="container stack-md not-found-page__content">
          <span className="page-eyebrow">404</span>
          <h1>No encontramos esta página.</h1>
          <p>
            El enlace puede estar mal escrito o ya no existe. Volvé al inicio o
            escribinos si necesitás ayuda.
          </p>
          <div className="button-row not-found-page__actions">
            <Button href="/" variant="primary-green">
              Ir al inicio
            </Button>
            <Button href="/contact" variant="secondary-blue">
              Ir a contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage

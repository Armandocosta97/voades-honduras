import PageMeta from '../components/layout/PageMeta.jsx'
import Button from '../components/ui/Button.jsx'
import { contacts } from '../data/contacts.js'
import { siteImages } from '../data/siteImages.js'
import '../styles/courses-page.css'

const courseAreas = [
  {
    number: '01',
    title: 'Crecimiento personal',
    description:
      'Conocerte mejor, gestionar emociones y desarrollar una base más sólida contigo mismo.',
  },
  {
    number: '02',
    title: 'Comunicación y escucha',
    description:
      'Aprender a expresarte mejor, escuchar de verdad y crear relaciones más sanas.',
  },
  {
    number: '03',
    title: 'Acompañamiento y servicio',
    description:
      'Formarte para ayudar a otros con respeto, claridad y presencia humana.',
  },
]

function CoursesPage() {
  return (
    <div className="courses-page">
      <PageMeta
        description="Cursos y espacios de formación de VOADES Honduras para el crecimiento personal, la escucha y el acompañamiento humano."
        title="Cursos | VOADES Honduras"
      />

      <section className="section courses-hero">
        <div className="container courses-hero__layout">
          <div className="courses-hero__copy stack-md">
            <span className="page-eyebrow">Cursos</span>
            <div className="stack-sm">
              <h1>Aprende a acompañar, crecer y estar mejor</h1>
              <p className="courses-hero__lead">
                Cursos y espacios de formación pensados para el crecimiento
                personal, la escucha y el acompañamiento humano.
              </p>
            </div>
          </div>

          <div className="courses-hero__media">
            <div className="courses-hero__blob courses-hero__blob--green" />
            <div className="courses-hero__blob courses-hero__blob--blue" />
            <img
              alt={siteImages.coursesWorkshop.alt}
              className="courses-hero__image"
              loading="lazy"
              src={siteImages.coursesWorkshop.src}
            />
          </div>
        </div>
      </section>

      <section className="section courses-editorial">
        <div className="container">
          <div className="courses-editorial__copy stack-md">
            <p>
              En VOADES creemos que aprender a ayudar también es una forma de crecer.
            </p>
            <p>
              Nuestros cursos están pensados para personas que quieren entenderse
              mejor, mejorar sus relaciones y acompañar a otros con más claridad y
              cercanía.
            </p>
            <p>No necesitas experiencia previa, solo ganas de aprender y dar un paso.</p>
          </div>
        </div>
      </section>

      <section className="section courses-areas">
        <div className="container stack-lg">
          <div className="stack-sm courses-areas__intro">
            <span className="page-eyebrow">Áreas</span>
            <h2>Una formación cercana, práctica y humana</h2>
          </div>

          <div className="courses-areas__grid">
            {courseAreas.map((area) => (
              <article className="courses-areas__item" key={area.number}>
                <span className="courses-areas__number">{area.number}</span>
                <div className="stack-2xs">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-social">
        <div className="container courses-social__layout">
          <div className="stack-sm courses-social__intro">
            <span className="page-eyebrow">Redes sociales</span>
            <h2>Sigue los próximos cursos y talleres</h2>
          </div>

          <div className="courses-social__copy stack-md">
            <p>Los cursos se organizan en distintos momentos durante el año.</p>
            <p>
              Para conocer fechas, inscripciones y nuevos talleres, puedes seguirnos
              en nuestras redes sociales.
            </p>
          </div>

          <div className="button-row">
            <Button href={contacts.facebookHref} variant="secondary-blue">
              Facebook
            </Button>
            <Button href={contacts.instagramHref} variant="primary-green">
              Instagram
            </Button>
          </div>
        </div>
      </section>

      <section className="section courses-final-cta">
        <div className="container courses-final-cta__layout">
          <div className="stack-xs courses-final-cta__intro">
            <span className="page-eyebrow">Contacto</span>
            <h2>Si quieres más información o tienes dudas, puedes escribirnos directamente.</h2>
          </div>

          <div className="button-row">
            <Button href={contacts.whatsappHref} variant="primary-green">
              WhatsApp
            </Button>
            <Button href="/contact" variant="outline-blue">
              Contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage

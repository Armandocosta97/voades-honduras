import { courses } from '../../data/courses.js'
import Button from '../ui/Button.jsx'
import CourseCard from '../ui/CourseCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function buildWhatsAppHref(message) {
  return `https://wa.me/50400000000?text=${encodeURIComponent(message)}`
}

function CoursesPreviewSection() {
  return (
    <section className="section section--alt home-courses-section">
      <div className="container stack-xl">
        <div className="home-course-shell">
          <div className="home-course-shell__intro stack-md">
            <SectionTitle
              eyebrow="Cursos"
              subtitle="Una presentación más compacta y útil, donde la CTA no se pierde dentro de cajas repetidas."
              title="Formación práctica y cercana"
            />
            <Button href="/courses" variant="outline-blue">
              Ver todos los cursos
            </Button>
          </div>

          <div className="grid-2 home-course-grid">
            {courses.slice(0, 4).map((course) => (
              <CourseCard
                category={course.category}
                duration={course.duration}
                key={course.id}
                shortDescription={course.shortDescription}
                target={course.target}
                title={course.title}
                whatsappHref={buildWhatsAppHref(course.whatsappMessage)}
                whatsappLabel="Consultar"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesPreviewSection

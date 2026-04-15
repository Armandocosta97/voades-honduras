import { organization } from '../../data/organization.js'
import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function AboutPreviewSection() {
  return (
    <section className="section section--alt">
      <div className="container about-preview">
        <div className="card stack-md">
          <SectionTitle
            eyebrow="Nuestra historia"
            subtitle={organization.shortMission}
            title="Una presencia institucional sencilla y humana"
          />
          <p>{organization.historyIntro}</p>
          <Button href="/about" variant="outline-blue">
            Conocer más
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutPreviewSection

import { organization } from '../../data/organization.js'
import { siteImages } from '../../data/siteImages.js'

function AboutPageHeroSection() {
  return (
    <section className="section about-editorial-hero">
      <div className="container about-editorial-hero__layout">
        <div className="about-editorial-hero__copy stack-md">
          <span className="page-eyebrow">Nuestra historia</span>
          <div className="stack-sm">
            <h1>Una historia nacida para escuchar, orientar y acompanar.</h1>
            <p className="about-editorial-hero__lead">
              {organization.tagline} Queremos estar cerca de quienes necesitan
              apoyo, claridad y una forma sencilla de dar el primer paso.
            </p>
          </div>
          <p className="about-editorial-hero__note">
            VOADES Honduras quiere ser una presencia humana, disponible y facil
            de encontrar.
          </p>
        </div>

        <div className="about-editorial-hero__media">
          <div className="about-editorial-hero__blob about-editorial-hero__blob--green" />
          <div className="about-editorial-hero__blob about-editorial-hero__blob--blue" />
          <img
            alt={siteImages.communityJoy.alt}
            className="about-editorial-hero__image"
            loading="lazy"
            src={siteImages.communityJoy.src}
          />
          <p className="about-editorial-hero__caption">
            Servicio humano, trato cercano y orientacion clara.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPageHeroSection

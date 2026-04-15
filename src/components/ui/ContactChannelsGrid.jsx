import { contacts } from '../../data/contacts.js'

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M12.04 2C6.77 2 2.5 6.2 2.5 11.39c0 1.82.54 3.58 1.57 5.08L3 22l5.73-1.5a9.7 9.7 0 0 0 3.31.58c5.27 0 9.54-4.2 9.54-9.39C21.58 6.2 17.3 2 12.04 2Zm0 17.2c-1.03 0-2.04-.18-2.99-.55l-.21-.08-3.4.89.91-3.28-.14-.22a7.13 7.13 0 0 1-1.12-3.84c0-3.94 3.17-7.14 7.07-7.14 3.9 0 7.07 3.2 7.07 7.14 0 3.94-3.18 7.08-7.19 7.08Zm3.9-5.34c-.21-.1-1.27-.62-1.47-.7-.2-.07-.34-.1-.49.1-.14.2-.56.7-.68.84-.12.14-.25.16-.46.05-.2-.1-.87-.31-1.65-1-.61-.54-1.02-1.21-1.14-1.41-.12-.2-.01-.3.09-.4.09-.09.2-.23.31-.34.1-.11.13-.2.2-.34.07-.14.03-.26-.02-.37-.06-.1-.49-1.17-.67-1.6-.18-.42-.36-.36-.49-.36h-.42c-.14 0-.37.05-.56.26-.2.2-.75.72-.75 1.75s.77 2.02.88 2.16c.1.13 1.5 2.36 3.73 3.21 2.22.84 2.22.56 2.62.52.4-.04 1.27-.52 1.45-1.03.18-.5.18-.93.13-1.03-.05-.1-.2-.15-.41-.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M13.5 21v-7h2.35l.4-3h-2.75V9.2c0-.87.24-1.47 1.5-1.47h1.4V5.04c-.24-.03-1.06-.1-2.01-.1-1.99 0-3.35 1.2-3.35 3.43V11H8.75v3H11v7h2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.3A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 2.2A3.3 3.3 0 1 0 15.3 12 3.3 3.3 0 0 0 12 8.7Zm5.75-3.1a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ContactIntentCard({ href, icon, label, variant }) {
  return (
    <a
      className={`contact-intent-card contact-intent-card--${variant}`}
      href={href}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      <span className="contact-intent-card__icon">{icon}</span>
      <span className="contact-intent-card__label">{label}</span>
    </a>
  )
}

function ContactChannelsGrid({ ariaLabel = 'Canales de contacto principales' }) {
  const supportPhone = contacts.phoneOptions.find((item) => item.id === 'support')
  const infoPhone = contacts.phoneOptions.find((item) => item.id === 'info')
  const supportWhatsApp = contacts.whatsappOptions.find((item) => item.id === 'support')
  const infoWhatsApp = contacts.whatsappOptions.find((item) => item.id === 'info')

  return (
    <div className="contact-channels-shell" aria-label={ariaLabel}>
      <div className="contact-intents-grid">
        <section className="contact-intent-group">
          <div className="stack-2xs">
            <span className="contact-intent-group__eyebrow">Necesitas apoyo</span>
            <h3>Habla con nosotros para recibir orientación.</h3>
          </div>

          <div className="contact-intent-group__actions">
            <ContactIntentCard
              href={supportWhatsApp.href}
              icon={<WhatsAppIcon />}
              label="WhatsApp apoyo"
              variant="whatsapp"
            />
            <ContactIntentCard
              href={supportPhone.href}
              icon={<PhoneIcon />}
              label="Llamada apoyo"
              variant="phone"
            />
          </div>
        </section>

        <section className="contact-intent-group">
          <div className="stack-2xs">
            <span className="contact-intent-group__eyebrow">Quieres información</span>
            <h3>Consulta actividades, cursos y datos de VOADES.</h3>
          </div>

          <div className="contact-intent-group__actions">
            <ContactIntentCard
              href={infoWhatsApp.href}
              icon={<WhatsAppIcon />}
              label="WhatsApp información"
              variant="whatsapp"
            />
            <ContactIntentCard
              href={infoPhone.href}
              icon={<PhoneIcon />}
              label="Llamada información"
              variant="phone"
            />
          </div>
        </section>
      </div>

      <div className="contact-social-row">
        <a
          className="contact-social-link contact-social-link--facebook"
          href={contacts.facebookHref}
          rel="noreferrer"
          target="_blank"
        >
          <span className="contact-social-link__icon">
            <FacebookIcon />
          </span>
          <span>Facebook</span>
        </a>
        <a
          className="contact-social-link contact-social-link--instagram"
          href={contacts.instagramHref}
          rel="noreferrer"
          target="_blank"
        >
          <span className="contact-social-link__icon">
            <InstagramIcon />
          </span>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default ContactChannelsGrid

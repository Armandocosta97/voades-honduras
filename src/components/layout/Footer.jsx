import { Link } from 'react-router-dom'
import { contacts } from '../../data/contacts.js'
import { navItems } from '../../data/nav.js'
import { socialLinks } from '../../data/socialLinks.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="stack-sm">
          <p className="site-footer__brand">VOADES Honduras</p>
          <p>Escucha cercana, orientación clara y una forma sencilla de pedir ayuda.</p>
        </div>

        <div className="stack-sm">
          <h3 className="site-footer__title">Navegación</h3>
          <ul className="site-footer__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="stack-sm">
          <h3 className="site-footer__title">Contacto</h3>
          <ul className="site-footer__list">
            <li>
              <a href={contacts.whatsappHref} rel="noreferrer" target="_blank">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={contacts.phoneHref}>{contacts.phone}</a>
            </li>
            <li>{contacts.address}</li>
            <li>{contacts.schedule}</li>
          </ul>
        </div>

        <div className="stack-sm">
          <h3 className="site-footer__title">Social</h3>
          <ul className="site-footer__list">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <a href={item.href} rel="noreferrer" target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

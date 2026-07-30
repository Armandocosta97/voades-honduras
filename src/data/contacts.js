const mainPhoneNumber = '+50432955521'
const mainPhoneDisplay = '+504 3295-5521'

function buildWhatsAppHref(number, message) {
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export const contacts = {
  phone: mainPhoneDisplay,
  phoneHref: `tel:${mainPhoneNumber}`,
  phoneOptions: [
    {
      id: 'support',
      label: 'Llamada para apoyo',
      description: 'Hablar con alguien si necesitas acompañamiento o apoyo.',
      href: `tel:${mainPhoneNumber}`,
    },
    {
      id: 'info',
      label: 'Llamada para información',
      description: 'Resolver dudas sobre VOADES, actividades o formación.',
      href: `tel:${mainPhoneNumber}`,
    },
  ],
  whatsapp: mainPhoneDisplay,
  whatsappHref: buildWhatsAppHref(
    mainPhoneNumber,
    'Hola, quiero información sobre VOADES Honduras.',
  ),
  whatsappOptions: [
    {
      id: 'support',
      label: 'WhatsApp para apoyo',
      description: 'Escribir si necesitas orientación o acompañamiento.',
      href: buildWhatsAppHref(
        mainPhoneNumber,
        'Hola, necesito apoyo y quisiera hablar con VOADES Honduras.',
      ),
    },
    {
      id: 'info',
      label: 'WhatsApp para información',
      description: 'Preguntar por formación, actividades o información general.',
      href: buildWhatsAppHref(
        mainPhoneNumber,
        'Hola, quiero información sobre VOADES Honduras.',
      ),
    },
  ],
  facebook: 'VOADESHN',
  facebookHref: 'https://www.facebook.com/voadeshn/',
  instagram: '@voadespsicologiahn',
  instagramHref: 'https://www.instagram.com/voadespsicologiahn/',
  address: 'Col. El Playon, 25 calle, 11-15 Ave. Edificio Plaza Universitaria, segunda planta local #4',
  city: 'Honduras',
  schedule: 'Lunes a viernes, 8:00 a.m. - 5:00 p.m.',
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Col. El Playon, 25 calle, 11-15 Ave. Edificio Plaza Universitaria, segunda planta local #4, San Pedro Sula, Honduras')}`,
}

export default contacts

import { contacts } from '../../data/contacts.js'
import { organization } from '../../data/organization.js'

function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: organization.name,
    description: organization.shortMission,
    telephone: contacts.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contacts.city,
      streetAddress: contacts.address,
    },
    sameAs: [contacts.facebookHref, contacts.mapsHref],
    url: 'https://example.github.io/voades-honduras/',
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  )
}

export default StructuredData

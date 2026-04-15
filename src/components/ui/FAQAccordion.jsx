import { useState } from 'react'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <article className="faq-item" key={item.question}>
            <h3>
              <button
                aria-expanded={isOpen}
                className="faq-item__trigger"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            {isOpen ? <p className="faq-item__panel">{item.answer}</p> : null}
          </article>
        )
      })}
    </div>
  )
}

export default FAQAccordion

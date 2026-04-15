function SocialProofStrip({ items }) {
  return (
    <div className="social-proof-strip">
      {items.map((item) => (
        <article className="social-proof-strip__item" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  )
}

export default SocialProofStrip

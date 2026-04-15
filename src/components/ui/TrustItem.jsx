function TrustItem({ value, label }) {
  return (
    <article className="trust-item">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}

export default TrustItem

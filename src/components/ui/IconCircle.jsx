function IconCircle({ icon, label = '' }) {
  return (
    <span aria-label={label} className="icon-circle" role={label ? 'img' : 'presentation'}>
      {icon}
    </span>
  )
}

export default IconCircle

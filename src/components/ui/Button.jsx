import { Link } from 'react-router-dom'

function Button({
  variant = 'primary-green',
  href,
  onClick,
  children,
  fullWidth = false,
  icon,
  type = 'button',
}) {
  const className = [
    'button',
    `button--${variant}`,
    fullWidth ? 'button--full' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    const isInternal = href.startsWith('/')
    const opensNewTab = href.startsWith('http')

    if (isInternal) {
      return (
        <Link className={className} to={href}>
          {content}
        </Link>
      )
    }

    return (
      <a
        className={className}
        href={href}
        rel={opensNewTab ? 'noreferrer' : undefined}
        target={opensNewTab ? '_blank' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {content}
    </button>
  )
}

export default Button

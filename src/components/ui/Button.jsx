/* variants: primary · navy · soft · outline · ghost
   sizes: lg · md · sm */
export default function Button({
  variant = 'primary',
  size = 'lg',
  full = false,
  loading = false,
  leftIcon = null,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    full && 'btn--full',
    loading && 'is-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={loading || rest.disabled} {...rest}>
      {loading ? (
        <span className="btn-spinner" aria-hidden="true" />
      ) : (
        leftIcon && <span className="btn-icon">{leftIcon}</span>
      )}
      <span>{children}</span>
    </button>
  )
}

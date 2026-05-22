/* Labelled text input with optional leading icon, trailing node and error. */
export default function Field({ label, error, icon, trail, className = '', ...inputProps }) {
  return (
    <div className={`field ${className}`}>
      {label && <label className="field-label">{label}</label>}
      <div className="input-wrap">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          className={[
            'input',
            icon && 'input--with-icon',
            trail && 'input--with-trail',
            error && 'input--error',
          ]
            .filter(Boolean)
            .join(' ')}
          {...inputProps}
        />
        {trail && <span className="input-trail">{trail}</span>}
      </div>
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}

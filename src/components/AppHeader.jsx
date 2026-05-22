/* Sticky top bar. left / right take nodes (icon buttons etc.);
   center takes a title string or any node. */
export default function AppHeader({ left, center, right, className = '' }) {
  return (
    <header className={`app-header ${className}`}>
      <div className="app-header-side">{left}</div>
      <div className="app-header-center">
        {typeof center === 'string' ? (
          <h1 className="app-header-title">{center}</h1>
        ) : (
          center
        )}
      </div>
      <div className="app-header-side app-header-side--right">{right}</div>
    </header>
  )
}

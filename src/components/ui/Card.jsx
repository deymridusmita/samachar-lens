export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  const interactive = !!rest.onClick
  return (
    <Tag
      className={`card ${interactive ? 'card--interactive' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

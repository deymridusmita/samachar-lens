export default function ProgressBar({ step, total }) {
  const pct = Math.max(0, Math.min(100, (step / total) * 100))
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

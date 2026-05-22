import { Check } from 'lucide-react'

export default function Checkbox({ checked, onChange, label }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={`checkbox-box ${checked ? 'is-checked' : ''}`}>
        {checked && <Check size={13} strokeWidth={3.5} />}
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  )
}

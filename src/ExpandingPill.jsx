import { useState } from 'react'

/**
 * A circular profile photo that expands into a pill / capsule shape,
 * revealing text next to the photo. Opens on hover (desktop) or tap
 * (touch devices) -- i.e. only when the visitor actually looks at it.
 */
export default function ExpandingPill({ image, alt, text, targetWidth = 480 }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`pill${expanded ? ' expanded' : ''}`}
      style={{ '--pill-target': `${targetWidth}px` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded((v) => !v)
        }
      }}
      aria-expanded={expanded}
    >
      <img className="pill-photo" src={image} alt={alt} />
      <span className="pill-text">{text}</span>
    </div>
  )
}

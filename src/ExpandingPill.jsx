import { useEffect, useRef, useState } from 'react'

/**
 * A circular profile photo that animates into a pill / capsule shape,
 * revealing text next to the photo. Triggers once when scrolled into view.
 */
export default function ExpandingPill({ image, alt, text, targetWidth = 480 }) {
  const ref = useRef(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // small delay so the circle is visible before it expands
          const t = setTimeout(() => setExpanded(true), 250)
          observer.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`pill${expanded ? ' expanded' : ''}`}
      style={{ '--pill-target': `${targetWidth}px` }}
    >
      <img className="pill-photo" src={image} alt={alt} />
      <span className="pill-text">{text}</span>
    </div>
  )
}

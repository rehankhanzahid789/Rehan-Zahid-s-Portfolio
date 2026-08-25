import { useLayoutEffect, useRef, useState } from 'react'
import { CursorPointerIcon, CursorClickIcon } from './icons.jsx'

/**
 * A circular profile photo that expands into a pill / capsule shape,
 * revealing text next to the photo. Opens on hover (desktop) or tap
 * (touch devices) -- i.e. only when the visitor actually looks at it.
 *
 * The expanded width is measured from the actual text content, so the
 * pill always hugs the text instead of using a fixed guessed width.
 */
export default function ExpandingPill({ image, alt, text }) {
  const [expanded, setExpanded] = useState(false)
  const [fullWidth, setFullWidth] = useState(null)
  const pillRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    function measure() {
      const pillEl = pillRef.current
      const textEl = textRef.current
      if (!pillEl || !textEl) return

      const diameter = pillEl.offsetHeight
      const textStyle = window.getComputedStyle(textEl)
      const paddingLeft = parseFloat(textStyle.paddingLeft) || 0
      const paddingRight = parseFloat(textStyle.paddingRight) || 0
      const natural = diameter + textEl.scrollWidth + paddingLeft + paddingRight

      // Never let it try to exceed the viewport on small screens.
      const cap = window.innerWidth * 0.92
      setFullWidth(Math.min(natural, cap))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [text])

  const toggle = () => setExpanded((v) => !v)

  return (
    <div className="pill-wrap">
      <div
        ref={pillRef}
        className={`pill${expanded ? ' expanded' : ''}`}
        style={expanded && fullWidth ? { width: `${fullWidth}px` } : undefined}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggle()
          }
        }}
        aria-expanded={expanded}
      >
        <img className="pill-photo" src={image} alt={alt} />
        <span className="pill-text" ref={textRef}>
          {text}
        </span>
      </div>
      {!expanded && (
        <span className="pill-hint" aria-hidden="true">
          <CursorPointerIcon className="pill-hint-frame pill-hint-frame-1" />
          <CursorClickIcon className="pill-hint-frame pill-hint-frame-2" />
        </span>
      )}
    </div>
  )
}
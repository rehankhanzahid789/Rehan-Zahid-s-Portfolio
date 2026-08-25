/* Simple, generic line-style icons (not brand logos) used as small
   accents on each link tile. */

const base = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LinkedInIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2.2 2.2 0 0 1 4.4 0v4" />
      <line x1="11.5" y1="10" x2="11.5" y2="16.5" />
    </svg>
  )
}

export function GitHubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.6c-2.45.53-2.97-1.06-2.97-1.06-.4-1.02-.98-1.3-.98-1.3-.8-.55.06-.54.06-.54.89.06 1.36.92 1.36.92.78 1.35 2.06.96 2.56.73.08-.57.31-.96.55-1.18-1.96-.22-4.02-.98-4.02-4.38 0-.97.35-1.76.92-2.38-.1-.22-.4-1.12.09-2.33 0 0 .75-.24 2.45.91a8.4 8.4 0 0 1 4.46 0c1.7-1.15 2.45-.91 2.45-.91.49 1.21.18 2.11.09 2.33.57.62.92 1.41.92 2.38 0 3.41-2.07 4.16-4.04 4.38.32.28.6.82.6 1.65v2.45c0 .23.15.51.61.43A9 9 0 0 0 12 3z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 21v-7h2.4l.4-3h-2.8V9.1c0-.87.24-1.46 1.5-1.46H17.5V5c-.26-.04-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7V11H9.3v3h2.44v7z" />
    </svg>
  )
}

export function ThreadsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c-4.5 0-7.2 2.9-7.2 7.5v3c0 4.6 2.7 7.5 7.2 7.5s7.2-2.9 7.2-6c0-2.4-1.4-3.8-3.7-3.8-1.9 0-3.2 1-3.5 2.5-.2 1 .3 2 1.6 2 .9 0 1.4-.5 1.6-1" />
      <path d="M9.5 9.5c1.6-1 4.4-.9 5.4.6" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  )
}

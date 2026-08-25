import banner from './assets/banner.jpg'
import pfp from './assets/pfp.png'
import ExpandingPill from './ExpandingPill.jsx'
import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
  MailIcon,
} from './icons.jsx'

const LINKS = {
  linkedin:
    'https://www.linkedin.com/in/rehan-zahid-64b665412?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagram: 'https://www.instagram.com/devrehanzahid?igsh=MWdjZHRqNTRxczlkMA==',
  facebook: 'https://www.facebook.com/profile.php?id=61591125560159',
  github: 'https://github.com/rehankhanzahid789',
  gmail: 'mailto:devrehanzahid@gmail.com',
  threads: 'https://www.threads.com/@devrehanzahid',
}

function Tile({ className, href, label, Icon }) {
  return (
    <a
      className={`tile ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="tile-icon">
        <Icon />
      </span>
      {label && <p className="tile-label">{label}</p>}
    </a>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* Banner */}
      <div className="banner-wrap">
        <img className="banner-img" src={banner} alt="Rehan Zahid banner" />
      </div>

      {/* Intro: expanding pill with welcome message */}
      <section className="intro-block">
        <ExpandingPill
          image={pfp}
          alt="Rehan Zahid"
          text="Welcome! I am Rehan Zahid"
          targetWidth={460}
        />
      </section>

      {/* My Links heading + teaser pill */}
      <section className="links-block">
        <h2 className="section-heading">My Links</h2>
        <ExpandingPill
          image={pfp}
          alt="Rehan Zahid"
          text="If I were you I would check out LinkedIn"
          targetWidth={560}
        />
      </section>

      {/* Tiles */}
      <section className="tiles-section">
        <div className="tiles-row">
          <div className="tile-col" style={{ flex: '2 1 0' }}>
            <h3 className="tile-col-heading">Highly Recommend This</h3>
            <Tile className="tile-linkedin" href={LINKS.linkedin} label="My LinkedIn" Icon={LinkedInIcon} />
          </div>

          <div className="tile-col" style={{ flex: '1 1 0' }}>
            <h3 className="tile-col-heading">MyCode</h3>
            <Tile className="tile-github" href={LINKS.github} label="My GitHub" Icon={GitHubIcon} />
          </div>

          <div className="tile-col" style={{ flex: '1 1 0' }}>
            <h3 className="tile-col-heading">Ignore These (useless)</h3>
            <div className="tile-small-grid">
              <Tile
                className="tile-small tile-insta"
                href={LINKS.instagram}
                label="Instagram"
                Icon={InstagramIcon}
              />
              <Tile
                className="tile-small tile-facebook"
                href={LINKS.facebook}
                label="Facebook"
                Icon={FacebookIcon}
              />
              <Tile
                className="tile-small tile-threads"
                href={LINKS.threads}
                label="Threads"
                Icon={ThreadsIcon}
              />
              <Tile
                className="tile-small tile-gmail"
                href={LINKS.gmail}
                label="Gmail"
                Icon={MailIcon}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rehan Zahid. Built with React.</p>
      </footer>
    </div>
  )
}
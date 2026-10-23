import { site } from '../data/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cloud" aria-hidden />
      <div className="container-wide site-footer__inner">
        <div className="site-footer__brand-block">
          <div className="site-footer__mark" aria-hidden>
            Y
          </div>
          <div>
            <p className="site-footer__brand">
              <em>Yasal</em>
            </p>
            <p className="site-footer__role">{site.role}</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          <a href="/#work">Work</a>
          <a href="/#experience">Experience</a>
          <a href="/#expertise">Expertise</a>
          <a href="/#about">About</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>

        <div className="site-footer__end">
          <p className="site-footer__note">
            Designed &amp; built with care <span aria-hidden>✦</span>
          </p>
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Yasal
          </p>
        </div>
      </div>
    </footer>
  )
}

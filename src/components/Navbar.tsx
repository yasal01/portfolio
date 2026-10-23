import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import './Navbar.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="nav__inner container-wide">
        <Link to="/" className="nav__brand" aria-label="Yasal home">
          <span className="nav__mark" aria-hidden>
            Y
          </span>
          <span className="nav__word">
            <em>Yasal</em>
            <small>Design + Development</small>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta btn btn-primary" href="/#contact">
          Get in Touch
        </a>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="nav__drawer is-open">
          <nav aria-label="Mobile">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="/#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

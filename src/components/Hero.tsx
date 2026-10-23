import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { site } from '../data/site'
import './Hero.css'

type Featured = (typeof projects)[number]

function hostOf(project: Featured) {
  if (!project.liveUrl) return project.slug
  try {
    return new URL(project.liveUrl).hostname.replace(/^www\./, '')
  } catch {
    return project.slug
  }
}

function StudioBrowser({
  project,
  className,
  delay,
  size = 'md',
  showSelect = false,
}: {
  project: Featured
  className: string
  delay: string
  size?: 'lg' | 'md' | 'sm'
  showSelect?: boolean
}) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`studio-win studio-win--${size} ${className}`}
      style={{ animationDelay: delay }}
      aria-label={`${project.title} case study`}
    >
      <div className="studio-win__chrome" aria-hidden>
        <span className="studio-win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="studio-win__url">{hostOf(project)}</span>
      </div>
      <div className="studio-win__screen">
        <img src={project.cover} alt="" loading="eager" />
      </div>
      {showSelect ? <span className="studio-win__select" aria-hidden /> : null}
    </Link>
  )
}

function DesignCanvas() {
  return (
    <div className="studio-canvas" aria-hidden>
      <div className="studio-canvas__top">
        <span className="studio-canvas__title">Artboard · Soft Glow</span>
        <span className="studio-canvas__tools">
          <i className="studio-canvas__tool studio-canvas__tool--frame" />
          <i className="studio-canvas__tool studio-canvas__tool--type" />
          <i className="studio-canvas__tool studio-canvas__tool--fill" />
        </span>
      </div>

      <div className="studio-canvas__board">
        <div className="studio-canvas__nav">
          <span />
          <span />
          <span />
        </div>
        <div className="studio-canvas__hero-block">
          <em>Aa</em>
          <span />
        </div>
        <div className="studio-canvas__grid">
          <div className="studio-canvas__tile" />
          <div className="studio-canvas__tile studio-canvas__tile--tall" />
          <div className="studio-canvas__tile" />
        </div>
        <div className="studio-canvas__cursor-dot" />
      </div>

      <div className="studio-canvas__type">
        <span className="studio-canvas__font">Fraunces</span>
        <span className="studio-canvas__font studio-canvas__font--body">Outfit</span>
      </div>

      <div className="studio-canvas__palette">
        <i style={{ background: '#FFFFFF' }} />
        <i style={{ background: '#F5DCEB' }} />
        <i style={{ background: '#D8E8FF' }} />
        <i style={{ background: '#E6DDF9' }} />
        <i style={{ background: '#D9F1EA' }} />
        <i style={{ background: '#403B4A' }} />
      </div>
    </div>
  )
}

function CodeCard() {
  return (
    <div className="studio-code" aria-hidden>
      <div className="studio-code__bar">
        <span className="studio-code__dots">
          <i />
          <i />
          <i />
        </span>
        <span>Hero.tsx</span>
      </div>
      <pre className="studio-code__body">
        <code>
          <span className="c-k">export</span> <span className="c-k">function</span>{' '}
          <span className="c-v">Hero</span>() {'{'}
          {'\n'}
          {'  '}
          <span className="c-k">return</span> (
          {'\n'}
          {'    '}&lt;<span className="c-t">section</span> <span className="c-a">className</span>=
          <span className="c-s">&quot;studio&quot;</span>&gt;
          {'\n'}
          {'      '}&lt;<span className="c-t">Preview</span> <span className="c-a">src</span>=
          <span className="c-s">&#123;softGlow&#125;</span> /&gt;
          {'\n'}
          {'    '}&lt;/<span className="c-t">section</span>&gt;
          {'\n'}
          {'  '})
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const soft = featured.find((p) => p.slug === 'soft-glow-oil') ?? featured[0]
  const noirel = featured.find((p) => p.slug === 'noirel') ?? featured[1]
  const socutesy = featured.find((p) => p.slug === 'socutesy') ?? featured[2]

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      stage.style.setProperty('--px', x.toFixed(3))
      stage.style.setProperty('--py', y.toFixed(3))
    }
    const onLeave = () => {
      stage.style.setProperty('--px', '0')
      stage.style.setProperty('--py', '0')
    }

    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section
      className={`hero ${ready ? 'hero--ready' : ''}`}
      aria-labelledby="hero-heading"
    >
      <div className="hero__glow hero__glow--milk" aria-hidden />
      <div className="hero__glow hero__glow--rose" aria-hidden />
      <div className="hero__glow hero__glow--soft" aria-hidden />

      <div className="container-wide hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span className="hero__kicker-dot" aria-hidden />
            Designing little digital worlds
          </p>

          <h1 id="hero-heading" className="display hero__title">
            <span className="hero__title-line">Hi, I’m {site.name} —</span>
            <span className="hero__title-line">
              a <em className="hero__accent hero__accent--milk">UI/UX Designer</em>
            </span>
            <span className="hero__title-line">
              &amp;{' '}
              <em className="hero__accent hero__accent--rose">Website Developer</em>
            </span>
          </h1>

          <p className="hero__lead">
            I design thoughtful interfaces and build websites that feel dreamy, clear, and
            a little bit magical — from first sketch to polished, responsive pages.
          </p>

          <div className="hero__actions">
            <a href="#work" className="hero-btn hero-btn--primary">
              Explore My Work
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="hero-btn hero-btn--soft">
              Let’s Connect
            </a>
          </div>

          <div className="hero__meta">
            <p className="hero__status">
              <span className="hero__pulse" aria-hidden />
              {site.availability}
            </p>
            <p className="hero__chip">React · Next.js · TypeScript</p>
          </div>
        </div>

        <div
          className="hero__stage"
          ref={stageRef}
          aria-label="Floating digital design studio with project previews"
        >
          <div className="studio-desk" aria-hidden>
            <span className="studio-desk__glow" />
            <span className="studio-desk__mat" />
          </div>

          {soft ? (
            <StudioBrowser
              project={soft}
              className="studio-win--hero"
              delay="0.08s"
              size="lg"
              showSelect
            />
          ) : null}
          {noirel ? (
            <StudioBrowser
              project={noirel}
              className="studio-win--orbit"
              delay="0.26s"
              size="md"
            />
          ) : null}
          {socutesy ? (
            <StudioBrowser
              project={socutesy}
              className="studio-win--peek"
              delay="0.4s"
              size="sm"
            />
          ) : null}

          <DesignCanvas />
          <CodeCard />

          <span className="studio-badge studio-badge--live">Live work</span>
          <span className="studio-badge studio-badge--craft">Design + code</span>

          <div className="studio-pointer studio-pointer--a" aria-hidden>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M4 3l12 8.5-5.2 1.4L13.5 21 10 12.2 4 3z"
                fill="#51404A"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Yasal</span>
          </div>
          <div className="studio-pointer studio-pointer--b" aria-hidden>
            <svg viewBox="0 0 24 24" width="15" height="15">
              <path
                d="M4 3l12 8.5-5.2 1.4L13.5 21 10 12.2 4 3z"
                fill="#897783"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="studio-speck studio-speck--1" aria-hidden />
          <span className="studio-speck studio-speck--2" aria-hidden />
        </div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to selected work">
        <span>Scroll</span>
        <i aria-hidden />
      </a>
    </section>
  )
}

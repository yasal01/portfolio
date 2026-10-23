import type { ReactNode } from 'react'
import { Hero } from '../components/Hero'
import { WorkShowcase } from '../components/WorkShowcase'
import { experience, expertise, site, skills } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

const skillTone = ['milk', 'rose', 'soft', 'milk', 'rose'] as const

export function Home() {
  return (
    <main>
      <Hero />

      <section id="work" className="section work-section">
        <div className="container-wide">
          <Reveal className="work-section__intro">
            <p className="work-section__num">
              <span>02</span> Selected work
            </p>
            <h2 className="display work-section__title">
              Projects that <em className="work-section__feel">feel</em>{' '}
              <em className="work-section__alive">alive</em>
            </h2>
            <p className="work-section__lead">
              Soft Glow Oil, NOIREL, SoCutesy, Mellow Studio, and Hotel Website — sites I
              designed and developed, shown the way they live in the browser.
            </p>
          </Reveal>
          <WorkShowcase />
        </div>
      </section>

      <section
        id="experience"
        className="section experience"
        aria-labelledby="experience-heading"
      >
        <div className="container-wide">
          <Reveal className="experience__intro">
            <p className="experience__badge">
              <span>03</span> Experience
            </p>
            <h2 id="experience-heading" className="display experience__title">
              Work with{' '}
              <em className="experience__accent">marketing agencies</em>.
            </h2>
            <p className="experience__lead">
              Real website design and development work for agency projects — focused on
              thoughtful interfaces and polished, responsive builds.
            </p>
          </Reveal>

          <div className="experience-list">
            {experience.map((item) => (
              <Reveal key={item.id} className="experience-card">
                <div className="experience-card__meta">
                  <p className="experience-card__context">{item.context}</p>
                </div>
                <h3 className="display experience-card__title">{item.title}</h3>
                <p className="experience-card__summary">{item.summary}</p>
                <ul className="experience-card__points">
                  {item.points.map((point) => (
                    <li key={point}>
                      <span className="experience-card__dot" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section expertise" aria-labelledby="expertise-heading">
        <div className="container-wide">
          <Reveal className="expertise__intro">
            <p className="expertise__badge">
              <span>04</span> Expertise
            </p>
            <h2 id="expertise-heading" className="display expertise__title">
              Two connected{' '}
              <em className="expertise__accent">practices</em>.
            </h2>
            <p className="expertise__lead">
              I design the interface and implement it in the browser — so hierarchy, type,
              and interaction stay coherent from concept to ship.
            </p>
          </Reveal>

          <div className="expertise__stage">
            <span className="expertise__speck expertise__speck--1" aria-hidden />
            <span className="expertise__speck expertise__speck--2" aria-hidden />
            <span className="expertise__star" aria-hidden>
              ✦
            </span>

            <div className="expertise__bridge" aria-hidden>
              <span className="expertise__bridge-pill">Design ↔ Code</span>
            </div>

            <div className="expertise-grid">
              {expertise.map((item, i) => {
                const tone = i === 0 ? 'design' : 'dev'
                return (
                  <Reveal
                    key={item.id}
                    className={`practice-card practice-card--${tone}`}
                  >
                    <div className="practice-card__top">
                      <p className="practice-card__num">{String(i + 1).padStart(2, '0')}</p>
                      <span className="practice-card__chip">
                        {tone === 'design' ? 'Craft' : 'Build'}
                      </span>
                    </div>
                    <h3 className="display practice-card__title">{item.title}</h3>
                    <p className="practice-card__summary">{item.summary}</p>
                    <ul className="practice-card__list">
                      {item.points.map((point) => (
                        <li key={point}>
                          <span className="practice-card__dot" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="practice-card__glow" aria-hidden />
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about" aria-labelledby="about-heading">
        <div className="container-wide about-shell">
          <Reveal className="about-visual">
            <div className="about-frame">
              <span className="about-frame__blob about-frame__blob--lilac" aria-hidden />
              <span className="about-frame__blob about-frame__blob--sky" aria-hidden />
              <div className="about-portrait">
                <img src="/about/portrait.jpg" alt="Portrait of Yasal" />
              </div>
              <span className="about-float about-float--loc">{site.location}</span>
              <span className="about-float about-float--role">Design + Dev</span>
              <span className="about-float about-float--star" aria-hidden>
                ✦
              </span>
            </div>
            <div className="about-mini" aria-hidden>
              <img src="/about/yasal-character.webp" alt="" />
            </div>
          </Reveal>

          <Reveal className="about-copy">
            <p className="about-badge">
              <span>05</span> About
            </p>
            <h2 id="about-heading" className="display about-title">
              Creative, detail-oriented, and happiest in the{' '}
              <em className="about-title__mark">details</em>.
            </h2>
            {site.about.map((para) => (
              <p key={para} className="about-para">
                {para}
              </p>
            ))}
            <p className="about-availability">
              <span className="about-availability__pulse" aria-hidden />
              {site.availability}
            </p>
          </Reveal>

          <Reveal className="skills-panel">
            <div className="skills-panel__head">
              <h3 className="display skills-panel__title">Tools & craft</h3>
              <p className="skills-panel__lead">
                A mix of interface thinking and frontend tools I reach for every day.
              </p>
            </div>
            <div className="skills">
              {Object.entries(skills).map(([group, items], index) => (
                <div
                  key={group}
                  className={`skill-group skill-group--${skillTone[index % skillTone.length]}`}
                >
                  <h4>{group}</h4>
                  <ul>
                    {items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-heading">
        <div className="container-wide">
          <Reveal className="contact-card">
            <span className="contact-card__glow contact-card__glow--a" aria-hidden />
            <span className="contact-card__glow contact-card__glow--b" aria-hidden />
            <span className="contact-card__star contact-card__star--1" aria-hidden>
              ✦
            </span>
            <span className="contact-card__star contact-card__star--2" aria-hidden>
              ✧
            </span>

            <div className="contact-card__copy">
              <p className="contact-badge">
                <span>06</span> Contact
              </p>
              <h2 id="contact-heading" className="display contact-title">
                Let’s talk about a{' '}
                <em className="contact-title__role">role</em>, a product, or a{' '}
                <em className="contact-title__site">website</em>.
              </h2>
              <p className="contact-lead">
                I’m open to UI/UX, junior product design, and frontend / website development
                opportunities — and selective freelance collaborations.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary contact-btn" href={`mailto:${site.email}`}>
                  {site.email}
                  <span aria-hidden>→</span>
                </a>
                <a
                  className="btn btn-pastel btn-pastel--sky"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <aside className="contact-aside" aria-label="Quick details">
              <div className="contact-aside__tile contact-aside__tile--open">
                <span className="contact-aside__label">Status</span>
                <p>Open to roles &amp; selected freelance</p>
              </div>
              <div className="contact-aside__tile contact-aside__tile--place">
                <span className="contact-aside__label">Based in</span>
                <p>{site.location}</p>
              </div>
              <div className="contact-aside__tile contact-aside__tile--reply">
                <span className="contact-aside__label">Reply time</span>
                <p>Usually within a few days</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

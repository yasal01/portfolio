import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import { site } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import './ProjectDetail.css'

function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const next =
    projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length]

  return (
    <article className="case">
      <header className="case__hero">
        <div className="container-wide case__hero-grid">
          <div className="case__intro">
            <Link to="/#work" className="case__back">
              ← All work
            </Link>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="display">{project.title}</h1>
            <p className="case__summary">{project.summary}</p>
            <div className="case__actions">
              {project.liveUrl ? (
                <a
                  className="btn btn-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live site
                </a>
              ) : null}
              <span className="chip">{project.contributionLabel}</span>
            </div>
            {project.liveNote ? <p className="case__note">{project.liveNote}</p> : null}
          </div>
          <div className="case__cover">
            <img src={project.cover} alt={project.coverAlt} />
          </div>
        </div>
      </header>

      <div className="container case__facts">
        <Reveal>
          <h2 className="case__label">Role</h2>
          <ul>
            {project.role.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="case__label">Focus</h2>
          <ul>
            {project.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="case__label">Verified tech</h2>
          <ul className="case__tech">
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="container case__body">
        <Reveal className="case__block">
          <h2 className="display">Overview</h2>
          <p>{project.overview}</p>
        </Reveal>
        <Reveal className="case__block">
          <h2 className="display">Objective</h2>
          <p>{project.objective}</p>
        </Reveal>
        <Reveal className="case__block">
          <h2 className="display">Design goal</h2>
          <p>{project.problem}</p>
        </Reveal>
      </div>

      <div className="container-wide case__gallery">
        {project.gallery.map((item) => (
          <Reveal key={item.src} className="case__shot">
            <img src={item.src} alt={item.alt} loading="lazy" />
            {item.caption ? <p>{item.caption}</p> : null}
          </Reveal>
        ))}
      </div>

      <div className="container case__body">
        <Reveal className="case__block">
          <h2 className="display">What the build demonstrates</h2>
          <ul className="case__bullets">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="case__decisions">
          <h2 className="display">Design decisions</h2>
          <div className="case__decision-grid">
            {project.decisions.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="case__block">
          <h2 className="display">What I’d refine next</h2>
          <p>{project.learned}</p>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="case__next">
          <p className="eyebrow">Next project</p>
          <h2 className="display">
            <Link to={`/work/${next.slug}`}>{next.title}</Link>
          </h2>
          <p>{next.summary}</p>
          <div className="case__actions">
            <Link to={`/work/${next.slug}`} className="btn btn-primary">
              Open case study
            </Link>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              Discuss a project
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  )
}

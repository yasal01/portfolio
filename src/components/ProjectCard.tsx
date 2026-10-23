import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import './ProjectCard.css'

type Props = {
  project: Project
  index: number
  size?: 'hero' | 'large' | 'medium' | 'small'
}

function browserAddress(project: Project) {
  if (project.liveUrl) {
    try {
      return new URL(project.liveUrl).hostname.replace(/^www\./, '')
    } catch {
      return `${project.slug}.studio`
    }
  }
  return `${project.slug}.local`
}

function contributionTone(contribution: Project['contribution']) {
  if (contribution === 'design') return 'UI/UX Design'
  if (contribution === 'development') return 'Website Development'
  return 'Design + Development'
}

export function ProjectCard({ project, index, size = 'medium' }: Props) {
  const caseStudy = `/work/${project.slug}`

  return (
    <article
      className={`browser-card browser-card--${size} accent-${project.accent}`}
      style={{ '--card-i': index } as CSSProperties}
    >
      <div className="browser-card__window">
        <div className="browser-card__chrome" aria-hidden>
          <span className="browser-card__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-card__url">
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {browserAddress(project)}
          </span>
          <span className="browser-card__chrome-spacer" />
        </div>

        <Link
          to={caseStudy}
          className="browser-card__screen"
          aria-label={`${project.title} case study`}
        >
          <img src={project.cover} alt="" loading="lazy" />
          <span className="browser-card__veil" aria-hidden />
          <span className="browser-card__hover-info" aria-hidden>
            <span className="browser-card__hover-kicker">
              {contributionTone(project.contribution)}
            </span>
            <span className="browser-card__hover-title">{project.title}</span>
            <span className="browser-card__hover-copy">{project.summary}</span>
            <span className="browser-card__hover-action">View case study →</span>
          </span>
        </Link>

        <div className="browser-card__footer">
          <div className="browser-card__footer-copy">
            <p className="browser-card__eyebrow">
              {String(index + 1).padStart(2, '0')} · {project.eyebrow}
            </p>
            <h3 className="display">
              <Link to={caseStudy}>{project.title}</Link>
            </h3>
            <p className="browser-card__summary">{project.summary}</p>
            <div className="browser-card__meta">
              <span className="chip">{contributionTone(project.contribution)}</span>
              <span className="chip chip--quiet">{project.contributionLabel}</span>
            </div>
          </div>
          <div className="browser-card__actions">
            <Link to={caseStudy} className="btn btn-primary browser-card__cta">
              Case study
            </Link>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className="btn btn-ghost browser-card__cta"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
            ) : (
              <span className="browser-card__local">Local preview</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

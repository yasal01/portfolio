import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import './BrowserWindow.css'

type Props = {
  project: Project
  image: string
  imageAlt: string
  address?: string
  className?: string
  style?: CSSProperties
  compact?: boolean
}

function hostname(project: Project, fallback?: string) {
  if (fallback) return fallback
  if (project.liveUrl) {
    try {
      return new URL(project.liveUrl).hostname.replace(/^www\./, '')
    } catch {
      /* fall through */
    }
  }
  return `${project.slug}.studio`
}

export function BrowserWindow({
  project,
  image,
  imageAlt,
  address,
  className = '',
  style,
  compact = false,
}: Props) {
  const href = `/work/${project.slug}`
  const role =
    project.contribution === 'design'
      ? 'UI/UX Design'
      : project.contribution === 'development'
        ? 'Website Development'
        : 'Design + Development'

  return (
    <article className={`bw ${compact ? 'bw--compact' : ''} ${className}`} style={style}>
      <div className="bw__frame">
        <div className="bw__chrome" aria-hidden>
          <span className="bw__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="bw__url">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {hostname(project, address)}
          </span>
        </div>

        <Link to={href} className="bw__screen" aria-label={`${project.title} — open case study`}>
          <img src={image} alt={imageAlt} loading="lazy" />
          <span className="bw__shade" />
          <span className="bw__overlay">
            <span className="bw__role">{role}</span>
            <span className="bw__name">{project.title}</span>
            <span className="bw__blurb">{project.summary}</span>
            <span className="bw__go">Open case study →</span>
          </span>
        </Link>
      </div>
    </article>
  )
}

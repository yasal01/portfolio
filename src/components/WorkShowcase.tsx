import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import './WorkShowcase.css'

function roleLabel(project: Project) {
  if (project.contribution === 'design') return 'UI / UX Design'
  if (project.contribution === 'development') return 'Website Development'
  return 'Design + Development'
}

function BrowserMock({
  project,
  image,
  alt,
}: {
  project: Project
  image: string
  alt: string
}) {
  const host = project.liveUrl
    ? (() => {
        try {
          return new URL(project.liveUrl).hostname.replace(/^www\./, '')
        } catch {
          return `${project.slug}.app`
        }
      })()
    : `${project.slug}.app`

  return (
    <Link to={`/work/${project.slug}`} className="alive-mock" aria-label={`${project.title} case study`}>
      <div className="alive-mock__chrome" aria-hidden>
        <span className="alive-mock__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="alive-mock__url">{host}</span>
      </div>
      <div className="alive-mock__screen">
        <img src={image} alt={alt} loading="lazy" />
      </div>
    </Link>
  )
}

function PhonePeek({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`alive-phone ${className ?? ''}`} aria-hidden>
      <div className="alive-phone__notch" />
      <img src={src} alt="" />
    </div>
  )
}

function ProjectBlock({
  project,
  tone,
  flip,
  peeks,
}: {
  project: Project
  tone: 'milk' | 'rose' | 'soft'
  flip?: boolean
  peeks?: string[]
}) {
  return (
    <article className={`alive-row ${flip ? 'alive-row--flip' : ''} alive-row--${tone}`}>
      <div className={`alive-info alive-info--${tone}`}>
        <p className="alive-info__chip">{roleLabel(project)}</p>
        <h3 className="alive-info__title">{project.title}</h3>
        <p className="alive-info__text">{project.summary}</p>
        <div className="alive-info__actions">
          <Link to={`/work/${project.slug}`} className="alive-btn">
            Case Study
            <span aria-hidden>→</span>
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="alive-btn alive-btn--ghost"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          ) : null}
        </div>
      </div>

      <div className="alive-preview">
        <BrowserMock project={project} image={project.cover} alt={project.coverAlt} />
        {peeks?.map((src, i) => (
          <PhonePeek key={src} src={src} className={`alive-phone--${i + 1}`} />
        ))}
      </div>
    </article>
  )
}

export function WorkShowcase() {
  const featured = projects.filter((p) => p.featured)
  const soft = featured.find((p) => p.slug === 'soft-glow-oil') ?? featured[0]
  const noirel = featured.find((p) => p.slug === 'noirel') ?? featured[1]
  const socutesy = featured.find((p) => p.slug === 'socutesy') ?? featured[2]

  return (
    <div className="alive" aria-label="Selected work">
      <svg className="alive-doodle alive-doodle--star" viewBox="0 0 40 40" aria-hidden>
        <path
          d="M20 2l3.5 11.5H35l-9.5 7 3.5 11.5L20 25l-9 7 3.5-11.5L5 13.5h11.5z"
          fill="#F5DCEB"
          stroke="#403B4A"
          strokeWidth="1.2"
        />
      </svg>
      <svg className="alive-doodle alive-doodle--arrow" viewBox="0 0 80 40" fill="none" aria-hidden>
        <path
          d="M4 28c18-22 40-22 60-8"
          stroke="#897783"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M56 12l12 8-14 2"
          stroke="#897783"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="alive-doodle alive-doodle--cloud" viewBox="0 0 64 36" aria-hidden>
        <path
          d="M16 28c-6 0-10-4-10-9s4-9 10-9c1-6 6-10 12-10 7 0 12 5 13 11 5 0 9 4 9 8s-4 9-9 9H16z"
          fill="#D8E8FF"
          stroke="#403B4A"
          strokeWidth="1.2"
        />
      </svg>
      <svg className="alive-doodle alive-doodle--spark" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="#E6DDF9" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <ProjectBlock
        project={soft}
        tone="milk"
        peeks={['/projects/soft-glow-oil/product.jpg', '/projects/soft-glow-oil/detail.jpg']}
      />
      <ProjectBlock
        project={noirel}
        tone="rose"
        flip
        peeks={['/projects/noirel/fashion.jpg']}
      />
      <ProjectBlock
        project={socutesy}
        tone="soft"
        peeks={['/projects/socutesy/hero.jpg']}
      />
    </div>
  )
}

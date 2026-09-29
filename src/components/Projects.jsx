import Section from './Section.jsx'
import { projects } from '../data.js'
import { GitHubIcon, ArrowIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02" title="Projects">
      <div className="grid-2">
        {projects.map((p) => (
          <article key={p.title} className="card project reveal">
            <div className="card-top">
              <h3>{p.title}</h3>
              <a href={p.link} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${p.title} on GitHub`}>
                <GitHubIcon /> <ArrowIcon />
              </a>
            </div>
            <ul className="bullets">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="tags">
              {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

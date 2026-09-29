import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="01" title="Work Experience">
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.company} className="card timeline-item reveal">
            <div className="card-top">
              <div>
                <h3>{job.role}</h3>
                <p className="muted">{job.company} · {job.location}</p>
              </div>
              <span className="pill">{job.period}</span>
            </div>
            <ul className="bullets">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="tags">
              {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

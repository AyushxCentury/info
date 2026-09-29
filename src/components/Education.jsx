import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="04" title="Education">
      <div className="grid-2">
        {education.map((e) => (
          <article key={e.school} className="card reveal">
            <span className="pill">{e.period}</span>
            <h3 className="edu-school">{e.school}</h3>
            <p className="muted">{e.degree}</p>
            <p className="edu-score">{e.score}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

import Section from './Section.jsx'
import { skills, coursework } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03" title="Skills & Coursework">
      <div className="grid-3">
        {skills.map((s) => (
          <div key={s.group} className="card reveal">
            <h3 className="card-label">{s.group}</h3>
            <div className="tags">
              {s.items.map((i) => <span key={i} className="tag tag-lg">{i}</span>)}
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-head reveal">Relevant Coursework</h3>
      <div className="grid-3">
        {coursework.map((c) => (
          <div key={c.group} className="card reveal">
            <h3 className="card-label">{c.group}</h3>
            <ul className="plain-list">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

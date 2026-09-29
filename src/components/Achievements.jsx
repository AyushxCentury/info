import Section from './Section.jsx'
import { achievements } from '../data.js'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05" title="Achievements & Leadership">
      <div className="grid-2">
        {achievements.map((a) => (
          <div key={a.title} className="card achievement reveal">
            <h3>{a.title}</h3>
            <p className="muted">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

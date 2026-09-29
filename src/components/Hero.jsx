import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './Icons.jsx'

const stats = [
  { value: '99.04', label: 'JEE Mains percentile' },
  { value: '80%', label: 'Latency cut in RAG chatbot' },
  { value: '10k+', label: 'Docs in knowledge base' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-kicker reveal">
          <span className="dot" /> Open to internships & SWE roles
        </p>
        <h1 className="reveal">
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero-role reveal">{profile.role}</p>
        <p className="hero-tagline reveal">{profile.tagline}</p>

        <div className="hero-actions reveal">
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href={profile.resume} className="btn btn-ghost" download>
            <DownloadIcon /> Resume
          </a>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>

        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

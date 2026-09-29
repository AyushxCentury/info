import Section from './Section.jsx'
import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function Contact() {
  const items = [
    { icon: <MailIcon />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, external: true },
    { icon: <GitHubIcon />, label: 'GitHub', value: '@AyushxCentury', href: profile.github, external: true },
  ]

  return (
    <Section id="contact" eyebrow="06" title="Get in Touch">
      <p className="contact-lead reveal">
        I'm always happy to talk about internships, research, or interesting problems.
        The fastest way to reach me is email.
      </p>
      <div className="grid-4">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            className="card contact-card reveal"
            {...(i.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="contact-icon">{i.icon}</span>
            <span className="card-label">{i.label}</span>
            <span className="contact-value">{i.value}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}

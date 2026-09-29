export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}

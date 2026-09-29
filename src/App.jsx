import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Ayush Sahu · Built with React
      </footer>
    </>
  )
}

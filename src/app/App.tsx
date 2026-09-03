import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { PageShell } from '../components/layout/PageShell'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { sectionIds } from '../lib/constants'
import { About } from '../sections/About'
import { AiDev } from '../sections/AiDev'
import { Certificates } from '../sections/Certificates/Certificates'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience/Experience'
import { Home } from '../sections/Home'
import { Projects } from '../sections/Projects/Projects'
import { Skills } from '../sections/Skills/Skills'
export default function App() {
  const activeSection = useActiveSection([...sectionIds])
  const scrollToSection = useScrollToSection()
  return (
    <PageShell>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiDev />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </PageShell>
  )
}

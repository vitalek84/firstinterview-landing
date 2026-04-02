import { AboutFAQWrapper } from './components/AboutFAQWrapper'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroHowItWorksWrapper } from './components/HeroHowItWorksWrapper'
import { ScoringRolesWrapper } from './components/ScoringRolesWrapper'

function App() {
  return (
    <div className="min-h-svh bg-white text-fi-ink">
      <Header />
      <main>
        <HeroHowItWorksWrapper />
        <ScoringRolesWrapper />
        <AboutFAQWrapper />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

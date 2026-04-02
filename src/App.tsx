import { useState } from 'react'
import { AboutFAQWrapper } from './components/AboutFAQWrapper'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroHowItWorksWrapper } from './components/HeroHowItWorksWrapper'
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal'
import { ScoringRolesWrapper } from './components/ScoringRolesWrapper'
import { TermsOfServiceModal } from './components/TermsOfServiceModal'

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <div className="min-h-svh bg-white text-fi-ink">
      <Header />
      <main>
        <HeroHowItWorksWrapper />
        <ScoringRolesWrapper />
        <AboutFAQWrapper />
        <ContactSection />
      </main>
      <Footer onOpenTerms={() => setIsTermsOpen(true)} onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  )
}

export default App

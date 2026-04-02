import { Hero } from './Hero'
import { HowItWorks } from './HowItWorks'

export function HeroHowItWorksWrapper() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,#F0F6FF_0%,#FFFFFF_100%)]"
        aria-hidden
      />
      <div className="relative">
        <Hero />
        <HowItWorks />
      </div>
    </div>
  )
}

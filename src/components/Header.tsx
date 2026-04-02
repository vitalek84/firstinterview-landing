import { useEffect, useState } from 'react'

const navItems: { label: string; href: string }[] = [
  { label: 'Home', href: '#top' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Roles Supported', href: '#roles' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('#top')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 1. If we are at the very top of the page, force "Home" to be active
      if (window.scrollY < 50) {
        setActiveSection('#top')
        return
      }

      // 2. If we are at the very bottom of the page, force "Contact" to be active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setActiveSection(navItems[navItems.length - 1].href)
        return
      }

      // 3. Otherwise, check which section is currently at the top of the viewport
      const headerOffset = 120 // Pixels to account for the sticky header
      let currentSection = '#top'

      for (const item of navItems) {
        const id = item.href.substring(1)
        const section = document.getElementById(id)
        
        if (section) {
          // getBoundingClientRect is much more reliable than offsetTop
          const rect = section.getBoundingClientRect()
          
          // If the top of the section is above our header offset, it becomes the active one
          if (rect.top <= headerOffset) {
            currentSection = item.href
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Run on scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Run once immediately on mount to establish the correct initial state
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-fi-border bg-white">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-3 sm:h-[72px] sm:gap-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="shrink-0 font-display text-[1.25rem] font-semibold leading-none tracking-tight text-fi-cyan sm:text-[2rem]"
        >
          firstinterview.ai
        </a>

        {/* Right Side Grouping */}
        <div className="ml-auto flex h-full items-center gap-2 sm:gap-4 lg:gap-8">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded text-fi-ink transition-colors hover:bg-[rgba(10,10,10,0.06)] lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 20 20" className="h-6 w-6" fill="none" aria-hidden>
              <path
                d={isMobileMenuOpen ? 'M5 5l10 10M15 5L5 15' : 'M4 6h12M4 10h12M4 14h12'}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          
          <nav
            className="hidden h-full items-center lg:flex lg:gap-1 xl:gap-3"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  // FIX: Changed from py-6 to `flex h-full items-center`. 
                  // This guarantees the border-b sits exactly on the bottom edge!
                  className={`
                    flex h-full items-center whitespace-nowrap border-b-2 px-3 text-[18px] font-medium transition-colors
                    ${
                      isActive
                        ? 'border-fi-blue text-fi-ink'
                        : 'border-transparent text-fi-ink hover:bg-[rgba(0,192,245,0.05)]'
                    }
                  `}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <a
            href="https://app.firstinterview.ai"
            className="shrink-0 rounded-md bg-fi-blue px-3 py-1.5 text-xs font-semibold text-white shadow-[var(--shadow-fi-cta)] transition-colors hover:bg-[var(--color-fi-blue-hover)] active:bg-[var(--color-fi-blue-hover)] sm:rounded-lg sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Get Started</span>
            <span className="hidden sm:inline">Start Practicing</span>
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-fi-border bg-white px-3 py-2 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[rgba(21,93,252,0.08)] text-fi-blue'
                      : 'text-fi-ink hover:bg-[rgba(0,192,245,0.08)]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
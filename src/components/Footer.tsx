type FooterProps = {
  onOpenTerms: () => void
  onOpenPrivacy: () => void
}

export function Footer({ onOpenTerms, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="w-full bg-fi-footer py-3 text-center">
      
      {/* Centered exactly like your target screenshot, with neat tight gaps */}
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-sm font-display">
        
        <span className="text-white">firstinterview.ai</span>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <button
          type="button"
          onClick={onOpenTerms}
          className="text-white transition-colors hover:text-gray-300 hover:underline"
        >
          Terms of Service
        </button>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-white transition-colors hover:text-gray-300 hover:underline"
        >
          Privacy Policy
        </button>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <span className="text-fi-footer-muted">Powered by Remgu</span>
        
      </div>
    </footer>
  )
}

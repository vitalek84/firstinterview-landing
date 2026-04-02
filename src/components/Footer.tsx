// export function Footer() {
//   return (
//     // Reduced padding to py-3 to make it a thin, sleek strip at the bottom
//     <footer className="bg-fi-footer py-3 text-center">
      
//       {/* 
//         - Removed max-w restriction so it stays on one line comfortably
//         - Set text to text-sm to match the target image
//         - Used gap-x-4 for neat, tight spacing around the dividers
//       */}
//       <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-sm font-display">
        
//         <span className="text-white">
//           firstinterview.ai
//         </span>
        
//         <span className="text-fi-footer-muted" aria-hidden>
//           |
//         </span>
        
//         <a href="#" className="text-white transition-colors hover:text-gray-300 hover:underline">
//           Terms of Service
//         </a>
        
//         <span className="text-fi-footer-muted" aria-hidden>
//           |
//         </span>
        
//         <a href="#" className="text-white transition-colors hover:text-gray-300 hover:underline">
//           Privacy Policy
//         </a>
        
//         <span className="text-fi-footer-muted" aria-hidden>
//           |
//         </span>
        
//         <span className="text-fi-footer-muted">
//           Powered by Remgu
//         </span>
        
//       </div>
//     </footer>
//   )
// }


export function Footer() {
  return (
    <footer className="w-full bg-fi-footer py-3 text-center">
      
      {/* Centered exactly like your target screenshot, with neat tight gaps */}
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-sm font-display">
        
        <span className="text-white">firstinterview.ai</span>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <a href="#" className="text-white transition-colors hover:text-gray-300 hover:underline">
          Terms of Service
        </a>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <a href="#" className="text-white transition-colors hover:text-gray-300 hover:underline">
          Privacy Policy
        </a>
        
        <span className="text-fi-footer-muted" aria-hidden="true">|</span>
        
        <span className="text-fi-footer-muted">Powered by Remgu</span>
        
      </div>
    </footer>
  )
}

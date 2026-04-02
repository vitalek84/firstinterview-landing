export function CommunicationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z"
        fill="#00C0F5"
        fillOpacity="0.1"
      />
      <path
        d="M33 27C33 27.5304 32.7893 28.0391 32.4142 28.4142C32.0391 28.7893 31.5304 29 31 29H19L15 33V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H31C31.5304 15 32.0391 15.2107 32.4142 15.5858C32.7893 15.9609 33 16.4696 33 17V27Z"
        stroke="#00C0F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BehavioralIcon({ className = "" }: { className?: string }) {
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
        d="M31 26C32.49 24.54 34 22.79 34 20.5C34 19.0413 33.4205 17.6424 32.3891 16.6109C31.3576 15.5795 29.9587 15 28.5 15C26.74 15 25.5 15.5 24 17C22.5 15.5 21.26 15 19.5 15C18.0413 15 16.6424 15.5795 15.6109 16.6109C14.5795 17.6424 14 19.0413 14 20.5C14 22.8 15.5 24.55 17 26L24 33L31 26Z"
        stroke="#00C0F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

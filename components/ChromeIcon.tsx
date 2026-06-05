export function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21.17 8H12" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.95 6.06L8.54 14" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.88 21.94L15.46 14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

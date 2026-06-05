export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bluntly"
    >
      <rect width="32" height="32" rx="7" fill="#ef4444" />
      <text
        x="16"
        y="23"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="20"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        B.
      </text>
    </svg>
  )
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      bluntly<span className="text-red-500">.</span>
    </span>
  )
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark className="w-7 h-7" />
      <Wordmark className="text-lg" />
    </div>
  )
}

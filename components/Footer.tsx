import { Wordmark } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Wordmark className="text-base text-zinc-500" />
        <p className="text-xs text-zinc-600">
          © 2026 Bluntly. Built for people who&apos;d rather hear the truth.
        </p>
      </div>
    </footer>
  )
}

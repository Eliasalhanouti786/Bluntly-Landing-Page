const platforms = [
  "LinkedIn",
  "Greenhouse",
  "Lever",
  "Indeed",
  "Ashby",
  "Workable",
]

export function WorksWith() {
  return (
    <section className="py-20 px-6 border-t border-zinc-900/80">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-10">
          Works with
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {platforms.map((name) => (
            <span
              key={name}
              className="text-xl md:text-2xl font-semibold text-zinc-500 hover:text-zinc-300 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-xs text-zinc-600 mt-10 max-w-md mx-auto">
          More platforms supported every month. Request one at
          <span className="text-zinc-400"> hello@bluntly.dev</span>.
        </p>
      </div>
    </section>
  )
}

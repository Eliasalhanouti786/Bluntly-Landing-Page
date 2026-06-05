import { X, Check } from "lucide-react"

export function Comparison() {
  return (
    <section className="py-24 px-6 border-t border-zinc-900/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            Quality over quantity
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Stop mass applying.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto pt-4 text-base">
            Spraying 200 applications gets you ignored. Bluntly shows you which
            five are worth a real, thoughtful shot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Other tools */}
          <div className="p-7 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                Other tools
              </div>
              <Check className="w-4 h-4 text-zinc-600" />
            </div>
            <div className="flex items-end gap-2 mb-1">
              <div className="font-mono text-6xl font-bold text-zinc-400 leading-none">
                87
              </div>
              <div className="font-mono text-xl text-zinc-700 mb-1">/100</div>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full mb-5 overflow-hidden">
              <div className="h-full w-[87%] bg-zinc-500 rounded-full" />
            </div>
            <div className="p-3 rounded-lg bg-zinc-800/40 text-zinc-400 text-sm font-medium">
              Great match. Apply now.
            </div>
            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
              Inflated scores. You apply to 200 jobs. You hear back from zero.
            </p>
          </div>

          {/* Bluntly */}
          <div className="p-7 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-zinc-900/40 shadow-2xl shadow-red-500/5">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs text-red-400 font-mono uppercase tracking-wider">
                Bluntly
              </div>
              <X
                className="w-4 h-4 text-red-500"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex items-end gap-2 mb-1">
              <div className="font-mono text-6xl font-bold text-red-500 leading-none">
                34
              </div>
              <div className="font-mono text-xl text-zinc-700 mb-1">/100</div>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full mb-5 overflow-hidden">
              <div className="h-full w-[34%] bg-red-500 rounded-full" />
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              Don&apos;t apply. Here&apos;s why.
            </div>
            <p className="text-zinc-300 text-sm mt-4 leading-relaxed">
              Honest scores. You apply to 5 jobs. You get 3 interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

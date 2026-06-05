import { Download, Search, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install Bluntly",
    description: "Add the extension to Chrome in one click.",
  },
  {
    number: "02",
    icon: Search,
    title: "Browse any job",
    description:
      "LinkedIn, Greenhouse, Lever, Indeed. We pick up the listing automatically.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "See the truth",
    description:
      "An honest fit score and three specific CV rewrites for that role.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 border-t border-zinc-900/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Three clicks. Zero spam.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="mb-6 inline-flex w-11 h-11 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 group-hover:bg-red-500/15 transition">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-zinc-600">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

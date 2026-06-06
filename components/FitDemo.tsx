"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, Check, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"

type Verdict = "fit" | "maybe" | "skip"

interface Job {
  title: string
  company: string
  source: string
  score: number
  verdict: Verdict
  reasonsLabel: string
  reasons: string[]
}

const jobs: Job[] = [
  {
    title: "Investment Banking Analyst",
    company: "Goldman Sachs",
    source: "goldmansachs.com",
    score: 14,
    verdict: "skip",
    reasonsLabel: "Why you're not a fit",
    reasons: [
      "Requires finance background or top-tier MBA. Your CV is software.",
      "Expects 2+ years IB internships. Not in your CV.",
      "No transferable banking or financial modeling skills shown.",
    ],
  },
  {
    title: "Product Engineer",
    company: "Shopify",
    source: "shopify.com",
    score: 71,
    verdict: "maybe",
    reasonsLabel: "What to know",
    reasons: [
      "Strong React and TypeScript match.",
      "No e-commerce or payments experience.",
      "Rewrite your platform work to emphasize merchant-facing impact.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Linear",
    source: "lever.co",
    score: 89,
    verdict: "fit",
    reasonsLabel: "Why you're a fit",
    reasons: [
      "React and TypeScript match every requirement.",
      "2 years experience fits the seniority band.",
      "Design tooling work is directly relevant.",
    ],
  },
  {
    title: "Associate Consultant",
    company: "McKinsey",
    source: "mckinsey.com",
    score: 24,
    verdict: "skip",
    reasonsLabel: "Why you're not a fit",
    reasons: [
      "Requires top-tier MBA or 5+ years consulting. You have neither.",
      "Case interview prep would take 3 to 6 months.",
      "No strategy or business analytics background in your CV.",
    ],
  },
]

const verdictConfig = {
  fit: {
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    barColor: "bg-green-500",
    dotColor: "bg-green-500",
    label: "Apply.",
    icon: Check,
    glow: "shadow-green-500/10",
  },
  maybe: {
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    barColor: "bg-amber-500",
    dotColor: "bg-amber-500",
    label: "Apply with edits.",
    icon: AlertTriangle,
    glow: "shadow-amber-500/10",
  },
  skip: {
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    barColor: "bg-red-500",
    dotColor: "bg-red-500",
    label: "Don't apply.",
    icon: X,
    glow: "shadow-red-500/10",
  },
}

const AUTO_SCROLL_MS = 4000

export function FitDemo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const job = jobs[activeIndex]
  const config = verdictConfig[job.verdict]
  const Icon = config.icon

  // Auto-scroll: advance every N ms, but pause on hover or once the user
  // takes manual control. Stops permanently after first manual nav.
  useEffect(() => {
    if (hasInteracted || isHovered) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % jobs.length)
    }, AUTO_SCROLL_MS)
    return () => clearInterval(interval)
  }, [hasInteracted, isHovered])

  const prev = () => {
    setHasInteracted(true)
    setActiveIndex((i) => (i - 1 + jobs.length) % jobs.length)
  }
  const next = () => {
    setHasInteracted(true)
    setActiveIndex((i) => (i + 1) % jobs.length)
  }
  const jumpTo = (i: number) => {
    setHasInteracted(true)
    setActiveIndex(i)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-8 shadow-2xl transition-shadow ${config.glow}`}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Bluntly
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={`source-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-zinc-500 font-mono"
            >
              {job.source}
            </motion.span>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Job title */}
            <div className="mb-6">
              <div className="text-xs text-zinc-500 mb-1 font-mono uppercase tracking-wider">
                Analyzing
              </div>
              <div className="text-lg text-zinc-200 font-medium">
                {job.title} at {job.company}
              </div>
            </div>

            {/* Score */}
            <div className="flex items-end gap-3 mb-2">
              <div
                className={`font-mono text-7xl font-bold leading-none ${config.color}`}
              >
                {job.score}
              </div>
              <div className="font-mono text-2xl text-zinc-600 mb-2">
                /100
              </div>
            </div>

            {/* Bar */}
            <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
              <motion.div
                key={`bar-${activeIndex}`}
                initial={{ width: 0 }}
                animate={{ width: `${job.score}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full ${config.barColor}`}
              />
            </div>

            {/* Verdict */}
            <div
              className={`flex items-center gap-2 mb-6 p-3 rounded-lg ${config.bg} border ${config.border}`}
            >
              <Icon
                className={`w-4 h-4 ${config.color}`}
                strokeWidth={2.5}
              />
              <span className={`font-medium ${config.color}`}>
                {config.label}
              </span>
            </div>

            {/* Reasons */}
            <div className="space-y-3">
              <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                {job.reasonsLabel}
              </div>
              <div className="space-y-2 text-sm text-zinc-300">
                {job.reasons.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-zinc-600 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel nav */}
      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center gap-2 min-w-[180px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={`label-${activeIndex}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-xs text-zinc-300 uppercase tracking-wider"
            >
              {job.company}
            </motion.span>
          </AnimatePresence>
          <div className="flex gap-1.5">
            {jobs.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Go to ${jobs[i].company}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-zinc-50"
                    : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 transition cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-center text-xs text-zinc-500 mt-5">
        Same CV. Different roles. Honest verdicts.
      </p>
    </div>
  )
}

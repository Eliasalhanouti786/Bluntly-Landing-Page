"use client"

import { motion } from "motion/react"
import { Wordmark } from "@/components/Logo"
import { ChromeIcon } from "@/components/ChromeIcon"
import { FitDemo } from "@/components/FitDemo"
import { HowItWorks } from "@/components/HowItWorks"
import { Comparison } from "@/components/Comparison"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg fade-bottom pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Wordmark className="text-xl" />
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-50 text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition cursor-pointer">
            <ChromeIcon className="w-4 h-4" />
            Add to Chrome
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative flex flex-col items-center px-6 pt-12 pb-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center w-full mb-14"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Stop applying to jobs{" "}
            <span className="text-red-500">you won&apos;t get.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Sharpen your CV for the roles you can win.
            <br className="hidden sm:block" />
            {" "}Skip the ones you can&apos;t.
          </p>

          <p className="text-xs text-zinc-500 mt-8 font-mono uppercase tracking-wider">
            Works on LinkedIn, Greenhouse, Lever, and Indeed.
          </p>
        </motion.section>

        {/* Interactive Fit Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full"
        >
          <FitDemo />
        </motion.div>
      </div>

      {/* How it works */}
      <HowItWorks />

      {/* Comparison */}
      <Comparison />

      {/* Footer */}
      <Footer />
    </main>
  )
}

import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import RevealSection from './RevealSection'

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 font-inter">
      <RevealSection className="w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Left: Brand + Tagline */}
          <div className="flex flex-col max-w-sm">
            <Link
              to="/"
              className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider mb-3 hover:opacity-90 transition-opacity"
            >
              VANGUARD
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              A world-class digital collective building fierce brand identities that don't just turn heads — they lead.
            </p>
          </div>

          {/* Right: Three Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Col 1: Exploration */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-1">
                Explore
              </span>
              <Link to="/projects" className="text-white/70 text-sm tracking-wide hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/studio" className="text-white/70 text-sm tracking-wide hover:text-white transition-colors">
                Studio
              </Link>
              <Link to="/offerings" className="text-white/70 text-sm tracking-wide hover:text-white transition-colors">
                Offerings
              </Link>
            </div>

            {/* Col 2: Connect */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-1">
                Inquire
              </span>
              <Link to="/inquire" className="text-white/70 text-sm tracking-wide hover:text-white transition-colors">
                New Business
              </Link>
              <a
                href="mailto:hello@vanguard.agency"
                className="text-white/70 text-sm tracking-wide hover:text-white transition-colors"
              >
                hello@vanguard.agency
              </a>
              <span className="text-white/50 text-sm tracking-wide">
                Los Angeles • London
              </span>
            </div>

            {/* Col 3: Socials */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-1">
                Social
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 text-sm tracking-wide hover:text-white transition-colors group"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 text-sm tracking-wide hover:text-white transition-colors group"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 text-sm tracking-wide hover:text-white transition-colors group"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright, Developer Attribution, and Legal */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-white/40">
            <p>© {new Date().getFullYear()} VANGUARD COLLECTIVE. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>
              Developed by{' '}
              <a
                href="https://lennoxlewis.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 font-medium underline underline-offset-4 decoration-red-500/50 hover:decoration-red-400 transition-colors"
              >
                Lennox Lewis
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6 text-white/30 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
          </div>
        </div>
      </RevealSection>
    </footer>
  )
}

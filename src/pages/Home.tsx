import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Crown, Compass, Layers, Globe, Film } from 'lucide-react'
import SplitText from '../components/SplitText'
import RevealSection from '../components/RevealSection'
import AnimatedCounter from '../components/AnimatedCounter'
import { projects } from '../data/projects'

export default function Home() {
  const heroStats = [
    { value: '250+', label: 'Brands Transformed' },
    { value: '95%', label: 'Client Retention' },
    { value: '10+', label: 'Years in the Game' },
  ]

  const capabilities = [
    {
      icon: Compass,
      title: 'Brand Strategy',
      desc: 'Market positioning, cultural resonance, and visionary roadmaps that cut through noise.',
    },
    {
      icon: Layers,
      title: 'Visual Identity',
      desc: 'Bespoke typography, radical design systems, and iconography built for timeless dominance.',
    },
    {
      icon: Globe,
      title: 'Digital Experience',
      desc: 'Immersive web engineering, high-performance webapps, and cinematic interactions.',
    },
    {
      icon: Film,
      title: 'Motion & Film',
      desc: '3D spatial art, high-impact brand films, and fluid motion identities that captivate audiences.',
    },
  ]

  return (
    <div className="w-full bg-black text-white">
      {/* ── 1. ABOVE-THE-FOLD HERO (Full Viewport, Pure CSS Entrance) ── */}
      <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black text-white font-inter select-none flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Dark & Redder Accent Overlays */}
        {/* Rich red/crimson ambient wash */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-red-950/45 via-red-900/30 to-black/90 pointer-events-none" />

        {/* Ambient Crimson Radial Glow */}
        <div className="absolute inset-0 z-[1] [background:radial-gradient(circle_at_65%_45%,rgba(220,38,38,0.3)_0%,transparent_65%)] pointer-events-none" />

        {/* Edge Vignette */}
        <div className="absolute inset-0 z-[2] pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.65)_100%)]" />

        {/* Hero Content (vertically centered, left-aligned) */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center max-w-7xl">
          {/* 1. Tagline */}
          <div className="animate-fade-up flex items-center gap-2 mb-6 lg:mb-8">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          {/* 2. Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
          </h1>

          {/* 3. Subtext */}
          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
            We build fierce brand identities <br />
            that don't just turn heads --{' '}
            <strong className="font-bold text-white">they lead.</strong>
          </p>

          {/* 4. CTA Row */}
          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#selected-work"
              className="group inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 border border-white/20 hover:border-white/40 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 shadow-2xl"
            >
              <span className="font-medium tracking-widest text-white">SEE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Award Badge (hidden on mobile, hidden sm:flex) */}
            <div className="hidden sm:flex items-center gap-3 pl-2 sm:border-l sm:border-white/20 sm:pl-6">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col text-white/60 text-xs tracking-wider uppercase">
                <span>Top-Rated</span>
                <span>Brand Studio</span>
              </div>
            </div>
          </div>

          {/* 5. Stats Row (Above Fold: original CSS load animations) */}
          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. BELOW-THE-FOLD: SELECTED WORK (Framer Motion) ── */}
      <section id="selected-work" className="w-full px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
                Selected Work
              </span>
              <SplitText
                text="Featured Projects."
                as="h2"
                className="font-podium text-white uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none"
              />
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.slice(0, 4).map((project, index) => (
              <RevealSection key={project.id} delay={index * 0.1} className="group flex flex-col">
                <Link to={`/projects/${project.id}`} aria-label={`View ${project.title} project and service details`} className="block relative overflow-hidden bg-neutral-950 border border-white/10 aspect-[16/10] mb-5">
                  <img
                    src={project.image}
                    srcSet={[480, 800, 1200].map((width) => `${project.image.replace('w=1200', `w=${width}`)} ${width}w`).join(', ')}
                    sizes="(min-width: 1280px) 616px, (min-width: 768px) 50vw, 100vw"
                    alt={project.imageAlt ?? project.title}
                    width={1200}
                    height={750}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {project.stats && (
                    <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 text-white/90 text-[10px] tracking-widest uppercase px-3 py-1.5">
                      {project.stats}
                    </span>
                  )}
                </Link>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-red-400/80 font-medium block mb-1">
                      {project.category}
                    </span>
                    <SplitText
                      text={project.title}
                      as="h3"
                      className="font-podium text-white uppercase text-2xl sm:text-3xl tracking-wide group-hover:text-red-200 transition-colors"
                    />
                    <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-md line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES STRIP (Staggered Reveal) ── */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-neutral-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
              Offerings & Discipline
            </span>
            <SplitText
              text="Our Capabilities."
              as="h2"
              className="font-podium text-white uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none"
            />
          </div>

          <RevealSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="p-8 border border-white/10 bg-black/50 backdrop-blur-xs flex flex-col justify-between hover:border-white/30 transition-colors group"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/80 group-hover:text-white group-hover:border-red-400/60 transition-colors mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-podium text-white uppercase text-xl tracking-wide mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-inter leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <Link
                    to="/offerings"
                    className="mt-8 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </RevealSection>
        </div>
      </section>

      {/* ── 4. STATS IN CONTEXT (Animated Counter on Scroll) ── */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
              Track Record
            </span>
            <SplitText
              text="Proven Authority."
              as="h2"
              className="font-podium text-white uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6"
            />
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              We partner with visionary founders, legacy powerhouses, and disruptive innovators to dominate markets and define cultural shifts.
            </p>
          </RevealSection>

          <RevealSection
            stagger
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border border-white/10 bg-black/60 p-8 sm:p-14 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            <div className="pt-6 sm:pt-0 flex flex-col items-center">
              <AnimatedCounter
                value={250}
                suffix="+"
                className="font-inter text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              />
              <span className="text-white/50 text-xs tracking-widest uppercase mt-3">
                Brands Transformed
              </span>
            </div>

            <div className="pt-8 sm:pt-0 flex flex-col items-center">
              <AnimatedCounter
                value={95}
                suffix="%"
                className="font-inter text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              />
              <span className="text-white/50 text-xs tracking-widest uppercase mt-3">
                Client Retention
              </span>
            </div>

            <div className="pt-8 sm:pt-0 flex flex-col items-center">
              <AnimatedCounter
                value={10}
                suffix="+"
                className="font-inter text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              />
              <span className="text-white/50 text-xs tracking-widest uppercase mt-3">
                Years in the Game
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 5. CTA BANNER (Scroll Reveal) ── */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="border border-white/15 bg-black/80 p-10 sm:p-16 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-red-400 font-semibold block mb-4">
                Ready to lead?
              </span>
              <SplitText
                text="Let's Build Something Fierce."
                as="h2"
                className="font-podium text-white uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6"
              />
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                Whether you're redefining your brand architecture or creating a market-defining digital flagship, our collective is ready.
              </p>
              <Link
                to="/inquire"
                className="group inline-flex items-center gap-2 border border-white/40 hover:border-white px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}

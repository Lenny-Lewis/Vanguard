import { Link } from 'react-router-dom'
import { Compass, Layers, Globe, Film, Box, ArrowUpRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import RevealSection from '../components/RevealSection'

export default function Offerings() {
  const offerings = [
    {
      num: '01',
      name: 'Brand Strategy',
      icon: Compass,
      tagline: 'Positioning for cultural permanence',
      description:
        'We carve clear, defensible market territories. Through quantitative cultural auditing and positioning models, we build the sovereign foundation your brand will expand upon for decades.',
      deliverables: ['Cultural Landscape Audits', 'Brand Architecture & Hierarchy', 'Verbal Identity & Nomenclature', 'Strategic Positioning Matrix'],
    },
    {
      num: '02',
      name: 'Identity Design',
      icon: Layers,
      tagline: 'Bespoke systems that command prestige',
      description:
        'Visual identities engineered to inspire awe. From custom typographic families to brutalist design tokens and tactile packaging, we craft uncompromising visual standards.',
      deliverables: ['Custom Typeface Creation', 'Complete Design Systems', 'Editorial & Print Specifications', 'Packaging & Tactile Artifacts'],
    },
    {
      num: '03',
      name: 'Digital Products',
      icon: Globe,
      tagline: 'Defying web templates with high-performance art',
      description:
        'Digital flagships and immersive platforms that convert. We merge high-framerate 3D WebGL scenes with blistering frontend speed and radical interaction design.',
      deliverables: ['Interactive Web Flagships', 'Spatial 3D Experiences', 'Full-Stack React & Next Architecture', 'Design System Engineering'],
    },
    {
      num: '04',
      name: 'Motion & Film',
      icon: Film,
      tagline: 'Cinematic power in motion',
      description:
        'Dynamic moving identities that electrify screens. We direct 3D CGI product reveals, campaign films, generative motion systems, and custom sonic signatures.',
      deliverables: ['Brand Launch Cinematics', '3D Photorealistic Simulation', 'Dynamic Identity Toolkits', 'Sonic Branding & Sound Design'],
    },
    {
      num: '05',
      name: 'Spatial & Objects',
      icon: Box,
      tagline: 'Physical environments that immerse and captivate',
      description:
        'Translating digital brand prestige into physical presence. We conceptualize flagship store aesthetics, bespoke exhibition stands, and VIP collateral.',
      deliverables: ['Exhibition & Pop-up Environments', 'Physical Showroom Direction', 'Ultra-Luxury Material Selection', 'Sculptural Collateral Design'],
    },
  ]

  return (
    <div className="w-full bg-black text-white pt-28 sm:pt-36 pb-24 lg:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 sm:mb-28 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
            Service Spectrum
          </span>
          <SplitText
            text="Offerings."
            as="h1"
            className="font-podium text-white uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
          />
          <RevealSection delay={0.2}>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              We operate as an integrated elite strike team, eliminating the bureaucratic bloat of legacy agencies to produce radical excellence across strategy, design, and interactive technology.
            </p>
          </RevealSection>
        </div>

        {/* Offerings Horizontal Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {offerings.map((item, index) => {
            const Icon = item.icon
            return (
              <RevealSection
                key={item.name}
                delay={index * 0.05}
                className="py-12 sm:py-16 lg:py-20 group hover:bg-neutral-950/40 transition-colors px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Number + Icon + Name */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="flex items-center gap-3 text-red-400/90 font-mono text-xs uppercase mb-3">
                      <span>{item.num}</span>
                      <span className="w-6 h-px bg-red-400/40" />
                      <span>{item.tagline}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-400 group-hover:text-red-400 text-white/70 transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <SplitText
                        text={item.name}
                        as="h2"
                        className="font-podium text-white uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wide group-hover:text-red-200 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-4">
                    <p className="text-white/70 text-sm sm:text-base font-inter leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Right: Deliverables list & Inquire CTA */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="bg-white/5 border border-white/10 text-white/60 text-[10px] tracking-wider uppercase px-2.5 py-1"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/inquire"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 group-hover:text-white border-b border-white/20 pb-1 w-fit transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}

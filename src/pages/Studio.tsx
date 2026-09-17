import SplitText from '../components/SplitText'
import RevealSection from '../components/RevealSection'
import AnimatedCounter from '../components/AnimatedCounter'

export default function Studio() {
  const team = [
    {
      name: 'Julian Vance',
      role: 'Founding Partner & Creative Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Brand Architecture',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Marcus Kael',
      role: 'Principal Digital Architect',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Soren Lindqvist',
      role: 'Lead Motion & Spatial Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    },
  ]

  const values = [
    {
      num: '01',
      title: 'Radical Precision',
      desc: 'We obsess over every typographical curve, millisecond of interaction latency, and viewport breakpoint.',
    },
    {
      num: '02',
      title: 'Cultural Disruption',
      desc: 'Brands that conform dissolve into the background. We engineer visual identities that provoke and lead.',
    },
    {
      num: '03',
      title: 'Sovereign Craft',
      desc: 'No mass-market frameworks or off-the-shelf templates. Everything we produce is bespoke and singular.',
    },
  ]

  return (
    <div className="w-full bg-black text-white pt-28 sm:pt-36 pb-24 lg:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
            Agency Narrative
          </span>
          <SplitText
            text="Studio."
            as="h1"
            className="font-podium text-white uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-8"
          />

          <RevealSection delay={0.2} className="space-y-6 text-white/75 text-base sm:text-lg font-inter leading-relaxed">
            <p>
              Founded in 2016 at the crossroads of brutalist aesthetic discipline and bleeding-edge digital interaction, VANGUARD is an uncompromising creative collective. We reject generic templates, safe conventions, and lukewarm corporate compromise.
            </p>
            <p>
              Operating between Los Angeles and London, our multidisciplinary team of art directors, creative technologists, typographers, and strategists construct brand ecosystems engineered to command market share and provoke cultural resonance.
            </p>
          </RevealSection>
        </div>

        {/* Studio Philosophy Strip */}
        <div className="mb-24 lg:mb-32 border-t border-white/10 pt-16">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-2">
              Our Ethos
            </span>
            <SplitText
              text="How We Operate."
              as="h2"
              className="font-podium text-white uppercase text-3xl sm:text-5xl tracking-tight"
            />
          </div>

          <RevealSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="p-8 border border-white/10 bg-neutral-950/70 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="text-xs font-mono text-red-400/80 mb-6">{val.num}</div>
                <div>
                  <h3 className="font-podium text-white uppercase text-xl sm:text-2xl mb-3 tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </RevealSection>
        </div>

        {/* Team Grid */}
        <div className="mb-24 lg:mb-32 border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-2">
                Leadership
              </span>
              <SplitText
                text="The Minds Behind The Work."
                as="h2"
                className="font-podium text-white uppercase text-3xl sm:text-5xl tracking-tight"
              />
            </div>
            <p className="text-white/50 text-xs sm:text-sm max-w-xs font-inter">
              A united squad of masters in typography, spatial direction, and interactive systems.
            </p>
          </div>

          <RevealSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/10 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="font-podium text-white uppercase text-xl tracking-wide">
                  {member.name}
                </h3>
                <span className="text-white/50 text-xs mt-1 font-inter">{member.role}</span>
              </div>
            ))}
          </RevealSection>
        </div>

        {/* Stats Row Reused with AnimatedCounter */}
        <div className="border-t border-white/10 pt-16">
          <RevealSection className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-2">
              Performance by the numbers
            </span>
            <SplitText
              text="Decade of Impact."
              as="h2"
              className="font-podium text-white uppercase text-3xl sm:text-5xl tracking-tight"
            />
          </RevealSection>

          <RevealSection
            stagger
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border border-white/10 bg-neutral-950/80 p-8 sm:p-14 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10"
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
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import RevealSection from '../components/RevealSection'
import { projects, type Project } from '../data/projects'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="w-full bg-black text-white pt-28 sm:pt-36 pb-24 lg:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
            Selected Work
          </span>
          <SplitText
            text="Projects."
            as="h1"
            className="font-podium text-white uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
          />
          <RevealSection delay={0.2} className="max-w-xl">
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              An index of brand identities, architectural digital flagships, and provocative campaigns built to establish category leadership.
            </p>
          </RevealSection>

          {/* Filter Bar */}
          <RevealSection delay={0.3} className="flex flex-wrap gap-2 sm:gap-3 mt-10 border-b border-white/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeFilter === cat}
                aria-controls="project-results"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </RevealSection>
        </div>

        <p role="status" aria-live="polite" className="text-xs text-white/50 mb-6">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>
        {/* Filtered cards stay visible immediately, including when restoring All. */}
        <div id="project-results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project: Project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group flex h-full flex-col justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
              <div>
                <div className="relative overflow-hidden bg-neutral-950 border border-white/10 aspect-[4/3] mb-5">
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {project.stats && (
                    <span className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-widest uppercase px-3 py-1">
                      {project.stats}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-red-400/90 font-medium mb-1.5">
                  <span>{project.category}</span>
                  <span className="text-white/40">{project.year}</span>
                </div>

                <h2 className="font-podium text-white uppercase text-2xl sm:text-3xl tracking-wide group-hover:text-red-300 transition-colors">{project.title}</h2>

                <p className="text-white/60 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/60 text-xs tracking-wider">View project & service</span>
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white group-hover:bg-white/10 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

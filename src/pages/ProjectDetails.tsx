import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Mail } from 'lucide-react'
import { projects } from '../data/projects'
import { projectBudgetBands, projectServices } from '../data/projectServices'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)
  const service = project && projectServices[project.id]
  const linkStyle = 'inline-flex items-center justify-center gap-2 border px-6 py-3 text-xs uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400'

  if (!project || !service) {
    return (
      <main className="min-h-[60vh] px-6 pt-36 pb-24 text-white max-w-7xl mx-auto w-full">
        <h1 className="font-podium text-4xl uppercase mb-4">Project not found.</h1>
        <p className="text-white/60 mb-8">This project is unavailable. Explore the portfolio to find a service for your next brief.</p>
        <Link to="/projects" className={`${linkStyle} border-white/30 hover:border-white`}><ArrowLeft className="w-4 h-4" /> All projects</Link>
      </main>
    )
  }

  const emailLink = `mailto:inquire@vanguard.agency?subject=${encodeURIComponent(`Project inquiry: ${service.name} / ${project.title}`)}&body=${encodeURIComponent(`Hello Vanguard,\n\nI’m interested in ${service.name}, inspired by ${project.title}.\n\nMy goals:\nMy budget (USD):\nPreferred launch date:\n\nThank you.`)}`

  return (
    <main className="w-full bg-black text-white pt-28 sm:pt-36 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white mb-10 focus-visible:outline focus-visible:outline-red-400">
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>
        <header className="mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-red-400 mb-4">{project.category} / {project.year}</p>
          <h1 className="font-podium uppercase text-4xl sm:text-6xl lg:text-7xl leading-tight break-words mb-5">{project.title}</h1>
          <p className="text-white/70 text-base sm:text-xl leading-relaxed max-w-3xl">{project.description}</p>
          <p className="text-xs text-white/50 mt-5">Client: {project.client}</p>
        </header>

        <img src={project.image} alt={project.imageAlt ?? project.title} width={1200} height={675} className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover border border-white/10 mb-12 sm:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            <section aria-labelledby="service-background">
              <p className="text-xs uppercase tracking-[0.25em] text-red-400 mb-3">About the service</p>
              <h2 id="service-background" className="font-podium uppercase text-3xl sm:text-4xl mb-5">{service.name}</h2>
              <p className="text-white/70 leading-relaxed mb-5">{service.background}</p>
              <p className="text-white/70 leading-relaxed">{service.approach}</p>
              <div className="mt-6 border-l-2 border-red-500 pl-5">
                <h3 className="text-xs uppercase tracking-widest text-white mb-2">Who it’s for</h3>
                <p className="text-sm text-white/60 leading-relaxed">{service.idealFor}</p>
              </div>
            </section>

            <section aria-labelledby="deliverables">
              <h2 id="deliverables" className="font-podium uppercase text-3xl mb-5">What we can deliver.</h2>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-sm text-white/80"><Check aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />{item}</li>
                ))}
              </ul>
              <p className="text-xs text-white/50 mt-4 leading-relaxed">Your proposal confirms the deliverables, milestones, and number of review rounds for your brief.</p>
            </section>

            <section aria-labelledby="process">
              <h2 id="process" className="font-podium uppercase text-3xl mb-6">From brief to launch.</h2>
              <ol className="space-y-6">
                {[
                  ['Discovery', 'Share your goals, audience, budget, and launch plans so we can define the right scope.'],
                  ['Direction & creation', 'Review the creative direction, then develop the agreed designs and production assets through planned milestones.'],
                  ['Delivery & handover', 'Review the final work, receive the agreed files and guidance, and confirm any ongoing support.'],
                ].map(([title, description], index) => (
                  <li key={title} className="flex gap-4"><span className="text-red-400 font-mono text-sm pt-1">0{index + 1}</span><div><h3 className="font-medium mb-1">{title}</h3><p className="text-sm text-white/60 leading-relaxed">{description}</p></div></li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <section className="border border-white/15 bg-neutral-950 p-6 sm:p-8" aria-labelledby="pricing">
              <p className="text-xs uppercase tracking-[0.25em] text-red-400 mb-3">Investment / USD</p>
              <h2 id="pricing" className="font-podium uppercase text-3xl mb-4">Pricing guidance.</h2>
              <p className="text-sm text-white/65 leading-relaxed mb-5">Use these project budget bands to plan your brief. Final pricing is quoted after discovery and depends on the agreed scope.</p>
              <ul className="space-y-2 mb-6">
                {projectBudgetBands.map((band) => <li key={band} className="border border-white/10 px-4 py-3 text-sm font-medium">{band} <span className="text-white/40 text-xs">USD</span></li>)}
              </ul>
              <h3 className="text-xs uppercase tracking-widest mb-2">What affects your quote</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{service.scopeFactors} Production, licensing, and ongoing support costs are confirmed in the proposal.</p>
              <a href={emailLink} className={`${linkStyle} w-full bg-white text-black border-white hover:bg-red-400 hover:border-red-400`}>Request a quote <ArrowUpRight className="w-4 h-4" /></a>
            </section>

            <section className="border border-white/15 p-6 sm:p-8" aria-labelledby="contact">
              <h2 id="contact" className="font-podium uppercase text-2xl mb-4">Let’s talk about your project.</h2>
              <a href={emailLink} className="flex items-center gap-2 text-sm text-white/80 hover:text-red-400 break-all"><Mail className="w-4 h-4 shrink-0" />inquire@vanguard.agency</a>
              <p className="text-sm text-white/50 mt-4 leading-relaxed">Include your goals, expected scope, budget, and preferred launch date to help us shape a proposal.</p>
              <Link to={`/inquire?project=${project.id}`} className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest border-b border-white/30 pb-2 hover:text-red-400">Open inquiry form <ArrowUpRight className="w-4 h-4" /></Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}

import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react'
import SplitText from '../components/SplitText'
import RevealSection from '../components/RevealSection'
import { projects } from '../data/projects'
import { projectBudgetBands, projectServices } from '../data/projectServices'

export default function Inquire() {
  const [searchParams] = useSearchParams()
  const selectedProject = projects.find((project) => project.id === searchParams.get('project'))
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedProject ? projectServices[selectedProject.id].inquiryType : 'Brand Identity & Visual System',
    budget: '$50,000 - $100,000',
    message: selectedProject ? `I'm interested in ${projectServices[selectedProject.id].name}, inspired by ${selectedProject.title}.\n\nMy goals: \nPreferred launch date: ` : '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full bg-black text-white pt-28 sm:pt-36 pb-24 lg:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold block mb-3">
            Start A Conversation
          </span>
          <SplitText
            text="Let's Talk."
            as="h1"
            className="font-podium text-white uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
          />
          <RevealSection delay={0.2}>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              We partner with an exclusive roster of visionary founders and enterprise leaders each quarter. Tell us about your challenge, ambition, and timeline.
            </p>
          </RevealSection>
        </div>

        {/* Two-Column Section */}
        <RevealSection className="border-t border-white/10 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 sm:p-12 border border-white/20 bg-neutral-950/80 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full border border-red-500/50 flex items-center justify-center text-red-400 mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-podium text-white text-3xl uppercase tracking-wide mb-3">
                    Transmission Received.
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
                    Thank you, {formData.name || 'Partner'}. A senior partner from our Los Angeles or London studio will review your project brief and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Brand Identity & Visual System',
                        budget: '$50,000 - $100,000',
                        message: '',
                      })
                    }}
                    className="border border-white/30 hover:border-white px-6 py-3 text-xs uppercase tracking-widest transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                      Your Name / Title *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Drake, Founder"
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
                    />
                  </div>

                  {/* Project Type & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                        Discipline
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/60 transition-colors cursor-pointer"
                      >
                        <option value="Brand Identity & Visual System">Brand Identity & Visual System</option>
                        <option value="Digital Flagship & Immersive 3D">Digital Flagship & Immersive 3D</option>
                        <option value="Motion Design & Brand Film">Motion Design & Brand Film</option>
                        <option value="Full Comprehensive Ecosystem">Full Comprehensive Ecosystem</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                        Anticipated Capital
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/60 transition-colors cursor-pointer"
                      >
                        {projectBudgetBands.map((band) => <option key={band} value={band}>{band}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                      Project Scope & Goals *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, target launch date, and desired outcome..."
                      className="w-full bg-neutral-950 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 border border-white/30 hover:border-white px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 shadow-xl"
                  >
                    <span className="font-semibold text-white">SUBMIT INQUIRY</span>
                    <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Info & Socials */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Direct Inquiries</span>
                  </h3>
                  <div className="space-y-1 text-sm font-inter">
                    <p className="text-white font-medium">
                      New Partnerships:{' '}
                      <a href="mailto:inquire@vanguard.agency" className="text-white/70 hover:text-white underline">
                        inquire@vanguard.agency
                      </a>
                    </p>
                    <p className="text-white/60">
                      Press & Media:{' '}
                      <a href="mailto:press@vanguard.agency" className="text-white/70 hover:text-white">
                        press@vanguard.agency
                      </a>
                    </p>
                    <p className="text-white/60">
                      Careers & Roster:{' '}
                      <a href="mailto:talent@vanguard.agency" className="text-white/70 hover:text-white">
                        talent@vanguard.agency
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-red-400/90 font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Studio Locations</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/70">
                    <div className="border border-white/10 p-4 bg-neutral-950">
                      <span className="text-white font-bold block mb-1">LOS ANGELES</span>
                      <span>840 N La Cienega Blvd</span>
                      <span className="block text-white/40 mt-1">West Hollywood, CA</span>
                    </div>
                    <div className="border border-white/10 p-4 bg-neutral-950">
                      <span className="text-white font-bold block mb-1">LONDON</span>
                      <span>14 Clerkenwell Close</span>
                      <span className="block text-white/40 mt-1">London, EC1R 0AA</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-red-500/60 pl-4 py-1">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>Response Standard</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Our leadership reviews every incoming proposal personally. Expect a response or discovery scheduler within 24 business hours.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-3 font-semibold">
                  Follow The Output
                </span>
                <div className="flex flex-wrap gap-4 text-xs text-white/70">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                    <span>Behance</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  )
}

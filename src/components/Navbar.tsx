import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const [showBackdrop, setShowBackdrop] = useState(pathname !== '/')

  useEffect(() => {
    const updateBackdrop = () => {
      setShowBackdrop(pathname !== '/' || window.scrollY >= window.innerHeight)
    }

    updateBackdrop()
    window.addEventListener('scroll', updateBackdrop, { passive: true })
    window.addEventListener('resize', updateBackdrop)
    return () => {
      window.removeEventListener('scroll', updateBackdrop)
      window.removeEventListener('resize', updateBackdrop)
    }
  }, [pathname])

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Studio', href: '/studio' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Inquire', href: '/inquire' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-10 isolate w-full px-6 sm:px-10 lg:px-16 py-5 lg:py-7 flex items-center justify-between transition-all duration-300 ${showBackdrop ? 'bg-gradient-to-b from-black/85 via-black/55 to-transparent backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'}`}>
        {/* Brand Name */}
        <Link
          to="/"
          className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider transition-opacity hover:opacity-90"
        >
          VANGUARD
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `font-inter text-sm tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-white font-medium' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/inquire"
            className="group inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10 backdrop-blur-xs"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Right Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Open mobile navigation menu"
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col items-end space-y-1.5 p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
        >
          <div className="w-6 h-0.5 bg-white transition-all" />
          <div className="w-6 h-0.5 bg-white transition-all" />
          <div className="w-4 h-0.5 bg-white transition-all" />
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
    </>
  )
}

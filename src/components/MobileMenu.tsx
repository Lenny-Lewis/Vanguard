import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
}

interface MobileMenuProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  navLinks: NavItem[]
}

export default function MobileMenu({ menuOpen, setMenuOpen, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between px-6 sm:px-10 py-5 transition-all duration-500 md:hidden ${
        menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* Mobile Header Row */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider"
        >
          VANGUARD
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="p-2 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Centered Mobile Nav Links */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 my-auto text-center">
        {navLinks.map((link, i) => (
          <NavLink
            key={link.name}
            to={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: `${menuOpen ? i * 80 + 100 : 0}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
            className={({ isActive }) =>
              `font-podium text-4xl sm:text-5xl uppercase tracking-wider transition-all duration-500 ${
                isActive ? 'text-white' : 'text-white/75 hover:text-white'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Staggered Get In Touch Button */}
        <div
          style={{
            transitionDelay: `${menuOpen ? navLinks.length * 80 + 100 : 0}ms`,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
          }}
          className="pt-6 transition-all duration-500"
        >
          <Link
            to="/inquire"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Footer Branding / Microcopy */}
      <div className="text-center text-white/40 text-[10px] tracking-widest uppercase pb-2">
        © {new Date().getFullYear()} VANGUARD • DEVELOPED BY{' '}
        <a
          href="https://lennoxlewis.cp.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-400 underline underline-offset-2 transition-colors"
        >
          LENNOX LEWIS
        </a>
      </div>
    </div>
  )
}

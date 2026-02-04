import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/websiteData'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
          {/* <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-700 to-teal-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div> */}
            <img 
              src="/logo.png" 
              alt="Suyog Dental Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain transform group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">Suyog Dental</h1>
              <p className="text-[10px] md:text-xs text-teal-700 font-semibold uppercase tracking-wider">Arnaha, Saptari</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors relative group ${
                  location.pathname === link.path ? 'text-teal-700' : 'text-gray-600 hover:text-teal-700'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-teal-700 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block w-full px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                location.pathname === link.path ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

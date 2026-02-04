import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { navLinks, contactInfo } from '../data/websiteData'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Suyog Dental Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Suyog Dental</h3>
                <p className="text-xs text-teal-500 font-bold tracking-widest">ARNAHA, SAPTARI</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excellence in dental care with a personal touch. We use the latest technology to ensure your smile remains bright and healthy.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-teal-700 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Contact Details</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-teal-500" />
                </div>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-teal-500" />
                </div>
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-teal-500" />
                </div>
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Operating Hours</h4>
            <div className="bg-gray-900/50 p-5 rounded-2xl border border-gray-800">
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">Sun - Fri:</span>
                  <span className="text-teal-400 font-bold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-gray-500">
                  <span>Saturday:</span>
                  <span className="bg-red-900/20 text-red-500 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Closed</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 italic">Emergency services available on call 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Suyog Dental Clinic. Proudly serving Saptari community.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

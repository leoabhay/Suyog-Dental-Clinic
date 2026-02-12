import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, Award, Users, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services, team } from '../data/websiteData'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-teal-800/90 to-cyan-800/80"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop" 
            alt="Clinic Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-bold mb-8">
                <Star className="w-4 h-4 fill-teal-300" />
                <span>Best Dental Care in Saptari</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Your Smile, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">Our Masterpiece.</span>
              </h1>
              <p className="text-xl text-teal-50/80 mb-10 max-w-xl leading-relaxed">
                Experience best dental treatments in a luxurious environment. We combine expertise with technology to give you the smile you deserve.
              </p>
              <div className="flex flex-wrap gap-6">

                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
                >
                  View Services
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-white">1000+</h4>
                  <p className="text-teal-300/80 text-sm font-bold uppercase tracking-widest">Patients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">6+</h4>
                  <p className="text-teal-300/80 text-sm font-bold uppercase tracking-widest">Years</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">100%</h4>
                  <p className="text-teal-300/80 text-sm font-bold uppercase tracking-widest">Satisfaction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* <div className="relative z-10 rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-44df03666245?q=80&w=800&h=1000&auto=format&fit=crop" 
                  alt="Our Expert Dentist" 
                  className="w-full object-cover"
                />
              </div> */}
              {/* Floating badges */}

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-teal-700 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Specialties</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Comprehensive Dental Care <br />
                <span className="text-gray-400">For Your Entire Family.</span>
              </h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-3 text-teal-700 font-black text-lg">
              Explore All Services
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 transform -rotate-3">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-teal-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Tech</h4>
                  <p className="text-gray-500 text-sm">Advanced tools for precision and comfort.</p>
                </div>
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 transform rotate-2">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-teal-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-500 text-sm">Highly qualified professionals at your service.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 transform rotate-3">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-teal-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Certified</h4>
                  <p className="text-gray-500 text-sm">Internationally recognized dental standards.</p>
                </div>
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 transform -rotate-2">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-teal-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Gentle Care</h4>
                  <p className="text-gray-500 text-sm">Painless procedures for a stress-free experience.</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading 
                centered={false}
                title="Redefining The Dental Experience."
                subtitle="We understand that visiting a dentist can be stressful. That's why we've designed our clinic to feel less like a hospital and more like a wellness retreat."
              />
              <ul className="space-y-6">
                {[
                  'Pain-free endodontic procedures',
                  'State-of-the-art sterilization unit',
                  'Digital smile design technology',
                  'Friendly and empathetic staff'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link to="/about" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teal-900 relative overflow-hidden">
        <div className="container-custom pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_white_0%,_transparent_10%)] bg-[length:50px_50px]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="bg-linear-to-r from-teal-600 to-teal-700 rounded-[4rem] p-12 md:p-20 text-center text-white shadow-[0_0_100px_rgba(13,148,136,0.3)] border border-white/10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Ready To Transform <br />
              <span className="text-teal-200">Your Smile?</span>
            </h2>
            <p className="text-xl text-teal-50/80 mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of happy patients who have discovered the confidence of a perfect smile at Suyog Dental Clinic.
            </p>
            <div className="flex flex-wrap justify-center gap-6">

              <a href="tel:+9779876543210" className="bg-teal-800/50 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-800 transition-all flex items-center gap-3 pointer-events-auto">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

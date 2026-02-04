import { motion } from 'framer-motion'
import { services } from '../data/websiteData'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'

export default function Services() {
  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Premium Dental Solutions."
            subtitle="We offer a wide range of specialized dental services using the latest technology and techniques to ensure the best results for our patients."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Pricing Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-gray-900 to-teal-900 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-black mb-6">Transparent Pricing, <br /><span className="text-teal-400">No Hidden Costs.</span></h3>
                <p className="text-teal-50/70 text-lg mb-8">We believe quality dental care should be accessible. We provide detailed estimates before every procedure so you can plan with peace of mind.</p>
                <div className="flex flex-wrap gap-4">
                  {/* <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/20 text-sm font-bold">Health Insurance Accepted</div> */}
                  <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/20 text-sm font-bold">Installment Plans (EMI)</div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem]">
                <ul className="space-y-6">
                  {[
                    { label: 'Consultation', price: 'Free' },
                    { label: 'Cleaning & Scaling', price: '₹499' },
                    { label: 'Root Canal (Laser)', price: '₹2499' },
                    { label: 'Dental Implants', price: 'Best in Market' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between items-baseline border-b border-white/10 pb-4">
                      <span className="text-lg font-bold">{item.label}</span>
                      <span className="text-teal-400 font-black">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

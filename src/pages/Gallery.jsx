import { motion } from 'framer-motion'
import { gallery } from '../data/websiteData'
import SectionHeading from '../components/SectionHeading'

export default function Gallery() {
  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Inside Suyog Dental."
            subtitle="Take a virtual tour of our clinic and see the modern facilities and patient-friendly environment we've created for your comfort."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-xl group cursor-zoom-in aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Clinic Interior ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-bold">Facility {idx + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function TeamMember({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white transition-all transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-teal-700 transition-colors" />
                </button>
              ))}
            </div>
          </div> */}
        </div>
        <div className="p-8 text-center relative z-10 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{member.name}</h3>
          <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">{member.title}</p>
          <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
          <p className="text-gray-500 text-sm italic">{member.specialty}</p>
        </div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'

export default function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
            <Icon className="w-7 h-7 text-teal-700" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {service.description}
        </p>
        <button className="mt-6 text-teal-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
          Learn More 
          <span className="text-lg">→</span>
        </button>
      </div>
    </motion.div>
  )
}

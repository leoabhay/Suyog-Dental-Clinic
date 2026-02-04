import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {title}
        </h2>
        <div className={`w-24 h-2 bg-gradient-to-r from-teal-700 to-cyan-500 mb-8 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
        {subtitle && (
          <p className={`text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  )
}

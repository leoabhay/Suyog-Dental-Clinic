import { motion } from 'framer-motion'
import { Award, ShieldCheck, Sparkles, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "We treat every patient like family, ensuring a comfortable and anxiety-free experience."
    },
    {
      icon: Sparkles,
      title: "Modern Innovations",
      desc: "Using state-of-the-art equipment and digital dentistry for precise treatments."
    },
    {
      icon: ShieldCheck,
      title: "Safety & Hygiene",
      desc: "Following international sterilization protocols to ensure the highest safety standards."
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Committed to delivering the best dental outcomes through continuous learning."
    }
  ]

  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="About Us"
            subtitle="Suyog Dental Clinic was founded with a single mission: to provide high-quality, affordable, and painless dental care to the community of Saptari."
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop" 
                  alt="Our Clinic" 
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-teal-700 text-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                <p className="text-5xl font-black mb-2">6+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-teal-200">Years of Experience</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h3 className="text-3xl font-black text-gray-900 leading-tight">Our Story & Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Since our inception, Suyog Dental Clinic has been at the forefront of dental healthcare in Nepal. We started as a small clinic in Arnaha and have grown into a multi-specialty center trusted by thousands.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our vision is to eliminate the fear associated with dental procedures and make dental hygiene a part of everyone's daily life. We believe that a healthy smile is the foundation of overall wellbeing.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-teal-50 rounded-3xl border border-teal-100">
                  <h4 className="text-2xl font-black text-teal-900 mb-2">1000+</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase">Happy Smiles</p>
                </div>
                <div className="p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                  <h4 className="text-2xl font-black text-cyan-900 mb-2">24/7</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white rounded-[3rem] shadow-xl border border-gray-100 hover:border-teal-200 transition-all hover:shadow-2xl group"
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-700 transition-colors">
                    <Icon className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { contactInfo } from '../data/websiteData'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const contactDetails = [
    { icon: MapPin, title: "Our Location", data: contactInfo.address },
    { icon: Phone, title: "Phone Number", data: contactInfo.phone },
    { icon: Mail, title: "Email Address", data: contactInfo.email },
    { icon: Clock, title: "Working Hours", data: contactInfo.openingHours }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/abhaycdry10@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Get In Touch."
            subtitle="Have a question or want to get in touch? We're here to help. Reach out to us through any of the channels below."
          />

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle className="w-12 h-12 text-teal-700" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-500 text-lg mb-8 max-w-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-teal-700 font-black hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_subject" value="New Contact Form Submission - Suyog Dental" />
                      <input type="hidden" name="_template" value="table" />
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                          <input
                            required
                            name="name"
                            type="text"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-teal-700 outline-none transition-all placeholder:text-gray-300"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Phone Number</label>
                          <input
                            required
                            name="phone"
                            type="tel"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-teal-700 outline-none transition-all placeholder:text-gray-300"
                            placeholder="+977 98..."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Service Interested</label>
                        <select name="service" className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-teal-700 outline-none transition-all text-gray-600">
                          <option>General Checkup</option>
                          <option>Teeth Whitening</option>
                          <option>Root Canal Treatment</option>
                          <option>Dental Implants</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Your Message</label>
                        <textarea
                          required
                          name="message"
                          rows="4"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-teal-700 outline-none transition-all resize-none placeholder:text-gray-300"
                          placeholder="Tell us about your concern..."
                        ></textarea>
                      </div>
                      <button
                        disabled={status === 'loading'}
                        type="submit"
                        className="w-full bg-teal-700 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-teal-800 transition-all shadow-xl shadow-teal-700/30 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-6 h-6" />
                          </>
                        )}
                      </button>
                      {status === 'error' && (
                        <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {contactDetails.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-5"
                    >
                      <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-teal-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.data}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[3rem] overflow-hidden shadow-2xl h-96 border-8 border-slate-50 relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28420.547934467743!2d86.77!3d26.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec589c3d8b3f5b%3A0x8b3f5b3f5b3f5b3f!2sArnaha%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suyog Dental Clinic Location"
                ></iframe>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-teal-700 font-bold uppercase tracking-widest">Clinic Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-sm font-black text-gray-900">Open Now — Closing at 6 PM</p>
                    </div>
                  </div>
                  <button className="bg-teal-700 text-white p-3 rounded-full hover:bg-teal-800 transition-all">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

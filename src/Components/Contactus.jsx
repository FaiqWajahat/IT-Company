'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactMethod: 'whatsapp'
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Please enter a valid email address' : ''
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Real-time validation
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'contactMethod') {
        const error = validateField(key, formData[key])
        if (error) newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
          contactMethod: 'whatsapp'
        })
        setSubmitStatus(null)
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@company.com",
      description: "Drop us a line anytime!"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Business St, Suite 100",
      description: "New York, NY 10001"
    }
  ]



  return (
    <>
      <div className='w-full px-4 sm:px-6 lg:px-10 py-10 bg-white min-h-screen'>
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {["Let's", "Connect"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="inline-block mr-4 bg-black bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg origin-center mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond within 24 hours.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Contact Form - Left Side */}
          <div className='lg:col-span-2 '>
            <motion.div 
              className='rounded-3xl bg-white/40 backdrop-blur-sm shadow-2xl border border-white/20 p-8 lg:p-10'
              whileHover={{ y: -2, transition: { duration: 0.3 } }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text ">
                  Send us a message
                </h3>
                <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Method Selection */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                      { value: 'email', label: 'Email', icon: Mail }
                    ].map((method) => (
                      <motion.button
                        key={method.value}
                        type="button"
                        onClick={() => setFormData({...formData, contactMethod: method.value})}
                        className={`flex-1 p-3 rounded-lg border-2 transition-all duration-200 ${
                          formData.contactMethod === method.value 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <method.icon size={16} />
                          {method.label}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Enter your email"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white ${
                      errors.subject ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="What's this about?"
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus:ring-4 focus:ring-blue-300'
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        Failed to send message. Please try again.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Contact Info - Right Side */}
          <div className='lg:col-span-1'>
            <motion.div 
              className='rounded-3xl bg-blue-700 shadow-2xl text-white p-6 relative overflow-hidden h-full'
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                  <Image 
                    src={"/getInTouch.jpg"} 
                    alt='Contact us' 
                    height={350} 
                    width={400} 
                    className='w-full h-64 lg:h-90 object-cover rounded-2xl shadow-lg'
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-4 mb-4">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={info.title}
                      className="flex items-start space-x-4 rounded-xl bg-white/10 backdrop-blur-sm p-2 border border-white/20"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{info.title}</h4>
                        <p className="text-blue-100 text-sm font-medium">{info.value}</p>
                      
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contactus
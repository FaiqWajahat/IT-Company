'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, MessageCircle, ChevronDown, Check } from 'lucide-react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading'
import { useRouter } from 'next/navigation'

const Contactus = () => {
  
  const Route=useRouter()

  const SERVICE_ID = 'service_dbzbiev'
  const TEMPLATE_ID = 'template_1c5bsmg'
  const PUBLIC_KEY = 'orBqo6XBefuVDVTrd'
  
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'whatsapp'
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubjectOpen, setIsSubjectOpen] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const services = [
    'Web Development',
    'App Development',
    'E-commerce Solution',
    'Graphic Design',
    'UI/UX Design',
    'Logo Design'
  ]

  const validateField = (name, value, currentContactMethod) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (currentContactMethod === 'email') {
          if (!value.trim()) return 'Email is required'
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return !emailRegex.test(value) ? 'Please enter a valid email address' : ''
        }
        return ''
      case 'phone':
        if (currentContactMethod === 'whatsapp') {
          if (!value.trim()) return 'Phone number is required'
          const phoneRegex = /^\+?[0-9]{10,15}$/
          return !phoneRegex.test(value.replace(/[\s-]/g, '')) ? 'Please enter a valid phone number (10-15 digits)' : ''
        }
        return ''
      case 'subject':
        return !value ? 'Please select a subject' : ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      const error = validateField(name, value, formData.contactMethod)
      setErrors({ ...errors, [name]: error })
    }
    
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleContactMethodChange = (method) => {
    setFormData({ ...formData, contactMethod: method })
    // Clear all validation errors when switching method
    setErrors({})
    setSubmitStatus(null)
  }

  const handleSubjectSelect = (value) => {
    setFormData({ ...formData, subject: value })
    setIsSubjectOpen(false)
    if (errors.subject) {
      setErrors({ ...errors, subject: '' })
    }
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const validateAllFields = () => {
    const newErrors = {}
    const fieldsToValidate = ['name', 'subject', 'message']
    
    // Add email or phone based on contact method
    if (formData.contactMethod === 'whatsapp') {
      fieldsToValidate.push('phone')
    } else {
      fieldsToValidate.push('email')
    }
    
    fieldsToValidate.forEach(key => {
      const error = validateField(key, formData[key], formData.contactMethod)
      if (error) newErrors[key] = error
    })

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = validateAllFields()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrors({})

    try {
      // Create template params object matching your EmailJS template
      const templateParams = {
        name: formData.name.trim(),
        email: formData.contactMethod === 'email' ? formData.email.trim() : 'N/A',
        phone: formData.contactMethod === 'whatsapp' ? formData.phone.trim() : 'N/A',
        subject: formData.subject,
        message: formData.message.trim(),
        
      }
      
   
      
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      
      
      
      if (result.status === 200) {
        setSubmitStatus('success')
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactMethod: 'whatsapp'
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)

      Route.push("/confirmation")
      } else {
        throw new Error('Failed to send email')
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      console.error('Error details:', error?.text || error?.message)
      setSubmitStatus('error')
      
      // Clear error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "inf@pixvion.com" },
    { icon: Phone, title: "Phone", value: "(+92) 327-9008806" },
    { icon: MapPin, title: "Office", value: "Defence Road, Sialkot, pakistan" }
  ]

  return (
    <div className='w-full px-4 sm:px-6 lg:px-10 py-10'>
      <SectionHeading
        first={"Let's Build"}
        second={"Something Great"}
        paragraph={"Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond within 24 hours."}
      />

      <motion.div
        className='grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <form ref={formRef} onSubmit={handleSubmit} className='lg:col-span-2'>
          <motion.div
            className='rounded-lg bg-white p-4 md:p-8 lg:p-10 shadow-xl'
            whileHover={{ y: -2, transition: { duration: 0.3 } }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Send us a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">message</span>
              </h3>
              <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <div className="space-y-6">
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
                      onClick={() => handleContactMethodChange(method.value)}
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

              {/* Name and Email/Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 rounded-lg border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white focus:outline-none ${
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

                <AnimatePresence mode="wait">
                  {formData.contactMethod === 'email' ? (
                    <motion.div
                      key="email-field"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 rounded-lg border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white focus:outline-none ${
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
                  ) : (
                    <motion.div
                      key="phone-field"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 rounded-lg border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white focus:outline-none ${
                          errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                        }`}
                        placeholder="+1234567890"
                      />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle size={14} />
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Subject Dropdown */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>

                <button
                  type="button"
                  onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                  className={`
                    w-full border-2 rounded-lg px-4 py-3.5 text-left
                     transition-all duration-200 
                    bg-gray-50/50 hover:bg-white hover:border-blue-600 focus:outline-none
                    ${isSubjectOpen ? 'ring-1 ring-blue-500 border-blue-500 bg-white' : 'border-gray-300'}
                    ${errors.subject ? 'border-red-400 ring-2 ring-red-100' : ''}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className={formData.subject ? 'text-gray-900 ' : 'text-gray-500'}>
                      {formData.subject || 'Select a service'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        isSubjectOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isSubjectOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                    >
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleSubjectSelect(service)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 
                                   border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
                        >
                          <span className="text-gray-900 group-hover:text-blue-700 font-semibold">
                            {service}
                          </span>
                          {formData.subject === service && (
                            <Check className="w-4 h-4 text-blue-600" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

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

              {/* Message Textarea */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-lg border-2 transition-all duration-200 bg-gray-50/50 focus:bg-white resize-none focus:outline-none ${
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

              {/* Submit Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus:ring-4 focus:ring-blue-300'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                      Failed to send message. Please check your EmailJS configuration and try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </form>

        {/* Contact Info Sidebar */}
        <div className='lg:col-span-1'>
          <motion.div 
            className='rounded-lg bg-blue-700 shadow-2xl text-white p-5 relative overflow-hidden h-full'
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-4">
                <Image
                  src="/getInTouch.jpg"
                  alt="Contact us"
                  height={340}
                  width={400}
                  className="w-full h-76 lg:h-100 object-cover rounded-lg shadow-lg"
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
                    className="flex items-start space-x-4 rounded-lg bg-white/10 backdrop-blur-sm p-2 border border-white/20"
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
  )
}

export default Contactus
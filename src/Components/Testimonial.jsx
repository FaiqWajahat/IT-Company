'use client'
import React from 'react'
import { CardSwipe } from './ui/card-swipe'
import { motion } from 'framer-motion'

const Testimonial = () => {
   const images = [
    { src: "/testimonial-01.png", alt: "Image 1" },
    { src: "/testimonial-01.png", alt: "Image 2" },
    { src: "/testimonial-01.png", alt: "Image 3" },
  ]
 
  return (
    <div className='w- full py-16'>
       {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {["Trusted", "By","Thousands"].map((word, index) => (
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
          Our clients are at the heart of everything we do. Here’s what they have to say about their experiences with us.
          </motion.p>
        </motion.div>

<div className="w-full">
      <CardSwipe images={images} autoplayDelay={4000} slideShadows={false} />
    </div>
    </div>
  )
}

export default Testimonial
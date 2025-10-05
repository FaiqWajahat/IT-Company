'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({first, second , paragraph ,color}) => {
  return (
     <motion.div
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={`text-4xl md:text-6xl font-extrabold ${ color==="white" ? "text-white":"text-gray-900"} mb-4 tracking-tight`}>
          {first} <span className="text-blue-700 block md:inline-block">{second}</span>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 w-44 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-lg mb-6"
        />

        <p className={`${color==="white"? "text-gray-400 ": "text-gray-600"} text-lg lg:text-xl max-w-2xl px-4 mx-auto leading-relaxed`}>
          {paragraph}
        </p>
      </motion.div>
  )
}

export default SectionHeading
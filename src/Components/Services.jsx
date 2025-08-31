"use client";

import { motion } from "framer-motion";
import ServicesLayout from "./ServicesCrousel";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Services() {
  return (
    <div className="w-full py-16">
      {/* Title */}
     {/* Animated Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                {["What", "We","Offer"].map((word, index) => (
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
              We empower your vision with a suite of bespoke solutions, meticulously crafted to elevate your business and exceed your expectations.
              </motion.p>
            </motion.div>

      {/* Carousel with animation wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <motion.div variants={fadeUp}>
          <ServicesLayout />
        </motion.div>
      </motion.div>
    </div>
  );
}

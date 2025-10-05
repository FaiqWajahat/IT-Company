"use client";

import { motion } from "framer-motion";
import ServicesLayout from "./ServicesCrousel";
import SectionHeading from "./SectionHeading";

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
    <div className="w-full px-4 sm:px-8 py-16 sm:py-20 mx-auto ">
    <SectionHeading 
    first={"What"} 
    second={"We offer"} 
    paragraph={"We provide expert solutions in web development, e-commerce, and graphic design—helping your business stand out with modern, creative, and reliable digital experiences."} 
/>

      
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

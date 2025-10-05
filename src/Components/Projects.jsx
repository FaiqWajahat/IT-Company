'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useRouter } from 'next/navigation';


const Projects = () => {
  const projects = [
  {
      title: "Aakash Life",
      description:
        "A wellness and beauty e-commerce platform offering skincare, nutrition, and wellness products from premium brands. Built with Next.js, it delivers a fast and engaging shopping experience.",
      category: "E-commerce App",
      imageUrl: "https://images.pexels.com/photos/3585000/pexels-photo-3585000.jpeg",
      link: "https://aakashlife.com",
    },
   
    {
      title: "Trello",
      description:
        "A project management tool that utilizes Next.js for its marketing site, ensuring fast load times and smooth user experience.",
      category: "Business Website",
      imageUrl: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      link: "https://trello.com",
    },
    
  
    {
      title: "Rumusha Clothing Store",
      description:
        "A Japanese clothing e-commerce website built with Next.js for the front-end and Shopify for the back-end, offering a seamless shopping experience.",
      category: "E-commerce App",
      imageUrl: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg",
      link: "https://clothing-store.rashidshamloo.com",
    },
  ]

  const Route= useRouter()

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8">
      <SectionHeading
        first="Built"
        second="With Passion"
        paragraph="A selection of our recent work across different services."
      />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => window.open(project.link, "_blank")}

            className="group bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                <span>Project</span>
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <motion.a
         onClick={()=>(Route.push("/projects"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Explore All Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Projects;
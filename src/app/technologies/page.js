"use client";

import { motion } from "framer-motion";
import {  ShieldCheck, Zap, Layers } from "lucide-react";
import {
  Globe,
  Database,
  Smartphone,
  FileImage,
 
  
} from "lucide-react";




import Lottie from "lottie-react";
import SectionHeading from "@/Components/SectionHeading";
import techAnimation from "@/Assets/technology.json"; // replace with your lottie
import { useState } from "react";
import Image from "next/image";

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState("website")

  const categories = [
  {
    id: 'website',
    name: 'Website Development',
    icon: Globe, // Represents Frontend, Backend, and Cloud/DevOps
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Full-stack development, scalable web applications, and cloud infrastructure.'
  },
  {
    id: 'mobile_app',
    name: 'Mobile App Development',
    icon: Smartphone, // Icon for mobile devices
    color: 'text-purple-600', 
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Cross-platform app development for native iOS and Android experiences.'
  },
  {
    id: 'graphic_design',
    name: 'Graphic Design',
    icon: FileImage,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Creation of visual assets, branding, and professional digital imagery.'
  }
];

// ----------------------------------------------------------------------

const technologies = {
  website: [

  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  
 
  ],
 
  mobile_app: [
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },

    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' }
  ],

 
  graphic_design: [
    { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
   
  
  ]

};
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f] text-white py-20 px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl pt-4 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Trusted Content <span className="text-blue-500 block">Modern Tools</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, secure, and
            visually stunning digital experiences.
          </p>
          <motion.a
            href="/contact"
            className="mt-6 sm:mt-8 inline-block bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

<section className="px-4 sm:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
        <SectionHeading
          first="Cutting Edge"
          second="Technologies"
         
          paragraph="We carefully select technologies that help us create secure, scalable, and future-ready applications."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                From powerful frontend frameworks like React.js and Next.js to robust backend systems such as Node.js and Express, we build applications with reliability and scalability at their core.
              </p>
              
              <p className="text-base sm:text-lg lg:text-start text-center text-gray-500 leading-relaxed">
                Our technology stack covers web and mobile development, secure e-commerce platforms, modern databases, cloud solutions, and AI integration. For design, we leverage industry-leading tools like Figma, Adobe XD, Illustrator, and Photoshop to deliver creative and user-focused graphic solutions that bring brands to life.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { text: "Modern & scalable frontend tools", icon: Globe, color: "text-blue-700" },
                { text: "High-performance backend systems", icon: Database, color: "text-blue-700" },
                { text: "Secure and optimized databases", icon: Layers, color: "text-blue-700"},
                { text: "Creative Digital Assets", icon: Smartphone, color: "text-blue-700" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium pt-1">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

       <motion.div
         initial={{ x: 50, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="flex justify-center order-1 lg:order-2"
       >
         <motion.div
           animate={{ y: [0, -15, 0] }}
           transition={{ 
             duration: 3, 
             repeat: Infinity, 
             ease: "easeInOut",
             repeatType: "loop"
           }}
           className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg"
         >
         <Lottie
           animationData={techAnimation}
           loop
           className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg h-auto"
         />
       </motion.div>
       </motion.div>
        </div>
      </section>

  {/* Technology Categories */}
<section className="px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f] max-w-7xl">
  <SectionHeading
    first="Our"
    second="Technology Stack"
     color={'white'}
    paragraph="From modern frameworks to design platforms, here's what powers our core services."
  />

  <motion.div
    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  justify-center gap-3 mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {categories.map((category) => {
      const Icon = category.icon
      const isActive = activeCategory === category.id
      return (
        <motion.button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`group relative flex items-center gap-3 px-6 py-3.5 rounded-xl border transition-all duration-300 ${
            isActive
              ? 'bg-white/10 border-white/20 text-white '
              : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/15 hover:text-gray-300'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon className={`w-12 h-12 transition-all duration-300 ${
            isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-400'
          }`} />
          <div className="text-left">
            <div className="font-medium text-sm">{category.name}</div>
            <div className="text-xs opacity-70">{category.description}</div>
          </div>
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 border border-blue-600 rounded-lg"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      )
    })}
  </motion.div>

  {/* Technologies Grid */}
  <motion.div
    key={activeCategory}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-4  mx-auto"
  >
    {technologies[activeCategory]?.map((tech, index) => (
      <motion.div
        key={tech.name}
        variants={itemVariants}
        className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-600 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
      
        
        {/* Logo */}
        <div className="relative flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={10}
              height={10}
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tech.name)}&background=3B82F6&color=fff&size=40`;
              }}
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="relative text-base font-semibold text-gray-200 text-center group-hover:text-white transition-colors duration-300">
          {tech.name}
        </h3>
        
       
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* Why Our Tech Stack */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto">
        <SectionHeading
          first="Why"
          second="Our Stack"
          paragraph="Our choice of technology ensures long-term success for your business."
        />

         <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {[
            {
              title: "Performance & Speed",
              desc: "Optimized frameworks ensure your website and apps load quickly and deliver smooth experiences.",
              icon: Zap,
              color: "text-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
            },
            {
              title: "Scalability & Security",
              desc: "Our tech stack is designed for growth, handling increased traffic while ensuring top security.",
              icon: ShieldCheck,
              color: "text-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
            },
            {
              title: "Creativity & Innovation",
              desc: "We balance creativity with technology to deliver visually stunning, functional, and future-ready solutions.",
              icon: Layers,
              color: "text-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-xl border ${item.borderColor} p-8 text-center transition-all duration-300`}
            >
              <div className={`inline-flex p-4 ${item.bgColor} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

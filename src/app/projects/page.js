"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Palette, Smartphone, BarChart3, Search, ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import projectAnimation from "@/Assets/hero.json"; // Replace with your own Lottie
import { useState } from "react";
import SectionHeading from "@/Components/SectionHeading";
import {  Code, ShoppingBag, PenTool, PhoneCall } from "lucide-react";
import Link from "next/link";


export default function ProjectPage() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do you manage project timelines?", a: "We follow a structured workflow with clear milestones and regular updates to ensure timely delivery." },
    { q: "Can I request custom features for a project?", a: "Absolutely! We can incorporate custom features based on your requirements and goals." },
    { q: "Do you provide post-launch support?", a: "Yes, we offer ongoing maintenance, updates, and optimizations after project delivery." },
  ];

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
      title: "Smash.gg",
      description:
        "An event management platform for esports tournaments, using Next.js to handle high traffic and ensure real-time updates during live events.",
      category: "Business Website",
      imageUrl: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
      link: "https://smash.gg",
    },
    {
      title: "Loom",
      description:
        "A video messaging tool that uses Next.js to provide a fast, responsive experience across devices.",
      category: "Business Website",
      imageUrl: "https://images.pexels.com/photos/7439124/pexels-photo-7439124.jpeg",
      link: "https://www.loom.com",
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
      title: "Ticketmaster",
      description:
        "A ticket sales platform for concerts and events, employing Next.js to handle high traffic and provide real-time event updates.",
      category: "E-commerce App",
      imageUrl: "https://images.pexels.com/photos/3826581/pexels-photo-3826581.jpeg",
      link: "https://www.ticketmaster.com",
    },
    {
      title: "Rumusha Clothing Store",
      description:
        "A Japanese clothing e-commerce website built with Next.js for the front-end and Shopify for the back-end, offering a seamless shopping experience.",
      category: "E-commerce App",
      imageUrl: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg",
      link: "https://clothing-store.rashidshamloo.com",
    },
  ];

  

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
            Explore Our Some <span className="text-blue-500 block"> Amazing Projects</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Discover the innovative projects we've delivered across Website Development, E-commerce Apps, and Graphic Design.
          </p>
          <motion.a
            href="/contact"
            className="mt-6 sm:mt-8 inline-block bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </section>

     {/* Projects Section */}
<section className="px-4 sm:px-8 py-16 sm:py-20  mx-auto">
  <SectionHeading
    first="Why Our"
    second="Projects"
    paragraph="Each project we take on combines innovation, performance, and user-first design."
  />

  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
    {/* Text Section */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-2 lg:order-1"
    >
      <div className="space-y-6">
        <p className="text-lg sm:text-xl text-center lg:text-start text-gray-600 leading-relaxed">
          Our projects demonstrate expertise in web development, UI/UX design, 
          and technical solutions that drive business success. Every solution 
          we deliver blends creativity with performance to help businesses grow. 
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
        {[
          { text: "Custom solutions tailored to needs", icon: Palette, color: "text-blue-700" },
          { text: "Responsive across all devices", icon: Smartphone, color: "text-blue-700" },
          { text: "Data-driven insights & analytics", icon: BarChart3, color: "text-blue-700" },
          { text: "SEO & performance optimized", icon: Search, color: "text-blue-700" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 
                       hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
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

    {/* Animation Section */}
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
       animationData={projectAnimation}
       loop
       className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg h-auto"
     />
   </motion.div>
   </motion.div>
  </div>
</section>


      {/* Project Showcase */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <SectionHeading
          first=" Explore Our"
          second="Projects"
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
        
             
      </section>
      

     
 

    <section className="relative overflow-hidden py-20 sm:py-24 px-6 sm:px-10 text-white text-center bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f]">
      
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <SectionHeading
          first="Ready To Start"
          second="Your Project"
          color="white"
          paragraph="Whether it’s a modern website, a powerful e-commerce platform, or a creative design solution, we’re here to make your vision a reality."
        />
      </motion.div>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
          <Code className="mx-auto w-10 h-10 text-blue-400 mb-4" />
          <h4 className="text-lg font-semibold">Website Development</h4>
          <p className="text-sm text-blue-100/80 mt-2">
            Custom websites built with the latest technologies for performance and scalability.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
          <ShoppingBag className="mx-auto w-10 h-10 text-blue-400 mb-4" />
          <h4 className="text-lg font-semibold">E-Commerce Solutions</h4>
          <p className="text-sm text-blue-100/80 mt-2">
            Powerful online stores with secure payments, inventory management, and smooth UX.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
          <PenTool className="mx-auto w-10 h-10 text-blue-400 mb-4" />
          <h4 className="text-lg font-semibold">Creative Design</h4>
          <p className="text-sm text-blue-100/80 mt-2">
            Modern, visually stunning designs that make your brand stand out from the crowd.
          </p>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {/* Primary CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Secondary CTA */}
        <a
          href="tel:+923146997979"
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 font-medium px-8 py-4 rounded-2xl hover:bg-white/20 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Schedule a Call
        </a>
      </motion.div>
    </section>


      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <SectionHeading
          first="Project"
          second="FAQs"
          paragraph="Common questions about our project execution and workflow."
        />
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === i ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm sm:text-base leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, ShoppingBag, MessageSquare, Dumbbell, Plane, BarChart } from 'lucide-react'

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardVideo,
  MinimalCardTitle,
} from "./ui/minimal-card"

const Projects = () => {
  const cards = [
    {
      title: "Smart Healthcare System",
      description:
        "An AI-powered healthcare management platform featuring real-time patient monitoring, predictive analytics for early disease detection, and seamless integration with IoT medical devices. Built with MERN stack and TensorFlow models.",
      src: "https://www.pexels.com/download/video/7308093.mp4",
      icon: Cpu,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A scalable and secure MERN stack-based e-commerce solution with integrated payment gateways, inventory tracking, role-based admin panels, and AI-driven product recommendations to enhance user experience.",
      src: "https://www.pexels.com/download/video/7191512.mp4",
      icon: ShoppingBag,
    },
    {
      title: "AI Chatbot Solution",
      description:
        "Conversational AI chatbot using NLP and machine learning to automate customer support, reduce response time, and provide multilingual support across multiple platforms including web and WhatsApp.",
      src: "https://www.pexels.com/download/video/8937989.mp4",
      icon: MessageSquare,
    },
    {
      title: "Gym Management System",
      description:
        "A complete gym management solution featuring membership tracking, attendance monitoring, AI-powered diet & workout recommendations, and an online course-selling module with integrated Stripe payments.",
      src: "https://www.pexels.com/download/video/6994866.mp4",
      icon: Dumbbell,
    },
    {
      title: "Travel Booking Platform",
      description:
        "A modern travel booking application with interactive maps, real-time flight & hotel availability, secure payment options, and AI-driven personalized travel recommendations for users.",
      src: "https://www.pexels.com/download/video/8523642.mp4",
      icon: Plane,
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "An advanced financial analytics dashboard with data visualization, portfolio tracking, stock predictions using machine learning models, and secure role-based access for businesses.",
      src: "https://www.pexels.com/download/video/8937990.mp4",
      icon: BarChart,
    },
  ];

  return (
    <div className="w-full py-16 bg-white overflow-hidden mt-10 px-6 md:px-16">
      {/* Title */}
 <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                {["Recent", "Projects",].map((word, index) => (
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
                className="h-1 w-32 mx-auto bg-blue-600 rounded-full shadow-lg origin-center mb-6"
              />
    
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                From concept to completion, we bring your ideas to life. Here's a glimpse into the projects that define our expertise and dedication.
               </motion.p>
            </motion.div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Video */}
              <MinimalCardVideo
                className="h-[220px] w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                src={card.src}
                alt={card.title}
              />

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <MinimalCardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </MinimalCardTitle>
                </div>

                {/* Description */}
                <MinimalCardDescription className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </MinimalCardDescription>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
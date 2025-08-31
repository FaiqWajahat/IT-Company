'use client'
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import MaskedDiv from "../Components/ui/masked-div";
import { Users, Briefcase, Award } from "lucide-react";
const About = () => {

  const stats = [
    {
      id: 1,
      label: "Projects",
      value: 250,
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      delay: 0.3,
    },
    {
      id: 2,
      label: "Customers",
      value: 120,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      delay: 0.4,
    },
    {
      id: 3,
      label: "Years Experience",
      value: 10,
      icon: <Award className="w-6 h-6 text-blue-500" />,
      delay: 0.5,
    },
  ];
  return (
    <div className="w-full py-16 mt-10 bg-white overflow-hidden">
 {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {["Who", "We","Are"].map((word, index) => (
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
           We are a collective of dreamers, builders, and innovators, united by a passion for transforming ideas into reality.
          </motion.p>
        </motion.div>


      {/* Main Layout */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 px-6 md:px-12">

        {/* Left Column - Video */}
        <motion.div
          className="flex-1 max-w-full md:max-w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <MaskedDiv maskType="type-1" size={0.8} className="w-full h-auto">
            <motion.video
              className="cursor-pointer transition-all duration-300 hover:scale-105 rounded-3xl shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
              aria-label="A video showcasing the collaborative work environment at PIXVION"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <source
                src="https://www.pexels.com/download/video/5971795.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
          </MaskedDiv>
        </motion.div>

        {/* Right Column - Text + Stats */}
        <motion.div
          className="flex-1 max-w-full md:max-w-[50%] px-4 py-8 md:py-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full flex flex-col justify-center">
            {/* Paragraph */}
            <motion.p
              className="text-lg md:text-xl text-gray-900 mt-5 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              At <span className="font-semibold text-blue-700">PIXVION</span>, we believe technology should empower 
              businesses, not complicate them. From startups to enterprises, we partner with organizations 
              worldwide to design, develop, and scale solutions that are seamless, intuitive, and impactful. 
              Our mission is to unlock growth, streamline processes, and turn bold ideas into digital success stories.
            </motion.p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="flex flex-col items-center justify-center bg-blue-600 rounded-2xl shadow-md hover:shadow-xl py-4 px-2 transition-transform hover:scale-105 border border-gray-100"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: stat.delay }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
            {stat.icon}
          </div>

          {/* Value */}
          <span className="text-3xl font-extrabold text-white">
            <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />+
          </span>

          {/* Label */}
          <p className="mt-2 text-white/80 text-lg font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


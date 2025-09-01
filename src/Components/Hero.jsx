"use client";
import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../public/hero.json";

// Optimized Particles component - Much lighter
const Particles = () => {
  // Reduced particle count for better performance
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/40 rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Simplified connecting lines */}
      {lines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          style={{
            width: '150px',
            left: `${line.x}%`,
            top: `${line.y}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Static background glow - no animation for performance */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-lg"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-20 overflow-hidden pt-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f]">
      
      {/* Optimized Particles Background */}
      <Particles />
      
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center lg:text-left relative z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Where Ideas Meet{" "}
          <span className="text-blue-500">
            <Typewriter
              words={["Innovation", "Technology", "Excellence", "Future"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          From strategy to execution,{" "}
          <span className="text-blue-400 font-semibold">Pixvion</span>{" "}
          delivers smart, scalable, and future-ready IT solutions that empower
          businesses worldwide.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex items-center justify-center lg:justify-start gap-6 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition relative z-30"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 text-blue-400 font-medium rounded-xl shadow-md hover:bg-white/20 transition border border-blue-400/50 relative z-30"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="flex-1 flex items-center justify-center mt-10 lg:mt-0 relative z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full max-w-lg h-[350px] md:h-[450px] lg:h-[500px]"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
"use client";
import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../../public/hero.json";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the slim version for better performance
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#ffffff", "#3b82f6", "#06b6d4", "#f59e0b"],
      },
      links: {
        color: "#3b82f6",
        distance: 120,
        enable: true,
        opacity: 0.1,
        width: 0.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: { min: 0.3, max: 1 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shadow: {
        enable: true,
        color: "#3b82f6",
        blur: 5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.5,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-20 overflow-hidden pt-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f] isolate">
      
      {/* React TSParticles Background - Strictly contained within hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles
          id="hero-particles"
          init={particlesInit}
          options={particlesOptions}
          className="w-full h-full pointer-events-none"
        />
      </div>
      
      {/* Decorative background glow */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div> */}

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
          <span className="text-blue-400 font-semibold">Pixvision</span>{" "}
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
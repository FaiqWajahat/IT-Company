"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Code,
  Database,
  Cloud,
  Bell,
  UploadCloud,
  ChevronDown,
} from "lucide-react";
import Lottie from "lottie-react";
import appAnimation from "@/Assets/app.json";
import SectionHeading from "@/Components/SectionHeading";
import { useRouter } from "next/navigation";

export default function AppDevelopmentService() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does it take to build a mobile app?",
      a: "Typical timelines are 1-3 weeks for an MVP and 1+ months for a full-featured app, depending on complexity.",
    },
    {
      q: "Which platforms do you build for?",
      a: "We build native and cross-platform apps (iOS, Android) using React Native, Flutter, and native toolchains when required.",
    },
    {
      q: "Do you handle backend and APIs?",
      a: "Yes — we design scalable backends, REST/GraphQL APIs, real-time services, and manage hosting/CI.",
    },
  ];

 const route=useRouter()

  return (

    
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#071029] via-[#0b1320] to-[#071327] text-white py-20 px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl pt-4 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Engaging Apps <span className="text-blue-600 block">Users Love to Use</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Scalable, high-performance mobile and web apps — designed with UX-first thinking and engineered for growth.
          </p>
          <motion.button
            onClick={()=>(route.push("/contact"))}
            className="mt-6 sm:mt-8 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Start Your App Project
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <SectionHeading
          first="Why Work"
          second="With Us"
          paragraph="We design delightful user experiences and ship reliable apps — fast. From prototypes to production-ready releases."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
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
                We build native and cross-platform apps focused on performance, accessibility, and retention. Our process combines product thinking, UX research, and engineering best practices.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { text: "Native & Cross-platform", icon: Smartphone, color: "text-blue-700" },
                { text: "Robust Backends & APIs", icon: Database, color: "text-blue-700" },
                { text: "Offline & Sync Support", icon: Cloud, color: "text-blue-700" },
                { text: "Push + Engagement", icon: Bell, color: "text-blue-700" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium pt-1">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lottie Animation */}
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
                repeatType: "loop",
              }}
              className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg"
            >
              <Lottie animationData={appAnimation} loop className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg h-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-8">
        <SectionHeading
          first="App Features"
          second="We Ship"
          paragraph="Everything a modern app needs — performance, analytics, security, and delightful UX."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-12 sm:mt-16 max-w-7xl mx-auto">
          {[
            { icon: Smartphone, title: "Cross-Platform", desc: "React Native, Flutter — one codebase, native feel." },
            { icon: Code, title: "Native Performance", desc: "Optimized animations, low-latency interactions." },
            { icon: Database, title: "Sync & Offline", desc: "Reliable offline-first experiences with sync." },
            { icon: Cloud, title: "Scalable Backend", desc: "Managed APIs, serverless & containerized backends." },
            { icon: Bell, title: "Engagement", desc: "Push, in-app messaging and analytics integrations." },
            { icon: UploadCloud, title: "Deployment", desc: "App Store, Play Store and enterprise distribution." },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="p-6 sm:p-8 bg-white rounded-lg shadow-md text-center border border-gray-200 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto">
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-700" />
                </div>
                <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading
          first="Our App"
          second="Process"
          paragraph="A product-led process that reduces risk and increases speed to market."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
          {[
            { step: "1", title: "Discovery", desc: "Product discovery, user research and roadmap." },
            { step: "2", title: "Design", desc: "Wireframes, prototypes and polished UI." },
            { step: "3", title: "Build", desc: "Engineering, APIs, testing, and QA." },
            { step: "4", title: "Launch", desc: "Release, monitoring and continuous improvements." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="p-6 sm:p-8 bg-white rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-blue-600 text-white font-bold text-base sm:text-lg">{item.step}</div>
              <h3 className="mt-3 sm:mt-6 font-semibold text-base sm:text-xl text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Types */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-[#071029] via-[#0b1320] to-[#071327]">
        <SectionHeading
          first="Types of"
          second="Apps We Build"
          paragraph="From consumer apps to robust enterprise solutions — we cover the full spectrum."
          color="white"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-7xl mx-auto">
          {[
            { title: "Consumer Apps", desc: "High-retention, delightful experiences for consumers." },
            { title: "Enterprise Apps", desc: "Secure, scaled apps for internal workflows & teams." },
            { title: "E-commerce Apps", desc: "Mobile storefronts, carts, payments & order flow." },
            { title: "PWAs & MVPs", desc: "Fast, installable PWAs and rapid MVPs for testing." },
          ].map((site, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="p-6 sm:p-8 bg-[#0f1724] rounded-lg shadow-lg border border-gray-800 hover:border-blue-600"
            >
              <h3 className="font-bold text-lg sm:text-xl text-white">{site.title}</h3>
              <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">{site.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <SectionHeading
          first="Frequently Asked"
          second="Questions"
          paragraph="Common questions about our app development services."
        />
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? "rotate-180 text-blue-600" : ""}`} />
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

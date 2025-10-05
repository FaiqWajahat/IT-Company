"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Smartphone,
  BarChart3,
  Search,
  ChevronDown,
} from "lucide-react";
import Lottie from "lottie-react";
import websiteAnimation from "@/Assets/website.json";
import { useState } from "react";
import SectionHeading from "@/Components/SectionHeading";
import { useRouter } from "next/navigation";

export default function WebsiteDevelopmentService() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Most websites take 1-2 weeks depending on complexity and features.",
    },
    {
      q: "Do you integrate custom CMS solutions?",
      a: "Yes, we integrate WordPress, Joomla, and custom-built CMS platforms.",
    },
    {
      q: "Do you offer SEO services?",
      a: "Absolutely! We optimize your site for search engines from the ground up.",
    },
  ];
  
   const route=useRouter()
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
            Launch Your Brand <span className="text-blue-500 block">Website with Impact</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We build lightning-fast, responsive, and visually stunning websites that elevate your brand and grow your business.
          </p>
          <motion.button
          onClick={()=>(route.push("/contact"))}
            className="mt-6 sm:mt-8 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>
{/* Why Choose Us Section */}
<section className="px-4 sm:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
  <SectionHeading
    first="Why Work"
    second="With Us"
    paragraph="Building high-performance websites with modern technology and user-first design."
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
          We craft modern websites that reflect your brand and engage your audience. 
          From sleek portfolios to high-converting business sites, our development 
          process ensures quality, performance, and scalability.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
        {[
          { text: "Custom design & branding", icon: Palette, color: "text-blue-700" },
          { text: "Mobile-first responsive layouts", icon: Smartphone, color: "text-blue-700" },
          { text: "Analytics & performance insights", icon: BarChart3, color: "text-blue-700" },
          { text: "SEO optimized from day one", icon: Search, color: "text-blue-700" },
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
       animationData={websiteAnimation}
       loop
       className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg h-auto"
     />
   </motion.div>
   </motion.div>
  </div>
</section>


      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-8">
        <SectionHeading
          first="Features That"
          second="Stand Out"
          paragraph="Our websites are packed with powerful features to ensure performance, security, and scalability."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-12 sm:mt-16 max-w-7xl mx-auto">
          {[
            { icon: "Globe", title: "Responsive Design", desc: "Perfect on all devices with pixel-perfect precision." },
            { icon: "CreditCard", title: "E-commerce Ready", desc: "Built-in support for online stores and payments." },
            { icon: "Shield", title: "Security First", desc: "SSL, HTTPS, and secure development practices." },
            { icon: "Search", title: "SEO Optimization", desc: "Sites that rank higher and load faster." },
            { icon: "BarChart3", title: "Analytics Integration", desc: "Track user behavior and performance metrics." },
            { icon: "Smartphone", title: "Mobile Optimization", desc: "Fast, touch-friendly, and mobile-first design." },
          ].map((feature, i) => {
            const Icon = require("lucide-react")[feature.icon];
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
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <SectionHeading
          first="Our Development"
          second="Process"
          paragraph="We follow a proven step-by-step approach to ensure every website we build meets your expectations and goals."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
          {[
            { step: "1", title: "Discovery", desc: "Understanding your business and goals." },
            { step: "2", title: "Design", desc: "Creating user-friendly wireframes and visuals." },
            { step: "3", title: "Development", desc: "Coding, CMS setup, integrations, and testing." },
            { step: "4", title: "Launch & Support", desc: "Deployment, maintenance, and optimization." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="p-6 sm:p-8 bg-white rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-blue-600 text-white font-bold text-base sm:text-lg">
                {item.step}
              </div>
              <h3 className="mt-3 sm:mt-6 font-semibold text-base sm:text-xl text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Website Types */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f]">
        <SectionHeading
          first="Types of Websites"
          second="We Build"
          paragraph="From portfolios to business platforms, we develop websites tailored to your goals."
          color="white"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-7xl mx-auto">
          {[
            { title: "Business Websites", desc: "Professional sites for service-based companies." },
            { title: "Portfolios", desc: "Showcase your work with clean, modern layouts." },
            { title: "E-commerce", desc: "Online stores with product management & payments." },
            { title: "Landing Pages", desc: "Conversion-focused pages for campaigns and products." },
          ].map((site, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="p-6 sm:p-8 bg-[#1e293b] rounded-lg shadow-lg border border-gray-800 hover:border-blue-600"
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
          paragraph="Here are some common questions we get about our website development services."
        />
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
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

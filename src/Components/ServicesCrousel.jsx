"use client";
import React, { useState } from "react";
import { Code, Smartphone, Palette, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const services = [
 
  {
    id: 1,
    title: "App Development",
    description: "Scalable and high-performance mobile  designed to enhance user engagement and business growth.",
    icon: Smartphone,
    features: [
      "Cross-Platform Apps",
      "API Integration",
      "Modern UI/UX",
      "Push Notifications",
      "Fast Performance",
      "App Store Deployment",
      "Maintenance & Support"
    ],
    color: "from-blue-500 to-blue-600",
    href: "/services/app"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    icon: Code,
    features: [
      "Responsive Design", 
      "SEO Optimized",
      "Fast Loading",
      "User Friendly",
      "High Ranking",
      "Payment Integration",
      "Stock managment"
    ],
    color: "from-blue-500 to-blue-600",
    href: "/services/website"
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Creative visual solutions for branding, marketing, and digital media that captivate audiences.",
    icon: Palette,
    features: [
      "Brand Identity",
      "Digital Assets",
      "Print Design",
      "UI/UX Design",
      "Logo Design",
      "Social Media Post"
    ],
    color: "from-blue-600 to-blue-700",
    href: "/services/graphics"
  }
]


const ServiceCard = ({ service, index }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-500 overflow-hidden shadow-md hover:shadow-2xl"
    >
      {/* Gradient Header */}
      <div className={`relative bg-gradient-to-r ${service.color} p-8 text-white overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10 flex flex-col items-start">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-blue-50 text-sm sm:text-base leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-6">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-blue-600" />
          Key Features
        </h4>
        <div className="space-y-3">
          {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 text-sm sm:text-base text-gray-700 group/item hover:text-blue-600 transition-colors"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 group-hover/item:bg-blue-100 transition-colors">
                <CheckCircle2 className="w-3 h-3 text-blue-600" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {service.features.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors text-sm sm:text-base font-semibold mt-4 flex items-center gap-1"
          >
            {isExpanded ? "Show Less" : `+${service.features.length - 4} More`}
            <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </button>
        )}
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0">
        <button
          onClick={() => router.push(service.href)}
          className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3.5 px-6 rounded-lg cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export const ServicesLayout = () => {
  return (
    <div className="w-full mx-auto bg-white">
      

        {/* Services Grid */}
        <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    
  );
};

export default ServicesLayout;

"use client";
import React from "react";
import { Code, ShoppingCart, Palette, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment integration and comprehensive management tools",
    icon: ShoppingCart,
    features: ["Payment Gateway", "Inventory System", "Mobile Friendly", "Analytics Dashboard"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance",
    icon: Code,
    features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
    isBlue: true
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Creative visual solutions for branding, marketing, and digital media that captivate audiences",
    icon: Palette,
    features: ["Brand Identity", "Digital Assets", "Print Design", "UI/UX Design"]
  }
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const isBlue = service.isBlue;

  return (
    <div
      className={`group relative w-full max-w-sm mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 mt-10 ${
        isBlue
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white md:-translate-y-10 hover:from-blue-700 hover:to-blue-800"
          : "bg-white border border-gray-100 hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
      }`}
    >
      <div className="p-6">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
            isBlue ? "bg-white/20 backdrop-blur-sm group-hover:bg-white/30" : "bg-blue-50 group-hover:bg-blue-100"
          }`}
        >
          <Icon
            className={`w-6 h-6 transition-all duration-300 ${isBlue ? "text-white" : "text-blue-600 group-hover:text-blue-700"}`}
          />
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
            isBlue ? "text-white" : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
            isBlue ? "text-blue-100" : "text-gray-600 group-hover:text-gray-700"
          }`}
        >
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center text-sm font-medium transition-all duration-300 ${
                isBlue ? "text-blue-50" : "text-gray-700 group-hover:text-gray-800"
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: 'translateX(0px)'
              }}
            >
              <CheckCircle2
                className={`w-5 h-5 mr-2 transition-all duration-300 ${
                  isBlue ? "text-blue-300 group-hover:text-blue-200" : "text-blue-600 group-hover:text-blue-700 group-hover:scale-110"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              />
              {feature}
            </div>
          ))}
        </div>

        {/* Enhanced Professional Button */}
        <button
          className={`group/btn relative w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
            isBlue
              ? "bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg hover:shadow-white/20"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
          } transform hover:scale-[1.02] active:scale-[0.98]`}
        >
          {/* Button background overlay */}
          <div className={`absolute inset-0 transition-all duration-300 ${
            isBlue 
              ? "bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover/btn:opacity-100"
              : "bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover/btn:opacity-100"
          }`}></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center">
            <span className="transition-all duration-300 group-hover/btn:translate-x-[-4px]">
              Learn More
            </span>
            <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 group-hover/btn:translate-x-1 ${
              isBlue ? "text-blue-600" : "text-white"
            }`} />
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </button>
      </div>
    </div>
  );
};

export const ServicesLayout = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesLayout;

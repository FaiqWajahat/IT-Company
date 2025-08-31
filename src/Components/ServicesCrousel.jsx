"use client";
import React from "react";
import { Code, ShoppingCart, Palette, CheckCircle2 } from "lucide-react"; // ✅ using CheckCircle2

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
      className={`relative w-full max-w-sm mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 hover:scale-[1.03] mt-10  ${
        isBlue
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white md:-translate-y-10"
          : "bg-white border border-gray-100"
      }`}
    >
      <div className="p-6">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            isBlue ? "bg-white/20 backdrop-blur-sm" : "bg-blue-50"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${isBlue ? "text-white" : "text-blue-600"}`}
          />
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-semibold mb-3 ${
            isBlue ? "text-white" : "text-gray-900"
          }`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isBlue ? "text-blue-100" : "text-gray-600"
          }`}
        >
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center text-sm font-medium ${
                isBlue ? "text-blue-50" : "text-gray-700"
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 mr-2 ${
                  isBlue ? "text-blue-300" : "text-blue-600"
                }`}
              />
              {feature}
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button
          className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-md ${
            isBlue
              ? "bg-white text-blue-600 hover:bg-blue-50"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Learn More
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

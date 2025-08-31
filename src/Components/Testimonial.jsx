'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import {motion} from"framer-motion"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Their cloud migration expertise transformed our entire infrastructure. We saw a 40% reduction in operational costs and significantly improved system reliability. The team's proactive approach and deep technical knowledge made all the difference.",
      project: "Cloud Infrastructure Modernization"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Digital Innovation",
      company: "RetailMax Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The custom e-commerce platform they built exceeded our expectations. Sales increased by 65% in the first quarter post-launch. Their attention to user experience and performance optimization was remarkable.",
      project: "E-commerce Platform Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Security was our top priority, and they delivered beyond expectations. The cybersecurity audit and implementation of new protocols gave us complete peace of mind. Zero incidents since deployment.",
      project: "Cybersecurity Implementation"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder & CEO",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to deployment, they were true partners in our digital transformation. The AI-powered analytics dashboard they created provides insights that drive our daily decisions.",
      project: "AI Analytics Dashboard"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "IT Director",
      company: "Global Manufacturing Inc",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Their DevOps transformation reduced our deployment time from weeks to hours. The automated CI/CD pipeline they implemented revolutionized our development workflow.",
      project: "DevOps & Automation"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100/20 rounded-full blur-3xl"
        initial={{ scale: 0, rotate: 180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="w-6 h-6 text-blue-600" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-blue-600">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by leading companies worldwide. See how we've helped businesses 
            transform their technology infrastructure and achieve remarkable results.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 relative"
                    whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote icon */}
                    <motion.div 
                      className="absolute -top-6 left-8"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Project tag */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {testimonial.project}
                      </span>
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex items-center gap-1 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-gray-600 font-medium">5.0</span>
                    </motion.div>

                    {/* Testimonial text */}
                    <motion.blockquote 
                      className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      "{testimonial.text}"
                    </motion.blockquote>

                    {/* Client info */}
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-50"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=3B82F6&color=fff&size=64`;
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonial.position}
                        </p>
                        <p className="text-blue-600 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 hover:shadow-xl"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 hover:shadow-xl"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Dots indicator */}
        <motion.div 
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
            />
          ))}
        </motion.div>

       
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
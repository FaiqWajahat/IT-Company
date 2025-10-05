"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
 
  MessageSquare,
  Headphones,
  FileText,
  ChevronDown,
} from "lucide-react";
import Lottie from "lottie-react";
import contactAnimation from "@/Assets/contact.json";
import { useState } from "react";
import SectionHeading from "@/Components/SectionHeading";
import Contactus from "@/Components/Contactus";

export default function ContactUs() {
  const phone ="+923279008806"
  const normalizedPhone = phone ? phone.replace(/[^0-9]/g, "") : "";
  const encodedMessage = encodeURIComponent("Hello! I found your website and would like to chat." || "");
  const href = normalizedPhone ? `https://wa.me/${normalizedPhone}?text=${encodedMessage}` : "#";

  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });



  const faqs = [
    {
      q: "What is your typical response time?",
      a: "We respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We provide a complimentary 30-minute consultation to discuss your project needs and explore how we can help.",
    },
    {
      q: "What information should I include in my inquiry?",
      a: "Share your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can assist you.",
    },
    {
      q: "Can I schedule an in-person meeting?",
      a: "Absolutely! We welcome both virtual and in-person meetings. Contact us to schedule a time that works for you.",
    },
  ];

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
            Let's Build Something{" "}
            <span className="text-blue-500 block">Amazing Together</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Have a project in mind? We're here to help you transform your ideas
            into reality. Get in touch with our team today.
          </p>
          <motion.a
            href="#contact-form"
            className="inline-block mt-6 sm:mt-8 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <SectionHeading
          first="Ways to"
          second="Reach Us"
          paragraph="Choose the most convenient way to connect with our team. We're always ready to assist you."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {[
            {
              icon: Mail,
              title: "Email Us",
              desc: "info@pixvion.com",
              subdesc: "support@pixvion.com",
            },
            {
              icon: Phone,
              title: "Call Us",
              desc: "(+92) 327-9008806",
              subdesc: "(+92) 314-6997979",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              desc: "Defence Road, Sialkot",
              subdesc: "Punjab, Pakistan",
            },
            {
              icon: Clock,
              title: "Work Hours",
              desc: "Mon - Fri: 9AM - 6PM",
              subdesc: "Sat: 10AM - 4PM",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="p-6 sm:p-8 bg-white rounded-lg shadow-md text-center border border-gray-200 hover:border-blue-600 hover:shadow-lg"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto">
                <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-700" />
              </div>
              <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl text-gray-900">
                {item.title}
              </h3>
              <p className="text-blue-600 font-medium mt-2 sm:mt-3 text-sm sm:text-base">
                {item.desc}
              </p>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                {item.subdesc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     <Contactus/>

      {/* Why Contact Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <SectionHeading
          first="Why Choose"
          second="Pixvion"
          paragraph="We're committed to delivering exceptional service and building lasting relationships with our clients."
        />

    
  

   

    <div className="grid lg:grid-cols-2 gag-2 gap-y-8 items-center">
      {/* Lottie Animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <Lottie
          animationData={contactAnimation}
          loop
          className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-lg h-auto drop-shadow-md"
        />
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid sm:grid-cols-2 gap-8"
      >
        {[
          {
            icon: MessageSquare,
            title: "Quick Response",
            desc: "We reply within 24 hours — your time is valuable.",
          },
          {
            icon: Headphones,
            title: "Expert Support",
            desc: "Our team provides tailored solutions for every project.",
          },
          {
            icon: FileText,
            title: "Free Consultation",
            desc: "Get professional advice and accurate project estimates.",
          },
          {
            icon: Clock,
            title: "Flexible Schedule",
            desc: "We adapt to your availability for seamless communication.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="p-6 sm:p-7 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto shadow-inner">
              <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-700" />
            </div>
            <h3 className="mt-5 font-bold text-lg sm:text-xl text-gray-900 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  
</section>

      
{/* Office Location Section */}
<section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1f]">
  <SectionHeading
    first="Office"
    second="Loaction"
    paragraph="Visit us at our headquarters in Sialkot or connect with us remotely. We're always ready to discuss your next big project."
    color="white"
  />

  <div className=" mx-auto mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    
    {/* Left: Office Details */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="bg-[#1e293b] rounded-xl shadow-lg border border-gray-800 p-8 flex flex-col justify-center h-full"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Contact Details
      </h3>
      <div className="space-y-5 text-gray-300 text-base sm:text-lg">
        <p className="flex items-start gap-3">
          <MapPin className="w-6 h-6 mt-1 text-blue-500 flex-shrink-0" />
          <span>
            Hadi Town Defence Road, Sialkot <br />
             Pujab, Pakistan
          </span>
        </p>
        <p className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
          (+92) 327-9008806
        </p>
        <p className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
          info@pixvion.com
        </p>
      </div>
    </motion.div>

    {/* Right: Map */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full rounded-lg overflow-hidden shadow-xl min-h-80 border border-gray-800"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.123456789!2d74.529123!3d32.492456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922602b5e2a9a91%3A0x7d8fdf0a8eae9f41!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697075432109!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <SectionHeading
          first="Frequently Asked"
          second="Questions"
          paragraph="Have questions? Here are answers to some common inquiries about getting in touch with us."
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
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  {faq.q}
                </h3>
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life. Our team is
            standing by to answer your questions and provide expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.a
              href={href}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
            >
              Send a Message
            </motion.a>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-base sm:text-lg"
            >
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
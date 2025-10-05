"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Lightbulb, HeartHandshake, Shield, Rocket, Eye, Briefcase, Smile, Calendar } from "lucide-react";
import Lottie from "lottie-react";
import aboutAnimation from "@/Assets/about.json"; // Replace with your own Lottie animation
import SectionHeading from "@/Components/SectionHeading";
import CountUp from "react-countup";

export default function AboutPage() {

  const cards = [
    {
      title: "Our Mission",
      desc: "Empowering businesses with innovative digital solutions that drive growth, efficiency, and meaningful impact. We aim to become a trusted partner by delivering scalable, user-centric technology tailored to your needs.",
      highlight: "Combining creativity, technical expertise, and strategic insights to solve real-world problems and unlock new opportunities.",
      icon: Rocket,
      color: "blue",
    },
    {
      title: "Our Vision",
      desc: "To be a global leader in digital innovation, connecting people, inspiring creativity, and shaping the future. We envision a world where all businesses have access to transformative technology.",
      highlight: "Pioneering sustainable innovation, building lasting partnerships, and leaving a positive footprint on industries and communities worldwide.",
      icon: Eye,
      color: "blue",
    },
  ];

  const stats = [
  { label: "Projects Delivered", value: 60, icon: Briefcase },
  { label: "Happy Customers", value: 20, icon: Smile },
  { label: "Years of Experience", value: 5, icon: Calendar },
  { label: "Countries Served", value: 10, icon: Globe },
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
            Know Everything <span className="text-blue-500 block"> About Pixvion</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We are passionate about creating digital experiences that inspire,
            engage, and deliver measurable results.
          </p>

           <motion.button
            className="mt-6 sm:mt-8 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Contact Us Now
          </motion.button>
        </motion.div>

      </section>

      {/* About Company Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <SectionHeading
          first="Who"
          second="We Are"
          paragraph="We are a team of developers, designers, and strategists dedicated to delivering impactful digital solutions."
        />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
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
        Our mission is to empower businesses with cutting-edge technology, 
        beautiful design, and seamless user experiences. With years of expertise 
        in web development, app developmant and digital strategy, we bring ideas to life that help 
        brands grow globally.
      </p>
    </div>

    {/* Feature Highlights */}
    <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
      {[
        { text: "Passionate and skilled team", icon: Users, color: "text-blue-700" },
        { text: "Focused on your goals", icon: Target,color: "text-blue-700" },
        { text: "Award-winning designs & apps", icon: Award,color: "text-blue-700" },
        { text: "Global reach with local expertise", icon: Globe,color: "text-blue-700"},
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

  {/* Animation / Image Section */}
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
    animationData={aboutAnimation}
    loop
    className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-lg h-auto"
  />
</motion.div>
</motion.div>
</div>

      </section>

   <section className="relative w-full bg-white py-24 overflow-hidden">
  <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <SectionHeading
      first="Our"
      second="Mission & Vision"
      paragraph="We strive to create innovative, scalable, and user-friendly digital solutions that empower businesses globally."
    />

    {/* Cards Container - Side by Side Layout */}
    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>

            <div className="p-8 sm:p-10">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 rounded-xl bg-blue-50">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <div className="h-0.5 w-12 rounded-full bg-blue-500"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {card.desc}
              </p>

              {/* Highlight Box */}
              <div className="relative pl-4 border-l-2 border-blue-500">
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {card.highlight}
                </p>
              </div>

              {/* Optional: Bottom Tag */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  {card.title === "Our Mission" ? "Driving Growth" : "Shaping Future"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>

<section className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0a0f1f] text-white overflow-hidden">
 
  
 
 {/* Section header */}
<SectionHeading
  first={"Driving Digital"}
  second={"Transformation"}
  color={"white"}
  paragraph={"Delivering enterprise-grade solutions that power businesses worldwide"}
/>

{/* Stats grid */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
  {stats.map((stat, i) => {
    const Icon = stat.icon;
    return (
      <motion.div
        key={i}
        className="group relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.6, 
          delay: i * 0.1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {/* Card */}
        <div className="relative flex flex-col items-center gap-5 p-8 lg:p-10 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300">
          
          {/* Icon container */}
          <div className="p-3.5 bg-blue-600/10 rounded-xl border border-blue-500/20">
            <Icon className="w-7 h-7 text-blue-600" />
          </div>

          {/* Counter */}
          <div className="text-center">
            <span className="block text-5xl lg:text-6xl font-bold text-white leading-none">
              <CountUp 
                start={0} 
                end={stat.value} 
                duration={2.5} 
                enableScrollSpy 
                separator=","
              />
              <span className="text-blue-600">+</span>
            </span>
          </div>

          {/* Label */}
          <div className="text-center">
            <span className="text-sm lg:text-base font-medium text-gray-400">
              {stat.label}
            </span>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

{/* Bottom note */}
<motion.div 
  className="mt-16 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
   <div className="inline-flex items-center gap-2 text-sm text-gray-500">
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gray-600"></div>
        <span className="font-medium">Real-time metrics updated daily</span>
        <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>
</motion.div>
 
</section>
      
      {/* Core Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <SectionHeading
          first="Core"
          second="Values"
          paragraph="The principles that guide everything we do."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
         {[
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    desc: "We consistently think outside the box to design unique, forward-thinking solutions that keep our clients ahead in an ever-evolving digital world.", 
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200", 
  },
  { 
    icon: HeartHandshake, 
    title: "Integrity", 
    desc: "We build lasting relationships through honesty, transparency, and accountability—ensuring trust and reliability in every project we deliver.",  
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200", 
  },
  { 
    icon: Shield, 
    title: "Excellence", 
    desc: "We are committed to delivering high-quality results, setting high standards, and exceeding expectations with every product, service, and experience we create.", 
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200", 
  },
]
.map((item, i) => (
           <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group bg-white rounded-lg shadow-md hover:shadow-xl border ${item.borderColor} p-6 lg:p-8 text-center transition-all duration-300`}
            >
              <div className={`inline-flex p-4 ${item.bgColor} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

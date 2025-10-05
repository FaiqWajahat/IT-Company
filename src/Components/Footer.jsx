'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const quickLinks = [
     { name: 'About', href: '/about' },
     { name: 'Technologies', href: '/technologies' },
     { name: 'Projects', href: '/projects' },
     { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Web Development', href: '/services/website' },
    { name: 'Mobile App', href: '/services/app' },
    { name: 'Graphic Design', href: '/services/graphics' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  ];

  const isActiveLink = (href) => pathname === href;

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <motion.div 
        className=" mx-auto px-6 py-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <motion.div variants={fadeInUp}
          className='flex flex-col  '>
            <h3 className="text-2xl font-bold text-white mb-2">PIXVION</h3>
            <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming businesses through innovative technology solutions. 
              We build tomorrow's software today.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`relative inline-block group transition-colors duration-200 ${
                    isActiveLink(link.href) ? 'text-blue-500 font-semibold' : 'text-gray-400 hover:text-white'
                  }`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-300 ${
                      isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className={`relative inline-block group transition-colors duration-200 ${
                    isActiveLink(service.href) ? 'text-blue-500 font-semibold' : 'text-gray-400 hover:text-white'
                  }`}>
                    {service.name}
                    <span className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-300 ${
                      isActiveLink(service.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1"/>
                <p className="text-gray-400">Defence Road, Sialkot, pakistan</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0"/>
                <p className="text-gray-400">info@pixvion.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0"/>
                <p className="text-gray-400">(+92) 327-9008806</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className='text-center text-sm text-gray-300'>&copy; 2025 PIXVION. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

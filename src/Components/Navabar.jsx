'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-screen fixed top-0 left-0 py-4 flex justify-center items-center z-50 ">
      <div className="rounded-xl border border-blue-600/70 px-4 py-3 
        bg-gray-100
        w-[95%] md:w-[85%] flex items-center justify-between 
        shadow-[0_0_20px_rgba(59,130,246,0.3)] transition">
        
        {/* Logo */}
        <Image 
          src="/logo.png" 
          alt="logo" 
          height={120} 
          width={120} 
          className="cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-8 font-medium text-gray-900">
          {["Home","About","Services","Portfolio","Blog"].map((item, i) => (
            <li 
              key={i}
              className="relative cursor-pointer group"
            >
              <span className="transition group-hover:text-blue-600">
                {item}
              </span>
              {/* Underline hover effect */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-700 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 px-5 py-2 rounded-lg text-white cursor-pointer shadow-md hover:shadow-lg hover:opacity-90 transition">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28}/> : <Menu size={28}/> }
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-t border-blue-500/30 md:hidden z-40 animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-200">
            {["Home","About","Services","Portfolio","Blog"].map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition cursor-pointer">
                {item}
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

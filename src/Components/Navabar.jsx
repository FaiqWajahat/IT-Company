'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false) // desktop hover
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false) // mobile toggle
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      dropdown: [
        { name: "Website Development", href: "/services/website" },
        { name: "App Development", href: "/services/app" },
        { name: "Graphic Design", href: "/services/graphics" },
      ]
    },
    { name: "Technologies", href: "/technologies" },
    { name: "Projects", href: "/projects" },
  ]

  return (
    <nav className="w-screen fixed top-0 left-0 py-6 flex justify-center items-center z-50">
      <div className="rounded-lg border border-blue-600/70 px-4 py-2 
        bg-white shadow-xl
        w-[95%] md:w-[90%] flex items-center justify-between 
     transition ">
        
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            height={80} 
            width={120} 
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center gap-8 font-medium text-gray-900">
          {navLinks.map((link, i) => (
            <li key={i} className="relative cursor-pointer group">
              {!link.dropdown ? (
                <Link 
                  href={link.href} 
                  className={`transition ${pathname === link.href ? "text-blue-600 font-semibold" : "group-hover:text-blue-600"}`}
                >
                  {link.name}
                </Link>
              ) : (
                <div 
                  className="flex items-center gap-1 group relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span className="transition group-hover:text-blue-600 whitespace-nowrap">
                    {link.name}
                  </span>
                  <ChevronDown size={16} className="mt-[2px]" />
                  
                  {/* Dropdown */}
                  {isServicesOpen && (
                    <ul className="absolute top-6 -left-6 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                      {link.dropdown.map((sublink, j) => (
                        <li key={j}>
                          <Link 
                            href={sublink.href} 
                            className={`block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition ${pathname === sublink.href ? "text-blue-600 font-semibold" : "text-gray-800"}`}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* underline effect for non-dropdowns */}
              {!link.dropdown && (
                <span className={`absolute left-0 bottom-[-6px] h-[2px] bg-gradient-to-r from-blue-600 to-blue-700 transition-all
                  ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}>
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white cursor-pointer shadow-md hover:shadow-lg hover:opacity-90 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24}/> : <Menu size={24}/> }
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-t border-blue-500/30 lg:hidden z-40 animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-200">
            {navLinks.map((link, i) => (
              <li key={i} className="w-full text-center">
                {!link.dropdown ? (
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className={`block transition ${pathname === link.href ? "text-blue-400 font-semibold" : "hover:text-blue-400"}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button 
                      className="flex justify-center items-center gap-1 w-full text-gray-200 hover:text-blue-400 transition"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <ul className="mt-2 space-y-2">
                        {link.dropdown.map((sublink, j) => (
                          <li key={j}>
                            <Link 
                              href={sublink.href} 
                              onClick={() => setIsOpen(false)} 
                              className={`block px-4 py-2 hover:text-blue-400 transition ${pathname === sublink.href ? "text-blue-400 font-semibold" : ""}`}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="bg- px-5 py-2 rounded-lg text-white bg-blue-700 hover:shadow-lg transition">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar


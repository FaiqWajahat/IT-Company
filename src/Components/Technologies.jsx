'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
   
  Database, 
  Cloud, 
  Shield, 

  Globe,
  Brain,
 

  FileImage,
  CircleDollarSign
} from 'lucide-react'

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Modern user interfaces and experiences'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Database,
     color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Robust server-side solutions'
    },
    {
      id: 'mobile',
      name: 'Graphics',
      icon: FileImage,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Graphic Designing Software'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Scalable cloud infrastructure'
    },
    {
      id: 'ai',
      name: 'Payment Integration',
      icon: CircleDollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Payment Integration Technologies'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Enterprise-grade security'
    }
  ]

  const technologies = {
    frontend: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 95 },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 90 },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 85 },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 80 },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 92 },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 95 },
      { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', level: 88 },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 98 }
    ],
    backend: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 95 },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 90 },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 88 },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 85 },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 82 },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 80 },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', level: 78 },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 75 }
    ],
   graphics: [
  { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg', level: 90 },
  { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', level: 85 },
  { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', level: 78 },
  { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', level: 80 },
  { name: 'CorelDRAW', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coreldraw/coreldraw-original.svg', level: 75 },
  { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg', level: 70 }
],
mobile: [
  { 
    name: 'Adobe Illustrator', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', 
    level: 90 
  },
  { 
    name: 'Adobe Photoshop', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', 
    level: 85 
  },
  { 
    name: 'Blender', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', 
    level: 78 
  },
  { 
    name: 'Canva', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', 
    level: 80 
  },
  { 
    name: 'CorelDRAW', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coreldraw/coreldraw-original.svg', 
    level: 75 
  },
  { 
    name: 'Figma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
    level: 88 
  }
],

    cloud: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', level: 90 },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', level: 85 },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', level: 80 },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 88 },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', level: 82 },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 92 },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 90 },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', level: 85 }
    ],
ai: [
  { 
    name: 'PayPal', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg', 
    level: 90 
  },
  { 
    name: 'Stripe', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg', 
    level: 85 
  },
  { 
    name: 'Visa', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg', 
    level: 80 
  },
  { 
    name: 'Mastercard', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', 
    level: 80 
  },
  { 
    name: 'Google Pay', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg', 
    level: 75 
  },
  { 
    name: 'Apple Pay', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', 
    level: 75 
  }
]
,
    security: [
      { name: 'OAuth 2.0', logo: 'https://oauth.net/images/oauth-2-sm.png', level: 90 },
      { name: 'JWT', logo: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg', level: 95 },
      { name: 'SSL/TLS', logo: 'https://cdn-icons-png.flaticon.com/512/1973/1973617.png', level: 88 },
      { name: 'Firebase Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 85 },
      { name: 'Encryption', logo: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png', level: 82 },
      { name: 'HTTPS', logo: 'https://cdn-icons-png.flaticon.com/512/425/425970.png', level: 92 }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className="w-full py-20 bg-white overflow-hidden px-6 md:px-16">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
     

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          {["Technologies", "We", "Use"].map((word, index) => (
            <motion.span
              key={word}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg origin-center mb-8"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We leverage cutting-edge technologies to build robust, scalable, and innovative solutions that drive your business forward.
        </motion.p>
      </motion.div>

      {/* Categories Navigation */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                isActive
                  ? `${category.bgColor} ${category.borderColor} ${category.color} shadow-lg`
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">{category.description}</div>
              </div>
            </motion.button>
          )
        })}
      </motion.div>

      {/* Technologies Grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {technologies[activeCategory]?.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-18 h-18 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tech.name)}&background=3B82F6&color=fff&size=40`;
                  }}
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {tech.name}
            </h3>

           
           
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  );
};

export default Technologies;
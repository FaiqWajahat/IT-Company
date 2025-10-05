'use client'
import React from 'react'
import { CardSwipe } from './ui/card-swipe'

import SectionHeading from './SectionHeading'

const Testimonial = () => {
   const images = [
    { src: "/testimonial_01.png", alt: "Image 1" },
    { src: "/testimonial_02.png", alt: "Image 2" },
    { src: "/testimonial_03.png", alt: "Image 3" },
    { src: "/testimonial_04.png", alt: "Image 4" },
    { src: "/testimonial_05.png", alt: "Image 4" },
  
  ]
 
  return (
    <div className='w- full py-16 bg-gray-50'>
       

         <SectionHeading 
         first={"Your trust"}
         second={"Our Pride"}
         paragraph={" Our clients are at the heart of everything we do. Here’s what they have to say about their experiences with us."}
         />

          

<div className="w-full px-6 overflow-hidden bg-gray-50 ">
      <CardSwipe images={images} autoplayDelay={2500} slideShadows={false} />
    </div>
    </div>
  )
}

export default Testimonial
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Testimonial from './Testimonial'
import BranchMap from './Map'

const About = () => {
  return (
    <div>
    <motion.h1 initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }}  className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
      <span className="text-bllue">A</span>bout us
    </motion.h1>

    <div className=" text-dark dark:text-light">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-bllue">Our Vision</h2>
            <div className="space-y-6  leading-relaxed">
              <p className="text-base md:text-lg">
                At <b>Your Web Hub</b>, our vision is to be a global leader in delivering innovative IT solutions that empower
                businesses to thrive in the digital age. We aim to help our clients unlock their full potential by
                providing customized, cutting-edge services that drive growth, efficiency, and success.
              </p>
              <p className="text-base md:text-lg">
                By staying ahead of industry trends and embracing new technologies, we are committed to helping
                businesses navigate the digital landscape and turn challenges into opportunities. Our goal is to be the
                trusted partner that businesses rely on for transformative solutions and lasting results.
              </p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div initial={{ opacity: 0, x: 40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{  duration: 0.9 }}
         viewport={{ once: true }} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px]">
              <img
                src="/vission.png"
                alt="Vision and Mission illustration"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <div>
    <h2 className="text-4xl md:text-5xl font-bold text-bllue text-center my-6">Client Feedback </h2>
    <Testimonial/>
    <h2 className="text-4xl md:text-5xl font-bold text-bllue text-center my-6">Our Location </h2>
 <div className=' flex items-center md:flex-row flex-col-reverse w-[90%] mx-auto text-dark dark:text-light'>
 <div className=" mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-3 ">How to Find Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Main Branch */}
        <div className=" p-3 rounded ">
          <h2 className="text-xl font-semibold">Main Branch</h2>
          <p>Bakery Place</p>
          <p>Flour Mill Lane</p>
          <p>Brighton, East Sussex</p>
          <p>BN1 1AB</p>
        </div>

        {/* Location 2 */}
        <div className=" p-3 rounded ">
          <h3 className="text-xl font-semibold">Location 2</h3>
          <p>123 Market Street</p>
          <p>London, Greater London</p>
          <p>EC1 1XY</p>
        </div>

        {/* Location 3 */}
        <div className=" p-3 rounded ">
          <h3 className="text-xl font-semibold">Location 3</h3>
          <p>456 Orchard Road</p>
          <p>Manchester, Greater Manchester</p>
          <p>M1 2AB</p>
        </div>
      </div>
 <div className='flex items-center  gap-8 md:flex-row flex-col'>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">When to Visit</h2>
        <ul className="list-disc pl-6">
          <li>Monday to Friday: 8 AM - 5 PM</li>
          <li>Saturday: 9 AM - 5 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">How to Get in Touch</h2>
        <p>We respond to every inquiry within 48 hours.</p>
        <p>
          <strong>Phone:</strong> 01234 567 890
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
      </div>
 </div>
    </div>
    <BranchMap/>
 </div>
    </div>
  </div>
  )
}

export default About

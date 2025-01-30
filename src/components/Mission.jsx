"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <div className='overflow-hidden'>
          <section className="  flex items-center py-3 px-4 md:px-8 lg:px-10">
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div  className="space-y-6">
            <motion.h2  initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.8 }}
             viewport={{ once: true }} className="text-bllue text-4xl md:text-5xl font-bold">Our Mission</motion.h2>
            <motion.p initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.4 }}
             viewport={{ once: true }} className="text-dark dark:text-light text-xs md:text-lg  leading-relaxed ">
              At <b>Your Web Hub</b>, our mission is to provide top-tier IT services that help businesses succeed in
              today&apos;s fast-paced digital landscape. As a full-service software house, we specialize in web
              development, app development, Shopify store creation, SEO optimization, graphic design, and digital
              marketing. Our team is dedicated to delivering innovative, customized solutions that empower businesses to
              grow online, improve engagement, and boost conversions. By focusing on high-quality, scalable, and secure
              services, we aim to be the preferred partner for companies seeking to thrive with effective digital
              solutions.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{  duration: 0.4 }}
          viewport={{ once: true }} className="relative flex justify-center lg:justify-end">
            <img
              src="/mission.png"
              alt="Mission illustration with rocket and business icons"
              className="w-full max-w-[500px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Mission

"use client"
import OrderForm from '@/components/Proposal'
import { motion } from 'framer-motion'
import React from 'react'

const Page = () => {
  return (
    <>
    <title>Send your Proposal | Your Web Hub, IT Solutions Company</title>
      <meta
        name="description"
        content="Your Web Hub is a leading IT solutions company specializing in web development, cloud services, and custom software to grow your business."
      />
      <link rel="canonical" href="https://www.yourwebhub.store/perposal" />

      <motion.h1 initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{  duration: 0.9 }}
             viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
              <span className="text-bllue">S</span>ubmit proposal
            </motion.h1>

      <div className=' max-w-4xl mx-auto'>
      <OrderForm/>
      </div>
    </>
  )
}

export default Page

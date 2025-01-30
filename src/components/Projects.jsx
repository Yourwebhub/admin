"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
    <motion.h1 initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{  duration: 0.9, delay:0.4 }}
             viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
              <span className="text-bllue">O</span>ur  Projects
            </motion.h1>
      
    </>
  )
}

export default Projects

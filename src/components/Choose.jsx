"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Choose = () => {
    const features = [
        {
          icon: "https://jaidooempire.com/_next/image?url=%2Fimages%2F2.png&w=128&q=75",
          title: "Innovative Solutions",
          description:
            "We stay at the forefront of technology, using the latest tools and strategies to ensure your business thrives in today's fast-paced digital world.",
        },
        {
          icon: "https://jaidooempire.com/_next/image?url=%2Fimages%2F3.png&w=128&q=75",
          title: "Client-Centric Approach",
          description:
            "Your success is our priority. We work closely with you to understand your goals and craft solutions that are not only effective but also aligned with your vision.",
        },
        {
          icon: "https://jaidooempire.com/_next/image?url=%2Fimages%2F4.png&w=128&q=75",
          title: "Proven Track Record",
          description:
            "With a history of successful projects and satisfied clients, we've built a reputation for delivering high-quality, reliable, and impactful solutions.",
        },
        {
          icon: "https://jaidooempire.com/_next/image?url=%2Fimages%2F5.png&w=128&q=75",
          title: "Transparent Communication",
          description:
            "We believe in clear, open communication every step of the way. You'll always know what's happening with your project, ensuring a smooth and collaborative experience.",
        },
        {
          icon: "https://jaidooempire.com/_next/image?url=%2Fimages%2F1.png&w=128&q=75",
          title: "Expertise Across IT Fields",
          description:
            "From web and app development to SEO, social media marketing, and more, our diverse team of experts offers comprehensive solutions tailored to your unique needs.",
        },
      ]
  return (
    <div>
          <section className=" py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className=" mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <motion.h2 initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }} 
                  className="text-bllue text-4xl md:text-5xl font-bold">Why Choose Us?</motion.h2>
            <motion.p initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{  duration: 1.2 }}
                  viewport={{ once: true }} 
                  className="text-dark dark:text-light text-lg">
              At <b>Your Web Hub</b>, we stand out because of our unwavering commitment to delivering exceptional results and
              personalized service. Here's why businesses trust us:
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="">
            {features.map((feature, i) => (
              <motion.div 
              initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 1.2 }}
                  viewport={{ once: true }}
                key={i}
                className="flex items-start space-x-4 py-6  rounded-lg  transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <img src={feature.icon || "/placeholder.svg"} alt={feature.title} title={feature.title} className="w-14 h-14 object-contain" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-dark dark:text-light text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Choose

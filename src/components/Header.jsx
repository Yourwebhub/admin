"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizontal, PhoneIcon as WhatsappIcon } from "lucide-react";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const services = ["Web Development", "App Development", "SEO Optimization","Wordpress", "Digital Marketing"];

export default function AnimatedHero() {
  const [currentService, setCurrentService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Controls animation state

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false); // Pause animation
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setIsAnimating(true); // Resume animation
      }, 2000); // 2-second pause
    }, 4000); // Total cycle: animation + pause

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative  overflow-hidden ">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4,delay:0.6 }}
                viewport={{ once: true }}
                className="text-dark dark:text-light text-xs md:text-xl text-left pl-5 sm:pl-8 md:pl-[105px] lg:pl-0 "
              >
                We Provide Services like{" "}
                <AnimatePresence mode="wait">
                  {isAnimating && (
                    <motion.span
                      key={services[currentService]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }} // Animation duration
                      className="inline-block text-bllue font-bold"
                    >
                      {services[currentService]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6,delay:0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-light"
              >
                No.1 Leading Software House
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8,delay:0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-bllue font-extrabold font-mono"
              >
                In India
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1,delay:0.8 }}
              viewport={{ once: true }}
              className="text-dark dark:text-light  md:text-lg text-xs  mx-auto lg:mx-0"
            >
              At <b>Your Web Hub</b>, we specialize in delivering cutting-edge
              web development, mobile applications, and custom software tailored
              to meet the unique needs of our clients. Our mission is to drive
              digital transformation and bring your vision to life with expert
              technology and creative innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2,delay:0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link href={"/contact"} className="flex items-center bg-bllue text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
                Contact
                <SendHorizontal className="size-5" />
              </Link>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6,delay:1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <DotLottieReact
      src="https://lottie.host/af75a3dc-dae0-45a9-80e0-f48328c31656/Qz0xonlNUm.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

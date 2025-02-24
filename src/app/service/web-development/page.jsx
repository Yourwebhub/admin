"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-12 text-center"
      >
        <span className="text-bllue">W</span>eb Development 
      </motion.h1>

      {/* Image Section */}
      <div className="md:p-[26px] hidden md:block">
        <img
          src="web.webp"
          className="rounded-xl"
          alt="full-stack development"
        />
      </div>
      <div className="p-3 block md:hidden">
        <img
          src="web.webp"
          className="rounded-xl border border-red-500 object-cover"
          alt="full-stack development"
        />
      </div>

      {/* Details Section */}
      <div className="text-dark dark:text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-8">
            Unlock the Power of Full-Stack Development with MERN
          </h2>

          {/* Introduction */}
          <p className="text-lg mb-12">
            At <span className="font-bold">Your Web Hub</span>, we specialize in building
            high-performance, scalable, and feature-rich web applications using
            the MERN Stack—MongoDB, Express.js, React, and Node.js. This
            powerful technology stack enables us to create dynamic, real-time
            web applications that deliver exceptional user experiences.
          </p>

          {/* What is MERN Stack */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              What is MERN Stack?
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold">MongoDB:</span> A NoSQL database
                that stores data in JSON-like format, offering scalability and
                flexibility.
              </li>
              <li>
                <span className="font-bold">Express.js:</span> A fast and lightweight Node.js framework for building backend services and APIs.
              </li>
              <li>
                <span className="font-bold">React:</span> A front-end JavaScript library developed by Facebook, ideal for building interactive and responsive user interfaces.
              </li>
              <li>
                <span className="font-bold">Node.js:</span> A runtime environment that allows JavaScript to be used for server-side programming, providing efficiency and speed for backend operations.
              </li>
            </ul>
          </section>

          {/* Why Choose MERN */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Why Choose MERN Stack for Your Project?
            </h3>
            <ul className="list-disc pl-6">
              <li>Seamless Development Experience</li>
              <li>Faster Time-to-Market</li>
              <li>Improved Performance and Scalability</li>
              <li>Strong Community Support</li>
            </ul>
          </section>

          {/* Get Started Section */}
          <div className="text-center">
            <Link href="/proposal">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-8 py-3 bg-blue-400 text-white rounded-lg font-bold hover:bg-blue-500"
              >
                Contact us today
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

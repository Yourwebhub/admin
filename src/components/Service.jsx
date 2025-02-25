"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Building Engaging and User-Friendly Websites Tailored to Your Needs",
    number: 1,
    link:"/service/web-development"
  },
  {
    title: "App Development",
    description:
      "Creating Powerful and Intuitive Mobile Applications for Your Business",
    number: 2,
    link:"/service/app-development"
  },
  {
    title: "SEO",
    description: "Enhancing Your Digital Presence with Strategic SEO Solutions",
    number: 3,
    link:"/service/seo"
  },
  {
    title: "Wordpress ",
    description:
      "Custom Wordpress , Stores Designed for Maximum eCommerce Success",
    number: 4,
    link:"/service/wordpress"
  },
  {
    title: "Social Media Marketing",
    description:
      "Expanding Your Reach & Advertisement with Expert Social Media Strategies",
    number: 5,
    link:"/service/marketing"
  },
];

const Service = () => {
  return (
    <div className="overflow-hidden ">
      <section className="py-4 md:py-6 lg:py-8 bg-light dark:bg-dark transition-colors">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-bllue dark:text-bllue-400"
            >
              Our Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl"
            >
              Comprehensive solutions to drive your business forward
            </motion.div>
          </div>
          <div className="mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-12 w-full px-4">
  {services.map((v, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden border border-dark dark:border-light bg-light/5 dark:bg-dark/5 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-bllue/20 rounded-2xl hover:-translate-y-1 p-6 group cursor-pointer"
    >
      {/* Number Watermark */}
      <div className="absolute  group-hover:opacity-70 dark:group-hover:opacity-40 right-4 bottom-4 text-5xl font-bold dark:opacity-10 opacity-30 text-bllue   ">
        {v.number}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-light">
          {v.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {v.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/proposal"
            className="relative px-2 py-1 rounded-md bg-white isolation-auto z-10 border-2 border-bllue text-bllue
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-bllue before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white"
          >
            Hire Us
          </Link>

          <div className="group inline-block">
            <Link href={v.link} className="relative text-bllue text-sm md:text-base transition-colors">
              Details
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-bllue transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
};

export default Service;

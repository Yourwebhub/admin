"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PricingSection from "@/components/SEO";

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
        <span className="text-bllue">S</span>EO Optimization 
      </motion.h1>

      {/* Image Section */}
      <div className="md:p-[26px] hidden md:block">
        <img
          src="seo.webp"
          className="rounded-xl"
          alt="SEO optimization"
        />
      </div>
      <div className="p-3 block md:hidden">
        <img
          src="seo.webp"
          className="rounded-xl border border-red-500 object-cover"
          alt="SEO optimization"
        />
      </div>

      {/* Details Section */}
      <div className="text-dark dark:text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-8">
            Drive Traffic and Boost Rankings with Professional SEO Services
          </h2>

          {/* Introduction */}
          <p className="text-lg mb-12">
            At <span className="font-bold">Your Web Hub</span>, we specialize in crafting
            tailored SEO strategies to help your business rank higher on search engines,
            attract targeted traffic, and maximize online visibility. Our SEO services are designed to
            deliver measurable results and drive sustainable growth for your brand.
          </p>

          {/* What is SEO */} 
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              What is SEO?
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold">Search Engine Optimization:</span> 
                The process of improving a website's visibility on search engines like Google, Bing, and Yahoo.
              </li>
              <li>
                <span className="font-bold">On-Page SEO:</span> 
                Optimizing website content, metadata, and structure to make it more search-engine-friendly.
              </li>
              <li>
                <span className="font-bold">Off-Page SEO:</span> 
                Building high-quality backlinks and maintaining a strong online presence across various platforms.
              </li>
              <li>
                <span className="font-bold">Technical SEO:</span> 
                Enhancing website performance, ensuring mobile-friendliness, and fixing crawling or indexing issues.
              </li>
            </ul>
          </section>

          {/* Why Choose SEO */} 
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Why Invest in SEO for Your Business?
            </h3>
            <ul className="list-disc pl-6">
              <li>Increase Website Traffic</li>
              <li>Boost Brand Awareness and Credibility</li>
              <li>Improve Conversion Rates</li>
              <li>Gain a Competitive Edge in Your Industry</li>
            </ul>
          </section>

          <div>
            <PricingSection/>
          </div>

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

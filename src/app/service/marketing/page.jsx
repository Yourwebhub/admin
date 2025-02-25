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
        <span className="text-bllue">D</span>igital Marketing
      </motion.h1>

      {/* Image Section */}
      <div className="md:p-[26px] hidden md:block">
        <img
          src="smm.webp"
          className="rounded-xl"
          alt="digital marketing services"
        />
      </div>
      <div className="p-3 block md:hidden">
        <img
          src="smm.webp"
          className="rounded-xl border border-red-500 object-cover"
          alt="digital marketing services"
        />
      </div>

      {/* Details Section */}
      <div className="text-dark dark:text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-8">
            Accelerate Your Growth with Expert Digital Marketing Solutions
          </h2>

          {/* Introduction */}
          <p className="text-lg mb-12">
            At <span className="font-bold">Your Web Hub</span>, we help businesses thrive in the digital era by offering 
            comprehensive digital marketing strategies. Our expert team specializes in increasing your online visibility, 
            driving traffic, and maximizing ROI with tailored campaigns that fit your business goals.
          </p>

          {/* What is Digital Marketing? */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              What is Digital Marketing?
            </h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold">Search Engine Marketing (SEM):</span> 
                Targeted paid advertising campaigns on platforms like Google Ads.
              </li>
              <li>
                <span className="font-bold">Social Media Marketing (SMM):</span> 
                Leveraging platforms like Facebook, Instagram, and LinkedIn to build brand awareness and engage audiences.
              </li>
              <li>
                <span className="font-bold">Content Marketing:</span> 
                Creating high-quality content to attract, engage, and convert your audience.
              </li>
              <li>
                <span className="font-bold">Email Marketing:</span> 
                Engaging with potential and existing customers through targeted email campaigns.
              </li>
            </ul>
          </section>

          {/* Why Choose Digital Marketing? */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Why Choose Digital Marketing for Your Business?
            </h3>
            <ul className="list-disc pl-6">
              <li>Reach a Global Audience</li>
              <li>Trackable and Measurable Results</li>
              <li>Cost-Effective Advertising</li>
              <li>Increased Engagement and Conversions</li>
            </ul>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Our Process
            </h3>
            <p className="text-lg mb-4">
              Our strategic approach ensures that your digital marketing campaigns deliver measurable success:
            </p>
            <ul className="list-disc pl-6">
              <li>Understanding Your Business Goals</li>
              <li>Developing a Tailored Marketing Strategy</li>
              <li>Implementing Data-Driven Campaigns</li>
              <li>Monitoring and Optimizing for Continuous Growth</li>
            </ul>
          </section>

          {/* Client Success Stories */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Client Success Stories
            </h3>
            <p className="text-lg mb-4">
              We have helped numerous businesses achieve remarkable growth. Here are some of our success stories:
            </p>
            <ul className="list-disc pl-6">
              <li>Increased eCommerce sales by 200% for an online store</li>
              <li>Generated over 50,000 leads for a B2B client</li>
              <li>Enhanced brand awareness through viral social media campaigns</li>
            </ul>
          </section>

          {/* Trends in Digital Marketing */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Latest Trends in Digital Marketing
            </h3>
            <p className="text-lg mb-4">
              Stay ahead of the competition by leveraging emerging trends:
            </p>
            <ul className="list-disc pl-6">
              <li>AI-Powered Marketing Automation</li>
              <li>Voice Search Optimization</li>
              <li>Personalization and Hyper-Targeting</li>
              <li>Interactive and Immersive Content</li>
            </ul>
          </section>

          {/* Call to Action */}
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

"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const plans = [
    {
      title: "Plan - 1",
      price: "Rs.1899/-",
      features: [
        "Free Shared Hosting – 1 Year",
        "Admin panel & SSL certificate",
        "100 Products Can be added",
        "Payment Gateway Integration",
        "Single Product Category",
        "Whatsapp Live Chat",
        "1 year Free Support",
      ],
      extra: [
        "Domain Purchase Rs.750/- Extra",
        "Next year Renewal Rs.2800/-",
      ],
    },
    {
      title: "Plan - 2",
      price: "Rs.2899/-",
      features: [
        "Free Shared Hosting – 1 Year",
        "3 Products Category",
        "Admin panel & SSL certificate",
        "Unlimited Products",
        "Payment Gateway Integration",
        "Whatsapp Live Chat",
        "2 Free Domain Mail ID",
        "1 year Free Support",
      ],
      extra: ["Domain Purchase Rs.750/- Extra", "Next year Renewal Rs.2800/-"],
    },
    {
      title: "Plan - 3",
      price: "Rs.5899/-",
      features: [
        "Free .in Domain – 1 Year",
        "Free Shared Hosting – 1 Year",
        "Unlimited Products & Category",
        "Free Android web App",
        "Free 1 Keyword SEO",
        "Admin panel & SSL certificate",
        "Unlimited Products",
        "Social Media integration",
        "Payment Gateway Integration",
        "Shipping and live Tracking",
        "Whatsapp Live Chat",
        "3 Free Domain Mail ID",
        "1 year Free Support",
      ],
      extra: ["Next year Renewal Rs.3500/-"],
    },
    {
      title: "Plan - 4",
      price: "Rs.9899/-",
      features: [
        "Free .Com Domain – 1 Year",
        "Free High Speed Private Hosting – 1 Year",
        "Unlimited Products Category",
        "Free Android web App",
        "Free Yoast Premium SEO 1-Yr",
        "Premium Design theme",
        "Admin panel & SSL certificate",
        "Unlimited Products",
        "Social Media integration",
        "Payment Gateway Integration",
        "Shipping and live Tracking",
        "Whatsapp Live Chat",
        "5 Free Domain Mail ID",
        "Life Time Support",
        "Affiliate Manager",
      ],
      extra: ["Next year Renewal Rs.4300/-"],
    },
    {
      title: "Plan - 5",
      price: "Rs.14899/- ",
      features: [
        "1 Month Insta & FB Ads",
        "Free .Com Domain – 1 Year",
        "Free Shared Hosting – 1 Year",
        "Unlimited Products Category",
        "Free Android web App",
        "Free Yoast Premium SEO 1-Yr",
        "Premium Design theme",
        "Admin panel & SSL certificate",
        "Unlimited Products",
        "Social Media integration",
        "Payment Gateway Integration",
        "Shipping and live Tracking",
        "Whatsapp Live Chat",
        "5 Free Domain Mail ID",
        "Life Time Support",
      ],
      extra: ["Next year Renewal Rs.4300/-"],
    },
    {
      title: "Plan - 6",
      price: "Rs.37,899/-",
      features: [
        "Free .Com Domain – 1 Year",
        "Free Shared Hosting – 1 Year",
        "Unlimited Products Category",
        "Play store Android web App",
        "Apple store iOs web App",
        "Free Yoast Premium SEO 1-Yr",
        "Premium Design theme",
        "Admin panel & SSL certificate",
        "Unlimited Products",
        "Social Media integration",
        "Payment Gateway Integration",
        "Shipping and live Tracking",
        "Whatsapp Live Chat",
        "5 Free Domain Mail ID",
        "Life Time Support",
        "Affiliate Manager",
      ],
      extra: ["Next year Renewal Rs.19,000/-"],
    },
  ];
const Plans = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-12 text-center"
      >
        <span className="text-bllue">W</span>ordpress
      </motion.h1>
      <div className=" p-3 md:p-[26px] ">
        <img
          src="/wordpress.png"
          className="rounded-xl w-full h-64 "
          alt="wordpress"
        />
      </div>
      {/* para */}
      <section className="py-12 px-4 md:px-8 rounded-lg ">
      <h2 className="text-2xl md:text-4xl font-bold text-bllue mb-6 text-center">
        Why Choose WordPress for Your Website?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
        WordPress powers over 40% of the web, offering unparalleled flexibility
        and scalability for websites of all sizes. As a robust content
        management system, it allows you to manage your content effortlessly
        while providing a vast ecosystem of plugins and themes to customize
        your site to meet your unique needs.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
        Whether you're building a simple blog or a complex e-commerce platform,
        WordPress seamlessly integrates with modern frameworks like Next.js,
        giving you the speed, security, and SEO capabilities you need for
        success.
      </p>
    </section>
    <div className=" mx-auto p-6">
      <h2 className="md:text-3xl text- text-dark dark:text-light font-bold text-center mb-6"> <span className="text-bllue">WordPress</span>  Website Plans</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
      {plans.map((plan, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-md text-dark dark:text-light bg-bllue/20 hover:bg-bllue/40">
          <div className="text-2xl font-semibold flex justify-between">
            <h3>
            {plan.title}
            </h3>
              {plan.price}
            </div>
          <ul className="list-disc pl-5 mt-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-200">👉 {feature}</li>
            ))}
          </ul>
          <div className="mt-3 text-sm text-red-500">
            {plan.extra.map((item, i) => (
              <p key={i}>💸 {item}</p>
            ))}
          </div>
        </div>
      ))}
      </div>
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
    </>
  );
};

export default Plans;

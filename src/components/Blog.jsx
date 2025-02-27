"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight, ArrowDownCircle, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    slug: "seo-work-why-its-crucial-for-your-online-presence",
    title: "SEO Work: Why It's Crucial for Your Online Presence",
    author: "Alice Johnson",
    date: "2025-02-28",
    image:
      "https://cdn.shopify.com/s/files/1/0840/8370/3830/articles/1603954182-seo-article-header.png?v=1714646999",
    description:
      "Learn why SEO is a key element for building a successful online presence.",
  },
  {
    id: 2,
    slug: "create-a-website-and-why-its-important",
    title: "Create a Website and Why It's Important",
    author: "Ethan Clark",
    date: "2025-02-25",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    description:
      "Understand the process of creating a website and its significance in today’s digital world.",
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600 dark:text-blue-400"
        >
          Our Blogs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-lg"
        >
          Explore in-depth insights and expert knowledge to take your business
          to the next level. Stay ahead with the latest trends in web
          development, digital marketing, and IT solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20 mt-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-md mx-auto  rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                By {blog.author} on {blog.date}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-3">
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Blogs Section */}
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
          Want to explore more articles? Check out our blog section for the
          latest updates and insights.
        </p>
        <Link
          href="/blog"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Read More Blogs <ArrowRightCircle className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;

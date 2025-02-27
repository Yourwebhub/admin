"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogList() {
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
    {
      id: 3,
      slug: "app-development-the-path-to-building-successful-mobile-apps",
      title: "App Development: The Path to Building Successful Mobile Apps",
      author: "Mia Taylor",
      date: "2025-02-22",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7fJWCsHehELVDodP1RaKU-j2H2jzmcQq2Q&s",
      description:
        "Explore the world of app development and why it's key to building innovative and functional mobile apps.",
    },
    {
      id: 4,
      slug: "the-role-of-marketing-in-business-growth",
      title: "The Role of Marketing in Business Growth",
      author: "Lucas Reed",
      date: "2025-02-18",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGoLgYvEgaS7EknNB4oNJP_ob4xLWcmjH3Q&s",
      description:
        "Understand how marketing plays a pivotal role in business growth and sustainability.",
    },
    {
      id: 5,
      slug: "artificial-intelligence-in-marketing-the-future-of-customer-engagement",
      title:
        "Artificial Intelligence in Marketing: The Future of Customer Engagement",
      author: "Grace Williams",
      date: "2025-02-10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd-nJLogky4AJgSFS7mXCkvBSbJE80-vH9A&s",
      description:
        "Explore how artificial intelligence is revolutionizing marketing strategies and customer engagement.",
    },
    {
      id: 6,
      slug: "the-importance-of-data-security-in-the-digital-age",
      title: "The Importance of Data Security in the Digital Age",
      author: "Oliver White",
      date: "2025-02-05",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A_7JegnuGAubURtAnqpw1kCAPPCYwU6-yA&s",
      description:
        "Learn why data security is more critical than ever in today’s interconnected world.",

    },
    {
      id: 7,
      slug: "the-impact-of-virtual-reality-on-industries",
      title: "The Impact of Virtual Reality on Industries",
      author: "Lily Scott",
      date: "2025-02-01",
      image:
        "https://www.qad.com/blog/wp-content/uploads/2018/09/09.25.2018-min.jpg",
      description:
        "Explore how virtual reality is changing various industries, from healthcare to entertainment.",
    },
  ];

  return (
    <>
      <title>Our Blog | Insights & Updates from Your Web Hub</title>
      <meta
        name="description"
        content="Stay updated with the latest trends, insights, and news in web development, cloud services, and IT solutions from Your Web Hub."
      />
      <link rel="canonical" href="https://www.yourwebhub.store/blog" />

      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center"
        >
          <span className="text-bllue">R</span>eed Our Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:p-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-dark dark:text-light">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  By {blog.author} on {blog.date}
                </p>
                <p className="text-gray-700 text-sm">
                  {blog.description.substring(0, 100)}...
                </p>
                <Link href={`/blog/${blog.slug}`}>
                  <p className="text-blue-500 font-semibold mt-4 inline-block">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

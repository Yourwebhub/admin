import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

// This function generates the paths for all blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

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
    content: `
      <h2>Introduction</h2>
      <p>Search Engine Optimization (SEO) is a cornerstone of digital marketing. It involves optimizing your website to rank higher on search engines like Google.</p>
      <h2>Why SEO is Important</h2>
      <p>With millions of websites on the internet, standing out in search results is crucial. SEO ensures your website is visible to potential customers.</p>
      <h2>Components of SEO</h2>
      <p>SEO comprises on-page factors like content optimization and off-page factors such as link-building. Both work together to improve your ranking.</p>
      <h2>Best Practices</h2>
      <p>Some SEO best practices include using relevant keywords, optimizing your website’s speed, ensuring mobile-friendliness, and creating quality content.</p>
      <h2>Conclusion</h2>
      <p>SEO is an ongoing process that helps improve your site’s visibility and attracts organic traffic, ultimately leading to increased conversions and growth.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>In today’s digital landscape, having an online presence is essential for businesses and individuals alike. A website acts as the cornerstone of your online identity.</p>
      <h2>Why You Need a Website</h2>
      <p>A website is a powerful tool for marketing, communication, and establishing credibility. It allows customers to find you online and learn more about your products or services.</p>
      <h2>Steps to Create a Website</h2>
      <p>Creating a website involves several steps, including choosing a domain name, selecting a hosting provider, designing the layout, and adding relevant content.</p>
      <h2>Importance of User Experience</h2>
      <p>The design and user experience (UX) of your website are crucial to retaining visitors. A clean, easy-to-navigate design encourages users to explore and take action.</p>
      <h2>Conclusion</h2>
      <p>Creating a website is an investment that pays off by helping you reach a global audience, build trust, and drive conversions.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>App development is a dynamic and growing field that allows businesses to offer services, products, or content directly to users' smartphones and tablets.</p>
      <h2>Types of Apps</h2>
      <p>There are different types of apps: native apps, web apps, and hybrid apps. Each has its advantages depending on the intended purpose and platform.</p>
      <h2>Development Process</h2>
      <p>The app development process includes several stages, such as ideation, design, development, testing, and deployment. It's essential to follow a structured process to ensure success.</p>
      <h2>Key Considerations</h2>
      <p>Performance, security, and user experience are critical factors in app development. Focusing on these areas ensures your app delivers value to users and stands out in the competitive market.</p>
      <h2>Conclusion</h2>
      <p>App development offers businesses a chance to engage with their audience on a more personal level. With proper planning and execution, mobile apps can drive growth and customer loyalty.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>Marketing is essential to building and growing any business. It involves understanding customer needs and promoting products or services in a way that adds value.</p>
      <h2>Types of Marketing</h2>
      <p>Traditional marketing includes TV and print advertisements, while digital marketing utilizes channels like social media, email, and SEO. Both strategies are important for different target audiences.</p>
      <h2>Building a Marketing Strategy</h2>
      <p>A successful marketing strategy starts with understanding your audience, setting clear goals, and choosing the right channels to reach your target customers.</p>
      <h2>Challenges in Marketing</h2>
      <p>With increasing competition and shifting consumer behavior, businesses must adapt to new trends and technologies to remain relevant and stand out in a crowded marketplace.</p>
      <h2>Conclusion</h2>
      <p>Effective marketing is a key driver of business growth, helping to create awareness, build customer loyalty, and generate sales.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence (AI) is transforming the marketing landscape, allowing businesses to deliver personalized experiences and better customer engagement.</p>
      <h2>AI-Powered Marketing Tools</h2>
      <p>AI can be used in marketing for predictive analytics, chatbots, recommendation engines, and content generation. These tools help brands engage customers more effectively.</p>
      <h2>Personalization at Scale</h2>
      <p>AI enables brands to personalize content for customers, ensuring that each interaction feels relevant and tailored to individual needs.</p>
      <h2>Challenges and Ethical Considerations</h2>
      <p>While AI offers significant advantages, it also raises concerns regarding data privacy and bias. Companies must ensure ethical use of AI in their marketing strategies.</p>
      <h2>Conclusion</h2>
      <p>AI is not just a trend but a game-changer for marketing, helping businesses build stronger connections with their customers and create more effective campaigns.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>As the digital world evolves, protecting sensitive information has become one of the highest priorities for businesses and individuals alike.</p>
      <h2>Types of Data Security</h2>
      <p>Data security includes various measures such as encryption, multi-factor authentication, and network protection to prevent unauthorized access.</p>
      <h2>Cybersecurity Threats</h2>
      <p>Cyber threats are becoming more sophisticated. Malware, ransomware, and phishing attacks are just a few of the risks businesses face.</p>
      <h2>Building a Data Security Strategy</h2>
      <p>A strong data security strategy involves regular software updates, employee training, and securing both physical and digital access to sensitive information.</p>
      <h2>Conclusion</h2>
      <p>Data security is an ongoing effort that requires constant attention. By prioritizing it, businesses can protect themselves from financial loss, reputational damage, and legal consequences.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>Virtual Reality (VR) is no longer just for gaming. It's increasingly being used in healthcare, education, entertainment, and even marketing to create immersive experiences.</p>
      <h2>Applications of VR</h2>
      <p>In healthcare, VR is used for surgical training and patient rehabilitation. In marketing, brands are leveraging VR for immersive product experiences.</p>
      <h2>Challenges of VR</h2>
      <p>Despite its potential, VR adoption faces challenges such as high costs, the need for specialized equipment, and the development of realistic, high-quality content.</p>
      <h2>Future of VR</h2>
      <p>As technology advances, VR is expected to become more affordable and accessible, with broader applications in training, remote work, and entertainment.</p>
      <h2>Conclusion</h2>
      <p>VR is transforming how we experience the world around us. It’s poised to revolutionize industries by creating deeper, more engaging interactions.</p>
    `,
  },
];
// Server component for the blog post
export default function BlogPage({ params }) {
  const { slug } = params;
  const currentBlog = blogs.find((blog) => blog.slug === slug);
  const relatedBlogs = blogs.filter((blog) => blog.slug !== slug); 

  // Find the blog post by slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog not found</p>; // You can replace this with a custom 404 page
  }

  return (
    <>
      <Head>
        <title>{blog.title} | IT Blog</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourwebhub.store/blog/${blog.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className=" text-gray-800 dark:text-gray-100 min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-16 py-10">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="p-6 lg:p-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-800 text-left mb-4">
                {blog.title}
              </h2>
              {/* Title */}

              {/* Author and Date */}
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300  mb-6">
                By <span className="font-semibold">{blog.author}</span> on{" "}
                {blog.date}
              </p>
            </div>
            <div className="w-full flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <img
                src={blog.image}
                alt={`Image for ${blog.title}`}
                className="w-full  h-auto object-cover rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-gray-200 text-gray-800 text-left mb-4">
                {blog.description}
              </h3>

              {/* Blog Content */}
              <div
                className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </main>
      </div>
      {/* Read More Blogs */}
      <div className="text-gray-800 dark:text-gray-100 container mx-auto px-4 sm:px-6 lg:px-24 py-10 ">
        <div className="">

        <h3 className="text-xl font-semibold mb-4">Read More Blogs</h3>
        <ol className="list-decimal  space-y-2">
  {relatedBlogs.length > 0 ? (
    relatedBlogs.map((b) => (
      <li key={b.id} className=" ">
        <Link href={`/blog/${b.slug}`} className="flex items-center space-x-2">
          <p className="hover:underline text-blue-600">{b.title}</p>  
          <ArrowRight />
        </Link>
      </li>
    ))
  ) : (
    <p>No other blogs available</p>
  )}
</ol>

          </div>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  const pricingData = [
    {
      title: "Healthcare Apps",
      description: "Feature-rich healthcare solutions for patient management and telemedicine.",
      priceRange: "₹15,000 - ₹40,000",
    },
    {
      title: "Finance Apps",
      description: "Secure and efficient financial applications with seamless transactions.",
      priceRange: "₹20,000 - ₹30,000",
    },
    {
      title: "Food Apps",
      description: "On-demand food delivery and restaurant management solutions.",
      priceRange: "₹25,000 - ₹65,000",
    },
    {
      title: "Education Apps",
      description: "E-learning platforms with interactive and engaging features.",
      priceRange: "₹35,000 - ₹40,000",
    },
    {
      title: "Entertainment Apps",
      description: "Streaming and interactive content apps for endless entertainment.",
      priceRange: "₹15,000 - ₹80,000",
    },
    {
      title: "E-Commerce Apps",
      description: "Robust online shopping solutions with secure payment integration.",
      priceRange: "₹45,000 - ₹1,55,000",
    },
    {
      title: "Travel Apps",
      description: "Comprehensive travel booking and itinerary management applications.",
      priceRange: "₹15,000 - ₹50,000",
    },
    {
      title: "Booking Apps",
      description: "Easy-to-use booking applications for various industries.",
      priceRange: "₹15,000 - ₹80,000",
    },
    {
      title: "Social Media Apps",
      description: "Engaging platforms for networking, sharing, and communication.",
      priceRange: "₹50,000 - ₹65,000",
    },
    {
      title: "Mobile Game Apps",
      description: "Exciting gaming applications with interactive features and multiplayer support.",
      priceRange: "₹20,000 - ₹65,000",
    },
    {
      title: "Real Estate Apps",
      description: "Smart property listing and management solutions.",
      priceRange: "₹35,000 - ₹65,000",
    },
    {
      title: "Sports & Fitness Apps",
      description: "Health tracking, workout planning, and sports management solutions.",
      priceRange: "₹35,000 - ₹65,000",
    },
  ];

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-12 text-center"
      >
        <span className="text-bllue">A</span>pp Development
      </motion.h1>
      <div className=" md:p-[26px] hidden md:block">
        <img
          src="app.webp"
          className="rounded-xl "
          alt="mobile app development"
        />
      </div>
      <div className=" p-3 block md:hidden">
        <img
          src="app.webp"
          className="rounded-xl   border border-red-500 object-cover"
          alt="mobile app development"
        />
      </div>

      {/* detail--------------------------------------------- */}
      <div className=" text-dark dark:text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-8">
            Unlock the Future of Mobile App Development with React Native &
            Kotlin
          </h2>

          {/* Introduction */}
          <p className="text-lg mb-12">
            At <span className="font-bold">your web hub</span>, we specialize in
            crafting high-performance, native-like mobile applications for both
            iOS and Android platforms. By leveraging{" "}
            <span className="text-blue-400">React Native</span> for
            cross-platform apps and{" "}
            <span className="text-blue-400">Kotlin</span> for Android
            development, we ensure your app delivers seamless user experiences,
            fast performance, and exceptional functionality.
          </p>

          {/* Why Choose Section */}
          <section className="mb-16">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-6">
              Why Choose React Native and Kotlin for Your App?
            </h3>
            <p className="text-lg mb-8">
              React Native and Kotlin are two powerful tools that allow us to
              create apps that are not only visually stunning but also highly
              functional. Here's why you should choose them:
            </p>
          </section>

          {/* React Native Section */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              React Native: Build Cross-Platform Apps with Ease
            </h3>
            <p className="mb-6">
              React Native is an open-source JavaScript framework developed by
              Facebook that allows developers to build cross-platform mobile
              apps using a single codebase. It provides the best of both worlds:
              the ability to write code once and deploy it on both iOS and
              Android, without compromising on performance or user experience.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Cross-Platform Development:
                </h3>
                <p>
                  Save time and resources by building both iOS and Android apps
                  with a single codebase.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">Rich Ecosystem:</h3>
                <p>
                  Benefit from a vast library of pre-built components, plugins,
                  and libraries to speed up development.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Native Performance:
                </h3>
                <p>
                  React Native provides near-native performance, ensuring that
                  your app runs smoothly and efficiently on both platforms.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">Faster Updates:</h3>
                <p>
                  Quickly roll out updates and patches without going through app
                  store approvals every time.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold">
                Our React Native development services include:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <span className="font-semibold">Custom Mobile Apps:</span>{" "}
                  Tailored apps that meet your unique business requirements and
                  deliver excellent user experiences.
                </li>
                <li>
                  <span className="font-semibold">App Optimization:</span>{" "}
                  Improve your app's performance, loading time, and
                  responsiveness.
                </li>
                <li>
                  <span className="font-semibold">
                    Third-Party Integrations:
                  </span>{" "}
                  Integrate with various APIs, payment systems, and third-party
                  services to add functionality to your app.
                </li>
                <li>
                  <span className="font-semibold">Cross-Platform Support:</span>{" "}
                  Reach a wider audience with apps that work seamlessly on both
                  Android and iOS.
                </li>
              </ul>
            </div>
          </section>

          {/* Kotlin Section */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              Kotlin: Native Android Development at Its Best
            </h3>
            <p className="mb-6">
              Kotlin is the official programming language for Android
              development, recommended by Google. It's designed to work
              seamlessly with Android Studio and offers modern features for
              creating highly performant, secure, and intuitive native Android
              apps.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Native Android Experience:
                </h3>
                <p>
                  Kotlin enables you to take full advantage of Android's
                  features and performance, providing an authentic native app
                  experience.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Faster Development:
                </h3>
                <p>
                  Kotlin's concise syntax and modern features like null safety,
                  coroutines, and extension functions reduce development time
                  and increase productivity.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Interoperability:
                </h3>
                <p>
                  Kotlin is fully interoperable with Java, allowing you to
                  leverage existing codebases while building new functionality.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Enhanced Security:
                </h3>
                <p>
                  With Kotlin's strong type system and null safety, your app's
                  security and reliability are guaranteed.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold">
                Our Kotlin development services include:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <span className="font-semibold">Custom Android Apps:</span>{" "}
                  High-quality Android apps designed for performance, security,
                  and usability.
                </li>
                <li>
                  <span className="font-semibold">Android UI/UX Design:</span>{" "}
                  Beautiful, intuitive, and user-friendly designs that enhance
                  the user experience.
                </li>
                <li>
                  <span className="font-semibold">
                    App Maintenance & Support:
                  </span>{" "}
                  Regular updates, bug fixes, and ongoing improvements for your
                  Android app.
                </li>
                <li>
                  <span className="font-semibold">
                    Performance Optimization:
                  </span>{" "}
                  Ensure your Android app is fast, responsive, and
                  energy-efficient.
                </li>
              </ul>
            </div>
          </section>

          {/* Why Partner Section */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              Why Partner with Us?
            </h3>
            <p className="mb-6">
              At <span className="font-bold">your web hub</span>, we are
              passionate about building apps that not only look great but also
              perform exceptionally well. Here's why our clients choose us:
            </p>

            <div className="grid gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Expert Developers:
                </h3>
                <p>
                  Our team consists of experienced developers skilled in both
                  React Native and Kotlin, ensuring the highest level of
                  expertise in mobile app development.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Agile Development Process:
                </h3>
                <p>
                  We follow agile methodologies to ensure your project
                  progresses smoothly, with regular feedback, iterations, and
                  improvements.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Custom Solutions:
                </h3>
                <p>
                  We take the time to understand your business and tailor our
                  solutions to your specific needs, ensuring your app stands out
                  in the marketplace.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Cross-Platform Expertise:
                </h3>
                <p>
                  Whether you need a cross-platform app using React Native or a
                  native Android solution with Kotlin, we have the tools and
                  knowledge to deliver high-quality products.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-400">
                  Post-Launch Support:
                </h3>
                <p>
                  We don't just build your app and walk away. Our team offers
                  ongoing support and maintenance, ensuring your app stays up to
                  date and performs optimally.
                </p>
              </div>
            </div>
          </section>
{/* Pricing  */}
<section>
<div className="container mx-auto px-4 py-10">
<h2 className="text-3xl font-bold text-center mb-8">
    Our <span className="text-blue-500">App development Packages</span>
  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingData.map((item, index) => (
          <div key={index} className="p-8 shadow-xl rounded-2xl border border-gray-300  transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <span className="text-xl font-bold  text-blue-700">{item.priceRange}</span>
          </div>
        ))}
      </div>
    </div>
</section>
          {/* Call to Action */}
          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="mb-8">
              If you're looking to build a high-performance, feature-rich mobile
              app, <span className="font-bold">your web hub</span> is here to
              help. Whether you need a cross-platform solution with React Native
              or a native Android app with Kotlin, we have the skills and
              experience to turn your vision into reality.
            </p>
            <Link href={"/proposal"} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Contact us today
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;

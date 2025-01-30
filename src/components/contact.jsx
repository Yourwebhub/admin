"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [emailError, setEmailError] = useState(""); // Added email error state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear the error if valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError) {
      setResponseMessage("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitted(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>

      <div className="overflow-hidden">
        <div className="container mx-auto px-10 md:px-20 py-12">
          <div className=" mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{  duration: 0.9 }}
             viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
              <span className="text-bllue">C</span>ontact us
            </motion.h1>

            <div className="flex md:flex-row flex-col gap-20 items-center w-full">
              {/* Form */}
              {isSubmitted ? (
                <>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center text-bllue text-2xl font-semibold h-[26vh] flex justify-center items-center"
>
  Thank you for your message! We&apos;ll contact you shortly!
</motion.div>

                </>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="space-y-6  md:w-[45%]">
                    <motion.div initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.5 }}
             viewport={{ once: true }}>
                      <label
                        htmlFor="name"
                        className="block text-md md:text-lg font-medium text-bllue mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border p-3 rounded-xl border-dark dark:border-light text-dark dark:text-light placeholder:text-gray-500"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.7,delay:0.2 }}
             viewport={{ once: true }}>
                      <label
                        htmlFor="email"
                        className="block text-md md:text-lg font-medium text-bllue mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border p-3 rounded-xl border-dark dark:border-light text-dark dark:text-light placeholder:text-gray-500"
                      />
                      {emailError && (
                        <p className="text-md md:text-lg text-red-500 mt-1">
                          {emailError}
                        </p>
                      )}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.9 , delay:0.4 }}
             viewport={{ once: true }}>
                      <label
                        htmlFor="message"
                        className="block text-md md:text-lg font-medium text-bllue mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Enter your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px] bg-transparent border p-3 rounded-xl border-dark dark:border-light text-dark dark:text-light placeholder:text-gray-500"
                      />
                    </motion.div>

                    <motion.button
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{  duration: 1.2, delay:0.6 }}
                    viewport={{ once: true }}
                      type="submit"
                      className="w-full bg-bllue p-4 rounded-xl hover:bg-blue-600 text-white"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                </>
              )}

              {/* Illustration */}
              <motion.div initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{  duration: 0.9 }}
             viewport={{ once: true }} className="">
                <img
                  src="contact.svg"
                  alt="Contact illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority="true"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;





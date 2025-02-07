"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

const DeveloperAddForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    designation: "",
    image: "",
    desc: "",
    category: "WD", // Default category
    portfolio: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [tempImage, setTempImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!formData.fullName || !formData.email) {
      setError("Full Name and Email are required.");
      setLoading(false);
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/api/developers",
        { ...formData, image: tempImage },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Developer added successfully!");

      // Reset the form and temp image
      setFormData({
        fullName: "",
        email: "",
        location: "",
        designation: "",
        desc: "",
        category: "WD",
        portfolio: "",
      });
      setTempImage("");
      setTimeout(() => {
        router.push("/web-hub/developers");
      }, 3000);
    } catch (error) {
      console.error(
        "Error adding developer:",
        error.response?.data || error.message
      );
      toast.error("Failed to add developer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-[#dedbdb]   p-4 w-full flex justify-between items-center ">
        <h2 className="text-xl font-semibold">
          Add <span className="text-bllue">Developer</span>
        </h2>
        <button></button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 mx-auto max-w-3xl">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Image Upload */}
        <div className="text-center">
          <label className="block text-sm font-medium text-blue-600 mb-2">
            Profile Image
          </label>
          <CldUploadWidget
            uploadPreset="web-hub"
            onSuccess={(results) => {
              if (results.info?.secure_url && results.event === "success") {
                setTempImage(results.info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <div
                className="relative w-40 h-40 mx-auto border border-dashed rounded-md overflow-hidden cursor-pointer"
                onClick={open}
              >
                <img
                  src={tempImage || "/user.webp"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {tempImage && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setTempImage("");
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white text-lg w-6 h-6 rounded-full flex items-center justify-center"
                  >
                    &times;
                  </button>
                )}
              </div>
            )}
          </CldUploadWidget>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-blue-600">
              Bio
            </label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            >
              <option value="WD">Web Developer </option>
              <option value="MK">Marketing </option>
              <option value="SE">SEO </option>
              <option value="AP">App Developer </option>
              <option value="WP">WordPress Developer </option>
              <option value="DT">Director </option>
            </select>
          </div>

          {/* Portfolio URL */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Portfolio URL
            </label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            {loading ? "Adding Developer..." : "Add Developer"}
          </button>
        </div>
      </form>
    </>
  );
};

export default DeveloperAddForm;

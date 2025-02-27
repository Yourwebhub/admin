"use client";
import { useState } from "react";
import Select from "react-select";
import currencyCodes from "currency-codes";
import countries from "world-countries";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function OrderForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    country: "",
    currency: "USD",
    projectLength: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    "Web Development",
    "App Development",
    "wordpress Development",
    "SEO",
    "Digital Marketing",
  ];

  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    currency: country.currencies
      ? Object.keys(country.currencies)[0]
      : "USD", // Fallback to USD if undefined
  }));
  

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const currencyOptions = currencyCodes.data.map((currency) => ({
    value: currency.code,
    label: `${currency.code} - ${currency.currency}`,
  }));


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
const router = useRouter()

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your order has been placed successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "",
          country: "",
          currency: "USD",
          projectLength: "",
          budget: "",
        });
        router.push("/")
      } else {
        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster/>
    <div className="  text-bllue p-6">
      <form onSubmit={handleSubmit} className=" mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border dark:border-light border-gray-800 rounded-lg"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border dark:border-light border-gray-800 rounded-lg"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border dark:border-light border-gray-800 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border dark:border-light border-gray-800 rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Service</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <Select
              options={countryOptions}
              onChange={(selected) =>
                handleChange("country", selected.label) ||
                handleChange("currency", selected.currency)
              }
              className="text-black"
              placeholder="Select your country"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Project Length (Days)</label>
            <input
              type="text"
              name="projectLength"
              value={formData.projectLength}
              onChange={(e) => handleChange("projectLength", e.target.value)}
              className="w-full px-4 py-3 bg-transparent border dark:border-light border-gray-800 rounded-lg"
              placeholder="Enter project length"
              required
              min="1"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Budget</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                className=" px-4 py-3 bg-transparent text-bllue dark:border-light border border-gray-800 rounded-lg"
                placeholder="Enter budget"
                required
              />
              <Select
                id="currency"
                options={currencyOptions}
                onChange={(selected) => handleChange("currency", selected.value)}
                value={currencyOptions.find(
                  (option) => option.value === formData.currency
                )}
                className="text-bllue flex-grow w-full whitespace-nowrap"
                placeholder="Select Currency"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-lg ${
            loading ? "bg-gray-600" : "bg-bllue hover:bg-blue-600"
          } text-white font-medium`}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
    </>
  );
}

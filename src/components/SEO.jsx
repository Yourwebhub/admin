"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);

  const seoPackages = [
    {
      name: "Bronze SEO",
      priceUSD: "$57",
      priceINR: "₹5000",
      keywords: "Up to 5",
      duration: "3 Months",
      pages: "7 Web Pages",
      features: {
        "On-Page Optimization": "✅",
        "Optimized Meta Tag": "✅",
        "Keyword Research": "✅",
        "H1 / H2 Tag Optimization": "✅",
        "Anchor Tag Optimization": "✅",
        "Image Tag Optimization": "✅",
        "SEO Friendly URL Optimization": "✅",
        "Contact Optimization": "✅",
        "Website Validation": "✅",
        "Sitemap Integration and Submission": "✅",
        "Robot.txt Optimization": "✅",
        "Website Speed Analysis": "✅",
        "Internal Web Page Linking": "✅",
        "Daily Content Updates": "❌",
        "Manual Directory Submission": 50,
        "Social Bookmarking": 10,
        "Manual Classified Ad Posting": 10,
        "Blog Creation": "❌",
        "Google Local Listing": "❌",
        "Article Submission": 10,
        "Forum Posting": "❌",
        "Video Optimization": "1 PM",
        "Facebook Fan Page Creation": "❌",
        "Facebook Page Banner Design": "❌",
        "Facebook Like Integration": "❌",
        "Twitter Account Creation": "❌",
        "Twitter Page Banner Design": "❌",
        "SEO Analysis Report": "✅",
        "Monthly Work Report": "✅",
        // "Customer Support": {
        //   Telephone: "❌",
        //   Email: "✅",
        // },
      },
    },
    {
      name: "Silver SEO",
      priceUSD: "$103",
      priceINR: "₹9000",
      keywords: "Up to 10",
      duration: "6 Months",
      pages: "15 Web Pages",
      features: {
        "On-Page Optimization": "✅",
        "Optimized Meta Tag": "✅",
        "Keyword Research": "✅",
        "H1 / H2 Tag Optimization": "✅",
        "Anchor Tag Optimization": "✅",
        "Image Tag Optimization": "✅",
        "SEO Friendly URL Optimization": "✅",
        "Contact Optimization": "✅",
        "Website Validation": "✅",
        "Sitemap Integration and Submission": "✅",
        "Robot.txt Optimization": "✅",
        "Website Speed Analysis": "✅",
        "Internal Web Page Linking": "✅",
        "Daily Content Updates": "❌",
        "Manual Directory Submission": 100,
        "Social Bookmarking": 25,
        "Manual Classified Ad Posting": 20,
        "Blog Creation": "✅",
        "Google Local Listing": "❌",
        "Article Submission": 15,
        "Forum Posting": "❌",
        "Video Optimization": "1 PM",
        "Facebook Fan Page Creation": "✅",
        "Facebook Page Banner Design": "✅",
        "Facebook Like Integration": "✅",
        "Twitter Account Creation": "❌",
        "Twitter Page Banner Design": "❌",
        "SEO Analysis Report": "✅",
        "Monthly Work Report": "✅",
        // "Customer Support": {
        //   Telephone: "✅",
        //   Email: "✅",
        // },
      },
    },
    {
      name: "Gold SEO",
      priceUSD: "$172",
      priceINR: "₹15000",
      keywords: "Up to 20",
      duration: "6 Months",
      pages: "25 Web Pages",
      features: {
        "On-Page Optimization": "✅",
        "Optimized Meta Tag": "✅",
        "Keyword Research": "✅",
        "H1 / H2 Tag Optimization": "✅",
        "Anchor Tag Optimization": "✅",
        "Image Tag Optimization": "✅",
        "SEO Friendly URL Optimization": "✅",
        "Contact Optimization": "✅",
        "Website Validation": "✅",
        "Sitemap Integration and Submission": "✅",
        "Robot.txt Optimization": "✅",
        "Website Speed Analysis": "✅",
        "Internal Web Page Linking": "✅",
        "Daily Content Updates": "✅",
        "Manual Directory Submission": 200,
        "Social Bookmarking": 50,
        "Manual Classified Ad Posting": 40,
        "Blog Creation": "✅",
        "Google Local Listing": "✅",
        "Article Submission": 25,
        "Forum Posting": "✅",
        "Video Optimization": "1 PM",
        "Facebook Fan Page Creation": "✅",
        "Facebook Page Banner Design": "✅",
        "Facebook Like Integration": "✅",
        "Twitter Account Creation": "✅",
        "Twitter Page Banner Design": "✅",
        "SEO Analysis Report": "✅",
        "Monthly Work Report": "✅",
        // "Customer Support": {
        //   Telephone: "✅",
        //   Email: "✅",
        // },
      },
    },
    {
      name: "Platinum SEO",
      priceUSD: "$516",
      priceINR: "₹45000",
      keywords: "Up to 50",
      duration: "6 Months",
      pages: "80 Web Pages",
      features: {
        "On-Page Optimization": "✅",
        "Optimized Meta Tag": "✅",
        "Keyword Research": "✅",
        "H1 / H2 Tag Optimization": "✅",
        "Anchor Tag Optimization": "✅",
        "Image Tag Optimization": "✅",
        "SEO Friendly URL Optimization": "✅",
        "Contact Optimization": "✅",
        "Website Validation": "✅",
        "Sitemap Integration and Submission": "✅",
        "Robot.txt Optimization": "✅",
        "Website Speed Analysis": "✅",
        "Internal Web Page Linking": "✅",
        "Daily Content Updates": "✅",
        "Manual Directory Submission": 300,
        "Social Bookmarking": 60,
        "Manual Classified Ad Posting": 60,
        "Blog Creation": "✅",
        "Google Local Listing": "✅",
        "Article Submission": 50,
        "Forum Posting": "✅",
        "Video Optimization": "1 PM",
        "Facebook Fan Page Creation": "✅",
        "Facebook Page Banner Design": "✅",
        "Facebook Like Integration": "✅",
        "Twitter Account Creation": "✅",
        "Twitter Page Banner Design": "✅",
        "SEO Analysis Report": "✅",
        "Monthly Work Report": "✅",
        // "Customer Support": {
        //   Telephone: "✅",
        //   Email: "✅",
        // },
      },
    },
  ];
  const handlePackageChange = (event) => {
    setSelectedPackageIndex(Number(event.target.value));
  };

  return (
<div className="p-4 md:p-8">
  <h2 className="text-3xl font-bold text-center mb-8">
    Our <span className="text-blue-500">SEO Packages</span>
  </h2>

  {/* Dropdown for mobile */}
  <div className="mb-4 text-center md:hidden">
    <label htmlFor="package-select" className="mr-2 font-semibold">
      Select Package:
    </label>
    <select
      id="package-select"
      className="p-2 focus:outline-none rounded-md"
      value={selectedPackageIndex}
      onChange={handlePackageChange}
    >
      {seoPackages.map((pkg, index) => (
        <option key={index} value={index}>
          {pkg.name}
        </option>
      ))}
    </select>
  </div>

  {/* Responsive Table */}
  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-300 text-left">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="p-4 border border-gray-400 text-sm md:text-base">
            Features
          </th>
          {seoPackages.map((pkg, index) => (
            <th
              key={index}
              className={`p-4 border border-gray-400 text-center text-sm md:text-base ${
                index === selectedPackageIndex ? "block" : "hidden"
              } md:table-cell`}
            >
              {pkg.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* General Features */}
        <tr>
          <td className="p-4 border border-gray-400 text-xs md:text-sm">
            Keywords
          </td>
          {seoPackages.map((pkg, index) => (
            <td
              key={index}
              className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
                index === selectedPackageIndex ? "block" : "hidden"
              } md:table-cell`}
            >
              {pkg.keywords}
            </td>
          ))}
        </tr>
        <tr>
          <td className="p-4 border border-gray-400 text-xs md:text-sm">
          Recommended SEO Time Period
          </td>
          {seoPackages.map((pkg, index) => (
            <td
              key={index}
              className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
                index === selectedPackageIndex ? "block" : "hidden"
              } md:table-cell`}
            >
              {pkg.duration}
            </td>
          ))}
        </tr>
        <tr>
          <td className="p-4 border border-gray-400 text-xs md:text-sm">
            Pages
          </td>
          {seoPackages.map((pkg, index) => (
            <td
              key={index}
              className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
                index === selectedPackageIndex ? "block" : "hidden"
              } md:table-cell`}
            >
              {pkg.pages}
            </td>
          ))}
        </tr>

        {/* Dynamic Features */}
        {Object.keys(seoPackages[0].features).map((feature, featureIndex) => (
          <tr key={featureIndex}>
            <td className="md:p-4 border border-gray-400 text-xs md:text-sm p-2">
              {feature}
            </td>
            {seoPackages.map((pkg, index) => (
              <td
                key={index}
                className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
                  index === selectedPackageIndex ? "block" : "hidden"
                } md:table-cell`}
              >
                {pkg.features[feature] === "✅" ? (
                  <Check className="text-green-500 inline-block" />
                ) : (
                  <span className="">{pkg.features[feature]}</span>
                )}
              </td>
            ))}
          </tr>
        ))}

<tr>
  <td rowSpan={2} className="p-4 border border-gray-400 bg-blue-500 text-xs md:text-lg font-bold text-white">
  SEO packages Price
  </td>
  {seoPackages.map((pkg, index) => (
    <td
      key={index}
      className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
        index === selectedPackageIndex ? "block" : "hidden"
      } md:table-cell`}
    >
      {pkg.priceUSD}
    </td>
  ))}
</tr>
<tr>
  {seoPackages.map((pkg, index) => (
    <td
      key={index}
      className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
        index === selectedPackageIndex ? "block" : "hidden"
      } md:table-cell`}
    >
      {pkg.priceINR}
    </td>
  ))}
</tr>

      </tbody>
    </table>
  </div>
</div>

  );
};

export default PricingSection;





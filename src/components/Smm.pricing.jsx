import Link from "next/link";

export default function Pricing({basicRef, professionalRef,advancedRef}) {
  const basicFeatures = [
    { name: "Facebook Business Manager Set Up", available: true },
    { name: "Pixel Installation", available: false },
    { name: "Custom Conversion Creation", available: true },
    { name: "Remarketing", available: true },
    { name: "Custom Audience Creation", available: true },
    { name: "Creation Of Automated Rules", available: false },
    { name: "Facebook Analytics Report Creation", available: false },
    { name: "Ad Campaign Monitoring", available: true },
    { name: "Catalogue Creation", available: false },
    { name: "Dynamic Ads Creation", available: false },
    { name: "Instant Experience Ads Creation", available: false },
    { name: "Customization Of Ad Placements", available: false },
    { name: "A/B Testing Of Ad Set, Creative And Placement", available: false },
    { name: "Carousel And Collection Ads", available: false },
    { name: "Traffic Monitoring", available: true },
    { name: "Monthly Report", available: true },
    { name: "Audience Research", available: true },
    { name: "Instagram Ads Creative Creation & Design", available: true },
    { name: "Instagram Ads Monitoring And Management", available: true },
    { name: "Campaign Manager Account Set Up", available: true },
    { name: "LinkedIn Insight Tag Installation", available: false },
    { name: "Creation Of Custom Conversion", available: false },
    { name: "Ads Monitoring", available: true },
    { name: "Youtube Ad Account Set Up", available: true },
    { name: "Skippable In-Stream Ads", available: true },
    { name: "Non-Skippable In-Stream Ads", available: true },
    { name: "Bumper Ads", available: true },
    { name: "Discovery Ads", available: true },
    { name: "Youtube Video Sequence Ads", available: false },
    { name: "Detailed Audience Creation", available: false },
    { name: "A/B Testing Of Targeting", available: false },
    { name: "Remarketing Video Ads", available: false },
    { name: "Video Ads With Promotion Of Your Products", available: false },
    { name: "Tweet Engagement Ads", available: true },
    { name: "Video Or GIF View Ads", available: false },
    { name: "Awareness Ads", available: false },
    { name: "Website Conversion Ads", available: false },
    { name: "In-stream Video View Ads", available: false },
    { name: "Follower Ads", available: false },
    { name: "App Install Ads", available: false },
    { name: "App Reengagement", available: false },
    { name: "Audience Creation", available: true },
  ];

  const professionalFeatures = [
    { name: "Facebook Business Manager Set Up", available: true },
    { name: "Pixel Installation", available: true },
    { name: "Custom Conversion Creation", available: true },
    { name: "Remarketing", available: true },
    { name: "Custom Audience Creation", available: true },
    { name: "Creation Of Automated Rules", available: true },
    { name: "Facebook Analytics Report Creation", available: true },
    { name: "Ad Campaign Monitoring", available: true },
    { name: "Catalogue Creation", available: false },
    { name: "Dynamic Ads Creation", available: true },
    { name: "Instant Experience Ads Creation", available: true },
    { name: "Customization Of Ad Placements", available: true },
    { name: "A/B Testing Of Ad Set, Creative And Placement", available: true },
    { name: "Carousel And Collection Ads", available: true },
    { name: "Traffic Monitoring", available: true },
    { name: "Monthly Report", available: true },
    { name: "Audience Research", available: true },
    { name: "Instagram Ads Creative Creation & Design", available: true },
    { name: "Instagram Ads Monitoring And Management", available: true },
    { name: "Campaign Manager Account Set Up", available: true },
    { name: "LinkedIn Insight Tag Installation", available: true },
    { name: "Creation Of Custom Conversion", available: true },
    { name: "Ads Monitoring", available: true },
    { name: "Youtube Ad Account Set Up", available: true },
    { name: "Skippable In-Stream Ads", available: true },
    { name: "Non-Skippable In-Stream Ads", available: true },
    { name: "Bumper Ads", available: true },
    { name: "Discovery Ads", available: true },
    { name: "Youtube Video Sequence Ads", available: true },
    { name: "Detailed Audience Creation", available: true },
    { name: "A/B Testing Of Targeting", available: true },
    { name: "Remarketing Video Ads", available: false },
    { name: "Video Ads With Promotion Of Your Products", available: true },
    { name: "Tweet Engagement Ads", available: true },
    { name: "Video Or GIF View Ads", available: false },
    { name: "Awareness Ads", available: false },
    { name: "Website Conversion Ads", available: false },
    { name: "In-stream Video View Ads", available: false },
    { name: "Follower Ads", available: true },
    { name: "App Install Ads", available: false },
    { name: "App Reengagement", available: false },
    { name: "Audience Creation", available: true },
  ];

  const advancedFeatures = [
    { name: "Facebook Business Manager Set Up", available: true },
    { name: "Pixel Installation", available: true },
    { name: "Custom Conversion Creation", available: true },
    { name: "Remarketing", available: true },
    { name: "Custom Audience Creation", available: true },
    { name: "Creation Of Automated Rules", available: true },
    { name: "Facebook Analytics Report Creation", available: true },
    { name: "Ad Campaign Monitoring", available: true },
    { name: "Catalogue Creation", available: true },
    { name: "Dynamic Ads Creation", available: true },
    { name: "Instant Experience Ads Creation", available: true },
    { name: "Customization Of Ad Placements", available: true },
    { name: "A/B Testing Of Ad Set, Creative And Placement", available: true },
    { name: "Carousel And Collection Ads", available: true },
    { name: "Traffic Monitoring", available: true },
    { name: "Monthly Report", available: true },
    { name: "Audience Research", available: true },
    { name: "Instagram Ads Creative Creation & Design", available: true },
    { name: "Instagram Ads Monitoring And Management", available: true },
    { name: "Campaign Manager Account Set Up", available: true },
    { name: "LinkedIn Insight Tag Installation", available: true },
    { name: "Creation Of Custom Conversion", available: true },
    { name: "Ads Monitoring", available: true },
    { name: "Youtube Ad Account Set Up", available: true },
    { name: "Skippable In-Stream Ads", available: true },
    { name: "Non-Skippable In-Stream Ads", available: true },
    { name: "Bumper Ads", available: true },
    { name: "Discovery Ads", available: true },
    { name: "Youtube Video Sequence Ads", available: true },
    { name: "Detailed Audience Creation", available: true },
    { name: "A/B Testing Of Targeting", available: true },
    { name: "Remarketing Video Ads", available: true },
    { name: "Video Ads With Promotion Of Your Products", available: true },
    { name: "Tweet Engagement Ads", available: true },
    { name: "Video Or GIF View Ads", available: true },
    { name: "Awareness Ads", available: true },
    { name: "Website Conversion Ads", available: true },
    { name: "In-stream Video View Ads", available: true },
    { name: "Follower Ads", available: true },
    { name: "App Install Ads", available: true },
    { name: "App Reengagement", available: true },
    { name: "Audience Creation", available: true },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Header Section */}
      <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
    Social Media Marketing Pricing Packages
  </h2>
  <p className="text-gray-600 dark:text-gray-200 mt-2 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
    With RankON, you don’t have to worry about the return of your investment in SMM Services. Check out the detailed packages below to improve your social media presence.
  </p>
</div>


      {/* Pricing Cards Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center text-black">
        {/* Basic Plan */}
        <div ref={basicRef} className="bg-whit text-dark dark:text-light border rounded-lg shadow-lg p-6 w-full">
          <h3 className="text-xl font-bold text-center mb-4 text-bllue">Basic</h3>
          <p className="text-center text-lg font-semibold text-bllue mb-6">
            20,000 INR / 250 USD
          </p>
          <ul className="list-none space-y-2">
            {basicFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={
                    feature.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {feature.available ? "✔️" : "❌"}
                </span>
                <span className="ml-2">{feature.name}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link href={"/proposal"} className="bg-bllue/80 text-white px-4 py-2 rounded-lg hover:bg-bllue">
              Get Started Now!
            </Link>
          </div>
        </div>

        {/* Professional Plan */}
        <div ref={professionalRef} className="bg-whit text-dark dark:text-light border rounded-lg shadow-lg p-6 w-full">
          <h3 className="text-xl font-bold text-center mb-4 text-bllue">Professional</h3>
          <p className="text-center text-lg font-semibold text-bllue mb-6">
            40,000 INR / 500 USD
          </p>
          <ul className="list-none space-y-2">
            {professionalFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={
                    feature.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {feature.available ? "✔️" : "❌"}
                </span>
                <span className="ml-2">{feature.name}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link href={"/proposal"} className="bg-bllue/80 text-white px-4 py-2 rounded-lg hover:bg-bllue">
              Get Started Now!
            </Link>
          </div>
        </div>

        {/* Advanced Plan */}
        <div ref={advancedRef} className="bg-whit text-dark dark:text-light border rounded-lg shadow-lg p-6 w-full">
          <h3 className="text-xl font-bold text-center mb-4 text-bllue">Advanced</h3>
          <p className="text-center text-lg font-semibold text-bllue mb-6">
            75,000 INR / 900 USD
          </p>
          <ul className="list-none space-y-2">
            {advancedFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={
                    feature.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {feature.available ? "✔️" : "❌"}
                </span>
                <span className="ml-2">{feature.name}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link href={"/proposal"} className="bg-bllue/80 text-white px-4 py-2 rounded-lg hover:bg-bllue">
              Get Started Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

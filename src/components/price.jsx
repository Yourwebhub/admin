import { useEffect, useState } from "react";

const SeoPricingTable = ({ seoPackages, selectedPackageIndex }) => {
  const [exchangeRate, setExchangeRate] = useState(83); // Default exchange rate (approximate value)

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await response.json();
        setExchangeRate(data.rates.INR);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <table className="w-full border-collapse border border-gray-400">
      <tbody>
        <tr>
          <td rowSpan={2} className="p-4 border border-gray-400 bg-blue-500 text-xs md:text-lg font-bold text-white">
            SEO Packages Price
          </td>
          {seoPackages.map((pkg, index) => (
            <td
              key={index}
              className={`p-4 border border-gray-400 text-center text-xs md:text-sm ${
                index === selectedPackageIndex ? "block" : "hidden"
              } md:table-cell`}
            >
              {pkg.priceUSD} USD
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
              ₹{(pkg.priceUSD * exchangeRate).toFixed(2)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default SeoPricingTable;

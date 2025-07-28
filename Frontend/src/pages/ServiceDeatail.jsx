import { Highlighter } from "lucide-react";
import React from "react";
import { FaCheck, FaTextHeight, FaTimes } from "react-icons/fa";
import { SiGoland, SiGoldenline, SiGoldmansachs, SiPrime, SiPrimefaces, SiPrimereact } from "react-icons/si";

const packages = [
  {
    name: "Starter",
    price: "₹499",
    label: "For Individuals",
    highlight: false,
    services: {
      "Website Design": true,
      "Reel Editing": true,
      "SEO Boost": false,
      "Social Media Kit": false,
      "CGI Visuals": false,
      "Growth Strategy Call": false,
    },
  },
  {
    name: "Pro",
    price: "₹1499",
    label: "Most Popular",
    highlight: "purple",
    services: {
      "Website Design": true,
      "Reel Editing": true,
      "SEO Boost": true,
      "Social Media Kit": true,
      "CGI Visuals": false,
      "Growth Strategy Call": false,
    },
  },
  {
    name: "Gold",
    price: "₹2999",
    label: "Best Value",
    highlight: "gold",
    services: {
      "Website Design": true,
      "Reel Editing": true,
      "SEO Boost": true,
      "Social Media Kit": true,
      "CGI Visuals": true,
      "Growth Strategy Call": true,
    },
  },
];

const serviceList = [
  "Website Design",
  "Reel Editing",
  "SEO Boost",
  "Social Media Kit",
  "CGI Visuals",
  "Growth Strategy Call",
];

export default function ServicePackages() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 md:p-16 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-wide">
        🚀 Fuel Your Digital Growth
      </h2>
      <p className="text-center text-gray-400 mb-14 text-sm md:text-base">
        Affordable, powerful, and customizable plans to help you stand out
        online.
      </p>

      {/* Mobile Layout */}
      <div className="space-y-8 md:hidden">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 shadow-xl backdrop-blur border ${
              pkg.highlight === "gold"
                ? "bg-gradient-to-br from-yellow-700 via-amber-300 to-yellow-900 border-yellow-400 text-black"
                : pkg.highlight === "purple"
                ? "bg-gradient-to-br from-violet-700  to-purple-900 border-purple-900"
                : "bg-white/5 border-white/10"
            }`}>
            <h3 className="text-2xl font-bold text-center mb-1 flex items-center justify-center gap-2">
              {pkg.name}
              {pkg.name === "Gold" && (
                <span className="text-black-500"><SiPrimefaces/></span>
              )}
            </h3>
            {pkg.label && (
              <p className="text-center text-xs bg-yellow-300 text-black px-2 py-0.5 rounded-full inline-block mb-2">
                {pkg.label}
              </p>
            )}
            <p
              className={`text-center text-xl font-semibold mb-4 ${
                pkg.highlight === "gold" ? "text-black" : "text-green-400"
              }`}>
              {pkg.price}
            </p>
            <ul className="space-y-3 text-sm">
              {serviceList.map((service, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>{service}</span>
                  {pkg.services[service] ? (
                    <FaCheck className="text-green-400" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Custom Plan */}
        <div className="bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] border border-dashed border-violet-500 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Want Something Custom?
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Tailor your own package based on your needs. Let’s build your
            digital empire.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-full font-medium text-white">
            Customize Plan
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block overflow-x-auto mt-10">
        <div className="inline-grid grid-cols-[200px_repeat(3,1fr)] gap-4 min-w-[900px]">
          {/* Header Row */}
          <div></div>
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 text-center shadow-xl border ${
                pkg.highlight === "gold"
                  ? "bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-700 border-yellow-400 text-black"
                  : pkg.highlight === "purple"
                  ? "bg-gradient-to-br from-violet-700 to-purple-800 border-purple-500"
                  : "bg-white/5 border-white/10"
              }`}>
              <h3 className="text-xl font-bold mb-1 flex justify-center items-center gap-2">
                {pkg.name}
                {pkg.name === "Gold" && (
                  <span className="text-yellow-500"> </span>
                )}
              </h3>
              {pkg.label && (
                <p
                  className={`text-xs px-2 py-0.5 rounded-full inline-block mb-2 ${
                    pkg.highlight === "gold"
                      ? "bg-yellow-300 text-black"
                      : "bg-yellow-400 text-black"
                  }`}>
                  {pkg.label}
                </p>
              )}
              <p
                className={`text-2xl font-extrabold ${
                  pkg.highlight === "gold" ? "text-black" : "text-green-400"
                }`}>
                {pkg.price}
              </p>
            </div>
          ))}

          {/* Services Matrix */}
          {serviceList.map((service, sIdx) => (
            <React.Fragment key={sIdx}>
              <div className="text-left py-4 font-medium text-sm border-t border-white/10 text-white">
                {service}
              </div>
              {packages.map((pkg, pIdx) => (
                <div
                  key={pIdx}
                  className={`flex items-center justify-center border-t border-white/10 ${
                    pkg.highlight === "gold" ? "text-black" : "text-white"
                  }`}>
                  {pkg.services[service] ? (
                    <FaCheck className="text-green-400" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        All plans include 24/7 support, 1-on-1 onboarding, and one free
        revision.
        <br />
        ⚙️ Need a custom quote?{" "}
        <span className="text-violet-400 hover:underline cursor-pointer">
          Let’s talk
        </span>
      </div>
    </div>
  );
}

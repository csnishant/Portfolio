import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/services/package");
  };
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col justify-center px-6 md:px-20 py-16">
      <h3 className="text-xl md:text-2xl mb-2">Hello, Welcome to</h3>
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
        CREVONX
      </h1>

      {/* Typing text */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        We are{" "}
        <TypeAnimation
          sequence={[
            "Creative Tech Partners",
            2000,
            "Website Builders",
            2000,
            "Automation Experts",
            2000,
            "Design & Reels Studio",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
          className="text-indigo-400"
        />
      </h2>

      <p className="max-w-lg text-gray-300 mb-6">
        We are a tech-powered creative studio run by CSE students. From websites
        to automation, social content to design – we build ideas into impact.
      </p>

      {/* Social icons */}
      <div className="flex gap-5 mb-6">
        <a
          href="http/ins"
          className="border border-white rounded-full p-3 hover:bg-indigo-600 transition">
          <FaInstagram />
        </a>
       
       
      </div>

      <button
        onClick={handleView}
        className="px-6 py-3 w-[220px] sm:w-[400px] bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-xl hover:shadow-indigo-500/50 transition inline-block">
        Package Info
      </button>
    </section>
  );
};

export default Hero;

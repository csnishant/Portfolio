import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Logo & Copyright */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">CREVONX</h1>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CREVONX. All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        {/* <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
          <a href="#home" className="hover:text-indigo-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-indigo-500 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-500 transition">
            Contact
          </a>
        </div> */}

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-gray-400 text-xl">
          <a
            href="https://instagram.com/crevonx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500">
            <FaInstagram />
          </a>
       
          <a href="mailto:i.crevonx@email.com" className="hover:text-green-400">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50  dark:bg-black/30 backdrop-blur transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r">CREVONX</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden space-x-8">
            {["Home", "About", "Projects", "Experience", ].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}>
                  <Link
                    to={ item==="Home" ? "/" :`/${item.toLowerCase()}`} // ➤ like /about
                    className="relative text-gray-200 dark:text-gray-200 hover:text-violet-400 font-medium transition-colors duration-300 group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all"></span>
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Desktop Social + Button */}
          <div className="md:flex hidden items-center space-x-4">
            {[FiGithub, FiLinkedin, FiInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="text-agray-700 dark:text-gray-300 hover:text-violet-600"
                href="#">
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                type: "spring",
              }}
              className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
              Hire me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[60]">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-gray-200 dark:text-gray-200">
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* OVERLAY for Mobile Menu */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      {/* SIDEBAR for Mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 right-0 h-full w-72   dark:bg-black/30 backdrop-blur  shadow-2xl z-[40] p-6 flex flex-col space-y-4 md:hidden">
        <div className="flex flex-col space-y-4 mt-12">
          {["Home", "About", "Experience", ].map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // ➤ like /about
                className="relative text-gray-200 dark:text-gray-200 hover:text-violet-400 font-medium transition-colors duration-300 group">
                {item}
              </Link>
              {index !== 4 && (
                <hr className="border-gray-700 dark:border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          {[FiGithub, FiLinkedin, FiInstagram].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <button className="mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
          Hire me
        </button>
      </motion.div>
    </>
  );
};

export default Header;

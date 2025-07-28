import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import pages
import Home from "./pages/Home";
import PackagePage from "./pages/ServiceDeatail";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* Optional Header here if needed globally */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/package" element={<PackagePage />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

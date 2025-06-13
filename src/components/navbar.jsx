import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const sections = ["home", "about", "education", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70; // 70 for header offset
      let current = "home";
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#">SANDESH</a>
        </div>

        {/* Nav Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:top-auto md:left-auto md:space-x-6 px-6 py-4 md:p-0`}
          id="myNavMenu"
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  className={`nav-link cursor-pointer text-gray-700 hover:text-blue-600 font-medium capitalize ${
                    activeSection === section ? "active-link text-blue-600 font-bold border-b-2 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Download CV <i className="uil uil-file-alt ml-1" />
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

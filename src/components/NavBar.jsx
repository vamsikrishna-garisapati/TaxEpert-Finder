import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className=" hover:text-blue-300">TaxExpert Finder</Link>
        </h1>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-300">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-300">
              Profiles
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-blue-600 p-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-300" onClick={toggleMobileMenu}>
              Profiles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

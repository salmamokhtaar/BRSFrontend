import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 py-4'
      } text-black px-6 flex justify-between items-center sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 cursor-pointer sm:ml-10 ml-0 text-white p-3 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
        </div>
        <span className="text-2xl font-bold cursor-pointer text-blue-800 tracking-tight">BRS</span>
      </div>

      <nav className="hidden md:flex sm:mr-10 space-x-8 mr-4 items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>

        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300 relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>

        <ScrollLink
          to="business-types"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300 relative group"
        >
          Business Types
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-md"
        >
          Login
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-blue-600" />
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-3 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold text-blue-800">BRS</span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 mt-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-xl text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-xl text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              About
            </ScrollLink>

            <ScrollLink
              to="business-types"
              smooth={true}
              duration={500}
              className="text-xl text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Business Types
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-xl text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>

            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-md text-center mt-4"
              onClick={closeMenu}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
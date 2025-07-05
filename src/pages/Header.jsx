import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">BRS</div>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">
              Business Registration System
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="business-types"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Contact
            </ScrollLink>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-1 rounded-md hover:bg-blue-500 transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="business-types"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </ScrollLink>
              <Link
                to="/login"
                className="block mx-3 mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
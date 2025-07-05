import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">BRS</span>
              <span className="ml-2 text-gray-400">Business Registration System</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop solution for business registration. We provide a seamless 
              and efficient process to get your business registered and running.
            </p>
       
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="business-types"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Business Types
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-xl mr-3">📍</span>
                <span className="text-gray-400">
                  123 Business Avenue<br />
                  Mogadishu, Somalia
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">📞</span>
                <span className="text-gray-400">+252 617 157 083</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">📧</span>
                <span className="text-gray-400">salmam.mohyadiin@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BRS. All rights reserved • Developed by{' '}
              <a href="https://salma.com/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                Salma
              </a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import heroImage from '../assets/b.jpeg';

const HeroSection = () => {
  return (
    <div id="home" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Get Your Business
              <span className="block text-blue-600">Registered Fast</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Professional business registration services. From licenses to compliance, 
              we handle everything so you can start earning sooner.
            </p>
            
            {/* More Button Options */}
          

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-sm text-gray-600">500+ Businesses Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-sm text-gray-600">100% Legal Compliance</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Business Registration Services"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Licenses</h3>
              <p className="text-gray-600 mb-4">Get all required licenses fast</p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                Get License →
              </button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔢</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tax Registration</h3>
              <p className="text-gray-600 mb-4">EIN, Tax ID, and more</p>
              <button className="text-green-600 font-medium hover:text-green-700">
                Get Tax ID →
              </button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Full Package</h3>
              <p className="text-gray-600 mb-4">Everything you need</p>
              <button className="text-purple-600 font-medium hover:text-purple-700">
                Get All →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
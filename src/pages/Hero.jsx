import React, { useEffect } from 'react';
import heroImage from '../assets/b.jpeg'; // Make sure to replace this with the actual path to your image

const HeroSection = () => {
  // Simple fade-in animation on component mount
  useEffect(() => {
    const heroContent = document.getElementById('hero-content');
    const heroImage = document.getElementById('hero-image');
    const heroCards = document.querySelectorAll('.hero-card');

    if (heroContent) heroContent.classList.add('opacity-100', 'translate-y-0');
    if (heroImage) heroImage.classList.add('opacity-100', 'translate-y-0');

    heroCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('opacity-100', 'translate-y-0');
      }, 300 + (index * 150));
    });
  }, []);

  return (
    <div id="home" className="bg-gradient-to-b from-blue-50 to-white text-blue-600 py-24 px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div
          id="hero-content"
          className="md:w-1/2 transform transition-all duration-700 opacity-0 translate-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-blue-800">Streamline</span> Your Business Registration
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-xl">
            Your one-stop solution for business registration. We provide a seamless and efficient process to get your business registered and running.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 font-semibold w-full sm:w-auto">
              Get Started
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition duration-300 font-semibold w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
        <div
          id="hero-image"
          className="md:w-1/2 flex justify-center mt-12 md:mt-0 transform transition-all duration-700 opacity-0 translate-y-4"
        >
          <img
            src={heroImage}
            alt="Business Registration"
            className="w-4/5 rounded-xl shadow-2xl border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="hero-card bg-white text-black p-8 rounded-xl shadow-xl transform transition-all duration-500 opacity-0 translate-y-4 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-blue-600">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl mb-3 text-blue-800">Licenses</h2>
          <p className="text-gray-600 leading-relaxed">We assist you in obtaining all the necessary licenses required to operate your business legally. Our team ensures that you meet all regulatory requirements.</p>
        </div>

        <div className="hero-card bg-white text-black p-8 rounded-xl shadow-xl transform transition-all duration-500 opacity-0 translate-y-4 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-blue-600">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl mb-3 text-blue-800">Registration Numbers</h2>
          <p className="text-gray-600 leading-relaxed">We provide support in acquiring the appropriate registration numbers for your business, including tax identification numbers and other essential registrations.</p>
        </div>

        <div className="hero-card bg-white text-black p-8 rounded-xl shadow-xl transform transition-all duration-500 opacity-0 translate-y-4 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-blue-600">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl mb-3 text-blue-800">Compliance</h2>
          <p className="text-gray-600 leading-relaxed">Our experts ensure that your business complies with all legal requirements, helping you avoid any potential legal issues and ensuring smooth operations.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
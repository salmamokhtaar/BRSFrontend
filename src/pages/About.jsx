import React, { useEffect, useRef } from 'react';
import team from '../assets/t.avif';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            } else if (entry.target === textRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');

              // Animate cards with delay
              cardsRef.current.forEach((card, index) => {
                if (card) {
                  setTimeout(() => {
                    card.classList.add('opacity-100', 'translate-y-0');
                  }, 300 + (index * 150));
                }
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About BRS</h2>
          <div className="w-full max-w-lg mx-auto mb-6">
            <div className="h-1 mx-auto bg-blue-600 w-40 opacity-75 my-0 py-0 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We're dedicated to simplifying the business registration process and helping entrepreneurs succeed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div
            ref={aboutRef}
            className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 transform transition-all duration-700 opacity-0 translate-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
              <img
                src={team}
                alt="BRS Team"
                className="relative z-10 rounded-lg shadow-xl w-full max-w-md object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-blue-100 rounded-lg p-4 sm:p-6 shadow-lg z-20">
                <div className="text-blue-800 font-bold text-3xl sm:text-4xl">5+</div>
                <div className="text-blue-600 font-medium text-sm sm:text-base">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            ref={textRef}
            className="lg:w-1/2 lg:pl-16 transform transition-all duration-700 opacity-0 translate-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">Who We Are</h3>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              BRS is a group of talented and driven individuals who have come together with the mission of helping business owners navigate the complexities of business registration and compliance.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our purpose and goal is to help local businesses through premium registration services. We specialize in creating seamless registration experiences that get your business up and running quickly and legally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                ref={el => cardsRef.current[0] = el}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform transition-all duration-500 opacity-0 translate-y-8 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-3">Our Mission</h4>
                <p className="text-gray-600">
                  To simplify the business registration process and empower entrepreneurs to focus on growing their businesses rather than navigating bureaucracy.
                </p>
              </div>

              <div
                ref={el => cardsRef.current[1] = el}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform transition-all duration-500 opacity-0 translate-y-8 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-3">Our Approach</h4>
                <p className="text-gray-600">
                  We combine industry expertise with personalized service to ensure each client receives tailored solutions that meet their specific business needs.
                </p>
              </div>
            </div>

            <div
              ref={el => cardsRef.current[2] = el}
              className="bg-blue-600 text-white p-6 rounded-xl shadow-lg transform transition-all duration-500 opacity-0 translate-y-8"
            >
              <h4 className="text-xl font-bold mb-4">Why Choose BRS?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert guidance through the entire registration process</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized service tailored to your business needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing compliance support to keep your business in good standing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
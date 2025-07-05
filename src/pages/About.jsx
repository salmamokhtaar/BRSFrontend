import React from 'react';

const AboutPage = () => {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About BRS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to simplifying the business registration process and 
            helping entrepreneurs succeed.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              BRS is a group of talented and driven individuals who have come together 
              with the mission of helping business owners navigate the complexities of 
              business registration and compliance.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our purpose is to help local businesses through premium registration 
              services. We specialize in creating seamless registration experiences 
              that get your business up and running quickly and legally.
            </p>
            
            {/* Simple Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Success</div>
              </div>
            </div>
          </div>

          {/* Right Side - Two Simple Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-600">
                To simplify the business registration process and empower entrepreneurs 
                to focus on growing their businesses rather than navigating bureaucracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Approach</h4>
              <p className="text-gray-600">
                We combine industry expertise with personalized service to ensure 
                each client receives tailored solutions that meet their specific needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
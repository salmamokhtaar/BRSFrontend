import React, { useEffect, useRef } from 'react';

function BusinessType() {
  const cardsRef = useRef([]);

  // Animation for cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const businessTypes = [
    {
      title: "Sole Proprietorship",
      description: "The simplest form of business ownership, where one individual owns and operates the business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Partnership",
      description: "A business owned by two or more individuals sharing responsibilities and profits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Limited Liability Company (LLC)",
      description: "Combines the liability protection of a corporation with the tax benefits of a partnership.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Corporation",
      description: "A separate legal entity from its owners, providing liability protection but requiring more compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
        </svg>
      ),
      color: "red"
    },
    {
      title: "Nonprofit Organization",
      description: "Operates for charitable purposes and can obtain tax-exempt status.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      ),
      color: "pink"
    },
    {
      title: "Cooperative",
      description: "Owned and operated for the benefit of its members, focusing on shared goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
      ),
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-500",
        icon: "text-blue-500"
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-500",
        icon: "text-indigo-500"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-500",
        icon: "text-purple-500"
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-500",
        icon: "text-red-500"
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-500",
        icon: "text-pink-500"
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-500",
        icon: "text-green-500"
      }
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <div id="business-types" className="section relative py-20 bg-gray-50">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-16 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Business Registration Types
          </h2>
          <div className="w-full max-w-lg mx-auto mb-6">
            <div className="h-1 mx-auto bg-blue-600 w-40 opacity-75 my-0 py-0 rounded-full"></div>
          </div>
          <p className="text-gray-600 leading-relaxed font-light text-base sm:text-xl mx-auto max-w-2xl px-2">
            Choose the right structure for your business to ensure optimal legal protection and tax benefits.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((type, index) => {
            const colorClasses = getColorClasses(type.color);

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${colorClasses.bg} rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-500 opacity-0 translate-y-8 hover:shadow-xl hover:-translate-y-2 border-t-4 ${colorClasses.border}`}
              >
                <div className={`${colorClasses.icon} mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md`}>
                  {type.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${colorClasses.text}`}>
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
                <div className="mt-6">
                  <button className={`${colorClasses.text} hover:underline font-medium flex items-center`}>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BusinessType;
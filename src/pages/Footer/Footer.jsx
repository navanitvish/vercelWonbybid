import React, { useEffect } from "react";
import { FOOTER_CONFIG } from "../../content/footerData";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const { 
    quickLinks, 
    secondColumnLinks, 
    socialLinks, 
    paymentPartners, 
    securityImages,
    companyInfo 
  } = FOOTER_CONFIG;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once:false
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className=" text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-6 text-center sm:text-left" data-aos="fade-up">
            <div className="text-2xl sm:text-3xl font-bold tracking-wider bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
              {companyInfo.name}
            </div>
            <div className="social-links flex flex-wrap justify-center sm:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-3xl sm:text-4xl transition-all duration-300 hover:scale-110 hover:opacity-80"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <link.icon color={link.color} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links and Second Column Links - Responsive Grid */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {/* Quick Links Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li 
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 50 + 300}
                    >
                      <Link 
                        to={link.link}
                        className="text-sm hover:text-red-200 transition-colors duration-200 block truncate"
                        onClick={handleClick}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second Column Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">More Links</h3>
                <ul className="space-y-2">
                  {secondColumnLinks.map((link, index) => (
                    <li 
                      key={index} 
                      className=""
                      data-aos="fade-up"
                      data-aos-delay={index * 50 + 300}
                    >
                      <Link 
                        to={link.link}
                        className="text-sm hover:text-red-200 transition-colors duration-200 block truncate"
                        onClick={handleClick}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Security and Payment Partners */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                Security & Game Integrity
              </h3>
              <div className="flex justify-center sm:justify-start space-x-3">
                {securityImages.map((image, index) => (
                  <div 
                    key={index}
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 500}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-8 sm:h-10 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Partners */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                Our Payment Partners
              </h3>
              <div className="grid grid-cols-4 lg:grid-cols-4 gap-3">
                {paymentPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 600}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <img src={partner.image} alt="payment partner" className="w-16 h-8 object-contain object-center"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-8 pt-6 border-t border-white/20 space-y-4"
         
        >
          <p className="text-center text-sm sm:text-base">
            {companyInfo.disclaimer}
          </p>
          <div className="text-xs sm:text-sm text-center">
            {companyInfo.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
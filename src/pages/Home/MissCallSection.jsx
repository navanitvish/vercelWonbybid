import React, { useEffect } from 'react';
import AOS from 'aos';
import apkFile from "../../assets/app-release.apk"; 
const WonByBidLanding = () => {
  const handleDownloadAppClick = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = apkFile;
    link.download = "app-release.apk"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      offset: 120,
      easing: 'ease-in-out'
    });
    
    // Clean up AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className=" flex flex-col justify-between">
      <div className="text-black flex-grow-0">
        <div className=" mx-auto px-2 py-8 flex flex-col justify-center items-center max-w-6xl">
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-4xl sm:text-4xl md:text-6xl font-bold lg:text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center p-4"
          >
            World's First APP
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg sm:text-xl text-center md:text-2xl text-white font-bold p-6 rounded-xl bg-opacity-20  backdrop-blur-sm  leading-relaxed hover:scale-105 transition-transform duration-300"
          >
            World's First Skill-Based App and Delivering 20x Faster Results
          </p>

          <div className="flex flex-col md:flex-row items-center w-full">
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-lg sm:text-xl md:text-2xl text-white font-normal p-6 rounded-xl bg-opacity-10  backdrop-blur-sm leading-relaxed hover:scale-105 transition-transform duration-300 md:w-1/2"
            >
              Experience outcomes in minutes, not hours. WonByBid brings you the best and most exciting gaming experience.
            </p>

            <p
              data-aos="fade-left"
              data-aos-delay="400"
              className="text-lg text-left sm:text-xl md:text-2xl backdrop-blur-sm font-normal text-white p-6 rounded-xl bg-opacity-10  leading-relaxed hover:scale-105 transition-transform duration-300 md:w-1/2"
            >
              In just 10 days, WonByBid has become the talk of the town, bringing unmatched fun and excitement.
            </p>
          </div>

          <div
            className="mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button
              onClick={handleDownloadAppClick}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonByBidLanding;
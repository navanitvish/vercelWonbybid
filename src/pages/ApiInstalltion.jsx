import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from '../assets/WhatsApp Image 2024-11-11 at 15.09.43_2fc3a4c6.jpg';
const AppInstallationSteps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "This is the 1st screen after the APK file will be downloaded to indicate that the file is successfully downloaded. Click on Open to start the installation process.",
      step: "1/10",
    },
    {
      id: 2,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "OR, You can drag the notification tray and can locate the APK file downloaded on your mobile. Click on the same to start the installation process",
      step: "2/10",
    },
    {
      id: 3,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        'You might get the above message, a default feature of chrome while installing an APP other than Google Play Store. Click on "SETTINGS"',
      step: "3/10",
    },
    {
      id: 4,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "Your default feature is currently set to disallow for the source",
      step: "4/10",
    },
    {
      id: 1,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "This is the 1st screen after the APK file will be downloaded to indicate that the file is successfully downloaded. Click on Open to start the installation process.",
      step: "5/10",
    },
    {
      id: 2,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "OR, You can drag the notification tray and can locate the APK file downloaded on your mobile. Click on the same to start the installation process",
      step: "6/10",
    },
    {
      id: 3,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        'You might get the above message, a default feature of chrome while installing an APP other than Google Play Store. Click on "SETTINGS"',
      step: "7/10",
    },
    {
      id: 4,
      image: image1,
      title: "Fantasy APK Installation:",
      description:
        "Your default feature is currently set to disallow for the source",
      step: "8/10",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col  bg-indigo-50">
      {/* Top Images Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative overflow-hidden">
          {/* Images Row */}
          <div className="flex gap-4 justify-center">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 320}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`flex-shrink-0 w-[300px]  p-4  
                    ${
                      currentSlide === index ? "" : ""
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={`Step ${index + 1}`}
                    className="w-full h-72 object-cover rounded"
                  />

                  <div className="text-center mb-4 text-black ">
                    {slides[currentSlide].description}
                  </div>
                  <div className="text-center text-gray-600 font-medium">
                {slides[currentSlide].step}
              </div>
                </div>
              ))}

              
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black hover:bg-indigo-700 rounded-full p-2"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-indigo-700 rounded-full p-2"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors
                ${currentSlide === index ? "bg-white" : " bg-indigo-400"}`}
            />
          ))}
        </div>
      </div>
      {/* Bottom Description Section */}

    </div>
  );
};

export default AppInstallationSteps;

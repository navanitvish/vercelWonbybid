import React, { useState, useEffect } from "react";
import { ArrowRight, MoreVertical } from "lucide-react";
import image1 from "../assets/banner (1).jpg";
import image2 from "../assets/banner (2).jpg";
import image3 from "../assets/banner (3).jpg";

const images = [ image1, image2,image3,];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simple auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simple dot navigation handler
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative overflow-hidden">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative min-w-full">
              <div className="relative">
                {/* Image */}
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[350px] sm:h-[600px] md:h-[600px] lg:h-[700px] object-cover"
                />
                
                {/* More Options Button */}
                <div className="absolute top-4 right-4 flex flex-col items-center">
                  <button 
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    aria-label="More options"
                  >
                    <MoreVertical className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125
                ${
                  currentSlide === idx
                    ? "bg-white scale-110 w-4 sm:w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      winnings: "₹5 Lakh",
      testimonial: "WonByBid changed my cricket experience completely! Started with small leagues and won ₹5 Lakh in the IPL mega contest. The platform's analytics tools really helped me make informed decisions.",
      image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      winnings: "₹3.2 Lakh",
      testimonial: "As a cricket analyst, I love how WonByBid combines statistics with gameplay. Won ₹3.2 Lakh in my first month! The player performance predictions and real-time updates are incredibly useful.",
      image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/ramesh-singh.jpg"
    },
    {
      name: "Mohammed Siddiqui",
      location: "Hyderabad, Telangana",
      winnings: "₹7.5 Lakh",
      testimonial: "WonByBid's instant withdrawals and secure transactions gave me confidence. Started playing daily leagues, and within 6 months, secured a massive ₹7.5 Lakh win during the T20 World Cup!",
      image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
    },
    {
      name: "Anita Desai",
      location: "Pune, Maharashtra",
      winnings: "₹2.8 Lakh",
      testimonial: "The multi-language support on WonByBid made it so accessible. Won ₹2.8 Lakh playing in regional leagues! The customer support team is always helpful and responsive.",
      image: "/https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
    },
    {
      name: "Vikram Singh",
      location: "Delhi, NCR",
      winnings: "₹4.5 Lakh",
      testimonial: "WonByBid's special tournaments during festival seasons are amazing! Participated in Diwali Special League and won ₹4.5 Lakh. The bonus features and referral program add extra value.",
      image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
    },
    {
      name: "Kavitha Reddy",
      location: "Chennai, Tamil Nadu",
      winnings: "₹6.2 Lakh",
      testimonial: "From a casual player to a pro - WonByBid made it possible! Won ₹6.2 Lakh in progressive leagues. The practice contests helped me understand strategies better. Best fantasy platform hands down!",
      image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleClick = () => navigate('/testimonials');

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-black">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-800 text-center mb-8 sm:mb-12">
        Players Love WonByBid
      </h2>

      <div className="relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (window.innerWidth < 640 ? 100 : 50)}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 flex-shrink-0 px-2 sm:px-4">
                <div className="rounded-lg p-4 sm:p-6 lg:p-8 transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-xl font-semibold text-red-800">
                        {testimonial.name}
                        <span className="block sm:inline text-sm sm:text-base mt-1 sm:mt-0 sm:ml-2">
                          {testimonial.location}
                        </span>
                      </h3>
                      <p className="text-xl sm:text-lg font-bold text-red-800 mb-2 sm:mb-4">
                        Winnings {testimonial.winnings}
                      </p>
                      <p className="lg:text-2xl sm:text-base text-white italic">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-red-800 text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-red-800 text-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mt-6 sm:mt-8">
          <button onClick={handleClick} className="inline-block px-4 sm:px-6 py-2 border-2 border-red-800 text-red-800 text-sm sm:text-base font-semibold rounded-md hover:bg-red-800 hover:text-white transition-colors">
            View More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
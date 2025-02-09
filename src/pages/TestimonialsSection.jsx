import React from 'react';

const testimonialData = [
  {
    id: 1,
    name: "Apsar T R",
    location: "Kolar, Karnataka",
    prize: "₹ 50,000",
    testimonial: "I've been playing for a few months now, and this time, I'm extremely happy to have won the first prize.",
    image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/ramesh-singh.jpg"
  },
  {
    id: 2,
    name: "Samar Sarkar",
    location: "Murshidabad, West Bengal",
    prize: "₹ 40,000",
    testimonial: "Even during the lockdown, I won INR 40,000 and a Boat Speaker. I play and I'm proud about it.",
    image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
  },
  {
    id: 3,
    name: "R Vignesh",
    location: "Tiruchirappalli, Tamil Nadu",
    prize: "Samsung A2 core",
    testimonial: "This game is very nice. I've been playing a lot of games but this is the most entertaining and best game available on the internet today.",
    image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/pradip-apte.jpg"
  },
  {
    id: 4,
    name: "Sandeep Yadav",
    location: "Agra, Uttar Pradesh",
    prize: "₹ 10,000",
    testimonial: "I've been playing games here for last 2 years. Ever since I started playing games here, my life has drastically changed. You can absolutely trust this app-I've won INR 10,000 in Premier T10 League when my rank was 8th on the leader board. Just want to say, I've tried many apps but this is just the best.",
    image: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/ramesh-singh.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Reviews & Testimonials</h2>
      
      <div className="space-y-8">
        {testimonialData.map((item) => (
          <div key={item.id} className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              src={item.image}
              alt={`${item.name}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <div className="relative">
                <p className="text-gray-700 mb-3">
                  <span className="text-2xl text-gray-400 leading-none">"</span>
                  {item.testimonial}
                  <span className="text-2xl text-gray-400 leading-none">"</span>
                </p>
                
                <div className="flex flex-wrap items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Won</span>
                    <p className="font-medium text-red-500">{item.prize}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
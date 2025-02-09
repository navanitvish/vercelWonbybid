import React, { useEffect, useRef } from 'react';
import { Monitor, Users, Trophy } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const StepsLayout = () => {
  const textRefs = useRef([]);
  
  const steps = [
    {
      title: "Select a Contest",
      description: [
        "Choose from our range of  ",
        " live and upcoming contests.",
      ],
      icon: <Monitor className="w-8 h-8" />,
      numberGradient: "from-blue-400 to-blue-600",
      iconGradient: "from-blue-400 to-blue-600",
      borderHoverColor: "hover:border-blue-400/50"
    },
    {
      title: "Place Your Unique Bid",
      description: [
        "Strategically place a unique bid ",
        "to increase your chances of winning big.",
      ],
      icon: <Users className="w-8 h-8" />,
      numberGradient: "from-purple-400 to-purple-600",
      iconGradient: "from-purple-400 to-purple-600",
      borderHoverColor: "hover:border-purple-400/50"
    },
    {
      title: "Win and withdraw Instantly",
      description: [
        "Win big and withdraw your winnings instantly",
        " with our fast, hassle-free payout process!",

      ],
      icon: <Trophy className="w-8 h-8" />,
      numberGradient: "from-red-400 to-red-600",
      iconGradient: "from-red-400 to-red-600",
      borderHoverColor: "hover:border-red-400/50"
    }
  ];

  useEffect(() => {
    textRefs.current.forEach((textRef, index) => {
      if (textRef) {
        const text = new SplitType(textRef, { types: 'chars' });
        const chars = text.chars;

        gsap.set(chars, {
          opacity: 0,
          y: 20
        });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-base sm:text-lg text-gray-300/80 max-w-2xl mx-auto px-4">
            Join thousands of players and start your winning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-[2px] bg-gray-700 transform translate-x-1/2">
                  <div className={`absolute top-1/2 right-0 w-3 h-3 rounded-full bg-gradient-to-br ${step.numberGradient} transform -translate-y-1/2 translate-x-full`} />
                </div>
              )}

              <div className={`relative w-full h-full bg-gray-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 transition-all duration-300 transform hover:-translate-y-1 ${step.borderHoverColor}`}>
                <div className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.numberGradient} flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-lg`}>
                  {index + 1}
                </div>

                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${step.numberGradient} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                  {step.title}
                </h3>
                <div 
                  ref={el => textRefs.current[index] = el}
                  className="text-sm sm:text-base text-white space-y-1">
                  {step.description.map((line, i) => (
                    <p key={i} className="leading-relaxed tracking-wide">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsLayout;
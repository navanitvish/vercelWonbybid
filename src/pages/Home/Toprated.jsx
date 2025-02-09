import React, { useEffect, useRef } from 'react';
import { Download, Star } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Toprated = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 3);
    numberRefs.current = numberRefs.current.slice(0, 3);

    // Create master timeline
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Heading animation timeline
    const headingTimeline = gsap.timeline()
      .fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

    // Add heading timeline to master
    masterTimeline.add(headingTimeline);

    // Cards animation timeline
    const cardsTimeline = gsap.timeline();

    cardsRef.current.forEach((card, index) => {
      const cardAnimation = gsap.timeline()
        // Card entry animation
        .fromTo(card,
          {
            opacity: 0,
            scale: 0.8,
            y: 100,
            rotateX: 45,
            transformOrigin: "center center"
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out"
          }
        )
        // Icon animation
        .fromTo(card.querySelector('.icon-container'),
          {
            scale: 0,
            rotate: -180,
            opacity: 0
          },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(2)"
          },
          "-=0.6"
        )
        // Number counter animation
        .fromTo(numberRefs.current[index],
          {
            textContent: 0,
            scale: 0.5,
            opacity: 0
          },
          {
            textContent: index === 0 ? 4.8 : index === 1 ? 10 : 1.5,
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: index === 0 ? 0.1 : 1 },
            onUpdate: function() {
              const element = numberRefs.current[index];
              if (index === 2) {
                element.textContent = `₹${element.textContent} Crore`;
              } else if (index === 0) {
                element.textContent = `${element.textContent}/5`;
              } else {
                element.textContent = `${element.textContent}K+`;
              }
            }
          },
          "-=0.4"
        )
        // Hover effect setup
        .add(() => {
          // Setup hover animations
          const hoverTimeline = gsap.timeline({ paused: true });
          
          hoverTimeline
            .to(card, {
              y: -8,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            })
            .to(card.querySelector('.icon-container'), {
              y: -4,
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            }, 0);

          card.addEventListener('mouseenter', () => hoverTimeline.play());
          card.addEventListener('mouseleave', () => hoverTimeline.reverse());
        });

      cardsTimeline.add(cardAnimation, index * 0.2);
    });

    // Add cards timeline to master
    masterTimeline.add(cardsTimeline, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className=" py-16">
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Below are the stats that speak for themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Star, label: "Rating", color: "from-blue-400 to-blue-600" },
            { icon: Download, label: "Downloads", color: "from-purple-400 to-purple-600" },
            { icon: FaRupeeSign, label: "Earnings", color: "from-red-400 to-red-600" }
          ].map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="backdrop-blur-lg bg-gray-700 rounded-2xl shadow-xl p-8 transform transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="flex flex-col items-center relative z-10">
                <div className={`icon-container bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div 
                  ref={el => numberRefs.current[index] = el}
                  className="text-2xl font-bold text-white"
                >
                  0
                </div>
                <div className="text-white font-semibold tracking-wide">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toprated;
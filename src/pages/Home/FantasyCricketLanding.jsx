import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

import image2 from "../../assets/thumbnail (1).png";
import image3 from "../../assets/thumbnail (2).png";
import image4 from "../../assets/845f47b9-91d1-4f4a-9665-6968fddd8025.jpg";
import image1 from "../../assets/f78460ba-90b4-403a-8170-641914efbe53.jpg";

gsap.registerPlugin(ScrollTrigger);

const FantasyCricketLanding = () => {
  const carouselRef = useRef(null);
  const textRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // Carousel animation
    const images = carouselRef.current.querySelectorAll("img");
    gsap.to(images, {
      xPercent: -100 * (images.length - 1),
      ease: "none",
      duration: 10,
      repeat: -1,
    });

    // Heading animation
    const headingText = new SplitType(headingRef.current, {
      types: "chars, words",
    });

    gsap.from(headingText.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });

    // Enhanced text animations for paragraphs
    textRefs.current.forEach((textRef, index) => {
      if (textRef) {
        const text = new SplitType(textRef, {
          types: "lines, words, chars",
          tagName: "span",
        });

        // Set initial state
        gsap.set(text.words, {
          opacity: 0,
          y: 20,
          rotateX: -45,
        });

        // Create timeline for each paragraph
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(text.words, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power4.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-8xl mx-auto">
      <h1 className="p-2 space-y-2 text-3xl sm:text-4xl md:text-6xl font-bold lg:text-6xl  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center">
        Play Contests on WonByBid
      </h1>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center mt-4 ">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 px-4 sm:px-6 lg:px-8">
            <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
              <p
                ref={(el) => (textRefs.current[0] = el)}
                className="text-white leading-relaxed text-md sm:text-base lg:text-xl tracking-wide"
              >
                Looking for quick results and real winnings?{" "}
                <span className="font-bold text-red-400">WonByBid</span> is
                here to redefine the thrill of competition! Our unique,
                skill-based bidding platform offers an exciting way to win big
                with instant results. With{" "}
                <span className="font-bold text-red-400">WonByBid.com</span>,
                there's no waiting—just place your unique bid and see if you've
                secured the prize.
              </p>

              <p
                ref={(el) => (textRefs.current[1] = el)}
                className="text-white leading-relaxed text-md sm:text-base lg:text-xl tracking-wide"
              >
                Our platform combines fast-paced contests, secure gameplay, and
                real cash rewards. Whether you're a sports enthusiast or simply
                love strategic bidding,{" "}
                <span className="font-bold text-red-400" >WonByBid</span> lets
                you jump in, play, and win on your terms – anytime, anywhere.
              </p>

              <p
                ref={(el) => (textRefs.current[2] = el)}
                className="text-white leading-relaxed text-md sm:text-base lg:text-xl tracking-wide"
              >
                Join <span className="font-bold text-red-400">WonByBid</span>{" "}
                today, where quick results, instant rewards, and the excitement
                of strategic bidding come together. Don't miss out—start bidding
                and winning now!
              </p>
            </div>
          </div>

          {/* Right Column - App Screenshots Carousel */}
          <div className="relative mt-8 lg:mt-0 overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex space-x-4 max-w-full mx-auto"
              ref={carouselRef}
            >
              <img
                src={image1}
                alt="WonByBid App Interface 1"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
              <img
                src={image2}
                alt="WonByBid App Interface 2"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
              <img
                src={image3}
                alt="WonByBid App Interface 3"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
              <img
                src={image4}
                alt="WonByBid App Interface 4"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 border-b-2 border-gray-100/10 w-full" />
      </div>
    </div>
  );
};

export default FantasyCricketLanding;

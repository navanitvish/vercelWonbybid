import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false
    });
  }, []);

  const faqData = [
    {
      id: 1,
      question: "Why WonByBid?",
      answer: (
        <div className="space-y-4">
          <p>
            WonByBid is a unique, skill-based bidding platform designed to bring
            you quick results and real earnings. Unlike traditional fantasy
            games, WonByBid offers a fast-paced, strategy-driven experience
            where every bid counts. Here's why WonByBid stands out:
          </p>
          <p>
            <span className="font-bold">Quick Results:</span> Place your bids
            and get results fast, with no long wait times.
          </p>
          <p>
            <span className="font-bold">Unique Bidding Format:</span> Win by
            placing the highest unique bid, making every contest strategic and
            exciting.
          </p>
          <p>
            <span className="font-bold">Personalized Contests:</span> Create
            private contests with friends and family, allowing you to customize
            the experience and maximize enjoyment.
          </p>
          <p>
            <span className="font-bold">Real Earnings and Rewards:</span> With
            real cash prizes and a 10% commission available, WonByBid offers
            multiple ways to earn.
          </p>
          <p>
            Choose <span className="font-bold">WonByBid</span> for an exciting,
            rewarding way to experience sports and competition at your
            fingertips!
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: "Unique Features of WonByBid",
      answer: (
        <div className="space-y-4">
          <p>
            WonByBid brings a fresh approach to skill-based bidding with
            standout features designed for an engaging and rewarding experience:
          </p>
          <p>
            <span className="font-bold">Real-Time Bidding Insights: </span> Stay
            informed with real-time scoring and bidding updates to refine your
            strategy instantly.
          </p>
          <p>
            <span className="font-bold">Multiple Contest Formats: </span> Choose
            from a variety of contest types, including simple and private
            contests, to suit your preferences.
          </p>
          <p>
            <span className="font-bold">Secure Transactions:</span> Enjoy peace
            of mind with secure, reliable payment options for safe deposits and
            withdrawals.
          </p>
          <p>
            <span className="font-bold">User-Friendly Interface:</span> :
            Navigate with ease on a platform designed for a seamless and
            enjoyable user experience.
          </p>
          <p>
            With <span className="font-bold">WonByBid</span> players can dive
            into dynamic contests and win rewards based on smart bidding and
            unique strategies. Join today and explore the thrill of winning with
            every bid!
          </p>
        </div>
      ),
    },
    {
      id: 3,
      question: "Playing WonByBid is Safe, Secure & Legal",
      answer: (
        <div className="space-y-4">
          <p>
            <span className="font-bold">WonByBid</span> is committed to
            providing a safe and secure environment for all users. Classified as
            a game of skill, <span className="font-bold">WonByBid</span>{" "}
            operates legally in most regions, adhering to local regulations to
            ensure fair play.
          </p>
          <p>
            <span className="font-bold">Legal and Skill-Based: </span> As a
            skill-based bidding platform, WonByBid is completely legal in
            regions where skill games are permitted.
          </p>
          <p>
            <span className="font-bold">Advanced Security Measures:</span> We
            prioritize secure transactions and data protection, implementing
            advanced security protocols to safeguard user information.
          </p>
          <p>
            <span className="font-bold">Fair Play Assurance:</span> WonByBid is
            dedicated to creating a fair and transparent experience, using
            cutting-edge technology to maintain a trusted platform.
          </p>
          <p>
            With <span className="font-bold">WonByBid,</span> you can enjoy a
            safe, secure, and legal bidding experience, focused on skill and
            strategy. Join with confidence!
          </p>
        </div>
      ),
    },
    {
      id: 4,
      question: "Tips for Winning Big",
      answer: (
        <div className="space-y-4">
          <p>
            <span className="font-bold">Analyze Past Trends: </span> Check
            previous winning bid ranges to develop a more strategic approach for
            upcoming contests.
          </p>
          <p>
            <span className="font-bold">Place Unique Bids:</span> Avoid common
            bid amounts to increase your chances of having the highest unique
            bid.
          </p>
          <p>
            <span className="font-bold">Keep Trying: </span> : Since contests
            are quick-result, you can participate in multiple rounds to improve
            your winning odds.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      question: " Understanding Contest Types",
      answer: (
        <div className="space-y-4">
          <p>
            <span className="font-bold">Simple Contests: </span> Great for
            beginners, with straightforward rules and quick results.
          </p>
          <p>
            <span className="font-bold">Private Contests:</span> Create and
            customize contests for friends and family, adding a personal,
            competitive touch to your experience...
          </p>
        </div>
      ),
    },
    {
      id: 6,
      question: "Fast & Secure Withdrawals",
      answer: (
        <div className="space-y-4">
          <p>
            <span className="font-bold">Simple Cashouts: </span> WonByBid offers
            secure and swift withdrawal options, allowing you to cash out your
            winnings without hassle.
          </p>
          <p>
            <span className="font-bold">Trusted Payment Options:</span> From
            bank transfers to digital wallets, choose your preferred method for
            fast access to your rewards.
          </p>
        </div>
      ),
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full   border-t border-b p-8 overflow-hidden">
      {faqData.map((item, index) => (
        <div 
          key={item.id} 
          className="border-gray-200"
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          data-aos-delay={index * 100}
        >
          <div
            className="py-4 px-4 md:px-6 flex justify-between items-center cursor-pointer hover:bg-"
            onClick={() => toggleItem(item.id)}
          >
            <h3 className="text-lg md:text-2xl font-medium text-white">
              {item.question}
            </h3>
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-">
              {openItems[item.id] ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {openItems[item.id] && (
            <div 
              className="px-4 md:px-6 pb-4 space-y-6"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <p className="text-white text-sm md:text-base">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
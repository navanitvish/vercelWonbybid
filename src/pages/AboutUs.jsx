import React from "react";

const AboutUs = () => {
  return (
    <div className="text-gray-200 p-4 sm:p-8 max-w-6xl mx-auto rounded-lg">
      <h1 className="text-2xl sm:text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6 sm:mb-8">
        About Us
      </h1>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          What We Do
        </h2>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          At WonByBid, we bring you an innovative bidding platform where
          strategy meets skill. Our contests are designed to deliver quick
          results and provide a thrilling experience for all participants.
          Whether you're a seasoned player or a beginner, WonByBid offers
          something for everyone.
        </p>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          Gone are the days of waiting endlessly for outcomes. With real-time
          updates and transparent rankings, you can see the action unfold
          instantly. Compete, strategize, and win—all within minutes.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Our Contests
        </h2>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          We offer two exciting types of contests to suit different preferences:
        </p>
        <ol className="list-decimal pl-4 sm:pl-6 space-y-4">
          <li>
            <h3 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Simple Contests
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 text-base sm:text-lg border border-gray-700 bg-gray-800/50 p-4 rounded-lg mt-2">
              <li>
                Perfect for beginners or players who prefer straightforward
                gameplay.
              </li>
              <li>
                Participate by placing bids with clear rules and immediate
                results.
              </li>
              <li>Focus on placing the highest unique bid to win.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Private Contests
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 text-base sm:text-lg border border-gray-700 bg-gray-800/50 p-4 rounded-lg mt-2">
              <li>Tailored for players who want a personalized experience.</li>
              <li>
                Create your own contest, set the rules, entry fees, and prize
                structure.
              </li>
              <li>
                Invite friends and family to compete in a fun, custom
                environment.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Cash Contests
        </h2>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          With WonByBid, you can turn your strategies into real rewards through
          various cash contests:
        </p>
        <ul className="pl-4 sm:pl-6 text-base sm:text-lg space-y-4">
          <li className="border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
            <strong>Fixed Entry Fee Contests:</strong> Fair and competitive
            contests with predefined entry fees and clear prize pools.
          </li>
          <li className="border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
            <strong>Private Contests:</strong> Set your own entry fees and prize
            distribution. Customize and play with your own group for a unique
            experience.
          </li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Practice Contests
        </h2>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          For those new to bidding, start with Practice Contests:
        </p>
        <ul className="pl-4 sm:pl-6 text-base sm:text-lg space-y-4">
          <li className="border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
            <strong>No Entry Fee:</strong> Explore the gameplay for free and
            learn the basics.
          </li>
          <li className="border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
            <strong>Quick Learning:</strong> Get fast results, understand the
            rules, and improve your bidding strategy before moving to cash
            contests.
          </li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Legal Position
        </h2>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          Yes, WonByBid is a game of skill, making it completely legal under
          Indian laws. Games that require skill are distinctly different from
          games of chance and are allowed across most states.
        </p>
        <p className="text-base sm:text-lg mb-4 border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          However, due to state-specific laws, players from Assam, Sikkim,
          Nagaland, Odisha, Telangana, and Andhra Pradesh cannot participate in
          cash contests. Players from these states can still enjoy Practice
          Contests.
        </p>
      </section>

      <section className="text-center">
        <p className="text-base sm:text-lg border border-gray-700 bg-gray-800/50 p-4 rounded-lg">
          For more information, contact us and start your journey with WonByBid
          today. Whether you're here for quick results or a personalized
          challenge, we've got you covered!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

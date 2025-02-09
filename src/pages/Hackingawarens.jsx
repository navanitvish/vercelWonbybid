import React from 'react';

const HackingAwareness = () => {
  return (
    <div className=" text-gray-300 p-8 max-w-6xl mx-auto rounded-lg">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-8">
        Hacking Awareness
      </h1>
      
      <section className="mb-8">
        <h2 className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Stay Alert, Stay Safe!
        </h2>
        <p className="text-md lg:text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          At WonByBid, we prioritize your security and are committed to providing a safe gaming environment. While we take every measure to protect our platform, it’s important to be aware of potential hacking attempts and scams.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Hacking Alert
        </h2>
        <p className="lg:text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">To ensure your safety, please follow these precautions:</p>
        
        <ul className="list-disc pl-6 lg:text-lg space-y-4 ">
          <li>Never share your account credentials, OTPs, or personal details with anyone.</li>
          <li>Beware of fake emails, messages, or calls claiming to be from WonByBid. Always verify the source before responding.</li>
          <li>Avoid clicking on suspicious links or downloading unauthorized software claiming to enhance your gaming experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Need Help?
        </h2>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">If you suspect any hacking activity or have concerns, we’re here to help. Please reach out to us through the following options:</p>

        <ul className="list-disc pl-6 text-md lg:text-lg space-y-4">
          <li><strong>Raise a Ticket:</strong> Report suspicious activity or provide feedback by raising a ticket through our support system.</li>
          <li><strong>Dedicated Support:</strong> Our team will investigate and assist you promptly.</li>
        </ul>
      </section>

      <section className="text-center">
        <p className=" text-md lg:text-lg border border-gray-700 bg-gray-800 p-4 rounded">
          Your security is our priority. Together, let’s keep WonByBid safe and secure!
        </p>
      </section>
    </div>
  );
};

export default HackingAwareness;
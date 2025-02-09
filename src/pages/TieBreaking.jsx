import React from 'react';

const TieBreakingInWonByBid = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Tie-Breaking in WonByBid: Prize Sharing
      </h2>
      <p className="mb-4 text-gray-300 border border-gray-700 bg-gray-800 p-4 rounded text-sm sm:text-base">
        In WonByBid, if multiple participants place the <strong>same unique bid amount</strong>, the system resolves the tie through <strong>prize sharing</strong>. This ensures fairness while rewarding participants who played strategically.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        How Prize Sharing Works
      </h3>
      <p className="mb-4 text-gray-300 border border-gray-700 bg-gray-800 p-4 rounded text-sm sm:text-base">
        When two or more participants place the same unique bid, and this bid qualifies as a top-ranked bid, the prize allocated for that rank is <strong>equally divided</strong> among all the tied participants.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Key Rules for Prize Sharing:
      </h3>
      <ul className="list-disc pl-6 mb-4 text-gray-300 text-sm sm:text-base">
        <li>
          <strong>Equal Sharing:</strong>
          <ul className="list-disc pl-6">
            <li>The prize for the tied rank is split equally among the participants who placed the same bid.</li>
          </ul>
        </li>
        <li>
          <strong>No Elimination:</strong>
          <ul className="list-disc pl-6">
            <li>All participants with the tied bid retain their rank and share the prize for that position.</li>
          </ul>
        </li>
        <li>
          <strong>Next Rank Adjustments:</strong>
          <ul className="list-disc pl-6">
            <li>The next available rank is adjusted based on how many participants share the tie.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Example with Prize Sharing
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-md text-white">
          <thead>
            <tr className="bg-blue-200">
              <th className="px-4 py-2 border-b border-blue-400">Contest Setup</th>
              <th className="px-4 py-2 border-b border-blue-400">Top 3 Prizes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">
                <strong>Contest Range:</strong> ₹1.00 to ₹10.00
              </td>
              <td className="px-4 py-2 border-b border-blue-400">
                <ol className="list-decimal pl-6">
                  <li>₹500</li>
                  <li>₹300</li>
                  <li>₹200</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse border-[1px] text-white border-blue-400 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-200">
              <th className="px-4 py-2 border-b border-blue-400">User </th>
              <th className="px-4 py-2 border-b border-blue-400">Bid Amount </th>
              <th className="px-4 py-2 border-b border-blue-400">Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Ravi</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.99</td>
              <td className="px-4 py-2 border-b border-blue-400">Highest and Unique</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Priya</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.98</td>
              <td className="px-4 py-2 border-b border-blue-400">Unique but Not Highest</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Neha</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.95</td>
              <td className="px-4 py-2 border-b border-blue-400">Not Highest but Unique</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Amit</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.95</td>
              <td className="px-4 py-2 border-b border-blue-400">Not Highest but Unique</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Step-by-Step Ranking and Prize Sharing
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-300 text-sm sm:text-base">
        <li>
          <strong>Rank Bids:</strong>
          <ul className="list-disc pl-6">
            <li><strong>1st Place:</strong> Ravi's ₹9.99 (Highest and Unique) wins the top prize.</li>
            <li><strong>2nd Place:</strong> Priya's ₹9.98 (Unique and lower than ₹9.99) takes the second prize.</li>
            <li><strong>3rd Place:</strong> Neha and Amit's ₹9.95 tie for third place, as both are unique and share the same amount.</li>
          </ul>
        </li>
        <li>
          <strong>Prize Sharing:</strong>
          <ul className="list-disc pl-6">
            <li><strong>1st Prize (₹500):</strong> Goes to Ravi (no tie here).</li>
            <li><strong>2nd Prize (₹300):</strong> Goes to Priya (no tie here).</li>
            <li><strong>3rd Prize (₹200):</strong> Neha and Amit both share the ₹200 prize equally: Each receives ₹100 (₹200 ÷ 2 participants).</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Final Results
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-[1px] text-center border-blue-400 text-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-200">
              <th className="px-4 py-2 border-b border-blue-400">Rank</th>
              <th className="px-4 py-2 border-b border-blue-400">User  </th>
              <th className="px-4 py-2 border-b border-blue-400">Bid Amount</th>
              <th className="px-4 py-2 border-b border-blue-400">Prize</th>
              <th className="px-4 py-2 border-b border-blue-400">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">1</td>
              <td className="px-4 py-2 border-b border-blue-400">Ravi</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.99</td>
              <td className="px-4 py-2 border-b border-blue-400">₹500</td>
              <td className="px-4 py-2 border-b border-blue-400">Highest and Unique</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">2</td>
              <td className="px-4 py-2 border-b border-blue-400">Priya</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.98</td>
              <td className="px-4 py-2 border-b border-blue-400">₹300</td>
              <td className="px-4 py-2 border-b border-blue-400">Unique but lower than ₹9.99</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">3</td>
              <td className="px-4 py-2 border-b border-blue-400">Neha</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.95</td>
              <td className="px-4 py-2 border-b border-blue-400">₹100</td>
              <td className="px-4 py-2 border-b border-blue-400">Shared third prize</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">3</td>
              <td className="px-4 py-2 border-b border-blue-400">Amit</td>
              <td className="px-4 py-2 border-b border-blue-400">₹9.95</td>
              <td className="px-4 py-2 border-b border-blue-400">₹100</td>
              <td className="px-4 py-2 border-b border-blue-400">Shared third prize</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Additional Scenarios
      </h3>
      <h4 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Multiple Tie Examples:
      </h4>
      <ul className="list-disc pl-6 mb-4 text-gray-300 text-sm sm:text-base">
        <li><strong>Three-Way Tie:</strong> If three participants tie for the 2nd rank, the prize for 2nd place will be divided equally among all three. (Example: ₹300 ÷ 3 = ₹100 each.)</li>
        <li><strong>Insufficient Unique Bids:</strong> If no unique bid exists for a lower rank, the prize remains undistributed or may be adjusted per contest rules.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Benefits of Prize Sharing
      </h3>
      <ul className="list-disc pl-6 mb-4 text-gray-300 text-sm sm:text-base">
        <li><strong>Fairness:</strong> Ensures all tied participants are rewarded equally for their strategic bids.</li>
        <li><strong>Engagement:</strong> Encourages participants to continue bidding without fear of losing entirely in case of ties.</li>
        <li><strong>Transparency:</strong> A clear system for dividing prizes fosters trust in the platform.</li>
      </ul>

      <p className="text-gray-300 border border-gray-700 bg-gray-800 p-4 rounded text-sm sm:text-base">
        By implementing <strong>prize sharing</strong> for ties, WonByBid guarantees a fair and enjoyable experience for all participants while maintaining the integrity of the ranking system.
      </p>
    </div>
  );
};

export default TieBreakingInWonByBid;
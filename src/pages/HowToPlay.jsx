import React from 'react';
import { Book, Target, Play, HelpCircle, FileText, ChevronDown } from 'lucide-react';

const Section = ({ title, content, icon }) => (
  <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-8 border border-gray-700">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-purple-100 p-3 rounded-lg">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-gray-300 leading-relaxed">
      {content}
    </p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors rounded-lg"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-700">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const GlossaryItem = ({ term, definition }) => (
  <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-200 transition-colors">
    <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">{term}</h4>
    <p className="text-gray-300">{definition}</p>
  </div>
);

const HowToPlay = () => {
  const steps = [
    "Select a Match and Join a Contest",
    "Create Your Team and Bid for Players",
    "Select a Captain and Vice-Captain",
    "Understand How to Manage Your Team",
    "Calculate Points",
    "Withdraw Cash"
  ];

  return (
    <div className="  px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent  font-bold  mb-6">
          How to Play Fantasy Sports on Won By Bid
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Create your dream team, compete with others, and win exciting cash prizes
        </p>
      </div>

      <div className="max-w-8xl mx-auto">
        {/* Main Sections */}
        <Section
          title="Introduction"
          icon={<Book className="w-6 h-6 text-purple-600" />}
          content="Fantasy sports on Won By Bid allows you to create a virtual team of real players from upcoming matches. Your team earns points based on the players' real-life performances. Compete against others to win cash prizes and rewards."
        />

        <Section
          title="Objective"
          icon={<Target className="w-6 h-6 text-purple-600" />}
          content="The goal is to create a high-scoring team by selecting players based on their form and skill, outscoring opponents to win cash prizes. You can also bid for players in some contests to add a strategic layer to team selection."
        />

        {/* How to Play Steps */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-sm mb-8 border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Play className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-white">How to Play</ h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-purple-600">{index + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              question="What is the maximum number of teams you can form in a match?"
              answer="On Won By Bid, you can create multiple teams for a single match, usually limited by platform rules."
            />
            <FAQItem
              question="Can you join multiple contests?"
              answer="Yes, you can join as many contests as you like for a single match, allowing multiple chances to win."
            />
            <FAQItem
              question="Can I participate in more than one match simultaneously?"
              answer="Yes, you can play multiple matches at once across different contests on Won By Bid."
            />
          </div>
        </div>

        {/* Glossary Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-white">Glossary</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <GlossaryItem
              term="Total Winnings"
              definition="The total pool amount distributed among winners based on rankings."
            />
            <GlossaryItem
              term="Winners"
              definition="Number of participants in the contest who will receive prizes."
            />
            <GlossaryItem
              term="Entry Fee"
              definition="The fee required to enter a contest, which can be in cash, ticket, or free."
            />
            <GlossaryItem
              term="Prize Breakup"
              definition="This shows the prize distribution based on the rank achieved by teams."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SportsContent = () => {
  const [activeTab, setActiveTab] = useState("simple");
  const [expandedSection, setExpandedSection] = useState("");
  const contentRef = useRef(null);
  const tabLineRef = useRef(null);
  const tabRefs = useRef({});
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false
    });
  }, []);

  const simpleContestFaqs = [
    {
      id: "What is Simple Contest on WonByBid?",
      title: "What is a Simple Contest on WonbyBid?",
      content: {
        heading: "Understanding Contests",
        subheading: "Overview of Bidding",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                A Simple Contest on WonByBid allows players to participate in
                easy, no-fuss bidding competitions, designed for those who want
                quick results without complicated rules or strategies.
              </li>
              <li>
                These contests are ideal for beginners and casual bidders,
                offering the excitement of real-time bidding with minimal
                effort. Players can simply choose a contest, place a unique bid,
                and see the results fast, making it an accessible option for
                anyone looking to enjoy strategic bidding.
              </li>
              <li className="font-bold">
                Dive into a Simple Contest on WonByBid and start winning in just
                a few easy steps!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "how-to-participate",
      title: "How do I Participate in a simple Contest?",
      content: {
        heading: "Joining a Simple Contest",
        subheading: "Steps to Get Started",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                To participate in a Simple Contest on WonByBid, open the app and
                navigate to the Live Contest section.
              </li>
              <li>
                Select a contest that interests you, then click Join to enter.
                Follow the prompts to place your unique bid, and you're all set
                to compete for exciting rewards!
              </li>
              <li className="font-bold">
                Get started with a Simple Contest on WonByBid and experience the
                thrill of quick-result bidding!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "prizes",
      title: "What Prizes Can I Win in Simple Contests?",
      content: {
        heading: "Winning Rewards",
        subheading: "Exciting Prizes Await",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                In Simple Contests on WonByBid, players can win cash rewards
                based on the contest type and bid amount. Winning a Simple
                Contest not only earns you real cash prizes but also the thrill
                of outbidding others with your unique strategy.
              </li>
              <li>
                Keep an eye out for special contests featuring bonus prizes and
                exclusive rewards throughout the season, adding even more
                excitement to your bidding experience on WonByBid!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "tips-for-success",
      title: "Tips for Success in Simple Contests",
      content: {
        heading: "Maximizing Your Chances to Win",
        subheading: "Helpful Strategies",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                {" "}
                <strong>Analyze Recent Bidding Patterns:</strong> Check recent
                winning bids and the most crowded bid ranges to make strategic
                choices for your bid placement.
              </li>
              <li>
                {" "}
                <strong>Place Unique Bids Wisely:</strong> Aim for a bid that
                stands out but remains within popular winning ranges. A unique
                bid increases your chances of taking the prize.
              </li>
              <li>
                {" "}
                <strong>Stay Updated on Contest Trends:</strong> Follow ongoing
                trends and insights displayed on WonByBid, like top-winning bid
                ranges, to refine your approach.
              </li>
              <li className="font-bold">
                Use these tips to improve your bidding strategy on WonByBid and
                maximize your chances of winning big in Simple Contests!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "community",
      title: "Is there a community for Simple Contest players?",
      content: {
        heading: "Join Our Community",
        subheading: "Connect with Fellow Bidders",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                Absolutely! st <strong>WonByBid</strong> has a vibrant community
                where players can connect, share tips, strategies, and
                experiences to enhance their bidding skills.
              </li>
              <li>
                Join forums and social media groups to engage with other
                players, exchange insights, and discover winning tactics. Be
                part of community events and discussions to learn from seasoned
                bidders and boost your success on <strong>WonByBid!</strong>
              </li>
            </ol>
          </div>
        ),
      },
    },
  ];

  const privateContestFaqs = [
    {
      id: "what-is-private-contest",
      title: "What is a Private Contest on WonByBid?",
      content: {
        heading: "Understanding Private Contests",
        subheading: "Overview of Private Bidding",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                A <strong>Private Contest</strong> on <strong>WonByBid</strong>{" "}
                lets you create a customized bidding experience where you can
                compete with friends, family, or a select group. Set your own
                entry limits, rules, and prize pool to make each contest unique
                and tailored to your group's style.
              </li>
              <li>
                These private contests amplify the thrill of bidding by adding a
                personal touch, boosting camaraderie, and friendly competition.
              </li>
              <li>
                Create your own Private Contest on WonByBid and enjoy a more
                exciting, engaging experience with those closest to you!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "how-to-create-private-contest",
      title: "How do I Create a Private Contest?",
      content: {
        heading: "Steps to Create a Private Contest",
        subheading: "Quick Guide",
        paragraphs: (
          <div className="space-y-6">
            <p>
              Creating a <strong>Private Contest</strong> on{" "}
              <strong>WonByBid</strong> is easy! Simply head to the{" "}
              <strong>Private Contest</strong> section in the app.
            </p>
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                {" "}
                <strong>Customize Your Contest:</strong> Set your preferred
                entry fee, contest rules, and bidding preferences to tailor the
                experience.
              </li>
              <li>
                <strong>Create Your Contest:</strong> Once your settings are in
                place, click Create Contest to set it live.
              </li>
              <li>
                {" "}
                <strong>Invite Friends: </strong>Share the unique invite link
                with your friends and family to bring them into the competition!
              </li>
              <li className="font-bold">
                Start your own Private Contest on <strong>WonByBid</strong> and
                enjoy a thrilling, personalized bidding experience!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "benefits-of-private-contests",
      title: "What are the Benefits of Private Contests?",
      content: {
        heading: "Advantages of Playing Private Contests",
        subheading: "Why Choose Private?",
        paragraphs: (
          <div>
            <ol>
              <li>
                Private contests foster a friendly rivalry, making the gaming
                experience more enjoyable and personalized.
              </li>
              <li>
                They allow for customization in terms of rules, entry fees, and
                prize structures to suit your group's dynamics.
              </li>
              <li>
                Playing with friends enhances engagement, as you can celebrate
                wins and strategize together for better outcomes.
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "tips-for-success",
      title: "Tips for Success in Private Contests",
      content: {
        heading: "Maximizing Your Chances of Winning",
        subheading: "Pro Strategies",
        paragraphs: (
          <div>
            <ol>
              <li>
                Research player performance and statistics to make informed
                selections for your team.
              </li>
              <li>
                Communicate with your friends about strategies while maintaining
                a competitive edge.
              </li>
              <li>
                Utilize insights and tips from the WonByBid platform to stay
                ahead of the competition!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "tracking-performance",
      title: "How Can I Track My Performance?",
      content: {
        heading: "Monitoring Your Contest Progress",
        subheading: "Stay Updated",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                In your private contest, you can easily track your team's
                performance in real time through the leaderboard.
              </li>
              <li>
                Check how your players are performing and see where you stand
                against your friends.
              </li>
              <li>
                Stay engaged throughout the match by following live updates on
                points and rankings!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "boost-your-income",
      title: "Boost Your Income with Customized Competitions",
      content: {
        heading: "Earning Opportunities in Private Contests",
        subheading: "Maximize Your Rewards",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                Creating and participating in <strong>Private Contests</strong>{" "}
                on <strong>WonByBid</strong> gives you a unique opportunity to
                maximize earnings while enjoying a personalized experience with
                friends, family, or select groups. entry fees and prize pools
                tailored to your group's preferences, ensuring everyone has a
                stake in the game. Leverage your skills and strategies to
                dominate the competition and earn more from your Private
                Contests. Combine the excitement of bidding with the thrill of
                potential rewards to make every contest a lucrative experience!
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "private-contest-earnings",
      title: "How Private Contest Earnings Work",
      content: {
        heading: "Detailed Insights into Earnings",
        subheading: "Steps to Maximize Income",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">
                  Set Entry Fees and Prize Pools:
                </span>
                <ul>
                  <li>
                    As the creator of a Private Contest, you have the freedom to
                    set the entry fees.
                  </li>
                  <li>
                    This flexibility allows you to decide on the prize pool
                    based on your group's preferences, whether it's a
                    high-stakes contest or a casual game with smaller fees.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Host and Earn with Custom Bidding Rules:
                </span>
                <ul>
                  <li>
                    By customizing the rules and limits for your Private
                    Contest, you can enhance the competition and strategy,
                    creating an experience tailored to your group's bidding
                    style.
                  </li>
                  <li>
                    With a higher entry fee or larger participant pool, you can
                    significantly increase the potential prize pool and, by
                    extension, your earnings.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Earn from Each Participant's Entry Fee:
                </span>
                <ul>
                  <li>
                    Each participant, including yourself, pays an entry fee to
                    join the Private Contest.
                  </li>
                  <li>
                    The total prize pool is created from these fees, which is
                    distributed to the winners based on the contest structure.
                  </li>
                  <li>
                    Private Contests also allow you to strategize your bids
                    against a known group of players, enhancing your chances of
                    winning if you've got a good understanding of your
                    competitors' bidding tendencies.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Invite Friends and Earn Commission on Recharges:
                </span>
                <ul>
                  <li>
                    The Refer and Earn program complements Private Contests
                    well.
                  </li>
                  <li>
                    Invite friends to your Private Contest using your referral
                    code, and earn 10% commission on each recharge they make.
                  </li>
                  <li>
                    This creates an additional revenue stream on top of your
                    contest winnings.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "advantages-of-private-contest-earnings",
      title: "Advantages of Private Contest Earnings",
      content: {
        heading: "Why Private Contests Are Lucrative",
        subheading: "Key Benefits",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">
                  {" "}
                  Control Over Prize Pools and Rules:
                </span>
                <ul>
                  <li>
                    Unlike public contests, Private Contests allow you to
                    control entry fees, limits, and bidding rules, giving you
                    full authority over the potential rewards and competition
                    level.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Increased Earning Potential with Friends:
                </span>
                <ul>
                  <li>
                    Private Contests are an ideal way to earn more as you play
                    with friends and family.
                  </li>
                  <li>
                    With familiar participants, you can predict patterns, plan
                    strategies, and increase your chances of winning, especially
                    if you understand their bidding styles.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Community Building with Ongoing Earnings:
                </span>
                <ul>
                  <li>
                    Private Contests foster a sense of community, keeping
                    friends engaged in ongoing competitions.
                  </li>
                  <li>
                    Each time your group gathers for a Private Contest, you're
                    not only building camaraderie but also consistently earning
                    from the contests you create.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "StrategiestoMaximizeEarningsinPrivateContests",
      title: "Strategies to Maximize Earnings in Private Contests",
      content: {
        heading: "",
        subheading: "Key Benefits",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">
                  {" "}
                  Set Higher Entry Fees for Bigger Prize Pools:{" "}
                </span>
                <ul>
                  <li>
                    If your group is open to higher stakes, consider setting a
                    larger entry fee to increase the prize pool. This amplifies
                    potential earnings for the winners and makes the competition
                    more intense.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Use Your Referral Code to Build Your Contest Group:{" "}
                </span>
                <ul>
                  <li>
                    When inviting friends to your Private Contest, share your
                    referral code. This way, each time they recharge to join,
                    you’ll earn 10% commission, adding to your overall earnings.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Encourage Regular Participation:
                </span>
                <ul>
                  <li>
                    Host Private Contests regularly to keep your group engaged.
                    Frequent participation increases both the prize pool and the
                    cumulative earnings from ongoing recharges, especially as
                    friends may recharge more frequently to join.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Utilize Bidding Insights and Patterns:
                </span>
                <ul>
                  <li>
                    Leverage WonByBid’s insights on recent winning bids and
                    popular ranges to strengthen your strategy. Knowing common
                    bidding patterns can give you a strategic edge, especially
                    when competing against friends in Private Contests.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "tip",
      title: "TIP: Why Create Private Contests?",
      content: {
        heading: "Smart Earnings in a Social Setting",
        subheading: "Control, Camaraderie, and Rewards",
        paragraphs: (
          <div className="font-bold">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                Creating Private Contests on <strong>WonByBid</strong> is more
                than just fun – it's a smart way to earn in a competitive,
                social environment. Whether you're setting the rules, inviting
                friends, or strategically bidding, Private Contests offer you
                control, camaraderie, and the chance to maximize your earnings.
                Start a Private Contest today and enjoy the rewards of a
                tailored, high-stakes bidding experience!
              </li>
            </ol>
          </div>
        ),
      },
    },
  ];

  const referAndEarnFaqs = [
    {
      id: "refer-and-earn-1",
      title: "Maximize Your Earnings by Inviting Friends",
      content: {
        heading: "Refer and Earn Program Details",
        subheading: "",
        paragraphs: (
          <div className="space-y-6">
            <p>
              The <strong>Refer and Earn</strong> program on{" "}
              <strong>WonByBid</strong> is a straightforward way to boost your
              income while sharing the excitement of bidding with friends and
              family. For every refer you have a chance to earn 100 INR. 10
              friends 1,000 INR
            </p>

            <h2 className="font-bold">How Refer and Earn Works</h2>
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">
                  Invite Friends with Your Unique Referral Code:{" "}
                </span>
                <ul>
                  <li>
                    When you sign up on WonByBid, you’ll receive a unique
                    referral code. Share this code with your friends via social
                    media, messaging apps, or any platform of your choice.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Friends Sign Up and Use Your Code:{" "}
                </span>
                <ul>
                  <li>
                    When you sign up on WonByBid, you’ll receive a unique
                    referral code. Share this code with your friends via social
                    media, messaging apps, or any platform of your choice.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Earn 10% on Recharges Made by Your Referred Friends:{" "}
                </span>
                <ul>
                  <li>
                    For every recharge or deposit your friends make, you’ll
                    receive 10% of that amount as a bonus. This commission
                    continues until you’ve earned up to 100 INR per referred
                    friend.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Commission Accrues Through Bonus Recharges:
                </span>
                <ul>
                  <li>
                    Your referral bonus is automatically applied as a 10% bonus
                    on each recharge made by your referred friend. This means
                    your earnings grow gradually as your friends continue to
                    participate in contests, and you’ll reach the maximum bonus
                    of 100 INR without any additional effort.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "refer-and-earn-2",
      title: "Why Refer and Earn is Beneficial",
      content: {
        heading: "Refer and Earn Program Details",
        subheading: "",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">Passive Income:</span>
                <ul>
                  <li>
                    Each referral provides you with ongoing earnings, allowing
                    you to build up passive income as your friends continue to
                    play.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Unlimited Referrals:</span>
                <ul>
                  <li>
                    There’s no limit to how many friends you can refer. The more
                    you refer, the more you can earn!
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-bold">Encourages Social Engagement:</span>
                <ul>
                  <li>
                    By inviting friends and family, you build a community of
                    players who can join you in contests, create private
                    matches, and enjoy friendly competition, making your
                    experience more interactive and enjoyable.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
    {
      id: "refer-and-earn-3",
      title: "How to Maximize Your Earnings with Refer and Earn",
      content: {
        heading: "Refer and Earn Program Details",
        subheading: "",
        paragraphs: (
          <div className="space-y-6">
            <ol className="list-decimal font-semibold space-y-4 p-4">
              <li>
                <span className="font-bold">Share on Social Media: </span>
                <ul>
                  <li>
                    Post your referral code on social media with a short message
                    about WonByBid’s benefits to reach a broader audience.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Engage Influencers or Online Communities:{" "}
                </span>
                <ul>
                  <li>
                    For those active in online communities, share your referral
                    code in relevant groups or forums where people may be
                    interested in skill-based gaming and quick-result bidding.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-bold">
                  Create a Private Contest with Your Friends:{" "}
                </span>
                <ul>
                  <li>
                    Host a private contest for your referred friends to
                    encourage participation. As they recharge to join, you’ll
                    earn your referral bonus, creating a win-win situation.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
    },
  ];

  useEffect(() => {
    // Animate content on tab change
    gsap.fromTo(
      contentRef.current,
      { 
        opacity: 0,
        y: 20 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }
    );

    // Animate the tab indicator
    if (tabRefs.current[activeTab]) {
      const tabRect = tabRefs.current[activeTab].getBoundingClientRect();
      const parentRect = tabRefs.current[activeTab].parentElement.getBoundingClientRect();
      
      gsap.to(tabLineRef.current, {
        width: tabRect.width,
        x: tabRect.left - parentRect.left,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  }, [activeTab]);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? "" : sectionId);
  };

  const FaqItem = ({ faq }) => {
    const contentRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
      if (expandedSection === faq.id && contentRef.current) {
        // Show content
        gsap.fromTo(
          contentRef.current,
          { 
            height: 0,
            opacity: 0 
          },
          { 
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          }
        );

        // Rotate arrow
        gsap.to(arrowRef.current, {
          rotation: 180,
          duration: 0.3,
          ease: "power2.inOut"
        });
      } else if (contentRef.current) {
        // Hide content
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });

        // Reset arrow
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    }, [expandedSection, faq.id]);

    return (
      <div className="rounded-lg overflow-hidden ">
      {/* Gradient border button */}
      <div className="p-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-lg">
        <button
          className="w-full px-6 py-4 flex justify-between items-center cursor-pointer group bg-gray-800 rounded-lg hover:bg-black/50 transition-all duration-300"
          onClick={() => toggleSection(faq.id)}
          aria-expanded={expandedSection === faq.id}
        >
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-white text-left pr-4">
            {faq.title}
          </h2>
          <div ref={arrowRef}>
            <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-pink-500 transition-colors duration-300" />
          </div>
        </button>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="px-6 py-4 space-y-4 bg-gray-600 border-t border-gray-200">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
              {faq.content.heading}
            </h3>
            {faq.content.subheading && (
              <h4 className="text-sm sm:text-base font-medium text-white">
                {faq.content.subheading}
              </h4>
            )}
          </div>
          <div  className="prose prose-sm sm:prose lg:prose-lg max-w-none text-white" 
          data-aos={faq.id % 2 === 0 ? "fade-left" : "fade-right"}
          data-aos-delay={faq.id * 100}>
            {faq.content.paragraphs}
          </div>
        </div>
      </div>
    </div>
    );
  };

  const tabs = [
    { id: "simple", label: "Simple Contest", data: simpleContestFaqs },
    { id: "private", label: "Private Contest", data: privateContestFaqs },
    { id: "refer-and-earn", label: "Refer and Earn", data: referAndEarnFaqs }
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 ">
      <div className="mb-8 border-b border-gray-200 relative">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-3 px-2  text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div 
          ref={tabLineRef}
          className="absolute bottom-0 h-0.5  transition-all duration-300"
        />
      </div>

      <div ref={contentRef} className="space-y-4">
        {tabs
          .find((tab) => tab.id === activeTab)
          ?.data.map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
      </div>
    </div>
  );
};

export default SportsContent;
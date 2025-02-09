import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp,
  } from "react-icons/fa";

  import { BiMoney } from "react-icons/bi";
  import { BsCreditCard2Front } from "react-icons/bs";
  
  export const FOOTER_CONFIG = {
    quickLinks: [
      { title: "Home", link: "/" },
      { title: "How to Play", link: "/how-to-play" },
      { title: "How to Download", link: "/how-to-download" },
      { title: "How to Bid", link: "/points-system" },
      { title: "Tips & Tricks", link: "/tips-tricks" },
      { title: "Ranking System", link: "/fantasy-cricket" },
      { title: "Tie Breaking", link: "/TieBreakingInWonBy" },
      { title: "Flexible Contests", link: "/contestflexible" },
      // { title: "T20 World Cup", link: "/t20-world-cup" },
    ],
  
    secondColumnLinks: [
      // { title: "Fantasy Cricket on iOS", link: "#" },
      // { title: "Fantasy Cricket on Android", link: "#" },
      // { title: "Cricket Schedule", link: "#" },
      // { title: "TATA IPL 2024", link: "#" },
      { title: "About Us", link: "/aboutus" },
      { title: "Hacking Awareness", link: "/hack" },
      // { title: "Brand Asset Center", link: "#" },
      { title: "Legality", link: "/legality" },
      { title: "Terms of Service", link: "/termsofService" },
      { title: "Privacy Policy", link: "/privacypolicy" },
      // { title: "Blog", link: "#" },
    ],
  
    socialLinks: [
      // { 
      //   icon: FaFacebook,
      //   label: "Facebook",
      //   link: "#",
      //   color: "#4267B2" 
      // },
      { 
        icon: FaTwitter,
        label: "Twitter",
        link: "#",
        color: "#1DA1F2" 
      },
      { 
        icon: FaInstagram,
        label: "Instagram",
        link: "https://www.instagram.com/wonbybid/profilecard/?igsh=ZmtsMDBqdHZyMmVt",
        color: "#C13584" 
      },
      // { 
      //   icon: FaLinkedin,
      //   label: "LinkedIn",
      //   link: "#",
      //   color: "#0077B5" 
      // },
      { 
        icon: FaTelegram,
        label: "Telegram",
        link: "#",
        color: "#0088CC" 
      },
      { 
        icon: FaWhatsapp,
        label: "WhatsApp",
        link: "https://whatsapp.com/channel/0029Vaoc0xe90x2zhtVHra3y",
        color: "#25D366" 
      },
    ],
  
    paymentPartners : [
      {
        name: "Google Pay",
        image: "https://lh3.googleusercontent.com/CBDhGDth7rqSnLcRPjOdfw_HwgKS8Gu-KMIJKQQIXym3J32lqSrrBFTFRjIbKcFR7LNli8O-ChWEzL_Jz94G64jayZIgv5C2Bq3G"  // Replace with actual Google Pay logo path
      },
      {
        name: "PhonePe",
        image: "https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"  // Replace with actual PhonePe logo path
      },
      {
        name: "Paytm",
        image: "https://paytmblogcdn.paytm.com/wp-content/uploads/2023/03/Paym-Logo.jpg"  // Replace with actual Paytm logo path
      },
      {
        name: "Net Banking",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqf8C_-ZqmQrOIpiYzrX2kvQugz7bC6lrlvkpE1PXHA5OhfErBbP6x_O0TM8QUNvq9Zgs&usqp=CAU"  // Replace with actual Net Banking logo path
      },
      {
        name: "Credit/Debit Card",
        image: "https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg"  // Replace with actual Card logo path
      },
      {
        name: "Razorpay",
        image: "https://static.litecart.net/storage/images/addons/403-razorpay-payment-gateway-1.jpg?_=1628171752"  // Replace with actual Razorpay logo path
      },
      {
        name: "Cashfree",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPSwjrCGLsxtGAtrogMziqQ-uSR0bqT7yFg&s"  // Replace with actual Cashfree logo path
      },
      {
        name: "UPI",
        image: "https://m.economictimes.com/thumb/msid-74960608,width-1600,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg"  // Replace with actual UPI logo path
      }
    ],
  
    securityImages: [
      // {
      //   src: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/responsible-play-v1.png",
      //   alt: "responsive"
      // },
      {
        src: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/18plus-icon-v1.png",
        alt: "responsive"
      },
      // {
      //   src: "https://rcmg.in/fantasy/landingimg/acquistion/newlp2/my11-egf-e-gaming-federation.png",
      //   alt: "responsive"
      // }
    ],
  
    companyInfo: {
      name: "WonByBid",
      copyright: "© 2024 SDHR InnoWorks Pvt. Ltd. All Rights Reserved.",
      disclaimer: "You must be 18 years to play real money skill games"
    }
  };
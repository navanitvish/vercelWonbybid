import React from 'react';
import { Download } from 'lucide-react';
import AppInstallationSteps from './ApiInstalltion';
import image1 from '../assets/WhatsApp Image 2024-11-11 at 15.09.43_19d63217.jpg';
import apkFile from "../assets/app-release.apk"; 
const WonByBidGuide = () => {
  const downloadSteps = [
    {
      title: "Direct Download",
      description: "Click on the DOWNLOAD App button to start downloading the WonByBid app.",
      icon: <Download className="w-6 h-6 text-purple-600" />,
    },
  ];

  const handleDownloadAppClick = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = apkFile;
    link.download = "app-release.apk"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="font-sans text-gray-300 bg-gray-900">
      {/* Header Image */}
      <div className="relative">
        <img src={image1} alt="Download Guide" className="w-full h-[350px] object-cover rounded-b-xl shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
          <h1 className="text-4xl text-white font-bold p-6">How to Download the WonByBid App</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="mb-6 text-lg leading-relaxed border border-gray-700 bg-gray-800 p-4 rounded">
          A Quick Reference Guide to Download the WonByBid App on your device.
        </p>

        <div className="space-y-6">
          {/* Download Options */}
          <div className="bg-gray-800 shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">For Android Users</h3>
            <p className="text-lg mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              You can download WonByBid from the button below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <button
                onClick={handleDownloadAppClick}
                className="group flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download App
              </button>
            </div>

            {/* Download Steps */}
            <div className="border border-gray-700 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Download Options</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {downloadSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Guide */}
            <div className="bg-gray-800 shadow rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">Detailed Guide to Download & Install WonByBid App</h3>
              <p className="text-gray-300">
                Once you initiate the APK download, you may see a warning message. This is standard for third-party downloads; rest assured that the WonByBid app is safe and virus-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      {/* Uncomment and implement AppInstallationSteps if needed {/* <AppInstallationSteps /> */}
    </div>
  );
};

export default WonByBidGuide;
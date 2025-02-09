import React from 'react';
import { FaStar, FaUsers, FaTrophy } from 'react-icons/fa';

const UserRating = () => {
  const stats = [
    {
      icon: FaStar,
      value: '4.3',
      subtext: 'OUT OF 5',
      label: 'User Rating',
      iconColor: 'text-yellow-500',
      bgGradient: 'from-yellow-50 to-yellow-100/30'
    },
    {
      icon: FaUsers,
      value: '4+ CRORE',
      label: 'Total Users',
      iconColor: 'text-blue-500',
      bgGradient: 'from-blue-50 to-blue-100/30'
    },
    {
      icon: FaTrophy,
      value: '₹ 500 CRORE+',
      label: 'Prizes Won',
      iconColor: 'text-green-500',
      bgGradient: 'from-green-50 to-green-100/30'
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-6 sm:p-8  hover:shadow-xl transition-shadow duration-300
                        border border-gray-100 group`}
            >
              {/* Decorative background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${stat.bgGradient} transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <stat.icon className={`${stat.iconColor} h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 transform group-hover:scale-110 transition-transform duration-300`} />
                  
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                        {stat.value}
                      </h2>
                      {stat.subtext && (
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                          {stat.subtext}
                        </p>
                      )}
                    </div>
                    <p className="mt-2 text-lg sm:text-xl font-semibold text-gray-700">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRating;
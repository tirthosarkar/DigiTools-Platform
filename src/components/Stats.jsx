import React from 'react';

const Stats = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] py-16 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-24 text-center">
      
      {/* Stat 1 */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl lg:text-7xl font-extrabold text-white tracking-tight">50K+</h2>
        <span className="text-lg lg:text-xl font-medium text-white/80">Active Users</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-24 w-[1px] bg-white/20"></div>

      {/* Stat 2 */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl lg:text-7xl font-extrabold text-white tracking-tight">200+</h2>
        <span className="text-lg lg:text-xl font-medium text-white/80">Premium Tools</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-24 w-[1px] bg-white/20"></div>

      {/* Stat 3 */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl lg:text-7xl font-extrabold text-white tracking-tight">4.9</h2>
        <span className="text-lg lg:text-xl font-medium text-white/80">Rating</span>
      </div>

      </div>
    </div>
  );
};

export default Stats;

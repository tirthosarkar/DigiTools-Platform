import React from 'react';
import { MousePointer2, PlayCircle } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-[#FAFAFA] py-16 lg:py-24 overflow-hidden w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center justify-between">

        {/* Banner Image */}
        <div className="relative group/banner items-center flex justify-center">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover/banner:opacity-100 transition-opacity duration-1000"></div>
          <img
            src="/assets/banner.png"
            className="w-full max-w-lg rounded-2xl relative transition-transform duration-500 group-hover/banner:scale-[1.02]"
            alt="Digital Workflow"
          />
        </div>

        {/* Banner Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3E8FF] text-primary font-bold text-xs mb-6 max-w-max">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span>New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-5xl lg:text-[47px] font-bold text-[#1E293B] leading-[1.15] mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-[15px] text-[#6B7280] mb-2 max-w-xl leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <p className="text-[15px] text-[#6B7280] mb-8">Explore Products</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-full px-8 h-12 text-[15px] font-bold shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity">
              Explore Products
            </button>
            <button className="bg-white text-[#7C3AED] border border-[#7C3AED]/30 rounded-full px-8 h-12 text-[15px] font-bold hover:bg-[#7C3AED]/5 transition-colors flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary" strokeWidth={2} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

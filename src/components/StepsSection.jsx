import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/assets/user.png"
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "/assets/package.png"
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "/assets/rocket.png"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-[40px] font-extrabold text-[#111827] mb-4">Get Started In 3 Steps</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto text-[15px]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="bg-white rounded-2xl p-10 flex flex-col items-center relative border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 card-shadow">
            
            {/* Number Badge */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-md shadow-primary/20">
              {step.id}
            </div>
            
            {/* Icon Container */}
            <div className="w-[100px] h-[100px] rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <img src={step.icon} alt={step.title} style={{ filter: 'var(--tw-drop-shadow)' }} className="w-10 h-10 object-contain drop-shadow-sm" />
            </div>
            
            <h3 className="text-[22px] font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-[#6B7280] text-center text-[15px] leading-relaxed max-w-[260px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;

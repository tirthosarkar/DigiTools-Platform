import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      button: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      price: "29",
      desc: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      button: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "99",
      desc: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      button: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-[40px] font-extrabold text-[#111827] mb-4 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-[15px] text-[#6B7280] max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto items-center">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-[20px] border ${
              plan.isPopular 
              ? 'bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white border-transparent shadow-xl md:-my-6 md:py-12' 
              : 'bg-[#FAFAFA] text-gray-900 border-gray-100/50 shadow-sm'
            } flex flex-col h-full`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FEF08A] text-[#B45309] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div className="mb-6 text-left">
              <h3 className={`text-2xl font-bold mb-1`}>{plan.name}</h3>
              <p className={`text-[13px] ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                {plan.desc}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8 text-left border-b border-gray-200/20 pb-8">
              <span className="text-5xl font-extrabold">${plan.price}</span>
              <span className={`text-[13px] font-medium ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>/Month</span>
            </div>

            <div className={`space-y-4 mb-10 flex-grow ${plan.isPopular ? 'text-white' : 'text-[#4B5563]'}`}>
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <Check className={`w-4 h-4 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-[#22C55E]'}`} strokeWidth={3} />
                  <span className="text-[14px] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {plan.isPopular ? (
              <button className="w-full rounded-full py-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 mt-auto flex items-center justify-center">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent text-[15px] font-bold">
                  {plan.button}
                </span>
              </button>
            ) : (
              <button className="w-full rounded-full py-4 text-[15px] font-bold transition-all duration-300 mt-auto bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:opacity-90 shadow-md">
                {plan.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
